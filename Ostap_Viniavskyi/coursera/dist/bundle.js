/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/carousel.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/carousel.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/left-arrow.svg */ \"./static/images/left-arrow.svg\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/right-arrow.svg */ \"./static/images/right-arrow.svg\"));\n\n// Module\nexports.push([module.i, \".carousel {\\n  position: relative;\\n}\\n.carousel__courses-wrapper {\\n  box-sizing: border-box;\\n  overflow: hidden;\\n  padding: 4px;\\n}\\n.carousel__courses-movable-wrapper {\\n  display: flex;\\n  flex-wrap: nowrap;\\n  justify-content: flex-start;\\n  transition-property: transform;\\n}\\n.carousel__swap-button {\\n  height: 40px;\\n  background-color: transparent;\\n  background-size: 40px 40px;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n}\\n.carousel__swap-button_left {\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n}\\n.carousel__swap-button_right {\\n  background-image: url(\" + ___CSS_LOADER_URL___1___ + \");\\n}\\n.carousel__navigation-button {\\n  height: 12px;\\n  width: 12px;\\n  margin: 0 6px;\\n  padding: 0;\\n  border: 1px solid #9b9b9b;\\n  border-radius: 100%;\\n  background: inherit;\\n}\\n.carousel__navigation-button_active {\\n  height: 8px;\\n  width: 8px;\\n  background: #9b9b9b;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/carousel.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/column-grid-layout.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/column-grid-layout.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Grid {\\n  max-width: 1344px;\\n  margin: 0 auto;\\n}\\n.Grid__row {\\n  display: flex;\\n  width: 100%;\\n  flex-wrap: wrap;\\n  margin-bottom: 30px;\\n  align-items: center;\\n}\\n.Grid__row--centered-content {\\n  justify-content: center;\\n}\\n.Grid__cell_16 {\\n  width: 98.75%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_15 {\\n  width: 92.5%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_14 {\\n  width: 86.25%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_13 {\\n  width: 80%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_12 {\\n  width: 73.75%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_11 {\\n  width: 67.5%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_10 {\\n  width: 61.25%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_9 {\\n  width: 55%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_8 {\\n  width: 48.75%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_7 {\\n  width: 42.5%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_6 {\\n  width: 36.25%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_5 {\\n  width: 30%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_4 {\\n  width: 23.75%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_3 {\\n  width: 17.5%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_2 {\\n  width: 11.25%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_1 {\\n  width: 5%;\\n  margin: 0 0.625%;\\n}\\n.Grid__cell_push-15 {\\n  margin-left: 93.75%;\\n}\\n.Grid__cell_push-14 {\\n  margin-left: 87.5%;\\n}\\n.Grid__cell_push-13 {\\n  margin-left: 81.25%;\\n}\\n.Grid__cell_push-12 {\\n  margin-left: 75%;\\n}\\n.Grid__cell_push-11 {\\n  margin-left: 68.75%;\\n}\\n.Grid__cell_push-10 {\\n  margin-left: 62.5%;\\n}\\n.Grid__cell_push-9 {\\n  margin-left: 56.25%;\\n}\\n.Grid__cell_push-8 {\\n  margin-left: 50%;\\n}\\n.Grid__cell_push-7 {\\n  margin-left: 43.75%;\\n}\\n.Grid__cell_push-6 {\\n  margin-left: 37.5%;\\n}\\n.Grid__cell_push-5 {\\n  margin-left: 31.25%;\\n}\\n.Grid__cell_push-4 {\\n  margin-left: 25%;\\n}\\n.Grid__cell_push-3 {\\n  margin-left: 18.75%;\\n}\\n.Grid__cell_push-2 {\\n  margin-left: 12.5%;\\n}\\n.Grid__cell_push-1 {\\n  margin-left: 6.25%;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/column-grid-layout.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/common.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/common.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0;\\n  background-color: #f5f5f5;\\n  font-family: OpenSans, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, sans-serif;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\ndd,\\ndt,\\ndl,\\np,\\nblockquote {\\n  margin: 0;\\n}\\nh2 {\\n  line-height: 2rem;\\n  font-size: 1.6rem;\\n  font-weight: 300;\\n  color: #4a4a4a;\\n}\\na {\\n  text-decoration: none;\\n}\\nbutton {\\n  border: none;\\n}\\n.visually-hidden {\\n  clip: rect(0 0 0 0);\\n  height: 1px;\\n  margin: -1px;\\n  overflow: hidden;\\n  position: absolute;\\n  width: 1px;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/course-details.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/course-details.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/world-symbol.svg */ \"./static/images/world-symbol.svg\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/level-bars.svg */ \"./static/images/level-bars.svg\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../images/clock.svg */ \"./static/images/clock.svg\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../images/star.svg */ \"./static/images/star.svg\"));\nvar ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../images/star-half-empty.svg */ \"./static/images/star-half-empty.svg\"));\nvar ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../images/empty-star-.svg */ \"./static/images/empty-star-.svg\"));\n\n// Module\nexports.push([module.i, \".course-details {\\n  width: 320px;\\n  padding: 1.5rem 1.5rem 5rem;\\n  background-color: #ffffff;\\n  box-shadow: 0 3px 10px rgba(31, 31, 31, 0.16), 0 3px 10px rgba(31, 31, 31, 0.23);\\n  z-index: 500;\\n  position: fixed;\\n}\\n.course-details__provider-logo {\\n  height: 3rem;\\n  background-repeat: no-repeat;\\n  background-position: 0.5rem center;\\n  margin-bottom: 0.7rem;\\n}\\n.course-details__name {\\n  font-size: 1.5rem;\\n  font-weight: 400;\\n  margin: 0.7rem 0;\\n}\\n.course-details__syllabus-button {\\n  color: #ffffff;\\n  background-color: #2073d4;\\n  font-weight: 500;\\n  border: none;\\n  border-radius: 2px;\\n  height: 2.2rem;\\n  width: 8.5rem;\\n  margin-top: 0.5rem;\\n}\\n.course-details__info-container {\\n  margin: 1rem 0;\\n  border-top: 1px solid hsla(0, 0%, 73%, 0.75);\\n  border-bottom: 1px solid hsla(0, 0%, 73%, 0.75);\\n}\\n.course-details__info {\\n  margin: 0.7rem;\\n  padding-left: 2.5rem;\\n  background-size: 1.2rem;\\n  background-repeat: no-repeat;\\n  background-position: 0.3rem center;\\n}\\n.course-details__info_online {\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n}\\n.course-details__info_level {\\n  background-image: url(\" + ___CSS_LOADER_URL___1___ + \");\\n}\\n.course-details__info_timings {\\n  background-image: url(\" + ___CSS_LOADER_URL___2___ + \");\\n}\\n.course-details__skills {\\n  font-size: 0.8rem;\\n}\\n.course-details__skills-header {\\n  margin-bottom: 0.3rem;\\n  font-size: 0.85rem;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n}\\n.course-details__rating-container {\\n  display: flex;\\n  align-items: center;\\n  font-size: 0.85rem;\\n  margin: 1rem 0;\\n}\\n.course-details__rating-star {\\n  height: 1.2rem;\\n  width: 1.2rem;\\n  background-repeat: no-repeat;\\n  background-size: 1.2rem;\\n}\\n.course-details__rating-star_full {\\n  background-image: url(\" + ___CSS_LOADER_URL___3___ + \");\\n}\\n.course-details__rating-star_half-empty {\\n  background-image: url(\" + ___CSS_LOADER_URL___4___ + \");\\n}\\n.course-details__rating-star_empty {\\n  background-image: url(\" + ___CSS_LOADER_URL___5___ + \");\\n}\\n.course-details__rating {\\n  margin: 0 0.25rem 0 0.5rem;\\n  font-weight: bold;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/course-details.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/course.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/course.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".course {\\n  position: relative;\\n  height: 268px;\\n  min-width: 270px;\\n  max-width: 270px;\\n  padding-top: 132px;\\n  background-size: 100% 132px;\\n  background-color: white;\\n  background-repeat: no-repeat;\\n  box-shadow: 0 1px 6px rgba(31, 31, 31, 0.12), 0 1px 4px rgba(31, 31, 31, 0.12);\\n  object-fit: cover;\\n  text-decoration: none;\\n  user-select: none;\\n}\\n.course__course-info {\\n  box-sizing: border-box;\\n  display: flex;\\n  flex-direction: column;\\n  height: calc(100% - 50px);\\n  margin-top: 50px;\\n  padding: 0.75rem 1.5rem;\\n  -webkit-user-drag: none;\\n  user-select: none;\\n}\\n.course__name {\\n  margin-bottom: 0.5rem;\\n  line-height: 1.5rem;\\n  font-size: 1.25rem;\\n  font-weight: normal;\\n  color: black;\\n  user-select: none;\\n}\\n.course__provider {\\n  line-height: 1.5rem;\\n  font-size: 1rem;\\n  font-weight: 500;\\n  color: hsla(0, 0%, 47%, 0.75);\\n  user-select: none;\\n}\\n.course__type {\\n  margin: auto 0 0.5rem 0;\\n  text-transform: uppercase;\\n  line-height: 1.125rem;\\n  font-size: 0.75rem;\\n  font-weight: bold;\\n  font-family: 'OpenSans-Bold', Arial, sans-serif;\\n  color: hsla(0, 0%, 47%, 0.75);\\n}\\n.course__provider-logo-container {\\n  position: absolute;\\n  top: calc(132px - 0.5rem - 55px / 2);\\n  height: 55px;\\n  width: 55px;\\n  padding: 0.5rem;\\n  border: 1px solid #E1E1E1;\\n  border-radius: 3px;\\n  background-color: white;\\n}\\n.course__provider-logo {\\n  width: 55px;\\n  height: 55px;\\n}\\n.course:hover {\\n  box-shadow: 0 3px 10px rgba(31, 31, 31, 0.16), 0 3px 10px rgba(31, 31, 31, 0.23);\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/course.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/explore-navigation.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/explore-navigation.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/arrow-right.svg */ \"./static/images/arrow-right.svg\"));\n\n// Module\nexports.push([module.i, \".explore-navigation {\\n  width: 18rem;\\n  padding: 1rem 0 2.5rem;\\n  background-color: white;\\n  z-index: 500;\\n  position: relative;\\n  top: 1.5rem;\\n}\\n.explore-navigation__topic-links {\\n  margin: 0 1rem 1.5em;\\n  border-bottom: 1px solid #cccccc;\\n}\\n.explore-navigation__link {\\n  display: block;\\n  text-decoration: none;\\n  color: #000;\\n  font-size: 0.9rem;\\n  font-weight: 400;\\n  text-align: left;\\n  padding: 0.3rem;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-size: 0.6rem;\\n  background-repeat: no-repeat;\\n  background-position: bottom 50% right 0.3rem;\\n}\\n.explore-navigation__link_last {\\n  margin: 1rem 0 3rem;\\n}\\n.explore-navigation__link:hover {\\n  background-color: #f6f6f6;\\n}\\n.explore-navigation__main-page-link {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  height: 3.5rem;\\n  width: 14rem;\\n  margin-left: 1rem;\\n  background-color: #286ec2;\\n  color: white;\\n  font-weight: 600;\\n}\\n.explore-navigation__main-page-link:hover {\\n  background-color: #005bbe;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/explore-navigation.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/feedback.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/feedback.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".feedback {\\n  background: white;\\n  overflow: hidden;\\n}\\n.feedback__user-photo {\\n  float: left;\\n  height: 150px;\\n  width: 150px;\\n  margin: 50px;\\n  border-radius: 100%;\\n  object-fit: cover;\\n}\\n.feedback__quote {\\n  margin: 3rem 2rem 1rem 0;\\n  line-height: 2rem;\\n  font-size: 1.6rem;\\n  font-weight: 300;\\n  color: #4a4a4a;\\n}\\n.feedback__caption {\\n  margin-right: 2rem;\\n  text-align: right;\\n  font-style: italic;\\n  font-size: 1.4rem;\\n  font-weight: 300;\\n  color: #4a4a4a;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/feedback.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/footer.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/footer.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0;\\n  background-color: #f5f5f5;\\n  font-family: OpenSans, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, sans-serif;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\ndd,\\ndt,\\ndl,\\np,\\nblockquote {\\n  margin: 0;\\n}\\nh2 {\\n  line-height: 2rem;\\n  font-size: 1.6rem;\\n  font-weight: 300;\\n  color: #4a4a4a;\\n}\\na {\\n  text-decoration: none;\\n  color: black;\\n}\\nbutton {\\n  border: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n.visually-hidden {\\n  clip: rect(0 0 0 0);\\n  height: 1px;\\n  margin: -1px;\\n  overflow: hidden;\\n  position: absolute;\\n  width: 1px;\\n}\\n.not-selectable {\\n  -webkit-touch-callout: none;\\n  /* iOS Safari */\\n  -webkit-user-select: none;\\n  /* Safari */\\n  -moz-user-select: none;\\n  /* Firefox */\\n  -ms-user-select: none;\\n  /* Internet Explorer/Edge */\\n  user-select: none;\\n}\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  padding: 1rem 15% 0 15%;\\n  font-size: 1.0625rem;\\n  background: white;\\n}\\n.footer__apps-links-wrapper {\\n  display: flex;\\n  justify-content: flex-start;\\n  flex-wrap: wrap;\\n}\\n.footer__logos {\\n  width: 35%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  padding: 2px 0;\\n}\\n.footer__motto {\\n  margin: 1rem 0;\\n}\\n.footer__apps-link {\\n  margin-top: 1em;\\n  margin-right: 0.5em;\\n}\\n.footer__navigation {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  margin: 10px;\\n  padding: 2px 0;\\n}\\n.footer__navigation-header {\\n  margin: 0 0 0 0.1em;\\n  font-size: 1rem;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}\\n.footer__navigation-link {\\n  padding: 0.4rem 0;\\n  color: #757598;\\n  text-decoration: none;\\n}\\n.footer__navigation-link:focus {\\n  text-decoration: underline;\\n  text-decoration-color: #4a89dc;\\n}\\n.footer__navigation-link:hover {\\n  text-decoration: underline;\\n  text-decoration-color: #757598;\\n}\\n@media (max-width: 992px) {\\n  .footer {\\n    flex-wrap: wrap;\\n  }\\n  .footer__logos {\\n    width: 100%;\\n  }\\n  .footer__apps-links-wrapper {\\n    align-self: center;\\n  }\\n}\\n@media (min-width: 600px) and (max-width: 992px) {\\n  .footer {\\n    padding: 1rem 10% 0 10%;\\n  }\\n  .footer__navigation {\\n    width: 20%;\\n  }\\n}\\n@media (max-width: 600px) {\\n  .footer {\\n    padding: 1rem 3% 0 3%;\\n  }\\n  .footer__navigation {\\n    width: 45%;\\n  }\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/header.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/header.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/coursera_logo.svg */ \"./static/images/coursera_logo.svg\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/down-arrow.svg */ \"./static/images/down-arrow.svg\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../images/down-arrow-blue.svg */ \"./static/images/down-arrow-blue.svg\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../images/search_icon.svg */ \"./static/images/search_icon.svg\"));\nvar ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../images/burger-menu.svg */ \"./static/images/burger-menu.svg\"));\nvar ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../images/search_icon_black.svg */ \"./static/images/search_icon_black.svg\"));\n\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0;\\n  background-color: #f5f5f5;\\n  font-family: OpenSans, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, sans-serif;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\ndd,\\ndt,\\ndl,\\np,\\nblockquote {\\n  margin: 0;\\n}\\nh2 {\\n  line-height: 2rem;\\n  font-size: 1.6rem;\\n  font-weight: 300;\\n  color: #4a4a4a;\\n}\\na {\\n  text-decoration: none;\\n  color: black;\\n}\\nbutton {\\n  border: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n.visually-hidden {\\n  clip: rect(0 0 0 0);\\n  height: 1px;\\n  margin: -1px;\\n  overflow: hidden;\\n  position: absolute;\\n  width: 1px;\\n}\\n.not-selectable {\\n  -webkit-touch-callout: none;\\n  /* iOS Safari */\\n  -webkit-user-select: none;\\n  /* Safari */\\n  -moz-user-select: none;\\n  /* Firefox */\\n  -ms-user-select: none;\\n  /* Internet Explorer/Edge */\\n  user-select: none;\\n}\\n.header {\\n  display: flex;\\n  align-items: center;\\n  height: 4rem;\\n  background-color: #ffffff;\\n  border-bottom: 1px solid hsla(0, 0%, 78%, 0.75);\\n}\\n.header__main-logo {\\n  height: 2rem;\\n  width: 8rem;\\n  margin: 0 1.5em;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-repeat: no-repeat;\\n}\\n.header__explore-button {\\n  padding: 0.5rem 1rem 0.5rem 0.1rem;\\n  height: 2.5em;\\n  width: 6.5em;\\n  margin-right: 3em;\\n  border: none;\\n  border-radius: 3px;\\n  background-image: url(\" + ___CSS_LOADER_URL___1___ + \");\\n  background-position: bottom 50% right 0.35rem;\\n  background-repeat: no-repeat;\\n  background-size: 0.8rem;\\n  background-color: #4285f4;\\n  color: #ffffff;\\n  font-weight: 700;\\n  font-size: 14px;\\n}\\n.header__explore-button:hover {\\n  background-color: #ffffff;\\n  color: #4285f4;\\n  background-image: url(\" + ___CSS_LOADER_URL___2___ + \");\\n}\\n.header__search-bar {\\n  display: flex;\\n  justify-content: space-between;\\n  height: 2.5em;\\n  width: 30%;\\n}\\n.header__search-input {\\n  height: 100%;\\n  width: calc(100% - 40px);\\n  padding: 0 0.7em;\\n  border: 1px solid hsla(0, 0%, 85.5%, 0.75);\\n  border-radius: 2px;\\n  font-size: 16px;\\n}\\n.header__search-input::placeholder {\\n  color: hsla(0, 0%, 47%, 0.75);\\n}\\n.header__search-input:focus {\\n  border: 1px solid #4285f4;\\n}\\n.header__search-submit {\\n  height: 40px;\\n  width: 40px;\\n  background: #4285f4 url(\" + ___CSS_LOADER_URL___3___ + \") no-repeat center;\\n  border: none;\\n  margin-left: 1px;\\n}\\n.header__login-navigation {\\n  display: flex;\\n  align-items: stretch;\\n  height: 2.5em;\\n  margin-left: auto;\\n  margin-right: 2%;\\n  padding-left: 2em;\\n}\\n.header__navigation-text {\\n  display: inline-block;\\n  padding-top: 0.5em;\\n}\\n.header__enterprise-version-switch {\\n  width: 8em;\\n  border-right: 1px solid hsla(0, 0%, 47%, 0.75);\\n  color: hsla(0, 0%, 47%, 0.75);\\n}\\n.header__navigation-text:hover {\\n  text-decoration: underline;\\n  text-decoration-color: inherit;\\n}\\n.header__login-link {\\n  width: 5em;\\n  color: #4285f4;\\n  text-align: center;\\n}\\n.header__login-link_sign-up {\\n  background: #4285f4;\\n  color: #ffffff;\\n  border-radius: 100px;\\n}\\n.header__login-menu-button {\\n  display: none;\\n}\\n.header__search-menu-button {\\n  display: none;\\n}\\n@media (max-width: 992px) {\\n  .header {\\n    justify-content: space-between;\\n    padding: 0 1rem;\\n  }\\n  .header__explore-button {\\n    display: none;\\n  }\\n  .header__search-bar {\\n    display: none;\\n  }\\n  .header__login-navigation {\\n    display: none;\\n  }\\n  .header__login-menu-button {\\n    display: inline;\\n    order: -1;\\n    background: url(\" + ___CSS_LOADER_URL___4___ + \") no-repeat center;\\n    background-size: 1.5rem 1.5rem;\\n    height: calc(1.5rem * 2);\\n    width: calc(1.5rem * 2);\\n    border-radius: 100%;\\n  }\\n  .header__login-menu-button:hover {\\n    background-color: #ebe7e9;\\n  }\\n  .header__login-menu-button:focus {\\n    border: 3px solid #4285f4;\\n  }\\n  .header__search-menu-button {\\n    display: inline;\\n    order: 1;\\n    background: url(\" + ___CSS_LOADER_URL___5___ + \") no-repeat center;\\n    background-size: 1.5rem 1.5rem;\\n    height: calc(1.5rem * 2);\\n    width: calc(1.5rem * 2);\\n    border-radius: 100%;\\n  }\\n  .header__search-menu-button:hover {\\n    background-color: #ebe7e9;\\n  }\\n  .header__search-menu-button:focus {\\n    border: 3px solid #4285f4;\\n  }\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/layout.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/layout.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".layout__header {\\n  position: sticky;\\n  top: 0;\\n  z-index: 1000;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/layout.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/login-sidebar.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/login-sidebar.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".login-sidebar {\\n  height: 100%;\\n  position: fixed;\\n  top: 0;\\n  background-color: #ffffff;\\n  z-index: 2000;\\n  transition: transform 1s;\\n}\\n.login-sidebar__link {\\n  display: flex;\\n  padding: 0 1rem ;\\n  height: 4rem;\\n  font-size: 1.1rem;\\n  text-decoration: none;\\n  align-items: center;\\n  justify-content: flex-start;\\n  color: black;\\n}\\n.login-sidebar__link_bordered {\\n  border-bottom: 1px solid #d9d9d9;\\n}\\n.login-sidebar__link_register {\\n  margin: 1.5rem 1rem;\\n  background-color: #2a73cc;\\n  color: white;\\n  font-weight: 600;\\n  justify-content: center;\\n}\\n.login-sidebar__link_login {\\n  margin: 1.5rem 1rem;\\n  background-color: white;\\n  color: #2a73cc;\\n  font-weight: 600;\\n  border: 1px solid #2a73cc;\\n  justify-content: center;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/login-sidebar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/offers.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/offers.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".offers {\\n  display: grid;\\n  grid-template-rows: [header-start] 2rem [list-start] auto;\\n  grid-auto-flow: column;\\n  grid-row-gap: 20px;\\n}\\n.offers__header {\\n  grid-column: offer-start / description-end;\\n}\\n.offers__list {\\n  grid-column: offer-start / description-end;\\n  display: grid;\\n  grid-template-columns: [offer-start] 160px [offer-end description-start] auto [description-end];\\n  align-items: center;\\n  grid-row-gap: 1px;\\n}\\n.offers__offer-box {\\n  display: flex;\\n  justify-content: center;\\n  height: 100%;\\n  align-items: center;\\n  background-color: #fff;\\n}\\n.offers__title {\\n  padding: 25px 30px;\\n  text-transform: uppercase;\\n  font-size: 0.875rem;\\n  font-weight: 700;\\n  color: #525252;\\n  background-color: #fff;\\n}\\n.offers__title_centered {\\n  padding: 25px 0;\\n}\\n.offers__offer {\\n  display: inline-block;\\n  margin: 0 4px;\\n  padding: 0.1875rem 1.125rem;\\n  border-radius: 4px;\\n  text-align: center;\\n  text-transform: uppercase;\\n  font-size: 0.875rem;\\n  font-weight: bold;\\n  color: white;\\n}\\n.offers__offer_blue {\\n  background-image: linear-gradient(90deg, #4fc1e9, #4a89dc);\\n}\\n.offers__offer_violet {\\n  background-image: linear-gradient(90deg, #5d9cec, #967adc);\\n}\\n.offers__offer_green {\\n  background-image: linear-gradient(90deg, #48cfad, #3bafda);\\n}\\n.offers__offer_pink {\\n  background-image: linear-gradient(90deg, #ac92ec, #d770ad);\\n}\\n.offers__offer_orange {\\n  background-image: linear-gradient(90deg, #fc6e51, #f6bb42);\\n}\\n.offers__description {\\n  padding: 15px;\\n  background-color: #fff;\\n  font-size: 0.9375rem;\\n  color: #373a3c;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/offers.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/search-sidebar.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/search-sidebar.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/search_icon.svg */ \"./static/images/search_icon.svg\"));\n\n// Module\nexports.push([module.i, \".search-sidebar {\\n  display: flex;\\n  width: 100%;\\n  flex-direction: column;\\n  align-items: center;\\n  position: fixed;\\n  background-color: white;\\n  margin: 1rem 0;\\n  overflow: hidden;\\n}\\n.search-sidebar__search-bar {\\n  display: flex;\\n  justify-content: space-between;\\n  height: 2.5em;\\n  width: 30%;\\n}\\n.search-sidebar__search-input {\\n  height: 100%;\\n  width: calc(100% - 40px);\\n  padding: 0 0.7em;\\n  border: 1px solid hsla(0, 0%, 85.5%, 0.75);\\n  border-radius: 2px;\\n  font-size: 16px;\\n}\\n.search-sidebar__search-input::placeholder {\\n  color: hsla(0, 0%, 47%, 0.75);\\n}\\n.search-sidebar__search-input:focus {\\n  border: 1px solid #4285f4;\\n}\\n.search-sidebar__search-submit {\\n  height: 40px;\\n  width: 40px;\\n  background: #4285f4 url(\" + ___CSS_LOADER_URL___0___ + \") no-repeat center;\\n  border: none;\\n  margin-left: 1px;\\n}\\n.search-sidebar__topics-link {\\n  display: block;\\n  font-size: 1.2rem;\\n  padding: 0.7rem;\\n}\\n.search-sidebar__topics-link:hover {\\n  background-color: #ebebeb;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/search-sidebar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./static/carousel.js":
/*!****************************!*\
  !*** ./static/carousel.js ***!
  \****************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Carousel\", function() { return Carousel; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./static/helpers.js\");\n/* harmony import */ var _htmlGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlGenerator */ \"./static/htmlGenerator.js\");\n/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course */ \"./static/course.js\");\n/* harmony import */ var _carouselHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carouselHelpers */ \"./static/carouselHelpers.js\");\n/* harmony import */ var _navigationButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigationButtons */ \"./static/navigationButtons.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst courseWidth = 270;\r\nconst courseMinDistance = 10;\r\n\r\nclass Carousel {\r\n  constructor(container, data) {\r\n    this.container = container;\r\n    this.data = data;\r\n    this.coursesNumber = this.data.courses.length;\r\n    this.currentPage = 0;\r\n    this.carouselCoordinate = 0;\r\n    this.visibleCoursesNumber = 0;\r\n    this.courses = [];\r\n    this.createCarousel();\r\n    this.initHandlers();\r\n  }\r\n\r\n  createCarouselElement() {\r\n    this.carouselElement = Object(_htmlGenerator__WEBPACK_IMPORTED_MODULE_1__[\"generateCarousel\"])(this.data);\r\n    this.container.appendChild(this.carouselElement);\r\n    this.coursesContainer = this.carouselElement.querySelector(\r\n      \".carousel__courses-movable-wrapper\"\r\n    );\r\n    this.createCourses();\r\n    this.resize();\r\n  }\r\n\r\n  createCarousel() {\r\n    this.createCarouselElement();\r\n    this.createNavigationButtonsBasedOnPagesNumber();\r\n  }\r\n\r\n  createCourses() {\r\n    this.courses = this.data.courses.map(\r\n      dataEl => new _course__WEBPACK_IMPORTED_MODULE_2__[\"Course\"](this.coursesContainer, dataEl)\r\n    );\r\n  }\r\n\r\n  getCourseMarginAndVisibleCoursesNumber() {\r\n    const containerWidth = this.coursesContainer.getBoundingClientRect().width;\r\n    const visibleCoursesNumber = Object(_carouselHelpers__WEBPACK_IMPORTED_MODULE_3__[\"getVisibleCoursesNumber\"])(\r\n      courseWidth,\r\n      courseMinDistance,\r\n      containerWidth\r\n    );\r\n\r\n    return {\r\n      courseMargin: Object(_carouselHelpers__WEBPACK_IMPORTED_MODULE_3__[\"getCourseMargin\"])(\r\n        courseWidth,\r\n        visibleCoursesNumber,\r\n        containerWidth\r\n      ),\r\n      visibleCoursesNumber\r\n    };\r\n  }\r\n\r\n  resize() {\r\n    const {\r\n      courseMargin,\r\n      visibleCoursesNumber\r\n    } = this.getCourseMarginAndVisibleCoursesNumber();\r\n\r\n    const prevFirstCourseIndex = Object(_carouselHelpers__WEBPACK_IMPORTED_MODULE_3__[\"getIndexOfFirstCourseOnPage\"])(\r\n      this.currentPage,\r\n      this.visibleCoursesNumber,\r\n      this.coursesNumber\r\n    );\r\n\r\n    this.visibleCoursesNumber = visibleCoursesNumber;\r\n    this.courses.forEach(course => course.setMargin(courseMargin));\r\n\r\n    this.singleCourseOffset = courseWidth + courseMargin * 2;\r\n    this.pagesNumber = Math.ceil(\r\n      this.coursesNumber / this.visibleCoursesNumber\r\n    );\r\n\r\n    const nextPage = Math.floor(\r\n      prevFirstCourseIndex / this.visibleCoursesNumber\r\n    );\r\n    this.showSlidingButton(nextPage);\r\n    this.currentPage = nextPage;\r\n    this.hideSlidingButtons();\r\n\r\n    const newFirstCourseIndex = Object(_carouselHelpers__WEBPACK_IMPORTED_MODULE_3__[\"getIndexOfFirstCourseOnPage\"])(\r\n      this.currentPage,\r\n      this.visibleCoursesNumber,\r\n      this.coursesNumber\r\n    );\r\n\r\n    this.translateCoursesContainer(\r\n      -this.singleCourseOffset * newFirstCourseIndex,\r\n      0\r\n    );\r\n  }\r\n\r\n  translateCoursesContainer(targetPosition, duration) {\r\n    // translate container to currentPosition\r\n    this.coursesContainer.style.transitionDuration = duration + \"s\";\r\n    this.coursesContainer.style.transform =\r\n      \"translateX(\" + targetPosition + \"px)\";\r\n    // remember current position\r\n    this.carouselCoordinate = targetPosition;\r\n  }\r\n\r\n  showNextPage(direction) {\r\n    this.showSlidingButton(this.currentPage + direction);\r\n    const currentFirstCourseIndex = Object(_carouselHelpers__WEBPACK_IMPORTED_MODULE_3__[\"getIndexOfFirstCourseOnPage\"])(\r\n      this.currentPage,\r\n      this.visibleCoursesNumber,\r\n      this.coursesNumber\r\n    );\r\n    this.currentPage += direction;\r\n    const nextFirstCourseIndex = Object(_carouselHelpers__WEBPACK_IMPORTED_MODULE_3__[\"getIndexOfFirstCourseOnPage\"])(\r\n      this.currentPage,\r\n      this.visibleCoursesNumber,\r\n      this.coursesNumber\r\n    );\r\n    const offset = Object(_carouselHelpers__WEBPACK_IMPORTED_MODULE_3__[\"calculateOffset\"])(\r\n      currentFirstCourseIndex,\r\n      nextFirstCourseIndex,\r\n      this.singleCourseOffset\r\n    );\r\n    this.translateCoursesContainer(this.carouselCoordinate - offset, 1);\r\n    this.updateNavigationButtons();\r\n    this.hideSlidingButtons();\r\n  }\r\n\r\n  hideSlidingButtons() {\r\n    let button;\r\n    if (this.currentPage === 0) {\r\n      button = this.carouselElement.querySelector(\r\n        \".carousel__swap-button_left\"\r\n      );\r\n      const coursesOuterContainer = this.carouselElement.querySelector(\r\n        \".carousel__courses-wrapper\"\r\n      );\r\n      coursesOuterContainer.classList.add(\"Grid__cell_push-1\");\r\n    } else if (this.currentPage === this.getPagesNumber() - 1) {\r\n      button = this.carouselElement.querySelector(\r\n        \".carousel__swap-button_right\"\r\n      );\r\n    } else {\r\n      return;\r\n    }\r\n    button.style.display = \"none\";\r\n  }\r\n\r\n  showSlidingButton(nextPage) {\r\n    let button;\r\n    if (this.currentPage === 0 && nextPage > this.currentPage) {\r\n      button = this.carouselElement.querySelector(\r\n        \".carousel__swap-button_left\"\r\n      );\r\n      const coursesOuterContainer = this.carouselElement.querySelector(\r\n        \".carousel__courses-wrapper\"\r\n      );\r\n      coursesOuterContainer.classList.remove(\"Grid__cell_push-1\");\r\n    } else if (\r\n      this.currentPage === this.getPagesNumber() - 1 &&\r\n      nextPage < this.currentPage\r\n    ) {\r\n      button = this.carouselElement.querySelector(\r\n        \".carousel__swap-button_right\"\r\n      );\r\n    } else {\r\n      return;\r\n    }\r\n    button.style.display = null;\r\n  }\r\n\r\n  removeNavigationButtons() {\r\n    const buttonContainer = this.carouselElement.querySelector(\r\n      \".carousel__navigation\"\r\n    );\r\n    Object(_navigationButtons__WEBPACK_IMPORTED_MODULE_4__[\"removeNavigationButtons\"])(buttonContainer);\r\n  }\r\n\r\n  createNavigationButtonsBasedOnPagesNumber() {\r\n    const buttonContainer = this.carouselElement.querySelector(\r\n      \".carousel__navigation\"\r\n    );\r\n    Object(_navigationButtons__WEBPACK_IMPORTED_MODULE_4__[\"createNavigationButtons\"])(\r\n      this.pagesNumber,\r\n      this.currentPage,\r\n      buttonContainer\r\n    );\r\n  }\r\n\r\n  updateNavigationButtons() {\r\n    this.removeNavigationButtons();\r\n    this.createNavigationButtonsBasedOnPagesNumber();\r\n  }\r\n\r\n  spinRight() {\r\n    if (this.currentPage !== this.getPagesNumber() - 1) {\r\n      this.showNextPage(1);\r\n    }\r\n  }\r\n\r\n  spinLeft() {\r\n    if (this.currentPage !== 0) {\r\n      this.showNextPage(-1);\r\n    }\r\n  }\r\n\r\n  getPagesNumber() {\r\n    return Math.ceil(this.coursesNumber / this.visibleCoursesNumber);\r\n  }\r\n\r\n  initHandlers() {\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(\r\n      this.carouselElement,\r\n      \".carousel__swap-button_left\",\r\n      \"click\",\r\n      () => {\r\n        this.spinLeft();\r\n      }\r\n    );\r\n\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(\r\n      this.carouselElement,\r\n      \".carousel__swap-button_right\",\r\n      \"click\",\r\n      () => {\r\n        this.spinRight();\r\n      }\r\n    );\r\n\r\n    this.addResizeHandler();\r\n    this.addMouseBehaviour();\r\n  }\r\n\r\n  addMouseBehaviour() {\r\n    this.startPointXCoordinate = 0;\r\n    this.locked = false;\r\n    this.threshold = 20;\r\n\r\n    this.coursesContainer.addEventListener(\"mousemove\", event => {\r\n      if (this.locked) {\r\n        if (\r\n          Math.abs(event.clientX - this.startPointXCoordinate) > this.threshold\r\n        ) {\r\n          Math.sign(event.clientX - this.startPointXCoordinate) < 0\r\n            ? this.spinRight()\r\n            : this.spinLeft();\r\n          this.locked = false;\r\n        }\r\n      }\r\n    });\r\n\r\n    this.coursesContainer.addEventListener(\"mousedown\", ev => {\r\n      this.locked = true;\r\n      this.startPointXCoordinate = ev.clientX;\r\n    });\r\n\r\n    this.coursesContainer.addEventListener(\"mouseup\", () => {\r\n      this.locked = false;\r\n    });\r\n  }\r\n\r\n  addResizeHandler() {\r\n    window.addEventListener(\"resize\", () => {\r\n      this.resize();\r\n      this.updateNavigationButtons();\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./static/carousel.js?");

/***/ }),

/***/ "./static/carouselHelpers.js":
/*!***********************************!*\
  !*** ./static/carouselHelpers.js ***!
  \***********************************/
/*! exports provided: getIndexOfFirstCourseOnPage, getVisibleCoursesNumber, getCourseMargin, calculateOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndexOfFirstCourseOnPage\", function() { return getIndexOfFirstCourseOnPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getVisibleCoursesNumber\", function() { return getVisibleCoursesNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCourseMargin\", function() { return getCourseMargin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateOffset\", function() { return calculateOffset; });\nconst getIndexOfFirstCourseOnPage = (\r\n  currentPage,\r\n  coursesOnPage,\r\n  coursesNumber\r\n) => {\r\n  return (currentPage + 1) * coursesOnPage <= coursesNumber\r\n    ? currentPage * coursesOnPage\r\n    : coursesNumber - coursesOnPage;\r\n};\r\n\r\nconst getVisibleCoursesNumber = (\r\n  courseWidth,\r\n  coursesMinDistance,\r\n  containerWidth\r\n) => {\r\n  return Math.max(\r\n    1,\r\n    Math.floor(\r\n      (containerWidth + coursesMinDistance) / (courseWidth + coursesMinDistance)\r\n    )\r\n  );\r\n};\r\n\r\nconst getCourseMargin = (\r\n  courseWidth,\r\n  visibleCoursesNumber,\r\n  containerWidth\r\n) => {\r\n  return (\r\n    (containerWidth - visibleCoursesNumber * courseWidth) /\r\n    (2 * visibleCoursesNumber)\r\n  );\r\n};\r\n\r\nconst calculateOffset = (\r\n  firstCourseIndex,\r\n  secondCourseIndex,\r\n  singleCourseOffset\r\n) => {\r\n  return (secondCourseIndex - firstCourseIndex) * singleCourseOffset;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./static/carouselHelpers.js?");

/***/ }),

/***/ "./static/course.js":
/*!**************************!*\
  !*** ./static/course.js ***!
  \**************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Course\", function() { return Course; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./static/helpers.js\");\n/* harmony import */ var _htmlGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlGenerator */ \"./static/htmlGenerator.js\");\n/* harmony import */ var _courseDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courseDetails */ \"./static/courseDetails.js\");\n\r\n\r\n\r\n\r\nclass Course {\r\n  constructor(container, data) {\r\n    this.container = container;\r\n    this.data = data;\r\n    this.render();\r\n    this.initHandlers();\r\n  }\r\n\r\n  render() {\r\n    this.courseElement = Object(_htmlGenerator__WEBPACK_IMPORTED_MODULE_1__[\"generateCourse\"])(this.data);\r\n    this.container.appendChild(this.courseElement);\r\n  }\r\n\r\n  showDetails() {\r\n    if (!this.courseDetails) {\r\n      this.courseDetailsStatus = {\r\n        active: true,\r\n        leftCourse: false,\r\n        leftDetails: false\r\n      };\r\n      const offset = 20;\r\n      const rect = this.courseElement.getBoundingClientRect();\r\n      const courseWidth = rect.width;\r\n      const center = Math.ceil(courseWidth / 2 + rect.left);\r\n      const topOffset = rect.top - offset;\r\n      const rightOffset =\r\n        center > window.innerWidth / 2\r\n          ? window.innerWidth - rect.right + rect.width - offset\r\n          : window.innerWidth - rect.right - rect.width;\r\n\r\n      this.courseDetails = new _courseDetails__WEBPACK_IMPORTED_MODULE_2__[\"CourseDetails\"](\r\n        this.container.parentNode,\r\n        this.data,\r\n        topOffset,\r\n        rightOffset\r\n      );\r\n\r\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(this.courseDetails.courseDetailsElement, \".course-details\", \"mouseleave\", () => {\r\n        if(this.courseDetailsStatus && this.courseDetailsStatus.active){\r\n          console.log(\"leave details\", this.courseDetailsStatus)\r\n          this.courseDetailsStatus.leftDetails = true;\r\n          const currentElement = getElementFromCurrentMousePosition();\r\n          this.courseDetailsStatus.leftCourse = currentElement !== this.courseElement && !this.courseElement.contains(currentElement);\r\n          this.removeDetailsIfMouseLeft();\r\n        }\r\n      });\r\n\r\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(this.courseDetails.courseDetailsElement, \".course-details\", \"mouseenter\", () => {\r\n        if(this.courseDetailsStatus && this.courseDetailsStatus.active){\r\n          console.log(\"enter details\", this.courseDetailsStatus)\r\n          this.courseDetailsStatus.leftDetails = false;\r\n        }\r\n      });\r\n\r\n    }\r\n  }\r\n\r\n  removeDetailsIfMouseLeft() {\r\n    if (this.courseDetails && this.courseDetailsStatus.leftCourse && this.courseDetailsStatus.leftDetails) {\r\n      this.courseDetailsStatus.active = false;\r\n      this.courseDetails.destroy();\r\n      this.courseDetails = null;\r\n    }\r\n  }\r\n\r\n  setMargin(value){\r\n    this.courseElement.style.margin = \"0 \" + value + \"px\";\r\n  }\r\n\r\n  initHandlers() {\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(\r\n      this.courseElement,\r\n      \".course__provider-logo-container\",\r\n      \"mouseover\",\r\n      () => {\r\n        this.showDetails();\r\n      }\r\n    );\r\n\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(this.courseElement, \".course\", \"mouseleave\", () => {\r\n      if(this.courseDetailsStatus && this.courseDetailsStatus.active){\r\n        console.log(\"leave course\", this.courseDetailsStatus)\r\n        this.courseDetailsStatus.leftCourse = true;\r\n        this.courseDetailsStatus.leftDetails = getElementFromCurrentMousePosition() !== this.courseDetails.courseDetailsElement;\r\n        this.removeDetailsIfMouseLeft();\r\n      }\r\n    });\r\n\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(this.courseElement, \".course\", \"mouseenter\", () => {\r\n      if(this.courseDetailsStatus && this.courseDetailsStatus.active){\r\n        console.log(\"enter course\", this.courseDetailsStatus)\r\n        this.courseDetailsStatus.leftCourse = false;\r\n      }\r\n    });\r\n\r\n  }\r\n}\r\n\r\n\r\nconst getElementFromCurrentMousePosition = () => {\r\n  const x = event.clientX, y = event.clientY;\r\n      return document.elementFromPoint(x, y);\r\n} ;\n\n//# sourceURL=webpack:///./static/course.js?");

/***/ }),

/***/ "./static/courseDetails.js":
/*!*********************************!*\
  !*** ./static/courseDetails.js ***!
  \*********************************/
/*! exports provided: CourseDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CourseDetails\", function() { return CourseDetails; });\n/* harmony import */ var _htmlGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlGenerator */ \"./static/htmlGenerator.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./static/helpers.js\");\n\r\n\r\n\r\nclass CourseDetails {\r\n  constructor(container, data, topOffset, rightOffset) {\r\n    this.container = container;\r\n    this.data = data;\r\n    this.render(topOffset, rightOffset);\r\n  }\r\n\r\n  render(topOffset, rightOffset) {\r\n    this.courseDetailsElement = Object(_htmlGenerator__WEBPACK_IMPORTED_MODULE_0__[\"generateCourseDetails\"])(this.data);\r\n    this.courseDetailsElement.style.top = topOffset + \"px\";\r\n    this.courseDetailsElement.style.right = rightOffset + \"px\";\r\n    this.container.appendChild(this.courseDetailsElement);\r\n  }\r\n\r\n  destroy() {\r\n    this.container.removeChild(this.courseDetailsElement);\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./static/courseDetails.js?");

/***/ }),

/***/ "./static/exploreMenu.js":
/*!*******************************!*\
  !*** ./static/exploreMenu.js ***!
  \*******************************/
/*! exports provided: ExploreMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExploreMenu\", function() { return ExploreMenu; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./static/helpers.js\");\n\r\n\r\nconst createExploreMenuElement = () => {\r\n  const container = document.createElement(\"nav\");\r\n  container.className = \"explore-navigation\";\r\n  container.innerHTML = `\r\n    <div class=\"explore-navigation__topic-links\">\r\n        <a class=\"explore-navigation__link\" href=\"#\">Arts and Humanities</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Business</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Computer Science</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Data Science</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Information Technology</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Health</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Math and Logic</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Personal Development</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Physical Science and Engineering</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Social Science</a>\r\n        <a class=\"explore-navigation__link\" href=\"#\">Language Learning</a>\r\n        <a class=\"explore-navigation__link explore-navigation__link_last\" href=\"#\">Degrees and Certificates</a>\r\n    </div>\r\n    <a class=\"explore-navigation__main-page-link\">Explore all of the Coursera</a>\r\n    `;\r\n  return container;\r\n};\r\n\r\nclass ExploreMenu {\r\n  constructor(container) {\r\n    this.exploreButtonElement = container;\r\n    this.initHandlers();\r\n  }\r\n  initHandlers() {\r\n    this.exploreButtonElement.addEventListener(\"mouseover\", () => {\r\n      if (!this.exploreMenuElement) {\r\n        this.exploreMenuElement = createExploreMenuElement();\r\n        this.exploreButtonElement.appendChild(this.exploreMenuElement);\r\n      }\r\n    });\r\n\r\n    this.exploreButtonElement.addEventListener(\"mouseleave\", () => {\r\n      if (this.exploreMenuElement) {\r\n        this.exploreButtonElement.removeChild(this.exploreMenuElement);\r\n        this.exploreMenuElement = null;\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./static/exploreMenu.js?");

/***/ }),

/***/ "./static/helpers.js":
/*!***************************!*\
  !*** ./static/helpers.js ***!
  \***************************/
/*! exports provided: delegateEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delegateEvent\", function() { return delegateEvent; });\nconst delegateEvent = (node, cssPath, eventName, callbackFn, matchNode) => {\r\n  const evHandler = ev => {\r\n    if (matchNode || ev.target.matches(cssPath)) {\r\n      callbackFn.call(ev.target, ev);\r\n    }\r\n  };\r\n  node.addEventListener(eventName, evHandler);\r\n\r\n  return () => node.removeEventListener(eventName, evHandler);\r\n};\r\n\n\n//# sourceURL=webpack:///./static/helpers.js?");

/***/ }),

/***/ "./static/htmlGenerator.js":
/*!*********************************!*\
  !*** ./static/htmlGenerator.js ***!
  \*********************************/
/*! exports provided: generateCourse, generateCarousel, generateCourseDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateCourse\", function() { return generateCourse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateCarousel\", function() { return generateCarousel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateCourseDetails\", function() { return generateCourseDetails; });\nconst generateCourse = data => {\r\n  const container = document.createElement(\"article\");\r\n  container.className = \"course carousel__course\";\r\n  container.style.backgroundImage = 'url(' + data.logoUrl + ')';\r\n  container.innerHTML = `\r\n    <a class=\"course__course-info\" href=\"#\">\r\n        <h3 class=\"course__name\">${data.name}</h3>\r\n        <span class=\"course__provider\">${data.organization}</span>\r\n        <h4 class=\"course__type\">${data.type}</h4>\r\n        <span class=\"course__provider-logo-container\">\r\n          <img class=\"course__provider-logo\" alt=\"Course organizer logo\">\r\n        </span>\r\n    </a>\r\n    `;\r\n  const providerLogo = container.querySelector('.course__provider-logo');\r\n  providerLogo.src = data.providerSmallLogoUrl;\r\n  return container;\r\n};\r\n\r\nconst generateCarousel = data => {\r\n  const container = document.createElement(\"section\");\r\n  container.className = \"carousel Grid__row\";\r\n  container.innerHTML = `\r\n    <div class=\"Grid__row\">\r\n      <h2 class=\"Grid__cell_14 Grid__cell_push-1\">${data.name}</h2>\r\n    </div>\r\n    <div class=\"Grid__row\">\r\n      <button class=\"carousel__swap-button carousel__swap-button_left Grid__cell_1\"></button>\r\n      <div class=\"carousel__courses-wrapper Grid__cell_14\">\r\n        <div class=\"carousel__courses-movable-wrapper not-selectable\"></div>\r\n      </div>\r\n      <button class=\"carousel__swap-button carousel__swap-button_right Grid__cell_1\"></button>\r\n    </div>\r\n    <div class=\"Grid__row Grid__row--centered-content\">\r\n      <nav class=\"carousel__navigation \"></nav>\r\n    </div>\r\n    \r\n    \r\n    `;\r\n  return container;\r\n};\r\n\r\nconst generateCourseDetails = data => {\r\n  const container = document.createElement(\"article\");\r\n  container.className = \"course-details not-selectable\";\r\n  container.innerHTML = `\r\n    <div class=\"course-details__provider-logo\"></div>\r\n    <h3 class=\"course-details__name\">${data.name}</h3>\r\n    <div class=\"course-details__rating-container\">\r\n        <span class=\"course-details__rating-star\"></span>\r\n        <span class=\"course-details__rating-star\"></span>\r\n        <span class=\"course-details__rating-star\"></span>\r\n        <span class=\"course-details__rating-star\"></span>\r\n        <span class=\"course-details__rating-star\"></span>\r\n        <span class=\"course-details__rating\">${data.rating}</span>\r\n        <span class=\"course-details__votes-number\">(${data.votesNumber})</span>\r\n    </div>\r\n    <button class=\"course-details__syllabus-button\" aria-label=\"view syllabus of a course\">\r\n        View Syllabus\r\n    </button>\r\n    <div class=\"course-details__info-container\">\r\n        <div class=\"course-details__info course-details__info_online\"> ${data.place}</div>\r\n        <div class=\"course-details__info course-details__info_level\"> ${data.level}</div>\r\n        <div class=\"course-details__info course-details__info_timings\"> ${data.timings}</div>\r\n    </div>\r\n    <div class=\"course-details__skills\">\r\n        <h5 class=\"course-details__skills-header\">\r\n          Top skills you will learn:\r\n        </h5>\r\n        ${data.skills}\r\n    </div>\r\n    `;\r\n\r\n  if (data.rating) {\r\n    const startsElements = container.querySelectorAll(\r\n      \".course-details__rating-star\"\r\n    );\r\n    let rating =\r\n      Math.round(Math.min(startsElements.length, data.rating) * 2) / 2;\r\n    startsElements.forEach(starEl => {\r\n      if (rating >= 1) {\r\n        starEl.classList.add(\"course-details__rating-star_full\");\r\n      } else if (rating >= 0.5) {\r\n        starEl.classList.add(\"course-details__rating-star_half-empty\");\r\n      } else {\r\n        starEl.classList.add(\"course-details__rating-star_empty\");\r\n      }\r\n      rating--;\r\n    });\r\n  }\r\n\r\n  const imageContainer = container.querySelector('.course-details__provider-logo');\r\n  imageContainer.style.backgroundImage = 'url(' + data.providerLogoUrl + ')';\r\n\r\n  return container;\r\n};\r\n\n\n//# sourceURL=webpack:///./static/htmlGenerator.js?");

/***/ }),

/***/ "./static/images/arrow-right.svg":
/*!***************************************!*\
  !*** ./static/images/arrow-right.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDc3LjE3NSA0NzcuMTc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzcuMTc1IDQ3Ny4xNzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zNjAuNzMxLDIyOS4wNzVsLTIyNS4xLTIyNS4xYy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMHMtNS4zLDEzLjgsMCwxOS4xbDIxNS41LDIxNS41bC0yMTUuNSwyMTUuNQ0KCQljLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXoNCgkJIi8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==\"\n\n//# sourceURL=webpack:///./static/images/arrow-right.svg?");

/***/ }),

/***/ "./static/images/burger-menu.svg":
/*!***************************************!*\
  !*** ./static/images/burger-menu.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDkxLjMxOCwyMzUuMzE4SDIwLjY4MkM5LjI2LDIzNS4zMTgsMCwyNDQuNTc3LDAsMjU2czkuMjYsMjAuNjgyLDIwLjY4MiwyMC42ODJoNDcwLjYzNg0KCQkJYzExLjQyMywwLDIwLjY4Mi05LjI1OSwyMC42ODItMjAuNjgyQzUxMiwyNDQuNTc4LDUwMi43NDEsMjM1LjMxOCw0OTEuMzE4LDIzNS4zMTh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTEuMzE4LDc4LjQzOUgyMC42ODJDOS4yNiw3OC40MzksMCw4Ny42OTksMCw5OS4xMjFjMCwxMS40MjIsOS4yNiwyMC42ODIsMjAuNjgyLDIwLjY4Mmg0NzAuNjM2DQoJCQljMTEuNDIzLDAsMjAuNjgyLTkuMjYsMjAuNjgyLTIwLjY4MkM1MTIsODcuNjk5LDUwMi43NDEsNzguNDM5LDQ5MS4zMTgsNzguNDM5eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDkxLjMxOCwzOTIuMTk3SDIwLjY4MkM5LjI2LDM5Mi4xOTcsMCw0MDEuNDU2LDAsNDEyLjg3OXM5LjI2LDIwLjY4MiwyMC42ODIsMjAuNjgyaDQ3MC42MzYNCgkJCWMxMS40MjMsMCwyMC42ODItOS4yNTksMjAuNjgyLTIwLjY4MlM1MDIuNzQxLDM5Mi4xOTcsNDkxLjMxOCwzOTIuMTk3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K\"\n\n//# sourceURL=webpack:///./static/images/burger-menu.svg?");

/***/ }),

/***/ "./static/images/clock.svg":
/*!*********************************!*\
  !*** ./static/images/clock.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjYxMnB4IiBoZWlnaHQ9IjYxMnB4IiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01ODcuNTcyLDE4Ni44ODFjLTMyLjI2Ni03NS4yMjUtODcuMDk2LTEyOS45MzQtMTYyLjk0OS0xNjIuMjg1QzM4Ni43MTEsOC40MjcsMzQ2Ljk5MiwwLjE2OCwzMDUuNDk3LDAuMTY4DQoJCQljLTQxLjQ4OCwwLTgwLjkxNCw4LjE4MS0xMTguNzg0LDI0LjQyOEMxMTEuNDg4LDU2Ljg2MSw1Ni40MTUsMTExLjUzNSwyNC4wOTIsMTg2Ljg4MUM3Ljg5NSwyMjQuNjI5LDAsMjY0LjE3NiwwLDMwNS42NjQNCgkJCWMwLDQxLjQ5Niw3Ljg5NSw4MS4zNzEsMjQuMDkyLDExOS4xMjdjMzIuMzIzLDc1LjM0Niw4Ny40MDMsMTMwLjM0OCwxNjIuNjIxLDE2Mi42MjFjMzcuODc3LDE2LjI0Nyw3Ny4yOTUsMjQuNDIsMTE4Ljc4NCwyNC40Mg0KCQkJYzQxLjQ4OSwwLDgxLjIxNC04LjI1OSwxMTkuMTItMjQuNDJjNzUuODUzLTMyLjM1MiwxMzAuNjgzLTg3LjQwMywxNjIuOTU2LTE2Mi42MjFDNjAzLjgxOSwzODYuOTE0LDYxMiwzNDcuMTYsNjEyLDMwNS42NjQNCgkJCUM2MTIsMjY0LjE3Niw2MDMuODI2LDIyNC43NTcsNTg3LjU3MiwxODYuODgxeiBNNTM4LjcyNCw0NDAuODUzYy0yNC4wMjEsNDEuMTk1LTU2LjkyOSw3My44NzYtOTguMzc1LDk4LjAzOQ0KCQkJYy00MS4xOTUsMjQuMDIxLTg2LjMzMiwzNi4xMzUtMTM0Ljg0NSwzNi4xMzVjLTM2LjQ3LDAtNzEuMjctNy4wMjQtMTA0LjQtMjEuNDE1Yy0zMy4xMjktMTQuMzg0LTYxLjczMy0zMy4yOTQtODUuNjYxLTU3LjIxNQ0KCQkJYy0yMy45MjgtMjMuOTI4LTQyLjk3My01Mi44MTEtNTcuMjE0LTg1Ljk5N2MtMTQuMTk5LTMzLjA2NS0yMS4wOC02OC4yNTgtMjEuMDgtMTA0LjczNWMwLTQ4LjUyLDExLjkyMS05My40MjgsMzUuODA3LTEzNC41MDkNCgkJCWMyMy45NzEtNDEuMjMxLDU2Ljg4Ni03My45NDcsOTguMDM5LTk4LjA0YzQxLjE0Ni0yNC4wOTIsODUuOTktMzYuMTQyLDEzNC41MDItMzYuMTQyYzQ4LjUyLDAsOTMuNjQ5LDEyLjEyMSwxMzQuODQ1LDM2LjE0Mg0KCQkJYzQxLjQ0NiwyNC4xNjQsNzQuMjgzLDU2Ljg3OSw5OC4zNzUsOTguMDM5YzI0LjA5Miw0MS4xNTMsMzYuMTM1LDg1Ljk5LDM2LjEzNSwxMzQuNTA5DQoJCQlDNTc0Ljg1MiwzNTQuMTg1LDU2Mi44ODgsMzk5LjM5OSw1MzguNzI0LDQ0MC44NTN6Ii8+DQoJCTxwYXRoIGQ9Ik0zMjQuOTA2LDMwMi45ODhWMTI5LjY1OWMwLTEwLjM3Mi05LjAzNy0xOC43MzgtMTkuNDEtMTguNzM4Yy05LjcwMSwwLTE4LjQwMyw4LjM2Ni0xOC40MDMsMTguNzM4djE3Ni4wMDUNCgkJCWMwLDAuMzM2LDAuNjcxLDEuNjc4LDAuNjcxLDIuNjc4Yy0wLjY3MSw2LjAyNCwxLjAwNywxMS4wNDMsNS4wMTksMTUuMDYybDEwMC4wNTMsMTAwLjA0NmM2LjY5NSw2LjY5NSwxOS4wNzMsNi42OTUsMjUuNzYzLDANCgkJCWM3LjY5NC03LjY5NSw3LjE4OC0xOC44NiwwLTI2LjA5OUwzMjQuOTA2LDMwMi45ODh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=\"\n\n//# sourceURL=webpack:///./static/images/clock.svg?");

/***/ }),

/***/ "./static/images/coursera_logo.svg":
/*!*****************************************!*\
  !*** ./static/images/coursera_logo.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICB3aWR0aD0iMTI3cHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDEwOCAxNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTA4IDE3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iIzRhODlkYyIgZD0iTTU0LjI4MSw1Ljc3M2MwLjA2Ni0xLjI2OSwwLjUyMS0yLjMwNiwxLjIzMi0zLjExNVYxLjU4aC0wLjk0NWMtMS45MSwwLTMuNTI3LDAuNzMyLTQuNDY3LDIuMzg2aC0wLjA1NQogIFYxLjc2MmgtNC44OTl2MTMuNDQxaDQuOVY5Ljc3N2MwLTIuMzAzLDAuNjc0LTQuMDU5LDMuMzkzLTQuMDU5QzUzLjczNiw1LjcyLDU0LjAxMyw1LjczNyw1NC4yODEsNS43NzN6Ii8+CjxwYXRoIGZpbGw9IiM0YTg5ZGMiIGQ9Ik05MS4zOCw1LjcyNGMwLjQwNy0xLjE4OCwxLjA2Ny0yLjI0NiwxLjkyNS0zLjA5NXYtMS4wNWgtMC45NDNjLTEuOTExLDAtMy41MjYsMC43MzItNC40NzEsMi4zODVoLTAuMDUzCiAgVjEuNzYyaC00LjkwMnYxMy40NDFoNC45MDJWOS43NzdjMC0yLjMwMywwLjY3Ni00LjA1OSwzLjM5NS00LjA1OUw5MS4zOCw1LjcyNHoiLz4KPHBhdGggZmlsbD0iIzRhODlkYyIgZD0iTTY0LjIzMiw1LjIyYy0wLjc1Ni0wLjM5My0xLjgwOC0wLjY1NS0yLjY0NS0wLjY1NWMtMC41NjIsMC0xLjUzMywwLjIzNC0xLjUzMywwLjkxNwogIGMwLDAuOTE4LDEuNTMzLDEuMDQ4LDIuMjExLDEuMTgyYzIuMjg0LDAuNDQ0LDQuMDEyLDEuNDkzLDQuMDEyLDMuOTc5YzAsMy41MzYtMy4zMTMsNS4wMDgtNi41Miw1LjAwOAogIGMtMS45NjcsMC0zLjkwMi0wLjU1MS01LjU3NC0xLjU0N2wxLjc3Ny0zLjMzYzAuOTk1LDAuNjg0LDIuNjY1LDEuMzYzLDMuODc3LDEuMzYzYzAuNjIsMCwxLjUzNS0wLjI4NywxLjUzNS0xLjAyMQogIGMwLTEuMDQ4LTEuNTM1LTEuMTAzLTMuMDcyLTEuNDk1Yy0xLjUzMy0wLjM5My0zLjA2Ni0xLjEyNS0zLjA2Ni0zLjUzNmMwLTMuMzAyLDMuMDY2LTQuNzY3LDYuMDg4LTQuNzY3CiAgYzEuNTYyLDAsMy4xMjUsMC4yMzUsNC41NDksMC44NjRMNjQuMjMyLDUuMjJ6Ii8+CjxwYXRoIGZpbGw9IiM0YTg5ZGMiIGQ9Ik0xMDgsMTUuMjAzaC00Ljl2LTEuNDk1aC0wLjA1NGMtMC44NjIsMS4zMzYtMi41NjIsMS45MzgtNC4xNzUsMS45MzhjLTQuMDk2LDAtNi45NzUtMy4zMjgtNi45NzUtNy4xOAogIGMwLTMuODQ4LDIuODI4LTcuMTUxLDYuOTItNy4xNTFjMS41ODgsMCwzLjI2LDAuNTc2LDQuMjgzLDEuNzU0VjEuNzYyaDQuODk5TDEwOCwxNS4yMDNMMTA4LDE1LjIwM3ogTTk2Ljk1OSw4LjQ5NQogIGMwLDEuNzAyLDEuMTYsMy4wMTIsMy4xNSwzLjAxMmMxLjk5MiwwLDMuMTQ3LTEuMzA4LDMuMTQ3LTMuMDEyYzAtMS42NTEtMS4xNTUtMy4wMzktMy4xNDctMy4wMzkKICBDOTguMTE5LDUuNDU3LDk2Ljk1OSw2Ljg0NCw5Ni45NTksOC40OTV6Ii8+CjxwYXRoIGZpbGw9IiM0YTg5ZGMiIGQ9Ik04Mi4xNjMsOS4yODNINzEuODQ2YzAsMS45MzcsMS4wNTMsMi45ODQsMy4wNzIsMi45ODRjMS4wNSwwLDEuODAzLTAuMzM5LDIuMzQzLTEuMjMxaDQuNzE0CiAgYy0wLjc4MSwzLjE3MS0zLjg3OSw0LjYxMi03LjAyOSw0LjYxMmMtNC41NzUsMC03Ljk5NS0yLjUxNy03Ljk5NS03LjE1MmMwLTQuNDgsMy4xNDctNy4xNzgsNy42NDQtNy4xNzgKICBjNC43OTMsMCw3LjU3LDIuODgzLDcuNTcsNy40NjZMODIuMTYzLDkuMjgzTDgyLjE2Myw5LjI4M3ogTTc3LjYxMSw2LjUzYy0wLjI0My0xLjI4NC0xLjQ1NS0yLjEyMi0yLjc3My0yLjEyMgogIGMtMS40MjksMC0yLjYwOSwwLjczMS0yLjkxLDIuMTIySDc3LjYxMXoiLz4KPGc+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjNGE4OWRjIiBkPSJNMjkuNTYxLDguMjYxYy0wLjAwNS0wLjExNi0wLjAxMy0wLjIyOS0wLjAyMi0wLjM0NGMwLDAsMC0wLjAwMSwwLTAuMDAyYzAsMCwwLTAuMDAxLDAtMC4wMDIKICAgICAgYy0wLjExLTEuMjQ3LTAuNTIyLTIuNDE0LTEuMjIxLTMuNDY4Yy0wLjMxMi0wLjQ3LTAuNjY5LTAuODk3LTEuMDY4LTEuMjhjLTAuNTgzLTAuNTYxLTEuMjU4LTEuMDI1LTIuMDE5LTEuMzkyCiAgICAgIGMtMS4xNDUtMC41NDctMi40MS0wLjgyMy0zLjc2LTAuODIzYy0wLjEzMiwwLTAuMjcsMC4wMDItMC40MDksMC4wMDdDMjAuMTE0LDEsMTkuMTk3LDEuMTgsMTguMzM1LDEuNDk3CiAgICAgIGMtMC44NjksMC4zMTQtMS42MjYsMC43MjktMi4yNDUsMS4yMjdjLTAuMTI2LDAuMS0wLjI2MywwLjIyMy0wLjQxLDAuMzU4bC0wLjEwNiwwLjEwNEwxNS40MjksMy4zNGgwLjAwMWgwLjAwMWwtMC4wNjgsMC4wNjcKICAgICAgTDE1LjMzLDMuNDQzbC0wLjE3MywwLjE4MmMtMC4xMjgsMC4xNDQtMC4yNSwwLjI4OC0wLjM2NCwwLjQyOWwtMC4wMDEtMC4wMDJsLTAuMDA0LTAuMDA0Yy0wLjIzNywwLjI4OC0wLjQ1NiwwLjU4Ni0wLjYxNywwLjg1NAogICAgICBjLTAuMTA5LDAuMTcyLTAuMjE2LDAuMzQ5LTAuMzE4LDAuNTI2TDEyLjQ0LDguMjg1bDAuMDAyLDAuMDAybC0wLjA3NCwwLjE0NWwtMC4xNTYsMC4zMTZjLTAuMzEsMC42MjctMC42NDIsMS4yNTItMS4wMTMsMS43NjgKICAgICAgYy0wLjgyNywwLjkwNy0xLjc2MiwxLjM1MS0yLjk2NCwxLjM1MWMtMC4wODQsMC0wLjE3LTAuMDA0LTAuMjU4LTAuMDA5Yy0wLjcyNC0wLjAyOS0xLjM0NS0wLjItMS44OTYtMC41MjYKICAgICAgYy0wLjA1OS0wLjAzNS0wLjExNi0wLjA3MS0wLjE3MS0wLjEwOGMtMC40NS0wLjI5OS0wLjc5NS0wLjY4My0xLjA1My0xLjE2MmMtMC4yOTEtMC41NDMtMC40Mi0xLjA5OC0wLjQwMi0xLjY4NgogICAgICBDNC40NTYsOC4zNiw0LjQ1Nyw4LjM0Niw0LjQ1Nyw4LjMzM0M0LjQ5Niw3LjM5Nyw0Ljg1Myw2LjY2OSw1LjU3Miw2LjA0QzUuNzQ3LDUuODg5LDUuOTMsNS43NjEsNi4xMjEsNS42NDcKICAgICAgYzAuMDI3LTAuMDE2LDAuMDU0LTAuMDMxLDAuMDgxLTAuMDQ1YzAuNTM0LTAuMjkxLDEuMTQyLTAuNDM2LDEuODM5LTAuNDM2bDAuMjE3LDAuMDA2QzkuMzY1LDUuMjE0LDEwLjIxOSw1LjU2LDEwLjksNi4yMzUKICAgICAgTDEzLjAzNiwyLjRjLTAuNTExLTAuMzQyLTEuMDg4LTAuNjM2LTEuNzI0LTAuODc1Yy0wLjAyNC0wLjAwOS0wLjA0OS0wLjAxOS0wLjA3NC0wLjAyN2MtMC4wNzYtMC4wMjctMC4xNTEtMC4wNTUtMC4yMjktMC4wOAogICAgICBDMTAuMzMzLDEuMTkyLDkuNjI0LDEuMDUzLDguODk0LDAuOTlsMCwwQzguODc2LDAuOTg3LDguODU2LDAuOTg1LDguODM4LDAuOTgzQzguNzI2LDAuOTc2LDguNjEyLDAuOTYyLDguNSwwLjk1NwogICAgICBDOC4zNzgsMC45NTIsOC4yNTUsMC45NSw4LjEzNSwwLjk0OUg4LjA2NmMtMS4zNDMsMC4wMDUtMi41OTEsMC4yOC0zLjczMiwwLjgyNUMzLjA1NiwyLjM5LDIuMDIsMy4yODcsMS4yNTIsNC40NDMKICAgICAgQzAuNDg2LDUuNTk5LDAuMDY4LDYuODgyLDAuMDA4LDguMjU5QzAuMDAzLDguMzc3LDAsOC40OTQsMCw4LjYwOWMtMC4wMDEsMS45MjYsMC43MDEsMy42MiwyLjA5Nyw1LjA0MgogICAgICBjMS40NTcsMS40OTIsMy4zNTIsMi4yOTYsNS42MjcsMi4zOTFjMC4xNDYsMC4wMDYsMC4yOSwwLjAxLDAuNDM0LDAuMDFjMS4yODcsMCwyLjQ3OC0wLjIyOSwzLjU0Ni0wLjY4NwogICAgICBjMC4yNjctMC4xMTQsMC41MjYtMC4yNDgsMC43OTEtMC4zOTdjMC4xNDQtMC4wODMsMC4yOC0wLjE3MSwwLjQxNS0wLjI2NWwwLjEtMC4wNjdsMC4xNjgtMC4xMTUKICAgICAgYzAuMjAyLTAuMTQ1LDAuMzkxLTAuMzAyLDAuNTc1LTAuNDY5bDAuMDY0LTAuMDYxYzAuMTA4LTAuMTAzLDAuMjE2LTAuMjA3LDAuMzE4LTAuMzE0bDAuMzgzLTAuNDMzbDAuMTQ2LTAuMTgzbDAuMDY4LTAuMQogICAgICBsMC4wNjgtMC4wOThjMC41NjktMC45NTYsMi40MjEtNC40MzUsMi40MjEtNC40MzVWOC40MjFsMC4xMS0wLjIxMmwwLjA5Mi0wLjE2NmMwLjI3My0wLjQ5NywwLjQ3LTAuODUsMC43MzEtMS4yMjFsMC4wMDctMC4wMTEKICAgICAgYzAuNjA5LTAuODgzLDEuNjU2LTEuNTEyLDIuODktMS42MThjMi4wNy0wLjE3OCwzLjg4NCwxLjE4Miw0LjA1MSwzLjAzOGMwLjE2NiwxLjg1Ni0xLjM3OCwzLjUwNS0zLjQ0OCwzLjY4NAogICAgICBjLTAuNDMxLDAuMDM3LTAuODUsMC4wMDgtMS4yNDUtMC4wNzlsLTAuMDEsMC4wMDRjLTEuNTE5LTAuMzE2LTIuNDg2LTEuNDI0LTIuOTYzLTEuOTE5bC0xLjk5MiwzLjY2MwogICAgICBjMCwwLDAuNjE5LDAuNjI0LDEuMDQzLDAuOTM2YzAuNDI1LDAuMzExLDAuOTc0LDAuNjE3LDEuNDEyLDAuODA3YzEuMDYzLDAuNDU0LDIuMjE5LDAuNzI2LDMuNDk2LDAuNzI2CiAgICAgIGMwLjE0OCwwLDAuMTE4LDAsMC4yNzItMC4wMDZjMi4yNzMtMC4wOTUsNC4yOTktMC45NjYsNS43Ni0yLjQ1OGMxLjM4NC0xLjQxNywyLjEzNS0zLjAzNSwyLjE0Mi00Ljk1VjguNTgyCiAgICAgIEMyOS41NjgsOC40NzYsMjkuNTY1LDguMzY5LDI5LjU2MSw4LjI2MXoiLz4KICA8L2c+CjwvZz4KPGc+CiAgPHBhdGggZmlsbD0iIzRhODlkYyIgZD0iTTM3LjE4MSwxNS42NTdjLTEuMDMzLDAtMS45Ny0wLjEyLTIuODExLTAuMzZjLTAuODQxLTAuMjQtMS41NTktMC42MTktMi4xNTQtMS4xMzkKICAgIGMtMC41OTctMC41Mi0xLjA1Ny0xLjE4Mi0xLjM4MS0xLjk4NXMtMC40ODYtMS43NzEtMC40ODYtMi44OTlWMS43NTloNC43Mjd2Ny40NTVjMCwwLjg0NSwwLjIwMiwxLjQ1NywwLjYwNSwxLjgzOQogICAgYzAuNDA0LDAuMzgzLDAuOTE3LDAuNTc0LDEuNTM5LDAuNTc0YzAuNjM2LDAsMS4xNTItMC4xNzgsMS41NS0wLjUzNWMwLjM5Ni0wLjM1NywwLjU5Ni0wLjk0OSwwLjU5Ni0xLjc4MVYxLjc1OWg0LjcyN3Y3LjQxNgogICAgYzAsMS4xNjgtMC4xNjYsMi4xNjEtMC40OTcsMi45NzhjLTAuMzMxLDAuODE4LTAuNzk4LDEuNDg2LTEuMzk5LDIuMDA2Yy0wLjYwNCwwLjUyLTEuMzMxLDAuODk4LTIuMTg2LDEuMTM5CiAgICBDMzkuMTU2LDE1LjUzNywzOC4yMTMsMTUuNjU3LDM3LjE4MSwxNS42NTd6Ii8+CjwvZz4KPC9zdmc+\"\n\n//# sourceURL=webpack:///./static/images/coursera_logo.svg?");

/***/ }),

/***/ "./static/images/down-arrow-blue.svg":
/*!*******************************************!*\
  !*** ./static/images/down-arrow-blue.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDUxLjg0NyA0NTEuODQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ3IDQ1MS44NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjUuOTIzLDM1NC43MDZjLTguMDk4LDAtMTYuMTk1LTMuMDkyLTIyLjM2OS05LjI2M0w5LjI3LDE1MS4xNTdjLTEyLjM1OS0xMi4zNTktMTIuMzU5LTMyLjM5NywwLTQ0Ljc1MSAgIGMxMi4zNTQtMTIuMzU0LDMyLjM4OC0xMi4zNTQsNDQuNzQ4LDBsMTcxLjkwNSwxNzEuOTE1bDE3MS45MDYtMTcxLjkwOWMxMi4zNTktMTIuMzU0LDMyLjM5MS0xMi4zNTQsNDQuNzQ0LDAgICBjMTIuMzY1LDEyLjM1NCwxMi4zNjUsMzIuMzkyLDAsNDQuNzUxTDI0OC4yOTIsMzQ1LjQ0OUMyNDIuMTE1LDM1MS42MjEsMjM0LjAxOCwzNTQuNzA2LDIyNS45MjMsMzU0LjcwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNGREZERkIiIGZpbGw9IiM0Mjg1ZjQiLz4KPC9nPjwvZz4gPC9zdmc+Cg==\"\n\n//# sourceURL=webpack:///./static/images/down-arrow-blue.svg?");

/***/ }),

/***/ "./static/images/down-arrow.svg":
/*!**************************************!*\
  !*** ./static/images/down-arrow.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDUxLjg0NyA0NTEuODQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ3IDQ1MS44NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjUuOTIzLDM1NC43MDZjLTguMDk4LDAtMTYuMTk1LTMuMDkyLTIyLjM2OS05LjI2M0w5LjI3LDE1MS4xNTdjLTEyLjM1OS0xMi4zNTktMTIuMzU5LTMyLjM5NywwLTQ0Ljc1MSAgIGMxMi4zNTQtMTIuMzU0LDMyLjM4OC0xMi4zNTQsNDQuNzQ4LDBsMTcxLjkwNSwxNzEuOTE1bDE3MS45MDYtMTcxLjkwOWMxMi4zNTktMTIuMzU0LDMyLjM5MS0xMi4zNTQsNDQuNzQ0LDAgICBjMTIuMzY1LDEyLjM1NCwxMi4zNjUsMzIuMzkyLDAsNDQuNzUxTDI0OC4yOTIsMzQ1LjQ0OUMyNDIuMTE1LDM1MS42MjEsMjM0LjAxOCwzNTQuNzA2LDIyNS45MjMsMzU0LjcwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNGREZERkIiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPjwvZz4gPC9zdmc+Cg==\"\n\n//# sourceURL=webpack:///./static/images/down-arrow.svg?");

/***/ }),

/***/ "./static/images/empty-star-.svg":
/*!***************************************!*\
  !*** ./static/images/empty-star-.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1LjU5MSA0NS41OTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjU5MSA0NS41OTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTAuOTAyLDE5LjYzbDExLjc5NSw4LjU2OUw4LjE5Miw0Mi4wNjVjLTAuMjg2LDAuODc5LTAuMDUsMS40NzEsMC4xOTgsMS44MTIgICAgYzAuNTU5LDAuNzcxLDEuNjYzLDAuOTE3LDIuNjEsMC4yMjhsMTEuNzk1LTguNTdsMTEuNzk1LDguNTdjMC40MTUsMC4zMDEsMC44MzksMC40NTQsMS4yNjEsMC40NTQgICAgYzAuNTQzLDAsMS4wMzUtMC4yNDksMS4zNS0wLjY4MmMwLjI0OC0wLjM0MiwwLjQ4NC0wLjkzNCwwLjE5OC0xLjgxMmwtNC41MDYtMTMuODY3bDExLjc5NS04LjU2OSAgICBjMS4xMjktMC44MiwwLjkxNi0xLjgwOSwwLjgyNC0yLjA5M3MtMC41MDEtMS4yMDgtMS44OTYtMS4yMDhoLTE0LjU4TDI0LjUzMSwyLjQ2MmMtMC40MzItMS4zMjctMS40MzgtMS40My0xLjczNS0xLjQzICAgIGMtMC4yOTgsMC0xLjMwNCwwLjEwMy0xLjczNiwxLjQzMWwtNC41MDYsMTMuODY2SDEuOTc0Yy0xLjM5NiwwLTEuODA1LDAuOTI1LTEuODk2LDEuMjA4Qy0wLjAxNCwxNy44MjEtMC4yMjcsMTguODEsMC45MDIsMTkuNjN6ICAgICBNMTYuNjQ0LDE5LjMyOWMxLjIxLDAsMi4zNjEtMC44MzYsMi43MzYtMS45ODhsMy40MTYtMTAuNTEybDMuNDE2LDEwLjUxM2MwLjM3NSwxLjE1MSwxLjUyNSwxLjk4NywyLjczNSwxLjk4N0g0MGwtOC45NDIsNi40OTcgICAgYy0wLjk4LDAuNzEyLTEuNDE5LDIuMDY1LTEuMDQ1LDMuMjE2bDMuNDE2LDEwLjUxMmwtOC45NDItNi40OTdjLTAuNDctMC4zNDItMS4wNzEtMC41My0xLjY5MS0wLjUzcy0xLjIyMSwwLjE4OC0xLjY5MSwwLjUzICAgIGwtOC45NDIsNi40OTdsMy40MTYtMTAuNTEyYzAuMzc1LTEuMTUxLTAuMDY1LTIuNTA0LTEuMDQ0LTMuMjE2bC04Ljk0Mi02LjQ5N0M1LjU5MywxOS4zMjksMTYuNjQ0LDE5LjMyOSwxNi42NDQsMTkuMzI5eiIgZGF0YS1vcmlnaW5hbD0iIzAxMDAwMiIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI2ZmZmYwMCIgZmlsbD0iI0Y2QkE0MiIvPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4K\"\n\n//# sourceURL=webpack:///./static/images/empty-star-.svg?");

/***/ }),

/***/ "./static/images/left-arrow.svg":
/*!**************************************!*\
  !*** ./static/images/left-arrow.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI5IDEyOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI5IDEyOSIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45MjI3NDUgMCAwIDAuOTIyNzQ1IDQuOTgyOTYgNC45ODI5NikiPjxnPgogICAgPHBhdGggZD0ibTg4LjYsMTIxLjNjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtNTEtNTEgNTEtNTFjMS42LTEuNiAxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC01NCw1My45Yy0xLjYsMS42LTEuNiw0LjIgMCw1LjhsNTQsNTMuOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz48L2c+IDwvc3ZnPgo=\"\n\n//# sourceURL=webpack:///./static/images/left-arrow.svg?");

/***/ }),

/***/ "./static/images/level-bars.svg":
/*!**************************************!*\
  !*** ./static/images/level-bars.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjMyMi40NDdweCIgaGVpZ2h0PSIzMjIuNDQ3cHgiIHZpZXdCb3g9IjAgMCAzMjIuNDQ3IDMyMi40NDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyMi40NDcgMzIyLjQ0NzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0wLjkwNCwxMjAuNTE3djE5Mi4zNjhjMCw1LjI3OSw0LjI4NCw5LjU2Miw5LjU2Miw5LjU2Mmg3NC45MTNjNS4yNzgsMCw5LjU2Mi00LjI4Myw5LjU2Mi05LjU2MlYxMjAuNTE3DQoJCQljMC0xOS43NjYtMTYuMDk0LTM1Ljg1OS0zNS44NTktMzUuODU5SDM2Ljc2M0MxNi45ODgsODQuNjU3LDAuOTA0LDEwMC43NSwwLjkwNCwxMjAuNTE3eiBNODAuNTk4LDI5OC41NDENCgkJCWMwLDUuMjc5LTQuMjg0LDkuNTYyLTkuNTYyLDkuNTYySDI0LjgxYy01LjI3OSwwLTkuNTYyLTQuMjgzLTkuNTYyLTkuNTYyVjEyMC41MTdjMC0xMS44NTgsOS42NTgtMjEuNTE2LDIxLjUxNi0yMS41MTZoMjIuMzE5DQoJCQljMTEuODU3LDAsMjEuNTE2LDkuNjU4LDIxLjUxNiwyMS41MTZWMjk4LjU0MXoiLz4NCgkJPHBhdGggZD0iTTExNC4yLDgxLjI4MXYyMzEuNjA0YzAsNS4yNzksNC4yODQsOS41NjIsOS41NjIsOS41NjJoNzQuOTEzYzUuMjc4LDAsOS41NjItNC4yODMsOS41NjItOS41NjJWODEuMjgxDQoJCQljMC0xOS43NjYtMTYuMDk0LTM1Ljg1OS0zNS44NTktMzUuODU5SDE1MC4wNkMxMzAuMjk0LDQ1LjQyMiwxMTQuMiw2MS41MTYsMTE0LjIsODEuMjgxeiBNMTkzLjg5NCwyOTguNTQxDQoJCQljMCw1LjI3OS00LjI4NCw5LjU2Mi05LjU2Miw5LjU2MmgtNDYuMjI1Yy01LjI3OCwwLTkuNTYyLTQuMjgzLTkuNTYyLTkuNTYyVjgxLjI4MWMwLTExLjg1Nyw5LjY1OC0yMS41MTYsMjEuNTE2LTIxLjUxNmgyMi4zMTkNCgkJCWMxMS44NTcsMCwyMS41MTYsOS42NTgsMjEuNTE2LDIxLjUxNlYyOTguNTQxeiIvPg0KCQk8cGF0aCBkPSJNMjI3LjUwNiwzMTIuODg1YzAsNS4yNzksNC4yODQsOS41NjIsOS41NjIsOS41NjJoNzQuOTEyYzUuMjc5LDAsOS41NjItNC4yODMsOS41NjItOS41NjJWMzUuODU5DQoJCQlDMzIxLjU0MywxNi4wOTQsMzA1LjQ1MSwwLDI4NS42ODQsMGgtMjIuMzE4Yy0xOS43NjYsMC0zNS44NTksMTYuMDk0LTM1Ljg1OSwzNS44NTlWMzEyLjg4NXogTTMwNy4yLDI5OC41NDENCgkJCWMwLDUuMjc5LTQuMjgzLDkuNTYyLTkuNTYyLDkuNTYyaC00Ni4yMjVjLTUuMjc4LDAtOS41NjItNC4yODMtOS41NjItOS41NjJWMzUuODU5YzAtMTEuODU3LDkuNjU4LTIxLjUxNiwyMS41MTYtMjEuNTE2aDIyLjMxOA0KCQkJYzExLjg1OCwwLDIxLjUxNiw5LjY1OCwyMS41MTYsMjEuNTE2VjI5OC41NDF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=\"\n\n//# sourceURL=webpack:///./static/images/level-bars.svg?");

/***/ }),

/***/ "./static/images/right-arrow.svg":
/*!***************************************!*\
  !*** ./static/images/right-arrow.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI5IDEyOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI5IDEyOSIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45NDE0OCAwIDAgMC45NDE0OCAzLjc3NDUzIDMuNzc0NTMpIj48Zz4KICAgIDxwYXRoIGQ9Im00MC40LDEyMS4zYy0wLjgsMC44LTEuOCwxLjItMi45LDEuMnMtMi4xLTAuNC0yLjktMS4yYy0xLjYtMS42LTEuNi00LjIgMC01LjhsNTEtNTEtNTEtNTFjLTEuNi0xLjYtMS42LTQuMiAwLTUuOCAxLjYtMS42IDQuMi0xLjYgNS44LDBsNTMuOSw1My45YzEuNiwxLjYgMS42LDQuMiAwLDUuOGwtNTMuOSw1My45eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPjwvZz4gPC9zdmc+Cg==\"\n\n//# sourceURL=webpack:///./static/images/right-arrow.svg?");

/***/ }),

/***/ "./static/images/search_icon.svg":
/*!***************************************!*\
  !*** ./static/images/search_icon.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiBjbGFzcz0iIj4KICAgIDxnPjxwYXRoIGQ9Ik01NS4xNDYsNTEuODg3TDQxLjU4OCwzNy43ODZjMy40ODYtNC4xNDQsNS4zOTYtOS4zNTgsNS4zOTYtMTQuNzg2YzAtMTIuNjgyLTEwLjMxOC0yMy0yMy0yM3MtMjMsMTAuMzE4LTIzLDIzICBzMTAuMzE4LDIzLDIzLDIzYzQuNzYxLDAsOS4yOTgtMS40MzYsMTMuMTc3LTQuMTYybDEzLjY2MSwxNC4yMDhjMC41NzEsMC41OTMsMS4zMzksMC45MiwyLjE2MiwwLjkyICBjMC43NzksMCwxLjUxOC0wLjI5NywyLjA3OS0wLjgzN0M1Ni4yNTUsNTQuOTgyLDU2LjI5Myw1My4wOCw1NS4xNDYsNTEuODg3eiBNMjMuOTg0LDZjOS4zNzQsMCwxNyw3LjYyNiwxNywxN3MtNy42MjYsMTctMTcsMTcgIHMtMTctNy42MjYtMTctMTdTMTQuNjEsNiwyMy45ODQsNnoiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZmlsbD0iI0ZGRkZGRiIvPjwvZz4gPC9zdmc+Cg==\"\n\n//# sourceURL=webpack:///./static/images/search_icon.svg?");

/***/ }),

/***/ "./static/images/search_icon_black.svg":
/*!*********************************************!*\
  !*** ./static/images/search_icon_black.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDUxIDQ1MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxIDQ1MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ0Ny4wNSw0MjhsLTEwOS42LTEwOS42YzI5LjQtMzMuOCw0Ny4yLTc3LjksNDcuMi0xMjYuMUMzODQuNjUsODYuMiwyOTguMzUsMCwxOTIuMzUsMEM4Ni4yNSwwLDAuMDUsODYuMywwLjA1LDE5Mi4zDQoJCXM4Ni4zLDE5Mi4zLDE5Mi4zLDE5Mi4zYzQ4LjIsMCw5Mi4zLTE3LjgsMTI2LjEtNDcuMkw0MjguMDUsNDQ3YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNA0KCQlDNDUyLjI1LDQ0MS44LDQ1Mi4yNSw0MzMuMiw0NDcuMDUsNDI4eiBNMjYuOTUsMTkyLjNjMC05MS4yLDc0LjItMTY1LjMsMTY1LjMtMTY1LjNjOTEuMiwwLDE2NS4zLDc0LjIsMTY1LjMsMTY1LjMNCgkJcy03NC4xLDE2NS40LTE2NS4zLDE2NS40QzEwMS4xNSwzNTcuNywyNi45NSwyODMuNSwyNi45NSwxOTIuM3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K\"\n\n//# sourceURL=webpack:///./static/images/search_icon_black.svg?");

/***/ }),

/***/ "./static/images/star-half-empty.svg":
/*!*******************************************!*\
  !*** ./static/images/star-half-empty.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDc1LjA0NCA0NzUuMDQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMDQ0IDQ3NS4wNDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik00NzQuNDg3LDE4My4yNzZjLTEuNzExLTUuMjM2LTYuODUyLTguNTItMTUuNDEtOS44NTFsLTE0My4zMjMtMjAuODM5TDI1MS41MiwyMi42ODFjLTQtNy44MDQtOC42NjEtMTEuNzA0LTEzLjk4OS0xMS43MDQgICBjLTUuNTE5LDAtMTAuMTgzLDMuOS0xMy45ODgsMTEuNzA0bC02NC4yNDEsMTI5LjkwNUwxNS45NzgsMTczLjQyNWMtOC41NjQsMS4zMzItMTMuNzA0LDQuNjE1LTE1LjQxNSw5Ljg1MSAgIGMtMS43MDksNS4yMzYsMC40NzgsMTAuODk4LDYuNTY3LDE2Ljk4OWwxMDMuOTI0LDEwMS4wNjhMODYuNTAxLDQ0NC4wODJjLTAuOTUsNi4yODYtMC4zODEsMTEuMTczLDEuNzE1LDE0LjcwMiAgIGMyLjA5MiwzLjUyNCw1LjMzLDUuMjgzLDkuNzA3LDUuMjgzYzMuMjM3LDAsNy4wNDMtMS4xNCwxMS40Mi0zLjQzM2wxMjguMTk0LTY3LjM4MmwxMjguMTksNjcuMzgyICAgYzQuMzc3LDIuMjg2LDguMTg2LDMuNDMzLDExLjQyMywzLjQzM2M0LjM4MSwwLDcuNjIyLTEuNzU5LDkuNzA5LTUuMjgzYzIuMDg4LTMuNTI5LDIuNjU5LTguNDE2LDEuNzA4LTE0LjcwMmwtMjQuNTUxLTE0Mi43NDkgICBsMTAzLjYzLTEwMS4wNjhDNDczLjkzLDE5NC4xNzQsNDc2LjIxMiwxODguNTEyLDQ3NC40ODcsMTgzLjI3NnogTTMzOC41OTcsMjc1LjA2NWwtMTMuOTksMTMuNDIxbDMuNDMsMTguODQzbDE3LjEyOCwxMDEuMzU3ICAgbC05MC43ODYtNDcuOTY1bC0xNi44NDgtOC44NTZWNzYuOTI3bDQ1LjM5NSw5MS45MzNsOC41NTksMTcuMTI4bDE4Ljg1LDIuODU2bDEwMS42NDIsMTQuODQ0TDMzOC41OTcsMjc1LjA2NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNGRjAwMDAiIGZpbGw9IiNGNkJBNDIiLz4KPC9nPjwvZz4gPC9zdmc+Cg==\"\n\n//# sourceURL=webpack:///./static/images/star-half-empty.svg?");

/***/ }),

/***/ "./static/images/star.svg":
/*!********************************!*\
  !*** ./static/images/star.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTkuNDgxIDE5LjQ4MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTkuNDgxIDE5LjQ4MSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz4KICAgIDxwYXRoIGQ9Im0xMC4yMDEsLjc1OGwyLjQ3OCw1Ljg2NSA2LjM0NCwuNTQ1YzAuNDQsMC4wMzggMC42MTksMC41ODcgMC4yODUsMC44NzZsLTQuODEyLDQuMTY5IDEuNDQyLDYuMjAyYzAuMSwwLjQzMS0wLjM2NywwLjc3LTAuNzQ1LDAuNTQxbC01LjQ1Mi0zLjI4OC01LjQ1MiwzLjI4OGMtMC4zNzksMC4yMjgtMC44NDUtMC4xMTEtMC43NDUtMC41NDFsMS40NDItNi4yMDItNC44MTMtNC4xN2MtMC4zMzQtMC4yODktMC4xNTYtMC44MzggMC4yODUtMC44NzZsNi4zNDQtLjU0NSAyLjQ3OC01Ljg2NGMwLjE3Mi0wLjQwOCAwLjc0OS0wLjQwOCAwLjkyMSwweiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI2ZmZmYwMCIgZmlsbD0iI0Y2QkE0MiIvPgogIDwvZz48L2c+IDwvc3ZnPgo=\"\n\n//# sourceURL=webpack:///./static/images/star.svg?");

/***/ }),

/***/ "./static/images/world-symbol.svg":
/*!****************************************!*\
  !*** ./static/images/world-symbol.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ4MHB0IiB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgd2lkdGg9IjQ4MHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNDAgMGMtMTMyLjU0Njg3NSAwLTI0MCAxMDcuNDUzMTI1LTI0MCAyNDBzMTA3LjQ1MzEyNSAyNDAgMjQwIDI0MCAyNDAtMTA3LjQ1MzEyNSAyNDAtMjQwYy0uMTQ4NDM4LTEzMi40ODQzNzUtMTA3LjUxNTYyNS0yMzkuODUxNTYyLTI0MC0yNDB6bTIwNy41NjY0MDYgMzI0LjA3ODEyNS02OC4yNTM5MDYgMTEuNzc3MzQ0YzcuODEyNS0yOC42NTIzNDQgMTIuMDMxMjUtNTguMTY0MDYzIDEyLjU1ODU5NC04Ny44NTU0NjloNzEuOTI5Njg3Yy0uOTAyMzQzIDI2LjExNzE4OC02LjM5ODQzNyA1MS44NzEwOTQtMTYuMjM0Mzc1IDc2LjA3ODEyNXptLTQzMS4zNjcxODctNzYuMDc4MTI1aDcxLjkyOTY4N2MuNTI3MzQ0IDI5LjY5MTQwNiA0Ljc0NjA5NCA1OS4yMDMxMjUgMTIuNTU4NTk0IDg3Ljg1NTQ2OWwtNjguMjUzOTA2LTExLjc3NzM0NGMtOS44MzU5MzgtMjQuMjA3MDMxLTE1LjMzMjAzMi00OS45NjA5MzctMTYuMjM0Mzc1LTc2LjA3ODEyNXptMTYuMjM0Mzc1LTkyLjA3ODEyNSA2OC4yNTM5MDYtMTEuNzc3MzQ0Yy03LjgxMjUgMjguNjUyMzQ0LTEyLjAzMTI1IDU4LjE2NDA2My0xMi41NTg1OTQgODcuODU1NDY5aC03MS45Mjk2ODdjLjkwMjM0My0yNi4xMTcxODggNi4zOTg0MzctNTEuODcxMDk0IDE2LjIzNDM3NS03Ni4wNzgxMjV6bTIxNS41NjY0MDYtMjcuNDcyNjU2YzI4Ljc0NjA5NC4zNjcxODcgNTcuNDIxODc1IDIuOTg0Mzc1IDg1Ljc2MTcxOSA3LjgzMjAzMWwyOC4yMzgyODEgNC44NzEwOTRjOC42NzU3ODEgMjkuNTIzNDM3IDEzLjM0Mzc1IDYwLjA3ODEyNSAxMy44Nzg5MDYgOTAuODQ3NjU2aC0xMjcuODc4OTA2em04OC40ODgyODEtNy45Mzc1Yy0yOS4yMzgyODEtNC45OTYwOTQtNTguODI4MTI1LTcuNjk1MzEzLTg4LjQ4ODI4MS04LjA2MjV2LTk2YzQ1Ljg2MzI4MSA0LjQwNjI1IDg1LjcwMzEyNSA0Ni4zOTg0MzcgMTA4LjI4MTI1IDEwNy41MTE3MTl6bS0xMDQuNDg4MjgxLTguMDYyNWMtMjkuNjYwMTU2LjM2NzE4Ny01OS4yNDIxODggMy4wNjY0MDYtODguNDgwNDY5IDguMDYyNWwtMTkuODAwNzgxIDMuNDI1NzgxYzIyLjU3ODEyNS02MS4xMjg5MDYgNjIuNDE3OTY5LTEwMy4xMzY3MTkgMTA4LjI4MTI1LTEwNy41MjM0Mzh6bS04NS43NTM5MDYgMjMuODMyMDMxYzI4LjMzNTkzNy00Ljg0NzY1NiA1Ny4wMDc4MTItNy40NjQ4NDQgODUuNzUzOTA2LTcuODMyMDMxdjEwMy41NTA3ODFoLTEyNy44Nzg5MDZjLjUzNTE1Ni0zMC43Njk1MzEgNS4yMDMxMjUtNjEuMzI0MjE5IDEzLjg3ODkwNi05MC44NDc2NTZ6bS00Mi4xMjUgMTExLjcxODc1aDEyNy44Nzg5MDZ2MTAzLjU1MDc4MWMtMjguNzQ2MDk0LS4zNjcxODctNTcuNDIxODc1LTIuOTg0Mzc1LTg1Ljc2MTcxOS03LjgzMjAzMWwtMjguMjM4MjgxLTQuODcxMDk0Yy04LjY3NTc4MS0yOS41MjM0MzctMTMuMzQzNzUtNjAuMDc4MTI1LTEzLjg3ODkwNi05MC44NDc2NTZ6bTM5LjM5MDYyNSAxMTEuNDg4MjgxYzI5LjIzODI4MSA1LjAwMzkwNyA1OC44MjQyMTkgNy43MTQ4NDQgODguNDg4MjgxIDguMTA1NDY5djk2Yy00NS44NjMyODEtNC40MTAxNTYtODUuNzAzMTI1LTQ2LjQwMjM0NC0xMDguMjgxMjUtMTA3LjUxNTYyNXptMTA0LjQ4ODI4MSA4LjEwNTQ2OWMyOS42NjAxNTYtLjM5MDYyNSA1OS4yNDIxODgtMy4xMDE1NjIgODguNDgwNDY5LTguMTA1NDY5bDE5LjgwMDc4MS0zLjQyNTc4MWMtMjIuNTc4MTI1IDYxLjEyODkwNi02Mi40MTc5NjkgMTAzLjEzNjcxOS0xMDguMjgxMjUgMTA3LjUyMzQzOHptODUuNzUzOTA2LTIzLjg3NWMtMjguMzM1OTM3IDQuODQ3NjU2LTU3LjAwNzgxMiA3LjQ2NDg0NC04NS43NTM5MDYgNy44MzIwMzF2LTEwMy41NTA3ODFoMTI3Ljg3ODkwNmMtLjUzNTE1NiAzMC43Njk1MzEtNS4yMDMxMjUgNjEuMzI0MjE5LTEzLjg3ODkwNiA5MC44NDc2NTZ6bTU4LjExNzE4OC0xMTEuNzE4NzVjLS41MjczNDQtMjkuNjkxNDA2LTQuNzQ2MDk0LTU5LjIwMzEyNS0xMi41NTg1OTQtODcuODU1NDY5bDY4LjI1MzkwNiAxMS43NzczNDRjOS44MzU5MzggMjQuMjA3MDMxIDE1LjMzMjAzMiA0OS45NjA5MzcgMTYuMjM0Mzc1IDc2LjA3ODEyNXptNDcuNjAxNTYyLTkzLjcxMDkzOC02NS40MjU3ODEtMTEuMjg5MDYyYy0xMS43NjE3MTktMzguMzcxMDk0LTMzLjc2NTYyNS03Mi44MDg1OTQtNjMuNjQ4NDM3LTk5LjYwMTU2MiA1NS44Nzg5MDYgMTguNjQ4NDM3IDEwMi4yMTg3NSA1OC40NTcwMzEgMTI5LjA3NDIxOCAxMTAuODkwNjI0em0tMjY5Ljg3MTA5NC0xMTAuODkwNjI0Yy0yOS44ODI4MTIgMjYuNzkyOTY4LTUxLjg4NjcxOCA2MS4yMzA0NjgtNjMuNjQ4NDM3IDk5LjYwMTU2MmwtNjUuNDI1NzgxIDExLjI4OTA2MmMyNi44NTU0NjgtNTIuNDMzNTkzIDczLjE5NTMxMi05Mi4yNDIxODcgMTI5LjA3NDIxOC0xMTAuODkwNjI0em0tMTI5LjA3NDIxOCAzMTQuMzEyNSA2NS40MjU3ODEgMTEuMjg5MDYyYzExLjc2MTcxOSAzOC4zNzEwOTQgMzMuNzY1NjI1IDcyLjgwODU5NCA2My42NDg0MzcgOTkuNjAxNTYyLTU1Ljg3ODkwNi0xOC42NDg0MzctMTAyLjIxODc1LTU4LjQ1NzAzMS0xMjkuMDc0MjE4LTExMC44OTA2MjR6bTI2OS44NzEwOTQgMTEwLjg5MDYyNGMyOS44ODI4MTItMjYuNzkyOTY4IDUxLjg4NjcxOC02MS4yMzA0NjggNjMuNjQ4NDM3LTk5LjYwMTU2Mmw2NS40MjU3ODEtMTEuMjg5MDYyYy0yNi44NTU0NjggNTIuNDMzNTkzLTczLjE5NTMxMiA5Mi4yNDIxODctMTI5LjA3NDIxOCAxMTAuODkwNjI0em0wIDAiLz48L3N2Zz4=\"\n\n//# sourceURL=webpack:///./static/images/world-symbol.svg?");

/***/ }),

/***/ "./static/index.js":
/*!*************************!*\
  !*** ./static/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_carousel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/carousel.css */ \"./static/styles/carousel.css\");\n/* harmony import */ var _styles_carousel_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_carousel_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_course_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/course.css */ \"./static/styles/course.css\");\n/* harmony import */ var _styles_course_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_course_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_feedback_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/feedback.css */ \"./static/styles/feedback.css\");\n/* harmony import */ var _styles_feedback_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_feedback_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/footer.css */ \"./static/styles/footer.css\");\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/header.css */ \"./static/styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/layout.css */ \"./static/styles/layout.css\");\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_offers_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/offers.css */ \"./static/styles/offers.css\");\n/* harmony import */ var _styles_offers_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_offers_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/common.css */ \"./static/styles/common.css\");\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_common_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_course_details_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/course-details.css */ \"./static/styles/course-details.css\");\n/* harmony import */ var _styles_course_details_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_course_details_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_explore_navigation_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/explore-navigation.css */ \"./static/styles/explore-navigation.css\");\n/* harmony import */ var _styles_explore_navigation_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_explore_navigation_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_column_grid_layout_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/column-grid-layout.css */ \"./static/styles/column-grid-layout.css\");\n/* harmony import */ var _styles_column_grid_layout_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_column_grid_layout_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_login_sidebar_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/login-sidebar.css */ \"./static/styles/login-sidebar.css\");\n/* harmony import */ var _styles_login_sidebar_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_login_sidebar_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_search_sidebar_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/search-sidebar.css */ \"./static/styles/search-sidebar.css\");\n/* harmony import */ var _styles_search_sidebar_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_search_sidebar_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mobileLoginMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mobileLoginMenu */ \"./static/mobileLoginMenu.js\");\n/* harmony import */ var _mobileSearchMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mobileSearchMenu */ \"./static/mobileSearchMenu.js\");\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./carousel */ \"./static/carousel.js\");\n/* harmony import */ var _exploreMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exploreMenu */ \"./static/exploreMenu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderCourses = async (containerClass, dataPath) => {\r\n  const container = document.querySelector(containerClass);\r\n  const coursesData = await (await fetch(dataPath)).json();\r\n  coursesData.map(data => new _carousel__WEBPACK_IMPORTED_MODULE_15__[\"Carousel\"](container, data));\r\n};\r\n\r\nconst initExploreMenu = async containerClass => {\r\n  const container = document.querySelector(containerClass);\r\n  new _exploreMenu__WEBPACK_IMPORTED_MODULE_16__[\"ExploreMenu\"](container);\r\n};\r\n\r\nrenderCourses(\".courses-carousel\", \"http://localhost:5000/courses\")\r\n  .then(() => initExploreMenu(\".header__explore-button\"))\r\n  .then(() => Object(_mobileLoginMenu__WEBPACK_IMPORTED_MODULE_13__[\"initMobileLoginMenu\"])())\r\n    // .then(() => initMobileSearchMenu())\r\n  .catch(err => console.log(err));\r\n\n\n//# sourceURL=webpack:///./static/index.js?");

/***/ }),

/***/ "./static/mobileLoginMenu.js":
/*!***********************************!*\
  !*** ./static/mobileLoginMenu.js ***!
  \***********************************/
/*! exports provided: initMobileLoginMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMobileLoginMenu\", function() { return initMobileLoginMenu; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./static/helpers.js\");\n\r\n\r\nconst initMobileLoginMenu = async () => {\r\n  const menuWidth = 16; // rem\r\n  const mobileLoginMenuButton = document.querySelector(\r\n    \".header__login-menu-button\"\r\n  );\r\n\r\n  const createMobileLoginMenu = () => {\r\n    const container = document.createElement(\"nav\");\r\n    container.className = \"login-sidebar\";\r\n    container.innerHTML = `\r\n    <a href=\"#\" class=\"login-sidebar__link login-sidebar__link_bordered\">\r\n    Explore\r\n  </a>\r\n  <a href=\"#\" class=\"login-sidebar__link\">\r\n    For enterprise\r\n  </a>\r\n  <a href=\"#\" class=\"login-sidebar__link login-sidebar__link_register\">\r\n    Join for Free\r\n  </a>\r\n  <a href=\"#\" class=\"login-sidebar__link login-sidebar__link_login\">\r\n    Log In\r\n  </a>\r\n   `;\r\n    return container;\r\n  };\r\n\r\n  const translateElement = (menuEl, offset, units) => {\r\n    menuEl.style.transform = \"translateX(\" + offset + units + \")\";\r\n  };\r\n\r\n  const menuElement = createMobileLoginMenu();\r\n  menuElement.style.width = menuWidth + \"rem\";\r\n  menuElement.style.left = -menuWidth + \"rem\";\r\n  document.body.appendChild(menuElement);\r\n\r\n  let opened = false;\r\n\r\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(\r\n    mobileLoginMenuButton,\r\n    \".header__login-menu-button\",\r\n    \"click\",\r\n    () => {\r\n      translateElement(menuElement, menuWidth, 'rem');\r\n      opened = true;\r\n    }\r\n  );\r\n\r\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(\r\n      menuElement,\r\n      '.login-sidebar',\r\n      'click',\r\n      () => {\r\n        translateElement(menuElement, -menuWidth, 'rem');\r\n        opened = false;\r\n      },\r\n      true\r\n  );\r\n\r\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(\r\n      window,\r\n      'body',\r\n      'resize',\r\n      () => {\r\n        translateElement(menuElement, -menuWidth, 'rem');\r\n        opened = false;\r\n      },\r\n      true\r\n\r\n  )\r\n\r\n};\r\n\n\n//# sourceURL=webpack:///./static/mobileLoginMenu.js?");

/***/ }),

/***/ "./static/mobileSearchMenu.js":
/*!************************************!*\
  !*** ./static/mobileSearchMenu.js ***!
  \************************************/
/*! exports provided: initMobileSearchMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMobileSearchMenu\", function() { return initMobileSearchMenu; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./static/helpers.js\");\n\r\n\r\nconst initMobileSearchMenu = async () => {\r\n    const menuHeight = 30; // rem\r\n    const headerHight = 4; //rem\r\n    const mobileSearchMenuButton = document.querySelector(\r\n        \".header__search-menu-button\"\r\n    );\r\n\r\n    const createMobileSearchMenu = () => {\r\n        const container = document.createElement(\"nav\");\r\n        container.className = \"search-sidebar\";\r\n        container.innerHTML = `\r\n    <form class=\"search-sidebar__search-bar\" action=\"#\" aria-label=\"courses-search-bar\">\r\n    <input class=\"search-sidebar__search-input\" type=\"search\" placeholder=\"What do you want to learn?\">\r\n    <button class=\"search-sidebar__search-submit\" aria-label=\"submit-search-query\"></button>\r\n  </form>\r\n\r\n  <section class=\"search-sidebar__topics\">\r\n    <h2 class=\"search-sidebar__topics-header\">Explore all Topics and Skills</h2>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Arts and Humanities</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Business</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Computer Science</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Data Science</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Information Technology</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Health</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Math and Logic</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Personal Development</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Physical Science and Engineering</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Social Sciences</a>\r\n    <a href=\"#\" class=\"search-sidebar__topics-link\">Language Learning</a>\r\n  </section>\r\n   `;\r\n        return container;\r\n    };\r\n\r\n    const translateElement = (menuEl, offset, units) => {\r\n        menuEl.style.transform = \"translateY(\" + offset + units + \")\";\r\n    };\r\n\r\n    const menuElement = createMobileSearchMenu();\r\n    menuElement.style.height = menuHeight + \"rem\";\r\n    menuElement.style.top = - (menuHeight + headerHight) +  \"rem\";\r\n    document.body.appendChild(menuElement);\r\n\r\n    let opened = false;\r\n\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(\r\n        mobileSearchMenuButton,\r\n        \".header__search-menu-button\",\r\n        \"click\",\r\n        () => {\r\n            translateElement(menuElement, menuHeight + headerHight, 'rem');\r\n            opened = true;\r\n        }\r\n    );\r\n    //\r\n    // delegateEvent(\r\n    //     menuElement,\r\n    //     '.login-sidebar',\r\n    //     'click',\r\n    //     () => {\r\n    //         translateElement(menuElement, -menuWidth, 'rem');\r\n    //         opened = false;\r\n    //     },\r\n    //     true\r\n    // );\r\n    //\r\n    // delegateEvent(\r\n    //     window,\r\n    //     'body',\r\n    //     'resize',\r\n    //     () => {\r\n    //         translateElement(menuElement, -menuWidth, 'rem');\r\n    //         opened = false;\r\n    //     },\r\n    //     true\r\n    //\r\n    // )\r\n\r\n};\r\n\n\n//# sourceURL=webpack:///./static/mobileSearchMenu.js?");

/***/ }),

/***/ "./static/navigationButtons.js":
/*!*************************************!*\
  !*** ./static/navigationButtons.js ***!
  \*************************************/
/*! exports provided: createNavigationButtons, removeNavigationButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNavigationButtons\", function() { return createNavigationButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeNavigationButtons\", function() { return removeNavigationButtons; });\nconst buttonClassName = \"carousel__navigation-button\";\r\nconst activeButtonClassName = \"carousel__navigation-button_active\";\r\n\r\nconst createNavigationButtons = (buttonsNumber, activeButtonIndex, container) => {\r\n    for (let i = 0; i < buttonsNumber; i++) {\r\n        const button = document.createElement(\"button\");\r\n        button.className = buttonClassName;\r\n        container.appendChild(button);\r\n    }\r\n    container.childNodes[activeButtonIndex].classList.add(\r\n        activeButtonClassName\r\n    );\r\n};\r\n\r\nconst removeNavigationButtons = (container) => {\r\n    while (container.lastChild) {\r\n        container.removeChild(container.lastChild);\r\n    }\r\n};\n\n//# sourceURL=webpack:///./static/navigationButtons.js?");

/***/ }),

/***/ "./static/styles/carousel.css":
/*!************************************!*\
  !*** ./static/styles/carousel.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./carousel.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/carousel.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/carousel.css?");

/***/ }),

/***/ "./static/styles/column-grid-layout.css":
/*!**********************************************!*\
  !*** ./static/styles/column-grid-layout.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./column-grid-layout.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/column-grid-layout.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/column-grid-layout.css?");

/***/ }),

/***/ "./static/styles/common.css":
/*!**********************************!*\
  !*** ./static/styles/common.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/common.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/common.css?");

/***/ }),

/***/ "./static/styles/course-details.css":
/*!******************************************!*\
  !*** ./static/styles/course-details.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./course-details.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/course-details.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/course-details.css?");

/***/ }),

/***/ "./static/styles/course.css":
/*!**********************************!*\
  !*** ./static/styles/course.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./course.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/course.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/course.css?");

/***/ }),

/***/ "./static/styles/explore-navigation.css":
/*!**********************************************!*\
  !*** ./static/styles/explore-navigation.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./explore-navigation.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/explore-navigation.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/explore-navigation.css?");

/***/ }),

/***/ "./static/styles/feedback.css":
/*!************************************!*\
  !*** ./static/styles/feedback.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./feedback.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/feedback.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/feedback.css?");

/***/ }),

/***/ "./static/styles/footer.css":
/*!**********************************!*\
  !*** ./static/styles/footer.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/footer.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/footer.css?");

/***/ }),

/***/ "./static/styles/header.css":
/*!**********************************!*\
  !*** ./static/styles/header.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/header.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/header.css?");

/***/ }),

/***/ "./static/styles/layout.css":
/*!**********************************!*\
  !*** ./static/styles/layout.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./layout.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/layout.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/layout.css?");

/***/ }),

/***/ "./static/styles/login-sidebar.css":
/*!*****************************************!*\
  !*** ./static/styles/login-sidebar.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./login-sidebar.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/login-sidebar.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/login-sidebar.css?");

/***/ }),

/***/ "./static/styles/offers.css":
/*!**********************************!*\
  !*** ./static/styles/offers.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./offers.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/offers.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/offers.css?");

/***/ }),

/***/ "./static/styles/search-sidebar.css":
/*!******************************************!*\
  !*** ./static/styles/search-sidebar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./search-sidebar.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/search-sidebar.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/search-sidebar.css?");

/***/ })

/******/ });