'use client';

import { useEffect, useState } from 'react';
import { RACE_START } from '@/lib/site';

/* Jours restants avant le départ, calculés côté navigateur pour rester justes. */
export default function Countdown() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setDays(Math.max(0, Math.ceil((RACE_START.getTime() - Date.now()) / 864e5)));
    update();
    const t = window.setInterval(update, 60 * 60 * 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="cd-num" aria-label={days === null ? 'Compte à rebours' : `J moins ${days}`}>
      <b>J</b>-<span>{days ?? '—'}</span>
    </div>
  );
}
