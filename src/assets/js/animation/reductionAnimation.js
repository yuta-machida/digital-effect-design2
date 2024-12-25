import { animationWrapper } from "../variable";
// 背景画像が縮小するアニメーション
export function reductionImageAnimation(imgUrl) {
    const reductionImageContainer = document.createElement("div");
    reductionImageContainer.classList.add("mv__image-animation-container");
    animationWrapper === null || animationWrapper === void 0 ? void 0 : animationWrapper.appendChild(reductionImageContainer);
    if (reductionImageContainer) {
        reductionImageContainer.style.backgroundImage = `url(${imgUrl})`;
        const fadeInKeyframe = [{ opacity: 0 }, { opacity: 1 }];
        const reductionKeyframe = [
            { transform: "scale(1.3)" },
            { transform: "scale(1)" },
        ];
        const fadeInOption = { duration: 1000 };
        const reductionOption = { duration: 5000 };
        reductionImageContainer.animate(fadeInKeyframe, fadeInOption);
        reductionImageContainer.animate(reductionKeyframe, reductionOption);
    }
}
