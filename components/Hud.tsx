/* Barre de course : fine ligne en bas de l'écran qui se remplit au fil du scroll (les 48 h défilent), sans rien masquer. */
export default function Hud() {
  return (
    <div className="race-bar" aria-hidden="true">
      <span className="race-fill" id="raceFill" />
    </div>
  );
}
