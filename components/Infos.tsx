export default function Infos() {
  return (
    <section className="infos" id="infos">
        <div className="wrap infos-grid">
          <div className="reveal">
            <div className="label label-y">Participer</div>
            <h2 className="display">Qui peut prendre le départ ?</h2>
            <ul className="conds">
              <li><b>Âge minimum</b><span>16 ans</span></li>
              <li><b>Niveau</b><span>Pas besoin d'être pilote professionnel</span></li>
              <li><b>Assurance</b><span>Assurance adaptée ou licence FFSA</span></li>
              <li><b>Équipes et relais</b><span>Modalités à confirmer</span></li>
            </ul>
            <div className="label" style={{ marginTop: '40px' }}>Partenaires</div>
            <ul className="partner-list">
              <li><b>Karting Roussillon</b><span>Associé à l'organisation et circuit hôte de l'événement.</span></li>
              <li><b>Sodikart</b><span>Constructeur des karts de la flotte, les Sodi RT10.</span></li>
              <li><b>SWS · Sodi World Series</b><span>Partenaire de l'événement.</span></li>
            </ul>
          </div>
          <div className="reveal">
            <div className="label label-y">Questions fréquentes</div>
            <div style={{ marginTop: '20px' }}>
              <details><summary>Faut-il être pilote professionnel ?</summary><p>Non. La course est ouverte aux passionnés, dans le respect du règlement et des conditions d'inscription.</p></details>
              <details><summary>Quel est l'âge minimum ?</summary><p>16 ans.</p></details>
              <details><summary>Quelle assurance faut-il ?</summary><p>Une assurance adaptée ou une licence FFSA. Les documents exacts seront précisés par l'organisation.</p></details>
              <details><summary>Combien de pilotes par équipe ?</summary><p>L'information sera publiée à l'ouverture des inscriptions.</p></details>
              <details><summary>Quels sont les tarifs ?</summary><p>Les tarifs seront publiés à l'ouverture des inscriptions.</p></details>
              <details><summary>Quels karts sont utilisés ?</summary><p>Une flotte neuve de Sodi RT10, identique pour toutes les équipes.</p></details>
            </div>
          </div>
        </div>
          <div className="wrap essentiel reveal">
          <div className="label label-y">Infos pratiques</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px,4.4vw,60px)' }}>L'essentiel</h2>
          <dl className="ess-table">
            <div><dt>Événement</dt><dd>48H Iron Kart, édition 2027</dd></div>
            <div><dt>Dates</dt><dd>Du jeudi 1er au dimanche 4 avril 2027</dd></div>
            <div><dt>Discipline</dt><dd>Karting d'endurance, 48 heures non-stop</dd></div>
            <div><dt>Lieu</dt><dd>Karting Roussillon, Mas de la Garrigue Nord, 66600 Rivesaltes</dd></div>
            <div><dt>Circuit</dt><dd>1 513 m × 9 m</dd></div>
            <div><dt>Karts</dt><dd>Sodi RT10, Honda GX390</dd></div>
            <div><dt>Âge minimum</dt><dd>16 ans</dd></div>
            <div><dt>Assurance</dt><dd>Assurance adaptée ou licence FFSA</dd></div>
            <div><dt>Téléphone</dt><dd>06 62 46 19 14</dd></div>
            <div><dt>E-mail</dt><dd>ironkart48@gmail.com</dd></div>
          </dl>
        </div>
      </section>
  );
}
