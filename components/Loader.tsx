export default function Loader() {
  return (
    <div className="loader" id="loader" aria-hidden="true">
      <div className="loader-stage">
        <svg viewBox="0 0 1357 1159"><path className="loader-path" id="loaderPath" d="M327 665 L326 673 L323 677 L279 708 L147 749 L142 753 L138 758 L136 764 L136 784 L143 811 L148 822 L152 828 L160 834 L173 834 L346 785 L360 786 L463 812 L473 812 L483 808 L508 785 L520 782 L529 784 L690 843 L866 858 L899 859 L907 855 L915 848 L942 808 L946 807 L967 809 L982 807 L999 801 L1012 790 L1057 718 L1130 611 L1134 600 L1135 565 L1138 553 L1145 542 L1159 529 L1175 520 L1251 485 L1266 470 L1270 458 L1269 449 L1264 441 L1258 436 L1249 434 L1236 434 L1157 444 L1103 446 L1086 454"/></svg>
        <img src="/images/logo.webp" alt="" />
      </div>
      <button className="loader-skip" id="skip" type="button">Passer</button>
    </div>
  );
}
