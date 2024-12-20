// div要素を作成する関数
function createSlideBox(imgUrl?: string): HTMLDivElement[] {
  const slideBox: HTMLDivElement[] = [];
  const slideAnimationWrapper: HTMLElement | null = document.querySelector(
    ".mv__slide-animation-wrapper"
  );
  const slideAnimationContainer: HTMLElement = document.createElement("div");
  slideAnimationContainer.classList.add("mv__slide-animation-container");
  slideAnimationWrapper?.appendChild(slideAnimationContainer);
  const color: string[] = [
    "#4B8A70",
    "#56927A",
    "#66967E",
    "#6E9A81",
    "#8BAC97",
  ];
  const NUMBER_OF_BOXES = 5;
  let position: number = 0;
  for (let i: number = 0; i < NUMBER_OF_BOXES; i++) {
    const div = document.createElement("div");
    div.classList.add("mv__slide-box");
    if (imgUrl) {
      div.style.backgroundImage = `url(${imgUrl})`;
      div.style.backgroundPosition = `${(i * 100) / (NUMBER_OF_BOXES - 1)}% 0`;
    }
    if (color) {
      div.style.backgroundColor = color[i];
    }
    i % 2 !== 0
      ? (div.style.transform = "translateY(100%)")
      : (div.style.transform = "translateY(-100%)");
    position += 20;
    slideAnimationContainer?.appendChild(div);
    slideBox.push(div);
  }
  return slideBox;
}

// スライドアニメーション
export function slideAnimation(imgUrl?: string): void {
  const div: HTMLDivElement[] = createSlideBox(imgUrl);
  const duration: number = 100;
  let animationDelay: number = 0;

  for (let i: number = 0; i < div.length; i++) {
    if (i % 2 !== 0) {
      div[i].animate(
        [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }],
        { duration: duration, delay: animationDelay, fill: "forwards" }
      );
    } else {
      div[i].animate(
        [{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }],
        { duration: duration, delay: animationDelay, fill: "forwards" }
      );
    }
    animationDelay += 150;
  }
}
