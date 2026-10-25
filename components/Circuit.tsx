export default function Circuit() {
  return (
    <section className="circuit" id="circuit">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="label label-y">Le terrain de jeu</div>
              <h2 className="display">Circuit du Roussillon</h2>
            </div>
            <p style={{ margin: '0', maxWidth: '44ch', color: 'var(--muted)', fontSize: '16px' }}>Créé il y a environ 25 ans, le circuit a longtemps été présenté comme la plus grande piste de karting au monde. Son tracé rapide et technique exige précision, anticipation et régularité.</p>
          </div>
          <div className="map">
            <svg viewBox="60 50 1340 560" role="img" aria-label="Vue aérienne du Circuit du Roussillon avec le tracé de 1 513 mètres">
              <image href="/images/aerial.jpg" x="0" y="0" width="1400" height="700" preserveAspectRatio="none"/>
              <rect id="dusk" x="0" y="0" width="1400" height="700" fill="#2a1626" opacity=".28"/>
              <rect id="night" x="0" y="0" width="1400" height="700" fill="#05060c" opacity="0"/>
              <path className="track-glow" id="trackGlow" d="M 160 88 C 118 90 104 122 120 152 L 392 497 C 408 516 430 522 462 522 L 590 520 C 628 518 642 492 628 462 C 612 428 586 408 596 372 C 606 340 640 330 690 330 L 765 322 C 795 320 802 352 798 382 C 794 418 796 446 826 446 C 856 446 862 414 858 384 C 854 340 872 312 918 310 C 950 309 955 340 945 370 L 925 470 C 918 520 950 545 1000 545 L 1320 545 C 1365 545 1375 500 1350 465 L 1165 215 C 1150 200 1130 202 1100 204 L 770 205 C 735 205 720 255 690 255 L 470 255 C 440 255 420 230 415 200 C 410 160 425 112 395 110 L 335 112 C 300 115 300 175 262 172 C 222 168 225 120 205 100 C 195 90 180 87 160 88 Z"/>
              <path className="track-run" id="trackRun" d="M 160 88 C 118 90 104 122 120 152 L 392 497 C 408 516 430 522 462 522 L 590 520 C 628 518 642 492 628 462 C 612 428 586 408 596 372 C 606 340 640 330 690 330 L 765 322 C 795 320 802 352 798 382 C 794 418 796 446 826 446 C 856 446 862 414 858 384 C 854 340 872 312 918 310 C 950 309 955 340 945 370 L 925 470 C 918 520 950 545 1000 545 L 1320 545 C 1365 545 1375 500 1350 465 L 1165 215 C 1150 200 1130 202 1100 204 L 770 205 C 735 205 720 255 690 255 L 470 255 C 440 255 420 230 415 200 C 410 160 425 112 395 110 L 335 112 C 300 115 300 175 262 172 C 222 168 225 120 205 100 C 195 90 180 87 160 88 Z"/>
              <line x1="960" y1="184" x2="960" y2="226" stroke="#F4F2EC" strokeWidth="5"/>
              <circle id="dotGlow" cx="160" cy="88" r="26" fill="#FFC81E" opacity=".35"/>
              <circle id="dot" cx="160" cy="88" r="10" fill="#F4F2EC"/>
            </svg>
            <dl className="map-tele">
              <div className="tele"><dt>Distance</dt><dd><span id="teleDist">1 513</span><small>m</small></dd></div>
              <div className="tele"><dt>Largeur</dt><dd>9<small>m</small></dd></div>
              <div className="tele"><dt>Tour</dt><dd><span id="teleLap">1</span></dd></div>
              <div className="tele"><dt>Lumière</dt><dd id="teleLight">Jour</dd></div>
            </dl>
          </div>
        </div>
      </section>
  );
}
