export default function Loader() {
  return (
    <div className="loader" id="loader" aria-hidden="true">
      <div className="loader-stage">
        <svg viewBox="0 0 1357 1159"><path className="loader-path" id="loaderPath" d="M160 840 L345 795 L470 822 C490 826 500 800 515 785 C525 775 540 775 560 782 L690 830 L890 862 C915 864 925 850 935 832 L945 812 C950 800 965 802 985 806 C1010 808 1025 790 1035 775 L1135 630 C1145 610 1130 590 1135 560 C1140 520 1170 510 1210 490 C1260 465 1285 455 1270 430 C1255 410 1215 425 1170 428 L1090 437 L330 660 L270 700 L165 735 C140 742 135 770 145 805 C150 830 155 842 160 840 Z"/></svg>
        <img src="/images/logo.webp" alt="" />
      </div>
      <button className="loader-skip" id="skip" type="button">Passer</button>
    </div>
  );
}
