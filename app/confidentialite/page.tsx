import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT } from '@/lib/site';

export const metadata: Metadata = { title: 'Confidentialité · 48H Iron Kart', robots: { index: false } };

/* Texte de base à faire valider par l'organisation et un juriste avant la mise en ligne. */
export default function Confidentialite() {
  return (
    <main className="legal">
      <div className="wrap">
        <Link href="/" className="label label-y">← Retour au site</Link>
        <h1 className="display">Politique de confidentialité</h1>
        <h2>Responsable du traitement</h2>
        <p className="todo">À compléter : identité de l&apos;organisateur des 48H Iron Kart.</p>
        <h2>Données collectées</h2>
        <p>Le formulaire « Être prévenu de l&apos;ouverture » collecte votre prénom, votre nom, votre e-mail, votre téléphone (facultatif) et le nombre de pilotes envisagé.</p>
        <h2>Finalité</h2>
        <p>Ces données servent uniquement à vous informer de l&apos;ouverture des inscriptions et à répondre à vos questions. Elles ne sont ni vendues ni cédées.</p>
        <h2>Durée de conservation</h2>
        <p className="todo">À compléter : par exemple jusqu&apos;à la fin de l&apos;édition 2027.</p>
        <h2>Vos droits</h2>
        <p>Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données en écrivant à {CONTACT.email}. Vous pouvez aussi saisir la CNIL.</p>
        <h2>Cookies</h2>
        <p>Le site n&apos;utilise pas de cookies publicitaires ni de mesure d&apos;audience à ce jour.</p>
      </div>
    </main>
  );
}
