import Countdown from './Countdown';
import SilkBackground from './SilkBackground';

export default function Hero() {
  return (
    <section className="hero" id="hero">
        <div className="hero-media"><SilkBackground /></div>
        <div className="wrap">
          <div className="label hero-fade">Karting d'endurance · Circuit du Roussillon · Édition 2027</div>
          <h1 className="display hero-title">
            <span className="line"><span>48H</span></span>
            <span className="line sub"><span>IRON KART</span></span>
          </h1>
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
      </section>
  );
}
