import Countdown from './Countdown';

/*
 * Ouverture en deux écrans (inspirée de l'« opening » du template ONDO, MIT — 8B) :
 * 1. la photo plein cadre sous le titre ; au scroll elle zoome et le titre s'écarte,
 * 2. un voile se referme en quatre cercles — un par jour de l'événement — qui laissent voir la photo.
 * Animation dans components/Experience.tsx (bloc « Ouverture »).
 */
const DAYS = [
  { day: 'Jeu. 1er', name: 'Accueil' },
  { day: 'Ven. 2', name: 'Départ' },
  { day: 'Sam. 3', name: 'Endurance' },
  { day: 'Dim. 4', name: 'Podiums' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-stage" aria-hidden="true">
        <div className="hero-media">
          <div className="hero-zoom">
            <img src="/images/paddock.jpg" alt="" fetchPriority="high" />
          </div>
        </div>
        <div className="hero-shade" />
      </div>

      <div className="hero-one">
        <div className="wrap">
          <div className="hero-up">
            <div className="label hero-fade">Karting d'endurance · Circuit du Roussillon · Édition 2027</div>
          </div>
          <h1 className="display hero-title">
            <span className="line"><span>48H</span></span>
            <span className="line sub"><span>IRON KART</span></span>
          </h1>
          <div className="hero-low">
            <div className="hero-bottom">
              <p className="hero-lead hero-fade">48 heures pour piloter. 48 heures pour se dépasser. 48 heures pour vivre le karting autrement.</p>
              <div className="countdown hero-fade">
                <Countdown />
                <div className="cd-meta"><strong>Départ ven. 2 avril 2027</strong>Horaire à confirmer</div>
              </div>
            </div>
            <dl className="facts hero-fade">
              <div className="fact"><dt>Durée</dt><dd>48 h non-stop</dd></div>
              <div className="fact"><dt>Circuit</dt><dd>1 513 m × 9 m</dd></div>
              <div className="fact"><dt>Karts</dt><dd>Sodi RT10</dd></div>
              <div className="fact"><dt>Ouvert dès</dt><dd>16 ans</dd></div>
            </dl>
          </div>
        </div>
      </div>

      <div className="hero-two">
        <svg className="hero-veil" id="heroVeil" aria-hidden="true" focusable="false">
          <defs>
            <mask id="heroHoles" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
              <rect width="100%" height="100%" fill="#fff" />
              {DAYS.map((d) => (
                <circle key={d.day} className="hero-hole" r="0" fill="#000" />
              ))}
            </mask>
          </defs>
          <rect className="hero-veil-fill" width="100%" height="100%" mask="url(#heroHoles)" />
        </svg>
        <div className="hero-two-head">
          <div>
            <div className="label label-y">Du jeudi 1er au dimanche 4 avril 2027</div>
            <h2 className="display">4 jours.<br />48 heures.</h2>
          </div>
          <div className="hero-two-note">
            <p>De l'accueil des pilotes aux podiums, chaque cercle est une étape de l'événement.</p>
            <a className="hero-two-link" href="#programme">Voir le programme</a>
          </div>
        </div>
        <ol className="hero-rings" aria-label="Les quatre jours de l'événement">
          {DAYS.map((d, i) => (
            <li className="hero-ring" key={d.day} style={{ '--i': i, '--col': i % 2, '--row': Math.floor(i / 2) } as React.CSSProperties}>
              <span className="hero-ring-day">{d.day}</span>
              <span className="hero-ring-name">{d.name}</span>
            </li>
          ))}
        </ol>
        <div className="hero-two-foot">
          <span className="label">Horaires détaillés à confirmer</span>
          <span className="label">Karting Roussillon · Rivesaltes</span>
        </div>
      </div>
    </section>
  );
}
