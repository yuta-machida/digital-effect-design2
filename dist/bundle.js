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

/***/ "./assets/ts/animation/reductionAnimation.ts":
/*!***************************************************!*\
  !*** ./assets/ts/animation/reductionAnimation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bgImageAnimation: () => (/* binding */ bgImageAnimation)\n/* harmony export */ });\nconst bgImageContainer = document.querySelector(\".mv__bg-image.--reduction\");\n// 背景画像が縮小されるアニメーション\nfunction bgImageAnimation(imgUrl) {\n    console.log(bgImageContainer);\n    if (bgImageContainer) {\n        bgImageContainer.style.backgroundImage = `url(${imgUrl})`;\n        const keyframes = [\n            { transform: \"scale(1.3)\" },\n            { transform: \"scale(1)\" },\n        ];\n        const options = { duration: 2000 };\n        bgImageContainer.animate(keyframes, options);\n    }\n}\n\n\n//# sourceURL=webpack://design_2/./assets/ts/animation/reductionAnimation.ts?");

/***/ }),

/***/ "./assets/ts/main.ts":
/*!***************************!*\
  !*** ./assets/ts/main.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variable */ \"./assets/ts/variable.ts\");\n/* harmony import */ var _animation_reductionAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/reductionAnimation */ \"./assets/ts/animation/reductionAnimation.ts\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_animation_reductionAnimation__WEBPACK_IMPORTED_MODULE_1__.bgImageAnimation)(_variable__WEBPACK_IMPORTED_MODULE_0__.img_main_bottle);\n});\n\n\n//# sourceURL=webpack://design_2/./assets/ts/main.ts?");

/***/ }),

/***/ "./assets/ts/variable.ts":
/*!*******************************!*\
  !*** ./assets/ts/variable.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   color: () => (/* binding */ color),\n/* harmony export */   img_bottle_1: () => (/* binding */ img_bottle_1),\n/* harmony export */   img_bottle_2: () => (/* binding */ img_bottle_2),\n/* harmony export */   img_bring_1: () => (/* binding */ img_bring_1),\n/* harmony export */   img_bring_2: () => (/* binding */ img_bring_2),\n/* harmony export */   img_main_bottle: () => (/* binding */ img_main_bottle),\n/* harmony export */   img_main_bring: () => (/* binding */ img_main_bring),\n/* harmony export */   mv: () => (/* binding */ mv)\n/* harmony export */ });\nconst mv = document.querySelector(\".mv\");\nconst color = [\n    \"#4B8A70\",\n    \"#56927A\",\n    \"#66967E\",\n    \"#6E9A81\",\n    \"#8BAC97\",\n];\nconst img_bottle_1 = \"/assets/img/bottle_1.png\";\nconst img_bottle_2 = \"/assets/img/bottle_2.png\";\nconst img_bring_1 = \"/assets/img/bring_1.png\";\nconst img_bring_2 = \"/assets/img/bring_2.png\";\nconst img_main_bottle = \"/assets/img/main_bottle.png\";\nconst img_main_bring = \"/assets/img/main_bring.png\";\n\n\n//# sourceURL=webpack://design_2/./assets/ts/variable.ts?");

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