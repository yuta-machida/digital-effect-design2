import * as variable from "./variable";
import { reductionImageAnimation } from "./animation/reductionAnimation";
import { slideAnimation } from "./animation/slideAnimation";
import { fadeInAnimation } from "./animation/fadeInAnimation";
import { vivusAnimation } from "./animation/vivusAnimation";

document.addEventListener("DOMContentLoaded", () => {
  // 1セット
  setTimeout(() => {
    slideAnimation();
  }, 2000);
  setTimeout(() => {
    fadeInAnimation(variable.img_bottle_1);
  }, 3000);
  // 手書きアニメーション
  setTimeout(() => {
    vivusAnimation("svg-bottle");
  }, 3000);

  setTimeout(() => {
    slideAnimation(variable.img_bottle_2);
  }, 5000);
  setTimeout(() => {
    slideAnimation(variable.img_bottle_1);
  }, 7000);

  // 2セット
  setTimeout(() => {
    reductionImageAnimation(variable.img_main_bring);
  }, 10000);
  setTimeout(() => {
    slideAnimation();
  }, 13000);
  setTimeout(() => {
    fadeInAnimation(variable.img_bring_1);
  }, 14000);
  // 手書きアニメーション
  setTimeout(() => {
    vivusAnimation("svg-clothes");
  }, 14000);
  setTimeout(() => {
    slideAnimation(variable.img_bring_2);
  }, 16000);
  setTimeout(() => {
    slideAnimation(variable.img_bring_1);
  }, 18000);
});
