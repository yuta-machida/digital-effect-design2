import { animationWrapper } from "../variable";

// 背景画像をフェードインで表示させるアニメーション
export function fadeInAnimation(imgUrl: string): void {
  const fadeInImageContainer = document.createElement("div");
  fadeInImageContainer.classList.add("mv__image-animation-container");
  animationWrapper?.appendChild(fadeInImageContainer);

  if (fadeInImageContainer) {
    fadeInImageContainer.style.backgroundImage = `url(${imgUrl})`;
    const keyframes: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];
    const options: KeyframeAnimationOptions = { duration: 500 };
    fadeInImageContainer.animate(keyframes, options);
  }
}
