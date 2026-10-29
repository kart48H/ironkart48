'use client';

import { useEffect, useState } from 'react';

/* Barre du haut : transparente sur la photo d'ouverture, puis fond sombre flouté dès qu'on défile, pour rester lisible. */
export default function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav${solid ? ' is-solid' : ''}`} aria-label="Navigation principale">
      <div className="wrap">
        <a className="nav-logo" href="#top">48H IRON KART</a>
        <div className="nav-links">
          <a href="#defi">Le défi</a><a href="#circuit">Circuit</a><a href="#kart">Karts</a><a href="#programme">Programme</a><a href="#infos">Infos</a>
          <a className="nav-cta" href="#inscription">S&apos;inscrire</a>
        </div>
      </div>
    </nav>
  );
}
