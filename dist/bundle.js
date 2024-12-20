/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/ts/animation/fadeInAnimation.ts":
/*!************************************************!*\
  !*** ./assets/ts/animation/fadeInAnimation.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fadeInAnimation: () => (/* binding */ fadeInAnimation)\n/* harmony export */ });\nfunction fadeInAnimation(imgUrl) {\n    const fadeInImageContainer = document.querySelector(\".mv__bg-image.--fade-in\");\n    if (fadeInImageContainer) {\n        fadeInImageContainer.style.backgroundImage = `url${imgUrl}`;\n        fadeInImageContainer.animate([{ opacity: 0 }, { opacity: 1 }], {\n            duration: 100,\n            fill: \"forwards\",\n        });\n    }\n}\n\n\n//# sourceURL=webpack://design_2/./assets/ts/animation/fadeInAnimation.ts?");

/***/ }),

/***/ "./assets/ts/animation/reductionAnimation.ts":
/*!***************************************************!*\
  !*** ./assets/ts/animation/reductionAnimation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reductionImageAnimation: () => (/* binding */ reductionImageAnimation)\n/* harmony export */ });\n// 背景画像が縮小されるアニメーション\nfunction reductionImageAnimation(imgUrl) {\n    const reductionImageContainer = document.querySelector(\".mv__bg-image.--reduction\");\n    if (reductionImageContainer) {\n        reductionImageContainer.style.backgroundImage = `url(${imgUrl})`;\n        const keyframes = [\n            { transform: \"scale(1.3)\" },\n            { transform: \"scale(1)\" },\n        ];\n        const options = { duration: 5000 };\n        reductionImageContainer.animate(keyframes, options);\n    }\n}\n\n\n//# sourceURL=webpack://design_2/./assets/ts/animation/reductionAnimation.ts?");

/***/ }),

/***/ "./assets/ts/animation/slideAnimation.ts":
/*!***********************************************!*\
  !*** ./assets/ts/animation/slideAnimation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slideAnimation: () => (/* binding */ slideAnimation)\n/* harmony export */ });\n// div要素を作成する関数\nfunction createSlideBox(imgUrl) {\n    const slideBox = [];\n    const slideAnimationWrapper = document.querySelector(\".mv__slide-animation-wrapper\");\n    const slideAnimationContainer = document.createElement(\"div\");\n    slideAnimationContainer.classList.add(\"mv__slide-animation-container\");\n    slideAnimationWrapper === null || slideAnimationWrapper === void 0 ? void 0 : slideAnimationWrapper.appendChild(slideAnimationContainer);\n    const color = [\n        \"#4B8A70\",\n        \"#56927A\",\n        \"#66967E\",\n        \"#6E9A81\",\n        \"#8BAC97\",\n    ];\n    const NUMBER_OF_BOXES = 5;\n    let position = 0;\n    for (let i = 0; i < NUMBER_OF_BOXES; i++) {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"mv__slide-box\");\n        if (imgUrl) {\n            div.style.backgroundImage = `url(${imgUrl})`;\n            div.style.backgroundPosition = `${(i * 100) / (NUMBER_OF_BOXES - 1)}% 0`;\n        }\n        if (color) {\n            div.style.backgroundColor = color[i];\n        }\n        i % 2 !== 0\n            ? (div.style.transform = \"translateY(100%)\")\n            : (div.style.transform = \"translateY(-100%)\");\n        position += 20;\n        slideAnimationContainer === null || slideAnimationContainer === void 0 ? void 0 : slideAnimationContainer.appendChild(div);\n        slideBox.push(div);\n    }\n    return slideBox;\n}\n// スライドアニメーション\nfunction slideAnimation(imgUrl) {\n    const div = createSlideBox(imgUrl);\n    const duration = 100;\n    let animationDelay = 0;\n    for (let i = 0; i < div.length; i++) {\n        if (i % 2 !== 0) {\n            div[i].animate([{ transform: \"translateY(100%)\" }, { transform: \"translateY(0)\" }], { duration: duration, delay: animationDelay, fill: \"forwards\" });\n        }\n        else {\n            div[i].animate([{ transform: \"translateY(-100%)\" }, { transform: \"translateY(0)\" }], { duration: duration, delay: animationDelay, fill: \"forwards\" });\n        }\n        animationDelay += 150;\n    }\n}\n\n\n//# sourceURL=webpack://design_2/./assets/ts/animation/slideAnimation.ts?");

/***/ }),

/***/ "./assets/ts/main.ts":
/*!***************************!*\
  !*** ./assets/ts/main.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variable */ \"./assets/ts/variable.ts\");\n/* harmony import */ var _animation_reductionAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/reductionAnimation */ \"./assets/ts/animation/reductionAnimation.ts\");\n/* harmony import */ var _animation_slideAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation/slideAnimation */ \"./assets/ts/animation/slideAnimation.ts\");\n/* harmony import */ var _animation_fadeInAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation/fadeInAnimation */ \"./assets/ts/animation/fadeInAnimation.ts\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_animation_reductionAnimation__WEBPACK_IMPORTED_MODULE_1__.reductionImageAnimation)(_variable__WEBPACK_IMPORTED_MODULE_0__.img_main_bottle);\n    setTimeout(() => {\n        (0,_animation_slideAnimation__WEBPACK_IMPORTED_MODULE_2__.slideAnimation)();\n    }, 1000);\n    setTimeout(() => {\n        (0,_animation_fadeInAnimation__WEBPACK_IMPORTED_MODULE_3__.fadeInAnimation)(_variable__WEBPACK_IMPORTED_MODULE_0__.img_bottle_1);\n    }, 2000);\n    setTimeout(() => {\n        (0,_animation_slideAnimation__WEBPACK_IMPORTED_MODULE_2__.slideAnimation)(_variable__WEBPACK_IMPORTED_MODULE_0__.img_bottle_1);\n    }, 3000);\n});\n\n\n//# sourceURL=webpack://design_2/./assets/ts/main.ts?");

/***/ }),

/***/ "./assets/ts/variable.ts":
/*!*******************************!*\
  !*** ./assets/ts/variable.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   img_bottle_1: () => (/* binding */ img_bottle_1),\n/* harmony export */   img_bottle_2: () => (/* binding */ img_bottle_2),\n/* harmony export */   img_bring_1: () => (/* binding */ img_bring_1),\n/* harmony export */   img_bring_2: () => (/* binding */ img_bring_2),\n/* harmony export */   img_main_bottle: () => (/* binding */ img_main_bottle),\n/* harmony export */   img_main_bring: () => (/* binding */ img_main_bring),\n/* harmony export */   mv: () => (/* binding */ mv)\n/* harmony export */ });\nconst mv = document.querySelector(\".mv\");\nconst img_bottle_1 = \"/assets/img/bottle_1.png\";\nconst img_bottle_2 = \"/assets/img/bottle_2.png\";\nconst img_bring_1 = \"/assets/img/bring_1.png\";\nconst img_bring_2 = \"/assets/img/bring_2.png\";\nconst img_main_bottle = \"/assets/img/main_bottle.png\";\nconst img_main_bring = \"/assets/img/main_bring.png\";\n\n\n//# sourceURL=webpack://design_2/./assets/ts/variable.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/ts/main.ts");
/******/ 	
/******/ })()
;