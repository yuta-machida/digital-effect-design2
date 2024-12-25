import Vivus from "vivus";

export function vivusAnimation(id: string): void {
  const svg: HTMLElement | null = document.querySelector(`#${id}`);
  if (svg) {
    svg.style.opacity = "1";

    // 手書きアニメーションの実行（vivus.jsライブラリを使用）
    const vivus = new Vivus(`${id}`, {
      duration: 150,
    });
    vivus.play();

    if (id !== "svg-message") {
      setTimeout(() => {
        svg.style.opacity = "0";
      }, 11000);
    }
  }
}
