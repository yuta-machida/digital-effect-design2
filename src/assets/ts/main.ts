import * as variable from "./variable";
import { reductionImageAnimation } from "./animation/reductionAnimation";
import { slideAnimation } from "./animation/slideAnimation";
import { fadeInAnimation } from "./animation/fadeInAnimation";
import { vivusAnimation } from "./animation/vivusAnimation";
import { gradationAnimation } from "./animation/gradationAnimation";

document.addEventListener("DOMContentLoaded", () => {
  // 画面サイズを監視してスライドアニメーションを切り替え

  // 1セット
  setTimeout(() => {
    slideAnimation();
  }, 3000);
  setTimeout(() => {
    fadeInAnimation(variable.img_bottle_1);
  }, 4000);
  // 手書きアニメーション
  setTimeout(() => {
    vivusAnimation("svg-bottle");
  }, 5000);
  setTimeout(() => {
    slideAnimation(variable.img_bottle_2);
  }, 8000);
  setTimeout(() => {
    slideAnimation(variable.img_bottle_1);
  }, 12000);

  // 2セット
  setTimeout(() => {
    reductionImageAnimation(variable.img_main_bring);
  }, 16000);
  setTimeout(() => {
    slideAnimation();
  }, 20000);
  setTimeout(() => {
    fadeInAnimation(variable.img_bring_1);
  }, 21000);
  // 手書きアニメーション
  setTimeout(() => {
    vivusAnimation("svg-clothes");
  }, 22000);
  setTimeout(() => {
    slideAnimation(variable.img_bring_2);
  }, 25000);
  setTimeout(() => {
    slideAnimation(variable.img_bring_1);
  }, 29000);
  // グラデーション
  setTimeout(() => {
    gradationAnimation();
  }, 33000);
});
