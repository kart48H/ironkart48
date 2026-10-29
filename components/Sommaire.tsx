/* Sommaire : accès direct à chaque partie de la page, juste après l'ouverture. */
const ENTRIES: Array<[string, string, string]> = [
  ['defi', 'Le défi', "L'endurance en quatre mots"],
  ['depart', 'Départ Le Mans', 'Comment la course démarre'],
  ['circuit', 'Le circuit', '1 513 m au Circuit du Roussillon'],
  ['kart', 'Les karts', 'La flotte de Sodi RT10'],
  ['programme', 'Le programme', 'Du jeudi au dimanche'],
  ['valeurs', 'Nos valeurs', 'Ce qui anime la course'],
  ['infos', 'Infos & FAQ', 'Conditions, partenaires, questions'],
  ['inscription', 'Inscription', "Être prévenu de l'ouverture"],
];

export default function Sommaire() {
  return (
    <section className="sommaire" id="sommaire" aria-labelledby="sommaire-title">
      <div className="wrap">
        <h2 className="label label-y" id="sommaire-title">Sommaire</h2>
        <ol className="som-list">
          {ENTRIES.map(([id, name, hint], i) => (
            <li key={id}>
              <a className="som-item" href={`#${id}`}>
                <span className="som-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="som-text">
                  <span className="som-name">{name}</span>
                  <span className="som-hint">{hint}</span>
                </span>
                <span className="som-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
