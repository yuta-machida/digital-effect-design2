import { vivusAnimation } from "./vivusAnimation";

export function gradationAnimation(): void {
  const gradationContainer: HTMLElement | null =
    document.querySelector(".mv__gradation");
  const text: HTMLElement | null = document.querySelector(
    ".mv__gradation-text"
  );
  // グラデーション用のコンテナ表示＆手書きアニメーション
  if (gradationContainer) {
    gradationContainer.style.opacity = "1";
    setTimeout(() => {
      vivusAnimation("svg-message");
    }, 1000);
  }
  // コピーをフェードイン表示
  if (text) {
    setTimeout(() => {
      text.style.opacity = "1";
    }, 5000);
  }
}
