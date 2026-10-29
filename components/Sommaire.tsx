'use client';

/*
 * Sommaire en onglet : une languette fine collée au bord droit de l'écran, toujours accessible,
 * qui ouvre un panneau latéral avec les huit parties du site. La partie en cours est surlignée.
 */
import { useEffect, useRef, useState } from 'react';

const ENTRIES: Array<[string, string]> = [
  ['defi', 'Le défi'],
  ['depart', 'Départ Le Mans'],
  ['circuit', 'Le circuit'],
  ['kart', 'Les karts'],
  ['programme', 'Le programme'],
  ['valeurs', 'Nos valeurs'],
  ['infos', 'Infos & FAQ'],
  ['inscription', 'Inscription'],
];

export default function Sommaire() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const tabRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  /* Partie en cours : la dernière section dont le haut a passé le milieu de l'écran */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;
      let idx = -1;
      ENTRIES.forEach(([id], i) => {
        const el = document.getElementById(id);
        const box = (el?.closest('.pin-spacer') as HTMLElement | null) ?? el;
        if (box && box.getBoundingClientRect().top <= mid) idx = i;
      });
      setActive(idx);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* Échap ferme le panneau ; le focus va au panneau à l'ouverture et revient à l'onglet à la fermeture */
  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        tabRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const current = active >= 0 ? String(active + 1).padStart(2, '0') : null;

  return (
    <>
      <button
        ref={tabRef}
        type="button"
        className="som-tab"
        aria-expanded={open}
        aria-controls="som-panel"
        onClick={() => setOpen((v) => !v)}
      >
        {current && <span className="som-tab-num">{current}</span>}
        <span className="som-tab-label">Sommaire</span>
      </button>

      <div className={`som-backdrop${open ? ' open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />

      <nav ref={panelRef} tabIndex={-1} id="som-panel" className={`som-panel${open ? ' open' : ''}`} aria-label="Sommaire" data-lenis-prevent inert={!open}>
        <div className="som-head">
          <span className="label label-y">Sommaire</span>
          <button type="button" className="som-close" onClick={() => setOpen(false)} aria-label="Fermer le sommaire">×</button>
        </div>
        <ol className="som-list">
          {ENTRIES.map(([id, name], i) => (
            <li key={id}>
              <a
                className={`som-item${i === active ? ' is-active' : ''}`}
                href={`#${id}`}
                aria-current={i === active ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="som-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="som-name">{name}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
