import { vivusAnimation } from "./vivusAnimation";

const gradationContainer: HTMLElement | null =
  document.querySelector(".mv__gradation");
const text: HTMLElement | null = document.querySelector(".mv__gradation-text");
const gradientPositions = [
  { gradient1: { x: 50, y: -50 }, gradient2: { x: 150, y: -10 } },
  { gradient1: { x: -100, y: 0 }, gradient2: { x: 50, y: 40 } },
  { gradient1: { x: -20, y: 40 }, gradient2: { x: 100, y: 50 } },
];
let currentIndex = 0;
let nextIndex = 1;
let t = 0; // 現在の進行度（0～1）
const speed = 0.015; // 変化速度

// 背景グラデーションのアニメーション関数
function updateGradient() {
  const current = gradientPositions[currentIndex];
  const next = gradientPositions[nextIndex];

  const gradient1X = lerp(current.gradient1.x, next.gradient1.x, t);
  const gradient1Y = lerp(current.gradient1.y, next.gradient1.y, t);
  const gradient2X = lerp(current.gradient2.x, next.gradient2.x, t);
  const gradient2Y = lerp(current.gradient2.y, next.gradient2.y, t);

  // 背景グラデーションを更新
  if (gradationContainer) {
    gradationContainer.style.backgroundImage = `
      radial-gradient(at ${gradient1X}% ${gradient1Y}%, #c9cead 20%, transparent 80%),
      radial-gradient(at 0% 100%, #41b048 10%, transparent 100%),
      radial-gradient(at ${gradient2X}% ${gradient2Y}%, #4bc29d 40%, transparent 70%),
      radial-gradient(at 100% 100%, #68be73 40%, transparent 100%)
    `;
  }
  // 進行度を更新
  t += speed;
  if (t >= 1) {
    t = 0;
    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % gradientPositions.length;
  }
  requestAnimationFrame(updateGradient);
}
function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function gradationAnimation(): void {
  if (gradationContainer) {
    gradationContainer.style.opacity = "1";
    updateGradient(); // グラデーションのアニメーション関数
    setTimeout(() => {
      vivusAnimation("svg-message"); // 「あらゆるものを循環させる」の手書きアニメーション
    }, 1000);
  }
  // コピーをフェードイン表示
  if (text) {
    setTimeout(() => {
      text.style.opacity = "1";
    }, 3000);
  }
}
