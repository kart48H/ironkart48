import SignupForm from './SignupForm';
import HalftoneDawn from './HalftoneDawn';

export default function Inscription() {
  return (
    <section className="dawn" id="inscription">
        <HalftoneDawn />
        <div className="wrap">
          <div className="label" style={{ color: 'rgba(244,242,236,.8)' }}>Aube · Dimanche 4 avril</div>
          <h2 className="display reveal">Quatre podiums. <em>Une seule ligne d'arrivée.</em></h2>
          <div className="dawn-grid">
            <div className="reveal">
              <p>Les tarifs, le nombre de pilotes par équipe et le règlement seront publiés à l'ouverture des inscriptions. Laissez vos coordonnées pour être prévenu en premier.</p>
              <div className="contact"><span>06 62 46 19 14</span><span>ironkart48@gmail.com</span></div>
              <div className="label" style={{ marginTop: '28px', color: 'rgba(244,242,236,.8)' }}>L'organisation vous renseigne sur</div>
              <ul className="ask"><li>Tarifs</li><li>Pilotes par équipe</li><li>Documents</li><li>Assurance ou licence</li><li>Règlement sportif</li><li>Horaires</li><li>Récompenses</li></ul>
            </div>
            <SignupForm />
          </div>
        </div>
      </section>
  );
}
