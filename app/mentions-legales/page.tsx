import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT } from '@/lib/site';

export const metadata: Metadata = { title: 'Mentions légales · 48H Iron Kart', robots: { index: false } };

/* Les informations marquées « à compléter » doivent être fournies par l'organisation et validées par un juriste. */
export default function MentionsLegales() {
  return (
    <main className="legal">
      <div className="wrap">
        <Link href="/" className="label label-y">← Retour au site</Link>
        <h1 className="display">Mentions légales</h1>
        <h2>Éditeur du site</h2>
        <p className="todo">À compléter : raison sociale ou nom de l&apos;association organisatrice, forme juridique, adresse du siège, numéro SIRET ou RNA, directeur de la publication.</p>
        <p>Contact : {CONTACT.email} · {CONTACT.phone}</p>
        <h2>Hébergement</h2>
        <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
        <h2>Propriété intellectuelle</h2>
        <p>Le logo 48H Iron Kart, les textes et les visuels du site sont la propriété de leurs auteurs respectifs. Les visuels des karts Sodi RT10 sont utilisés avec l&apos;accord des partenaires.</p>
        <h2>Réalisation</h2>
        <p>Site conçu et réalisé par Propulsif.</p>
      </div>
    </main>
  );
}
