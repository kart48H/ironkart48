'use client';

/*
 * Traînées lumineuses façon pose longue de nuit sur circuit.
 * Adapté du composant « Tubes Cursor » (threejs-components, licence ISC) :
 * couleurs Iron Kart (jaune, ambre, blanc chaud), pas de couleurs aléatoires au clic,
 * chargé seulement à l'approche de la section, mis en pause hors écran par la librairie,
 * désactivé si l'utilisateur demande moins d'animations.
 * Sur ordinateur les tubes suivent le pointeur ; sur mobile ils tournent seuls.
 */
import { useEffect, useRef } from 'react';

const TUBE_COLORS = ['#FFC81E', '#FF9F1C', '#F4F2EC'];
const LIGHT_COLORS = ['#FFC81E', '#FFB347', '#FFE7A3', '#FF8A1F'];

export default function TubesLights() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let app: { dispose: () => void } | null = null;
    let cancelled = false;

    const start = async () => {
      try {
        const { default: TubesCursor } = await import('threejs-components/build/cursors/tubes1.min.js');
        if (cancelled) return;
        app = TubesCursor(canvas, {
          bloom: { threshold: 0, strength: 1.1, radius: 0.55 },
          tubes: { colors: TUBE_COLORS, lights: { intensity: 140, colors: LIGHT_COLORS } },
          sleepRadiusX: 260,
          sleepRadiusY: 120,
        });
        wrap.classList.add('on');
      } catch {
        /* navigateur sans WebGL/WebGPU : la section reste sur son fond nuit */
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          io.disconnect();
          start();
        }
      },
      { rootMargin: '600px 0px' },
    );
    io.observe(wrap);

    return () => {
      cancelled = true;
      io.disconnect();
      try {
        app?.dispose();
      } catch {
        /* déjà libéré */
      }
    };
  }, []);

  return (
    <div className="tubes" ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
