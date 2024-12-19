const bgImageContainer: HTMLElement | null = document.querySelector(
  ".mv__bg-image.--reduction"
);

// 背景画像が縮小されるアニメーション
export function bgImageAnimation(imgUrl: string): void {
  console.log(bgImageContainer);
  if (bgImageContainer) {
    bgImageContainer.style.backgroundImage = `url(${imgUrl})`;
    const keyframes: Keyframe[] = [
      { transform: "scale(1.3)" },
      { transform: "scale(1)" },
    ];
    const options: KeyframeAnimationOptions = { duration: 2000 };
    bgImageContainer.animate(keyframes, options);
  }
}
