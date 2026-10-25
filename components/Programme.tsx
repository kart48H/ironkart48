export default function Programme() {
  return (
    <section className="programme" id="programme">
        <div className="wrap head">
          <div className="label label-y">Du jeudi 1er au dimanche 4 avril 2027</div>
          <h2 className="display" style={{ margin: '10px 0 0', fontSize: 'clamp(40px,6.4vw,92px)' }}>Le programme</h2>
        </div>
        <div className="prog-viewport">
          <div className="prog-track" id="progTrack">
            <article className="day">
              <div className="day-top"><span className="label label-y">Jour 1</span><span className="label">Jeu. 1er avril</span></div>
              <h3 className="display day-name">Jeudi</h3>
              <p className="day-title">Accueil et préparation</p>
              <ul><li>Finalisation des dossiers administratifs</li><li>Installation des pilotes</li><li>Apéritif dînatoire offert</li></ul>
              <div className="label tbc">Horaires à confirmer</div>
            </article>
            <article className="day">
              <div className="day-top"><span className="label label-y">Jour 2</span><span className="label">Ven. 2 avril</span></div>
              <h3 className="display day-name">Vendredi</h3>
              <p className="day-title">Briefing, qualifications et départ</p>
              <ul><li>Grand briefing</li><li>Séances de qualifications</li><li>Départ Le Mans</li><li>Lancement des 48 heures</li></ul>
              <div className="label tbc">Horaires à confirmer</div>
            </article>
            <article className="day">
              <div className="day-top"><span className="label label-y">Jour 3</span><span className="label">Sam. 3 avril</span></div>
              <h3 className="display day-name">Samedi</h3>
              <p className="day-title">Endurance et animations</p>
              <ul><li>Course non-stop, de jour comme de nuit</li><li>Animations</li></ul>
              <div className="label tbc">Horaires à confirmer</div>
            </article>
            <article className="day">
              <div className="day-top"><span className="label label-y">Jour 4</span><span className="label">Dim. 4 avril</span></div>
              <h3 className="display day-name">Dimanche</h3>
              <p className="day-title">Podiums et récompenses</p>
              <ul><li>Arrivée des 48 heures</li><li>Quatre podiums</li><li>De nombreux lots à gagner</li></ul>
              <div className="label tbc">Horaires à confirmer</div>
            </article>
          </div>
        </div>
      </section>
  );
}
