import * as variable from "./variable";
import { reductionImageAnimation } from "./animation/reductionAnimation";
import { slideAnimation } from "./animation/slideAnimation";
import { fadeInAnimation } from "./animation/fadeInAnimation";

document.addEventListener("DOMContentLoaded", () => {
  reductionImageAnimation(variable.img_main_bottle);
  setTimeout(() => {
    slideAnimation();
  }, 1000);
  setTimeout(() => {
    fadeInAnimation(variable.img_bottle_1);
  }, 2000);
  setTimeout(() => {
    slideAnimation(variable.img_bottle_1);
  }, 3000);
});
