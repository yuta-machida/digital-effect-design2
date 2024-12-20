// 背景画像が縮小されるアニメーション
export function reductionImageAnimation(imgUrl: string): void {
  const reductionImageContainer: HTMLElement | null = document.querySelector(
    ".mv__bg-image.--reduction"
  );
  if (reductionImageContainer) {
    reductionImageContainer.style.backgroundImage = `url(${imgUrl})`;
    const keyframes: Keyframe[] = [
      { transform: "scale(1.3)" },
      { transform: "scale(1)" },
    ];
    const options: KeyframeAnimationOptions = { duration: 5000 };
    reductionImageContainer.animate(keyframes, options);
  }
}
