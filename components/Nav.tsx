export default function Nav() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <div className="wrap">
        <a className="nav-logo" href="#top">48H IRON KART</a>
        <div className="nav-links">
          <a href="#defi">Le défi</a><a href="#circuit">Circuit</a><a href="#kart">Karts</a><a href="#programme">Programme</a><a href="#infos">Infos</a>
          <a className="nav-cta" href="#inscription">S'inscrire</a>
        </div>
      </div>
    </nav>
  );
}
