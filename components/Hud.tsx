export default function Hud() {
  return (
    <div className="hud" aria-hidden="true">
      <div className="hud-phase" id="hudPhase">Jour</div>
      <div className="hud-time"><small>RESTANT</small><span id="hudTime">48:00:00</span></div>
    </div>
  );
}
