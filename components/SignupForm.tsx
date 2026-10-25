'use client';

import { FormEvent, useState } from 'react';

/*
 * Formulaire « Être prévenu de l'ouverture ».
 * TODO (étape suivante) : envoyer les données à une route serveur
 * (Resend vers l'adresse de l'organisation). Pour l'instant, succès simulé.
 */
export default function SignupForm() {
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get('first') || !data.get('email') || !data.get('consent')) {
      setMessage("Renseignez votre prénom, votre e-mail et cochez la case d'accord.");
      return;
    }
    setMessage("C'est noté. Vous serez prévenu dès l'ouverture des inscriptions.");
    form.reset();
  }

  return (
    <form id="signup" className="reveal" noValidate onSubmit={onSubmit}>
      <div className="row">
        <label htmlFor="f-first">Prénom<input id="f-first" name="first" autoComplete="given-name" required /></label>
        <label htmlFor="f-last">Nom<input id="f-last" name="last" autoComplete="family-name" required /></label>
      </div>
      <div className="row">
        <label htmlFor="f-mail">E-mail<input id="f-mail" name="email" type="email" autoComplete="email" required /></label>
        <label htmlFor="f-tel">Téléphone (facultatif)<input id="f-tel" name="tel" type="tel" autoComplete="tel" /></label>
      </div>
      <label htmlFor="f-team">Nombre de pilotes envisagé
        <select id="f-team" name="team" defaultValue="">
          <option value="">Je ne sais pas encore</option>
          <option>1 à 3</option>
          <option>4 à 6</option>
          <option>7 et plus</option>
        </select>
      </label>
      <label className="check" htmlFor="f-ok">
        <input id="f-ok" name="consent" type="checkbox" required /> J&apos;accepte d&apos;être recontacté par l&apos;organisation des 48H Iron Kart au sujet des inscriptions. Voir la <a href="/confidentialite">politique de confidentialité</a>.
      </label>
      <button className="btn" type="submit">Être prévenu de l&apos;ouverture →</button>
      {message && <div className="ok" role="status">{message}</div>}
    </form>
  );
}
