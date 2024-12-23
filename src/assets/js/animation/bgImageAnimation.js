export const bgImageContainer = document.querySelector(".mv__bg-image");
export function bgImageAnimation(imgUrl) {
    console.log(bgImageContainer);
    if (bgImageContainer) {
        bgImageContainer.style.backgroundImage = `url(${imgUrl})`;
        const keyframes = [
            { transform: "scale(1.3)" },
            { transform: "scale(1)" },
        ];
        const options = { duration: 200 };
        bgImageContainer.animate(keyframes, options);
    }
}
