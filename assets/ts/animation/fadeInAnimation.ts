export function fadeInAnimation(imgUrl: string): void {
  const fadeInImageContainer: HTMLElement | null = document.querySelector(
    ".mv__bg-image.--fade-in"
  );
  if (fadeInImageContainer) {
    fadeInImageContainer.style.backgroundImage = `url${imgUrl}`;
    fadeInImageContainer.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 100,
      fill: "forwards",
    });
  }
}
