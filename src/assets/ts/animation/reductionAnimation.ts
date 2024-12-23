import { animationWrapper } from "../variable";

// 背景画像が縮小されるアニメーション
export function reductionImageAnimation(imgUrl: string): void {
  const reductionImageContainer = document.createElement("div");
  reductionImageContainer.classList.add("mv__image-animation-container");
  animationWrapper?.appendChild(reductionImageContainer);

  if (reductionImageContainer) {
    reductionImageContainer.style.backgroundImage = `url(${imgUrl})`;
    const keyframes: Keyframe[] = [
      { transform: "scale(1.3)", opacity: 0 },
      { transform: "scale(1)", opacity: 1 },
    ];
    const options: KeyframeAnimationOptions = { duration: 5000 };
    reductionImageContainer.animate(keyframes, options);
  }
}
