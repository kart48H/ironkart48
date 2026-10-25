export default function LeMans() {
  return (
    <section className="lemans" id="depart">
        <div className="wrap lemans-words display" aria-hidden="true"><span className="lw lw-1 o">DÉPART</span><span className="lw lw-2 y">LE MANS</span></div>
        <div className="wrap lemans-grid">
          <div className="reveal">
            <div className="label label-y">Vendredi 2 avril · Crépuscule</div>
            <h2 className="display" style={{ marginTop: '12px' }}>Les pilotes courent. L'horloge démarre.</h2>
          </div>
          <div className="reveal">
            <p>Après le briefing et les qualifications, les pilotes s'élancent à pied vers leur kart. À partir de là, la course ne s'arrête plus pendant 48 heures.</p>
            <ul className="steps">
              <li><span>ÉTAPE 1</span>Grand briefing</li>
              <li><span>ÉTAPE 2</span>Séances de qualifications</li>
              <li><span>ÉTAPE 3</span>Départ Le Mans et lancement des 48 heures</li>
            </ul>
          </div>
        </div>
      </section>
  );
}
