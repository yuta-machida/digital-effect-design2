import { animationWrapper } from "../variable";
// 背景画像をフェードインで表示させるアニメーション
export function fadeInAnimation(imgUrl) {
    const fadeInImageContainer = document.createElement("div");
    fadeInImageContainer.classList.add("mv__image-animation-container");
    animationWrapper === null || animationWrapper === void 0 ? void 0 : animationWrapper.appendChild(fadeInImageContainer);
    if (fadeInImageContainer) {
        fadeInImageContainer.style.backgroundImage = `url(${imgUrl})`;
        const keyframes = [{ opacity: 0 }, { opacity: 1 }];
        const options = { duration: 500 };
        fadeInImageContainer.animate(keyframes, options);
    }
}
