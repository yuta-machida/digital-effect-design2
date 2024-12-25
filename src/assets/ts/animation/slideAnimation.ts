import { animationWrapper, mediaQuery } from "../variable";

const NUMBER_OF_BOXES = 5;

// スライドさせる要素を生成し、背景色を追加する
function createSlideBox() {
  const slideAnimationContainer: HTMLElement = document.createElement("div");
  slideAnimationContainer.classList.add("mv__slide-animation-container");
  animationWrapper?.appendChild(slideAnimationContainer);
  const slideBox: HTMLDivElement[] = [];
  const color: string[] = [
    "#4B8A70",
    "#56927A",
    "#66967E",
    "#6E9A81",
    "#8BAC97",
  ];
  for (let i: number = 0; i < NUMBER_OF_BOXES; i++) {
    const div = document.createElement("div");
    div.classList.add("mv__slide-box");
    div.style.backgroundColor = color[i];

    if (mediaQuery.matches) {
      i % 2 !== 0
        ? (div.style.transform = "translateY(100%)")
        : (div.style.transform = "translateY(-100%)");
    } else {
      i % 2 !== 0
        ? (div.style.transform = "translateX(100%)")
        : (div.style.transform = "translateX(-100%)");
    }
    slideAnimationContainer?.appendChild(div);
    slideBox.push(div);
  }
  return slideBox;
}

// image要素を生成して、clip-pathで切り抜き
function createSlideImage(imageURL: string) {
  const slideAnimationContainer: HTMLElement = document.createElement("div");
  slideAnimationContainer.classList.add("mv__slide-animation-container");
  animationWrapper?.appendChild(slideAnimationContainer);
  const slideBox: HTMLDivElement[] = [];
  let firstPosition: number = 0;
  let lastPosition: number = 20;
  for (let i: number = 0; i < NUMBER_OF_BOXES; i++) {
    const image = document.createElement("img");
    image.setAttribute("src", imageURL);
    image.classList.add("mv__slide-image");

    if (mediaQuery.matches) {
      image.style.clipPath = `polygon(${firstPosition}% 0%,${lastPosition}% 0%,${lastPosition}% 100%,${firstPosition}% 100%)`;
      i % 2 !== 0
        ? (image.style.transform = "translateY(100%)")
        : (image.style.transform = "translateY(-100%)");
    } else {
      image.style.clipPath = `polygon(0% ${firstPosition}%, 100% ${firstPosition}%, 100% ${lastPosition}%,0% ${lastPosition}%)`;
      i % 2 !== 0
        ? (image.style.transform = "translateX(100%)")
        : (image.style.transform = "translateX(-100%)");
    }
    firstPosition += 20;
    lastPosition += 20;
    slideAnimationContainer?.appendChild(image);
    slideBox.push(image);
  }
  return slideBox;
}

// スライドアニメーション
export function slideAnimation(imgURL?: string): void {
  const slideBox = imgURL ? createSlideImage(imgURL) : createSlideBox();
  const duration: number = 100;
  let animationDelay: number = 0;

  for (let i: number = 0; i < slideBox.length; i++) {
    if (i % 2 !== 0) {
      slideBox[i].animate(
        mediaQuery.matches
          ? [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }]
          : [{ transform: "translateX(100%)" }, { transform: "translateX(0)" }],
        { duration: duration, delay: animationDelay, fill: "forwards" }
      );
    } else {
      slideBox[i].animate(
        mediaQuery.matches
          ? [{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }]
          : [
              { transform: "translateX(-100%)" },
              { transform: "translateX(0)" },
            ],
        { duration: duration, delay: animationDelay, fill: "forwards" }
      );
    }
    animationDelay += 150;
  }
}

mediaQuery.addEventListener("change", () => {
  slideAnimation();
});
