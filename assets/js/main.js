import * as variable from "./variable";
import { bgImageAnimation, bgImageContainer, } from "./animation/bgImageAnimation";
document.addEventListener("DOMContentLoaded", () => {
    console.log(bgImageContainer);
    bgImageAnimation(variable.img_main_bottle);
});
