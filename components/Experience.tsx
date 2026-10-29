'use client';

/*
 * Toute la mise en mouvement du site : loader, défilement doux (Lenis),
 * chrono HUD et scènes pilotées par le scroll (GSAP + ScrollTrigger).
 * Le balisage vit dans les composants de section ; ce composant ne rend rien.
 */
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const byId = <T extends Element = HTMLElement>(id: string) => document.getElementById(id) as unknown as T;

export default function Experience() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers: number[] = [];
    const cleanups: Array<() => void> = [];

    /* ---------- Barre de course (progression des 48 h au fil du scroll) ---------- */
    const raceFill = byId('raceFill');
    const hud = (p: number) => {
      raceFill.style.transform = `scaleX(${Math.min(1, Math.max(0, p)).toFixed(4)})`;
    };

    /* ---------- Loader ---------- */
    const loader = byId('loader');
    const loaderPath = byId<SVGPathElement>('loaderPath');
    try {
      loaderPath.style.setProperty('--len', String(Math.ceil(loaderPath.getTotalLength())));
    } catch {
      /* rendu sans mesure : la valeur par défaut du CSS s'applique */
    }
    let started = false;
    let intro = () => {};
    const endLoader = () => {
      if (started) return;
      started = true;
      loader.classList.add('done');
      intro();
    };
    if (reduce) {
      loader.classList.add('done');
      started = true;
    } else {
      timers.push(window.setTimeout(() => loader.classList.add('reveal'), 1750));
      timers.push(window.setTimeout(endLoader, 2900));
      const skip = byId('skip');
      skip.addEventListener('click', endLoader);
      cleanups.push(() => skip.removeEventListener('click', endLoader));
    }

    /* ---------- Circuit ---------- */
    const run = byId<SVGPathElement>('trackRun');
    const glow = byId<SVGPathElement>('trackGlow');
    const dot = byId<SVGCircleElement>('dot');
    const dotGlow = byId<SVGCircleElement>('dotGlow');
    const teleDist = byId('teleDist');
    const L = run.getTotalLength();
    run.style.strokeDasharray = String(L);
    glow.style.strokeDasharray = String(L);
    /* Un seul tour : la ligne se dessine au fil du scroll, le point suit sa tête ; les 10 % finaux laissent le tour bouclé à l'écran */
    const circuit = (p: number) => {
      const lapP = Math.min(1, p / 0.9);
      const off = String(L * (1 - lapP));
      run.style.strokeDashoffset = off;
      glow.style.strokeDashoffset = off;
      const pt = run.getPointAtLength(L * lapP);
      dot.setAttribute('cx', String(pt.x));
      dot.setAttribute('cy', String(pt.y));
      dotGlow.setAttribute('cx', String(pt.x));
      dotGlow.setAttribute('cy', String(pt.y));
      teleDist.textContent = Math.round(1513 * lapP).toLocaleString('fr-FR');
    };

    /* ---------- Mouvement réduit : tout est affiché, rien ne bouge ---------- */
    if (reduce) {
      circuit(1);
      byId('night').setAttribute('opacity', '.55');
      glow.style.opacity = '.4';
      document.querySelectorAll<HTMLElement>('.k-specs,.k-tag').forEach((e) => (e.style.opacity = '1'));
      const onScroll = () => {
        const m = root.scrollHeight - innerHeight;
        hud(m > 0 ? Math.min(1, scrollY / m) : 0);
      };
      hud(0);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
        root.classList.remove('js');
      };
    }

    gsap.registerPlugin(ScrollTrigger);

    /* ---------- Défilement doux ---------- */
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95 });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onAnchor = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const target = document.querySelector(a.getAttribute('href') || '');
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { duration: 1.6 });
    };
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    anchors.forEach((a) => a.addEventListener('click', onAnchor));

    const ctx = gsap.context(() => {
      /* Barre de course */
      ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (s) => hud(s.progress) });
      hud(0);

      /* Intro du hero, jouée à la sortie du loader */
      gsap.set('.hero-title .line>span', { yPercent: 110 });
      gsap.set('.hero-fade', { autoAlpha: 0, y: 24 });
      gsap.set('.hero-media', { scale: 1.14 });
      intro = () => {
        gsap
          .timeline()
          .to('.hero-media', { scale: 1, duration: 2.6, ease: 'power3.out' }, 0)
          .to('.hero-title .line>span', { yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: 0.09 }, 0.1)
          .to('.hero-fade', { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.08 }, 0.45);
      };
      if (started) intro();

      /* Hero au scroll */
      gsap.to('.hero-media', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero .wrap', {
        yPercent: -12,
        autoAlpha: 0.25,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      /* Départ Le Mans : les deux mots se rejoignent puis restent lisibles */
      gsap
        .timeline({ scrollTrigger: { trigger: '.lemans', start: 'top bottom', end: 'top 25%', scrub: 1 } })
        .fromTo('.lw-1', { xPercent: -35, autoAlpha: 0.2 }, { xPercent: 0, autoAlpha: 1, ease: 'power2.out' }, 0)
        .fromTo('.lw-2', { xPercent: 35, autoAlpha: 0.2 }, { xPercent: 0, autoAlpha: 1, ease: 'power2.out' }, 0);

      /* Révélations sobres */
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } },
        );
      });

      /* Circuit épinglé : tracé, tours, tombée de la nuit */
      const cs = { p: 0 };
      circuit(0);
      gsap
        .timeline({ scrollTrigger: { trigger: '#circuit', start: 'top top', end: '+=180%', pin: true, scrub: 1, anticipatePin: 1 } })
        .to(cs, { p: 1, duration: 1, ease: 'none', onUpdate: () => circuit(cs.p) }, 0)
        .to('#dusk', { attr: { opacity: 0 }, duration: 0.5, ease: 'none' }, 0)
        .to('#night', { attr: { opacity: 0.72 }, duration: 0.6, ease: 'none' }, 0.15)
        .to(glow, { opacity: 0.45, duration: 0.5, ease: 'none' }, 0.3);

      /* Kart : la carte grandit jusqu'au plein écran, les titres s'écartent, puis tout revient */
      const card = byId('kCard');
      const kart = byId('kKart');
      const aspect = 1100 / 687;
      const baseW = () => Math.min(innerWidth * 0.92, innerHeight * 0.66 * aspect);
      const startScale = () => (innerWidth < 768 ? 0.82 : 0.6);
      const immerse = () => {
        const w = baseW();
        const h = w / aspect;
        return Math.max(innerWidth / w, innerHeight / h) * 1.04;
      };
      const kartImmersed = () => {
        const w = baseW();
        return Math.min(innerWidth * 0.86, w * 1.3) / w / immerse();
      };
      gsap.set(card, { scale: startScale(), transformOrigin: '50% 50%' });
      gsap.set(kart, { rotationY: -14, rotationX: 4, scale: 1 });
      gsap
        .timeline({
          scrollTrigger: { trigger: '#kart', start: 'top top', end: '+=320%', pin: true, scrub: 0.5, anticipatePin: 1, invalidateOnRefresh: true },
        })
        .to(card, { scale: 1, ease: 'power2.out', duration: 0.15 }, 0)
        .to('.k-title-top', { x: () => (innerWidth < 768 ? '-70vw' : '-60vw'), letterSpacing: '.02em', ease: 'power2.inOut', duration: 0.15 }, 0)
        .to('.k-title-bot', { x: () => (innerWidth < 768 ? '70vw' : '60vw'), letterSpacing: '.02em', ease: 'power2.inOut', duration: 0.15 }, 0)
        .to('.k-tag', { opacity: 1, duration: 0.08 }, 0.04)
        .to(card, { scale: immerse, ease: 'power2.inOut', duration: 0.33 }, 0.15)
        .to('.k-title', { opacity: 0, ease: 'power1.in', duration: 0.2 }, 0.15)
        .to(kart, { scale: kartImmersed, yPercent: -8, ease: 'power2.inOut', duration: 0.33 }, 0.15)
        .to(kart, { rotationY: 16, rotationX: 0, ease: 'none', duration: 0.63 }, 0.15)
        .to('.k-specs', { opacity: 1, duration: 0.1 }, 0.46)
        .fromTo('.k-specs .spec', { y: 18, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.025, duration: 0.08, ease: 'power2.out' }, 0.46)
        .to('.k-specs', { opacity: 0, duration: 0.07 }, 0.71)
        .to('.k-tag', { opacity: 0, duration: 0.07 }, 0.71)
        .to(card, { scale: startScale, ease: 'power3.inOut', duration: 0.22 }, 0.78)
        .to(kart, { scale: 1, yPercent: 0, rotationY: -14, rotationX: 4, ease: 'power3.inOut', duration: 0.22 }, 0.78)
        .to('.k-title-top', { x: 0, opacity: 1, letterSpacing: '-.035em', ease: 'power2.inOut', duration: 0.22 }, 0.78)
        .to('.k-title-bot', { x: 0, opacity: 1, letterSpacing: '-.035em', ease: 'power2.inOut', duration: 0.22 }, 0.78);

      /* Programme horizontal (ordinateur) ; carrousel natif sur mobile */
      const mm = gsap.matchMedia();
      mm.add('(min-width: 900px)', () => {
        const track = byId('progTrack');
        const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
        gsap.to(track, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: { trigger: '#programme', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 },
        });
      });

    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      timers.forEach((t) => clearTimeout(t));
      cleanups.forEach((fn) => fn());
      anchors.forEach((a) => a.removeEventListener('click', onAnchor));
      window.removeEventListener('load', refresh);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      root.classList.remove('js');
    };
  }, []);

  return null;
}
