import { animationWrapper } from "../variable";

export function fadeInAnimation(imgUrl: string): void {
  const fadeInImageContainer = document.createElement("div");
  fadeInImageContainer.classList.add("mv__image-animation-container");
  animationWrapper?.appendChild(fadeInImageContainer);

  if (fadeInImageContainer) {
    fadeInImageContainer.style.backgroundImage = `url(${imgUrl})`;
    const keyframes: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];
    const options: KeyframeAnimationOptions = { duration: 300 };
    fadeInImageContainer.animate(keyframes, options);
  }
}
