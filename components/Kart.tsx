export default function Kart() {
  return (
    <section className="kart" id="kart" aria-label="Le kart : Sodi RT10">
        <div className="k-sticky">
          <div className="k-bg" aria-hidden="true"></div>
          <div className="k-tag wrap"><div className="label label-y">Nuit · Flotte neuve, identique pour tous</div><p style={{ margin: '10px 0 0', maxWidth: '40ch', color: 'var(--muted)', fontSize: '15px' }}>Une flotte dédiée pour garantir l'équité sportive. Les pilotes se concentrent sur leur conduite, leur régularité et leur stratégie.</p></div>
          <div className="k-inner">
            <h2 className="display k-title k-title-top">SODI</h2>
            <div className="k-card" id="kCard">
              <div className="k-stage"><img className="k-kart" id="kKart" src="/images/rt10.webp" alt="Le Sodi RT10, kart de la flotte des 48H Iron Kart" /></div>
            </div>
            <div className="display k-title k-title-bot" aria-hidden="true">RT10</div>
          </div>
          <div className="k-specs wrap">
            <dl>
              <div className="spec"><dt>Modèle</dt><dd>Sodi RT10</dd></div>
              <div className="spec"><dt>Moteur</dt><dd>Honda GX390, 4 temps</dd></div>
              <div className="spec"><dt>Poids</dt><dd>159 kg</dd></div>
              <div className="spec"><dt>Flotte</dt><dd>Neuve, identique pour tous</dd></div>
            </dl>
          </div>
        </div>
      </section>
  );
}
