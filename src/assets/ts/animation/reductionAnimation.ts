import { animationWrapper } from "../variable";

// 背景画像が縮小するアニメーション
export function reductionImageAnimation(imgUrl: string): void {
  const reductionImageContainer = document.createElement("div");
  reductionImageContainer.classList.add("mv__image-animation-container");
  animationWrapper?.appendChild(reductionImageContainer);

  if (reductionImageContainer) {
    reductionImageContainer.style.backgroundImage = `url(${imgUrl})`;
    const fadeInKeyframe: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];
    const reductionKeyframe: Keyframe[] = [
      { transform: "scale(1.3)" },
      { transform: "scale(1)" },
    ];
    const fadeInOption: KeyframeAnimationOptions = { duration: 1000 };
    const reductionOption: KeyframeAnimationOptions = { duration: 5000 };
    reductionImageContainer.animate(fadeInKeyframe, fadeInOption);
    reductionImageContainer.animate(reductionKeyframe, reductionOption);
  }
}
