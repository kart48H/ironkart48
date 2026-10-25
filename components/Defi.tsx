import HalftoneDawn from './HalftoneDawn';

export default function Defi() {
  return (
    <section className="defi" id="defi">
        <HalftoneDawn glow="top" />
        <div className="wrap">
          <div className="defi-grid">
            <div className="reveal">
              <div className="label label-y">Le défi de l'endurance</div>
              <h2 className="display">Une course. Deux nuits. <em>Aucun arrêt.</em></h2>
            </div>
            <p className="defi-lead reveal">Les 48H Iron Kart réunissent les passionnés de sport automobile autour d'une compétition d'endurance de 48 heures au Circuit du Roussillon, en partenariat avec le Karting Roussillon. <strong>Pas besoin d'être pilote professionnel</strong> : il faut tenir le rythme, gérer l'effort et piloter juste, du premier au dernier tour.</p>
          </div>
          <div className="pillars">
            <div className="pillar reveal"><h3>Vitesse</h3><p>Un tracé rapide et technique de 1 513 m, avec de nombreuses possibilités de dépassement.</p></div>
            <div className="pillar reveal"><h3>Stratégie</h3><p>Sur 48 heures, la gestion de la course compte autant que le chrono.</p></div>
            <div className="pillar reveal"><h3>Régularité</h3><p>Maintenir un rythme performant sur la durée, de jour comme de nuit.</p></div>
            <div className="pillar reveal"><h3>Esprit d'équipe</h3><p>Communication et coordination entre pilotes peuvent faire toute la différence.</p></div>
          </div>
        </div>
      </section>
  );
}
