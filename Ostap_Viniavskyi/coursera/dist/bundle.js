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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/carousel.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/carousel.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/left-arrow.svg */ \"./src/images/left-arrow.svg\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/right-arrow.svg */ \"./src/images/right-arrow.svg\"));\n\n// Module\nexports.push([module.i, \".carousel {\\n  display: grid;\\n  grid-template-columns: 40px auto 40px;\\n  grid-template-areas: \\\". header .\\\" \\\"larrow  courses rarrow\\\" \\\". buttons .\\\";\\n  grid-row-gap: 20px;\\n  max-width: 1250px;\\n}\\n.carousel__header {\\n  grid-area: header;\\n}\\n.carousel__courses-wrapper {\\n  grid-area: courses;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n}\\n.carousel__swap-button {\\n  height: 40px;\\n  align-self: center;\\n  background-color: transparent;\\n  background-size: 40px 40px;\\n  background-position: center;\\n}\\n.carousel__swap-button_left {\\n  grid-area: larrow;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n}\\n.carousel__swap-button_right {\\n  grid-area: rarrow;\\n  background-image: url(\" + ___CSS_LOADER_URL___1___ + \");\\n}\\n.carousel__navigation {\\n  grid-area: buttons;\\n  justify-self: center;\\n}\\n.carousel__navigation-button {\\n  height: 12px;\\n  width: 12px;\\n  margin: 0 6px;\\n  padding: 0;\\n  border: 1px solid #9b9b9b;\\n  border-radius: 100%;\\n  background: inherit;\\n}\\n.carousel__navigation-button_active {\\n  height: 8px;\\n  width: 8px;\\n  background: #9b9b9b;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/carousel.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/common.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    background-color: #f5f5f5;\\r\\n    font-family: OpenSans, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, sans-serif;\\r\\n}\\r\\n\\r\\nh1, h2, h3, h4, h5, h6, dd, dt, dl, p, blockquote {\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n    line-height: 2rem;\\r\\n    font-size: 1.6rem;\\r\\n    font-weight: 300;\\r\\n    color: #4a4a4a;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    border: none;\\r\\n}\\r\\n\\r\\n.visually-hidden {\\r\\n    clip: rect(0 0 0 0);\\r\\n    height: 1px;\\r\\n    margin: -1px;\\r\\n    overflow: hidden;\\r\\n    position: absolute;\\r\\n    width: 1px;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/course.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/course.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/machine-learning-logo.png */ \"./src/images/machine-learning-logo.png\"));\n\n// Module\nexports.push([module.i, \".course {\\n  position: relative;\\n  height: 270px;\\n  width: 270px;\\n  padding-top: 130px;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-size: 100% 130px;\\n  background-repeat: no-repeat;\\n  box-shadow: 0 1px 6px rgba(31, 31, 31, 0.12), 0 1px 4px rgba(31, 31, 31, 0.12);\\n}\\n.course__course-info {\\n  box-sizing: border-box;\\n  display: flex;\\n  flex-direction: column;\\n  height: calc(100% - 50px);\\n  margin-top: 50px;\\n  padding: 0.75rem 1.5rem;\\n}\\n.course__name {\\n  margin-bottom: 0.5rem;\\n  line-height: 1.5rem;\\n  font-size: 1.25rem;\\n  font-weight: normal;\\n}\\n.course__provider {\\n  line-height: 1.5rem;\\n  font-size: 1rem;\\n  font-weight: 500;\\n  color: hsla(0, 0%, 47%, 0.75);\\n}\\n.course__type {\\n  margin: auto 0 0.5rem 0;\\n  text-transform: uppercase;\\n  line-height: 1.125rem;\\n  font-size: 0.75rem;\\n  font-weight: bold;\\n  font-family: 'OpenSans-Bold', Arial, sans-serif;\\n  color: hsla(0, 0%, 47%, 0.75);\\n}\\n.course__provider-logo-container {\\n  position: absolute;\\n  top: calc(130px - 0.5rem - 55px / 2);\\n  height: 55px;\\n  width: 55px;\\n  padding: 0.5rem;\\n  border: 1px solid #E1E1E1;\\n  border-radius: 3px;\\n  background-color: white;\\n}\\n.course__provider-logo {\\n  width: 55px;\\n  height: 55px;\\n}\\n.course:hover {\\n  box-shadow: 0 3px 10px rgba(31, 31, 31, 0.16), 0 3px 10px rgba(31, 31, 31, 0.23);\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/course.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/feedback.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/feedback.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".feedback {\\n  max-width: 1150px;\\n  background: white;\\n  overflow: hidden;\\n}\\n.feedback__user-photo {\\n  float: left;\\n  height: 150px;\\n  width: 150px;\\n  margin: 50px;\\n  border-radius: 100%;\\n  object-fit: cover;\\n}\\n.feedback__quote {\\n  margin: 3rem 2rem 1rem 0;\\n  line-height: 2rem;\\n  font-size: 1.6rem;\\n  font-weight: 300;\\n  color: #4a4a4a;\\n}\\n.feedback__caption {\\n  margin-right: 2rem;\\n  text-align: right;\\n  font-style: italic;\\n  font-size: 1.4rem;\\n  font-weight: 300;\\n  color: #4a4a4a;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/feedback.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".footer {\\n  display: flex;\\n  justify-content: space-around;\\n  height: 20rem;\\n  padding: 1rem 15% 0 15%;\\n  font-size: 1.0625rem;\\n  background: white;\\n}\\n.footer__logos {\\n  width: 35%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  padding: 2px 0;\\n}\\n.footer__motto {\\n  margin: 1rem 0;\\n}\\n.footer__apps-link {\\n  float: left;\\n  margin-top: 1em;\\n  margin-right: 0.5em;\\n}\\n.footer__navigation {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  padding: 2px 0;\\n}\\n.footer__navigation-header {\\n  margin: 0 0 0 0.1em;\\n  font-size: 1rem;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}\\n.footer__navigation-link {\\n  padding: 0.4rem 0;\\n  color: #757598;\\n  text-decoration: none;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/coursera_logo.svg */ \"./src/images/coursera_logo.svg\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/down-arrow.svg */ \"./src/images/down-arrow.svg\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../images/search_icon.svg */ \"./src/images/search_icon.svg\"));\n\n// Module\nexports.push([module.i, \".header {\\n  display: flex;\\n  align-items: center;\\n  height: 4em;\\n  border-bottom: 1px solid hsla(0, 0%, 78%, 0.75);\\n}\\n.header__main-logo {\\n  height: 2rem;\\n  width: 8rem;\\n  margin: 0 1.5em;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-repeat: no-repeat;\\n}\\n.header__explore-button {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 2.5em;\\n  width: 6.5em;\\n  margin-right: 3em;\\n  border: none;\\n  border-radius: 3px;\\n  background-color: #4285f4;\\n  color: #ffffff;\\n  font-weight: 700;\\n  font-size: 14px;\\n}\\n.header__explore-more-label {\\n  height: 0.8em;\\n  width: 0.8em;\\n  content: url(\" + ___CSS_LOADER_URL___1___ + \");\\n  padding: 0 0.2em;\\n}\\n.header__search-bar {\\n  display: flex;\\n  justify-content: space-between;\\n  height: 2.5em;\\n  width: 30%;\\n}\\n.header__search-input {\\n  height: 100%;\\n  width: calc(100% - 40px);\\n  padding: 0 0.7em;\\n  border: 1px solid hsla(0, 0%, 85.5%, 0.75);\\n  border-radius: 2px;\\n  font-size: 16px;\\n}\\n.header__search-input::placeholder {\\n  color: hsla(0, 0%, 47%, 0.75);\\n}\\n.header__search-submit {\\n  height: 40px;\\n  width: 40px;\\n  background: #4285f4 url(\" + ___CSS_LOADER_URL___2___ + \") no-repeat center;\\n  border: none;\\n  margin-left: 1px;\\n}\\n.header__login-navigation {\\n  display: flex;\\n  align-items: stretch;\\n  height: 2.5em;\\n  margin-left: auto;\\n  margin-right: 2%;\\n  padding-left: 2em;\\n}\\n.header__navigation-text {\\n  display: inline-block;\\n  padding-top: 0.5em;\\n}\\n.header__enterprise-version-switch {\\n  width: 8em;\\n  border-right: 1px solid hsla(0, 0%, 47%, 0.75);\\n  color: hsla(0, 0%, 47%, 0.75);\\n}\\n.header__login-link {\\n  width: 5em;\\n  color: #4285f4;\\n  text-align: center;\\n}\\n.header__login-link_sign-up {\\n  background: #4285f4;\\n  color: #ffffff;\\n  border-radius: 100px;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".layout__carousel {\\n  margin: 1em auto 1em;\\n}\\n.layout__offers {\\n  margin: 1em auto 1em;\\n}\\n.layout__feedback {\\n  margin: 4em auto 4em;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/layout.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/offers.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/offers.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".offers {\\n  display: grid;\\n  grid-template-rows: [header-start] 2rem [list-start] auto;\\n  grid-auto-flow: column;\\n  grid-row-gap: 20px;\\n  max-width: 1150px;\\n}\\n.offers__header {\\n  grid-column: offer-start / description-end;\\n}\\n.offers__list {\\n  grid-column: offer-start / description-end;\\n  display: grid;\\n  grid-template-columns: [offer-start] 160px [offer-end description-start] auto [description-end];\\n  align-items: center;\\n  grid-row-gap: 1px;\\n}\\n.offers__offer-box {\\n  display: flex;\\n  justify-content: center;\\n  height: 100%;\\n  align-items: center;\\n  background-color: #fff;\\n}\\n.offers__title {\\n  padding: 25px 30px;\\n  text-transform: uppercase;\\n  font-size: 0.875rem;\\n  font-weight: 700;\\n  color: #525252;\\n  background-color: #fff;\\n}\\n.offers__title_centered {\\n  padding: 25px 0;\\n}\\n.offers__offer {\\n  display: inline-block;\\n  margin: 0 4px;\\n  padding: 0.1875rem 1.125rem;\\n  border-radius: 4px;\\n  text-align: center;\\n  text-transform: uppercase;\\n  font-size: 0.875rem;\\n  font-weight: bold;\\n  color: white;\\n}\\n.offers__offer_blue {\\n  background-image: linear-gradient(90deg, #4fc1e9, #4a89dc);\\n}\\n.offers__offer_violet {\\n  background-image: linear-gradient(90deg, #5d9cec, #967adc);\\n}\\n.offers__offer_green {\\n  background-image: linear-gradient(90deg, #48cfad, #3bafda);\\n}\\n.offers__offer_pink {\\n  background-image: linear-gradient(90deg, #ac92ec, #d770ad);\\n}\\n.offers__offer_orange {\\n  background-image: linear-gradient(90deg, #fc6e51, #f6bb42);\\n}\\n.offers__description {\\n  padding: 15px;\\n  background-color: #fff;\\n  font-size: 0.9375rem;\\n  color: #373a3c;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/offers.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/coursesGenerator.js":
/*!*********************************!*\
  !*** ./src/coursesGenerator.js ***!
  \*********************************/
/*! exports provided: generateCourse, generateCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateCourse\", function() { return generateCourse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateCarousel\", function() { return generateCarousel; });\nconst generateCourse = (data) => {\r\n    const parentElement = document.createElement('article');\r\n    parentElement.className = 'course carousel__course';\r\n    parentElement.innerHTML = `\r\n    <a class=\"course__course-info\">\r\n        <h3 class=\"course__name\">${data.name}</h3>\r\n        <span class=\"course__provider\">${data.organization}</span>\r\n        <h4 class=\"course__type\">${data.type}</h4>\r\n        <span class=\"course__provider-logo-container\">\r\n          <img class=\"course__provider-logo\" src=\"./src/images/stanford_small_logo.png\" alt=\"Course organizer logo\">\r\n        </span>\r\n    </a>\r\n    `;\r\n    return parentElement;\r\n};\r\n\r\nconst generateCarousel = (data) => {\r\n    const parentElement = document.createElement('section');\r\n    parentElement.className = 'carousel layout__carousel';\r\n    parentElement.innerHTML = `\r\n    <h2 class=\"carousel__header\">${data.name}</h2>\r\n    <button class=\"carousel__swap-button carousel__swap-button_left\"></button>\r\n    <div class=\"carousel__courses-wrapper\"></div>\r\n    <button class=\"carousel__swap-button carousel__swap-button_right\"></button>\r\n    <nav class=\"carousel__navigation\">\r\n      <button class=\"carousel__navigation-button carousel__navigation-button_active\"></button>\r\n      <button class=\"carousel__navigation-button\"></button>\r\n      <button class=\"carousel__navigation-button\"></button>\r\n    </nav>\r\n    `;\r\n    return parentElement;\r\n};\n\n//# sourceURL=webpack:///./src/coursesGenerator.js?");

/***/ }),

/***/ "./src/images/coursera_logo.svg":
/*!**************************************!*\
  !*** ./src/images/coursera_logo.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICB3aWR0aD0iMTI3cHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDEwOCAxNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTA4IDE3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iIzRhODlkYyIgZD0iTTU0LjI4MSw1Ljc3M2MwLjA2Ni0xLjI2OSwwLjUyMS0yLjMwNiwxLjIzMi0zLjExNVYxLjU4aC0wLjk0NWMtMS45MSwwLTMuNTI3LDAuNzMyLTQuNDY3LDIuMzg2aC0wLjA1NQogIFYxLjc2MmgtNC44OTl2MTMuNDQxaDQuOVY5Ljc3N2MwLTIuMzAzLDAuNjc0LTQuMDU5LDMuMzkzLTQuMDU5QzUzLjczNiw1LjcyLDU0LjAxMyw1LjczNyw1NC4yODEsNS43NzN6Ii8+CjxwYXRoIGZpbGw9IiM0YTg5ZGMiIGQ9Ik05MS4zOCw1LjcyNGMwLjQwNy0xLjE4OCwxLjA2Ny0yLjI0NiwxLjkyNS0zLjA5NXYtMS4wNWgtMC45NDNjLTEuOTExLDAtMy41MjYsMC43MzItNC40NzEsMi4zODVoLTAuMDUzCiAgVjEuNzYyaC00LjkwMnYxMy40NDFoNC45MDJWOS43NzdjMC0yLjMwMywwLjY3Ni00LjA1OSwzLjM5NS00LjA1OUw5MS4zOCw1LjcyNHoiLz4KPHBhdGggZmlsbD0iIzRhODlkYyIgZD0iTTY0LjIzMiw1LjIyYy0wLjc1Ni0wLjM5My0xLjgwOC0wLjY1NS0yLjY0NS0wLjY1NWMtMC41NjIsMC0xLjUzMywwLjIzNC0xLjUzMywwLjkxNwogIGMwLDAuOTE4LDEuNTMzLDEuMDQ4LDIuMjExLDEuMTgyYzIuMjg0LDAuNDQ0LDQuMDEyLDEuNDkzLDQuMDEyLDMuOTc5YzAsMy41MzYtMy4zMTMsNS4wMDgtNi41Miw1LjAwOAogIGMtMS45NjcsMC0zLjkwMi0wLjU1MS01LjU3NC0xLjU0N2wxLjc3Ny0zLjMzYzAuOTk1LDAuNjg0LDIuNjY1LDEuMzYzLDMuODc3LDEuMzYzYzAuNjIsMCwxLjUzNS0wLjI4NywxLjUzNS0xLjAyMQogIGMwLTEuMDQ4LTEuNTM1LTEuMTAzLTMuMDcyLTEuNDk1Yy0xLjUzMy0wLjM5My0zLjA2Ni0xLjEyNS0zLjA2Ni0zLjUzNmMwLTMuMzAyLDMuMDY2LTQuNzY3LDYuMDg4LTQuNzY3CiAgYzEuNTYyLDAsMy4xMjUsMC4yMzUsNC41NDksMC44NjRMNjQuMjMyLDUuMjJ6Ii8+CjxwYXRoIGZpbGw9IiM0YTg5ZGMiIGQ9Ik0xMDgsMTUuMjAzaC00Ljl2LTEuNDk1aC0wLjA1NGMtMC44NjIsMS4zMzYtMi41NjIsMS45MzgtNC4xNzUsMS45MzhjLTQuMDk2LDAtNi45NzUtMy4zMjgtNi45NzUtNy4xOAogIGMwLTMuODQ4LDIuODI4LTcuMTUxLDYuOTItNy4xNTFjMS41ODgsMCwzLjI2LDAuNTc2LDQuMjgzLDEuNzU0VjEuNzYyaDQuODk5TDEwOCwxNS4yMDNMMTA4LDE1LjIwM3ogTTk2Ljk1OSw4LjQ5NQogIGMwLDEuNzAyLDEuMTYsMy4wMTIsMy4xNSwzLjAxMmMxLjk5MiwwLDMuMTQ3LTEuMzA4LDMuMTQ3LTMuMDEyYzAtMS42NTEtMS4xNTUtMy4wMzktMy4xNDctMy4wMzkKICBDOTguMTE5LDUuNDU3LDk2Ljk1OSw2Ljg0NCw5Ni45NTksOC40OTV6Ii8+CjxwYXRoIGZpbGw9IiM0YTg5ZGMiIGQ9Ik04Mi4xNjMsOS4yODNINzEuODQ2YzAsMS45MzcsMS4wNTMsMi45ODQsMy4wNzIsMi45ODRjMS4wNSwwLDEuODAzLTAuMzM5LDIuMzQzLTEuMjMxaDQuNzE0CiAgYy0wLjc4MSwzLjE3MS0zLjg3OSw0LjYxMi03LjAyOSw0LjYxMmMtNC41NzUsMC03Ljk5NS0yLjUxNy03Ljk5NS03LjE1MmMwLTQuNDgsMy4xNDctNy4xNzgsNy42NDQtNy4xNzgKICBjNC43OTMsMCw3LjU3LDIuODgzLDcuNTcsNy40NjZMODIuMTYzLDkuMjgzTDgyLjE2Myw5LjI4M3ogTTc3LjYxMSw2LjUzYy0wLjI0My0xLjI4NC0xLjQ1NS0yLjEyMi0yLjc3My0yLjEyMgogIGMtMS40MjksMC0yLjYwOSwwLjczMS0yLjkxLDIuMTIySDc3LjYxMXoiLz4KPGc+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjNGE4OWRjIiBkPSJNMjkuNTYxLDguMjYxYy0wLjAwNS0wLjExNi0wLjAxMy0wLjIyOS0wLjAyMi0wLjM0NGMwLDAsMC0wLjAwMSwwLTAuMDAyYzAsMCwwLTAuMDAxLDAtMC4wMDIKICAgICAgYy0wLjExLTEuMjQ3LTAuNTIyLTIuNDE0LTEuMjIxLTMuNDY4Yy0wLjMxMi0wLjQ3LTAuNjY5LTAuODk3LTEuMDY4LTEuMjhjLTAuNTgzLTAuNTYxLTEuMjU4LTEuMDI1LTIuMDE5LTEuMzkyCiAgICAgIGMtMS4xNDUtMC41NDctMi40MS0wLjgyMy0zLjc2LTAuODIzYy0wLjEzMiwwLTAuMjcsMC4wMDItMC40MDksMC4wMDdDMjAuMTE0LDEsMTkuMTk3LDEuMTgsMTguMzM1LDEuNDk3CiAgICAgIGMtMC44NjksMC4zMTQtMS42MjYsMC43MjktMi4yNDUsMS4yMjdjLTAuMTI2LDAuMS0wLjI2MywwLjIyMy0wLjQxLDAuMzU4bC0wLjEwNiwwLjEwNEwxNS40MjksMy4zNGgwLjAwMWgwLjAwMWwtMC4wNjgsMC4wNjcKICAgICAgTDE1LjMzLDMuNDQzbC0wLjE3MywwLjE4MmMtMC4xMjgsMC4xNDQtMC4yNSwwLjI4OC0wLjM2NCwwLjQyOWwtMC4wMDEtMC4wMDJsLTAuMDA0LTAuMDA0Yy0wLjIzNywwLjI4OC0wLjQ1NiwwLjU4Ni0wLjYxNywwLjg1NAogICAgICBjLTAuMTA5LDAuMTcyLTAuMjE2LDAuMzQ5LTAuMzE4LDAuNTI2TDEyLjQ0LDguMjg1bDAuMDAyLDAuMDAybC0wLjA3NCwwLjE0NWwtMC4xNTYsMC4zMTZjLTAuMzEsMC42MjctMC42NDIsMS4yNTItMS4wMTMsMS43NjgKICAgICAgYy0wLjgyNywwLjkwNy0xLjc2MiwxLjM1MS0yLjk2NCwxLjM1MWMtMC4wODQsMC0wLjE3LTAuMDA0LTAuMjU4LTAuMDA5Yy0wLjcyNC0wLjAyOS0xLjM0NS0wLjItMS44OTYtMC41MjYKICAgICAgYy0wLjA1OS0wLjAzNS0wLjExNi0wLjA3MS0wLjE3MS0wLjEwOGMtMC40NS0wLjI5OS0wLjc5NS0wLjY4My0xLjA1My0xLjE2MmMtMC4yOTEtMC41NDMtMC40Mi0xLjA5OC0wLjQwMi0xLjY4NgogICAgICBDNC40NTYsOC4zNiw0LjQ1Nyw4LjM0Niw0LjQ1Nyw4LjMzM0M0LjQ5Niw3LjM5Nyw0Ljg1Myw2LjY2OSw1LjU3Miw2LjA0QzUuNzQ3LDUuODg5LDUuOTMsNS43NjEsNi4xMjEsNS42NDcKICAgICAgYzAuMDI3LTAuMDE2LDAuMDU0LTAuMDMxLDAuMDgxLTAuMDQ1YzAuNTM0LTAuMjkxLDEuMTQyLTAuNDM2LDEuODM5LTAuNDM2bDAuMjE3LDAuMDA2QzkuMzY1LDUuMjE0LDEwLjIxOSw1LjU2LDEwLjksNi4yMzUKICAgICAgTDEzLjAzNiwyLjRjLTAuNTExLTAuMzQyLTEuMDg4LTAuNjM2LTEuNzI0LTAuODc1Yy0wLjAyNC0wLjAwOS0wLjA0OS0wLjAxOS0wLjA3NC0wLjAyN2MtMC4wNzYtMC4wMjctMC4xNTEtMC4wNTUtMC4yMjktMC4wOAogICAgICBDMTAuMzMzLDEuMTkyLDkuNjI0LDEuMDUzLDguODk0LDAuOTlsMCwwQzguODc2LDAuOTg3LDguODU2LDAuOTg1LDguODM4LDAuOTgzQzguNzI2LDAuOTc2LDguNjEyLDAuOTYyLDguNSwwLjk1NwogICAgICBDOC4zNzgsMC45NTIsOC4yNTUsMC45NSw4LjEzNSwwLjk0OUg4LjA2NmMtMS4zNDMsMC4wMDUtMi41OTEsMC4yOC0zLjczMiwwLjgyNUMzLjA1NiwyLjM5LDIuMDIsMy4yODcsMS4yNTIsNC40NDMKICAgICAgQzAuNDg2LDUuNTk5LDAuMDY4LDYuODgyLDAuMDA4LDguMjU5QzAuMDAzLDguMzc3LDAsOC40OTQsMCw4LjYwOWMtMC4wMDEsMS45MjYsMC43MDEsMy42MiwyLjA5Nyw1LjA0MgogICAgICBjMS40NTcsMS40OTIsMy4zNTIsMi4yOTYsNS42MjcsMi4zOTFjMC4xNDYsMC4wMDYsMC4yOSwwLjAxLDAuNDM0LDAuMDFjMS4yODcsMCwyLjQ3OC0wLjIyOSwzLjU0Ni0wLjY4NwogICAgICBjMC4yNjctMC4xMTQsMC41MjYtMC4yNDgsMC43OTEtMC4zOTdjMC4xNDQtMC4wODMsMC4yOC0wLjE3MSwwLjQxNS0wLjI2NWwwLjEtMC4wNjdsMC4xNjgtMC4xMTUKICAgICAgYzAuMjAyLTAuMTQ1LDAuMzkxLTAuMzAyLDAuNTc1LTAuNDY5bDAuMDY0LTAuMDYxYzAuMTA4LTAuMTAzLDAuMjE2LTAuMjA3LDAuMzE4LTAuMzE0bDAuMzgzLTAuNDMzbDAuMTQ2LTAuMTgzbDAuMDY4LTAuMQogICAgICBsMC4wNjgtMC4wOThjMC41NjktMC45NTYsMi40MjEtNC40MzUsMi40MjEtNC40MzVWOC40MjFsMC4xMS0wLjIxMmwwLjA5Mi0wLjE2NmMwLjI3My0wLjQ5NywwLjQ3LTAuODUsMC43MzEtMS4yMjFsMC4wMDctMC4wMTEKICAgICAgYzAuNjA5LTAuODgzLDEuNjU2LTEuNTEyLDIuODktMS42MThjMi4wNy0wLjE3OCwzLjg4NCwxLjE4Miw0LjA1MSwzLjAzOGMwLjE2NiwxLjg1Ni0xLjM3OCwzLjUwNS0zLjQ0OCwzLjY4NAogICAgICBjLTAuNDMxLDAuMDM3LTAuODUsMC4wMDgtMS4yNDUtMC4wNzlsLTAuMDEsMC4wMDRjLTEuNTE5LTAuMzE2LTIuNDg2LTEuNDI0LTIuOTYzLTEuOTE5bC0xLjk5MiwzLjY2MwogICAgICBjMCwwLDAuNjE5LDAuNjI0LDEuMDQzLDAuOTM2YzAuNDI1LDAuMzExLDAuOTc0LDAuNjE3LDEuNDEyLDAuODA3YzEuMDYzLDAuNDU0LDIuMjE5LDAuNzI2LDMuNDk2LDAuNzI2CiAgICAgIGMwLjE0OCwwLDAuMTE4LDAsMC4yNzItMC4wMDZjMi4yNzMtMC4wOTUsNC4yOTktMC45NjYsNS43Ni0yLjQ1OGMxLjM4NC0xLjQxNywyLjEzNS0zLjAzNSwyLjE0Mi00Ljk1VjguNTgyCiAgICAgIEMyOS41NjgsOC40NzYsMjkuNTY1LDguMzY5LDI5LjU2MSw4LjI2MXoiLz4KICA8L2c+CjwvZz4KPGc+CiAgPHBhdGggZmlsbD0iIzRhODlkYyIgZD0iTTM3LjE4MSwxNS42NTdjLTEuMDMzLDAtMS45Ny0wLjEyLTIuODExLTAuMzZjLTAuODQxLTAuMjQtMS41NTktMC42MTktMi4xNTQtMS4xMzkKICAgIGMtMC41OTctMC41Mi0xLjA1Ny0xLjE4Mi0xLjM4MS0xLjk4NXMtMC40ODYtMS43NzEtMC40ODYtMi44OTlWMS43NTloNC43Mjd2Ny40NTVjMCwwLjg0NSwwLjIwMiwxLjQ1NywwLjYwNSwxLjgzOQogICAgYzAuNDA0LDAuMzgzLDAuOTE3LDAuNTc0LDEuNTM5LDAuNTc0YzAuNjM2LDAsMS4xNTItMC4xNzgsMS41NS0wLjUzNWMwLjM5Ni0wLjM1NywwLjU5Ni0wLjk0OSwwLjU5Ni0xLjc4MVYxLjc1OWg0LjcyN3Y3LjQxNgogICAgYzAsMS4xNjgtMC4xNjYsMi4xNjEtMC40OTcsMi45NzhjLTAuMzMxLDAuODE4LTAuNzk4LDEuNDg2LTEuMzk5LDIuMDA2Yy0wLjYwNCwwLjUyLTEuMzMxLDAuODk4LTIuMTg2LDEuMTM5CiAgICBDMzkuMTU2LDE1LjUzNywzOC4yMTMsMTUuNjU3LDM3LjE4MSwxNS42NTd6Ii8+CjwvZz4KPC9zdmc+\"\n\n//# sourceURL=webpack:///./src/images/coursera_logo.svg?");

/***/ }),

/***/ "./src/images/down-arrow.svg":
/*!***********************************!*\
  !*** ./src/images/down-arrow.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDUxLjg0NyA0NTEuODQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ3IDQ1MS44NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjUuOTIzLDM1NC43MDZjLTguMDk4LDAtMTYuMTk1LTMuMDkyLTIyLjM2OS05LjI2M0w5LjI3LDE1MS4xNTdjLTEyLjM1OS0xMi4zNTktMTIuMzU5LTMyLjM5NywwLTQ0Ljc1MSAgIGMxMi4zNTQtMTIuMzU0LDMyLjM4OC0xMi4zNTQsNDQuNzQ4LDBsMTcxLjkwNSwxNzEuOTE1bDE3MS45MDYtMTcxLjkwOWMxMi4zNTktMTIuMzU0LDMyLjM5MS0xMi4zNTQsNDQuNzQ0LDAgICBjMTIuMzY1LDEyLjM1NCwxMi4zNjUsMzIuMzkyLDAsNDQuNzUxTDI0OC4yOTIsMzQ1LjQ0OUMyNDIuMTE1LDM1MS42MjEsMjM0LjAxOCwzNTQuNzA2LDIyNS45MjMsMzU0LjcwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNGREZERkIiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPjwvZz4gPC9zdmc+Cg==\"\n\n//# sourceURL=webpack:///./src/images/down-arrow.svg?");

/***/ }),

/***/ "./src/images/left-arrow.svg":
/*!***********************************!*\
  !*** ./src/images/left-arrow.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI5IDEyOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI5IDEyOSIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45MjI3NDUgMCAwIDAuOTIyNzQ1IDQuOTgyOTYgNC45ODI5NikiPjxnPgogICAgPHBhdGggZD0ibTg4LjYsMTIxLjNjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtNTEtNTEgNTEtNTFjMS42LTEuNiAxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC01NCw1My45Yy0xLjYsMS42LTEuNiw0LjIgMCw1LjhsNTQsNTMuOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz48L2c+IDwvc3ZnPgo=\"\n\n//# sourceURL=webpack:///./src/images/left-arrow.svg?");

/***/ }),

/***/ "./src/images/machine-learning-logo.png":
/*!**********************************************!*\
  !*** ./src/images/machine-learning-logo.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,UklGRiYSAABXRUJQVlA4IBoSAABQXgCdASpPAb0APnU4l0ikoyIhJFS68JAOiWVu4W2uJRmmKGo0Dode1gPoJ6Zv8Puy/MV+oH7Fe6n6PP755qvW1/1X1EfLa9nn+8f8r9o/a31TuXnyXxxdAfvqXech/MPx1GV8mtQjxpwRIBPrX3/uqh4c17+gT+rPSN0i54oNHDUTBKOmy0nUZO9gxoPfOVY3bVvsfmEA4FWHryxv32e38dXPUiDg2JJXGMuSuEWcy9zhH4gm/KcTNqo7XQXWpRY38e6S25f/SohR5HPUhOwpZBFh4VfO/UAs/w8g/Ep+SpinVfEqbR8+akq97D9jQLjVK2ihwYW15JTvV1tguSevSYCumAHDCxUx02r/UVLarBbFgVsZHsQBYinXtp0UPGJVpM+SVStoobtXEUs7DYNsUtL8a1Qw1GjipPAzuy3qhPnhFiKDw4tpZi54rWLJO5hawM2S0HcPdgeKHBsSodsV+cYfwsw51ERS6iS+OTBq/6Xkedr0SBAUDKF/ccWDNlFYiGeNqrGqVtFDZkJGSqVwTIQo2BCi/2EqGNTpxnrkYQ5scVcvZ4eblRNQl25ZqiY02nV+9dpBwbEqHR+7s4EgkpgRgF/8Daw14GGaAKaoUra2/nBQ9SGb5jVbhtDuj6YA1UPUIrzRNhxKtraKHBsKW+WX/mOzXpNo6w/bS6Gb1WFthtYAj5+2KrXwunl8+251q1v8OQ2A/w1S2rqCGdjDPWN4MIIj71HiaGs/io9Js5chaCjyOehK6p7OB4xdZUeg06Or0b9dhAXr8YTIHRcvS/BpE8p4oLiMYiNHyYy3IdvIOj/4Vc9Ys/n0JgsYY8Kfh2SNkCW8nV/V3k9SINpF/yVQLW0lLdRM4iVGRQAfn0qOvN63k+DVBHqjd4e8p2pbJunKA1EWpP4kj9LKsEqj+V6fP74xF8SSf9hJhxMm4wcMzLQnXyNKiFHkDkdqzHg3W5Ah0BT+6vpL02Cu1X+qg58S+WY3CfEWx3OxQBzJdmSqj19VdlK2ihrgAP7z7WdiXrQenBOWi3vfvegYMeSdnrPCvsNcrkt6uY+u4Kb894BwLcYLOLZz4oCR67PMjq0bjrvs853PFDaP0hHrV8OFVMpDMfrfNT50lmBaTHIXPWcBrufLPaWti0VyuHKC4Hbzp4UtSQKq7/tYR2/U7/J/aQgGL/Nwpds0q5douv/ZgxL/ESerAbNSqPcaXfJJlz61s7qH8JZkBcEQoHeLf4InofJzMsxCmQ4uumr+36Uaa+lS7KlspPDQwf7T81wmfsWf+nGd+dop3A9ihU8iHVwGEepfaXineugJJzT64NQx8AfcF6VZWr1QFDzpk/UWA2/t4D+LIHMiN2beW19ZaMmS4gE82rYzAGBO9CUeU6MhXPp7GkxQMLkk5mUbhvo7HArC1o9+v5EF3PqnFSPo+huVli3/N8XHls1JpfAzKBhGZxXSl3ou+Z+VCga5Tc/rZ88t+hBfhQABWFVEybgma+eiX3czPI7kLmKbofthCZAB611mNdQHVOkxrxJkXMvM6n5YSBaMWwjYA5Q9cGIzeb/7fms3XSy7EhZbC5GmilQIsmtdalrEVqh175sCzRilMdLFGc3kbAPsDfXMsHIEg7qfJlvVwbvLm4u2zt/8q5eEycmVGK0IyanGURCy3cUh3/1nJ3zE0vaJMfa1N/ODxks4kJ302MRekNzVZhmFp0botILERpawtzmDa1MMSGuCxhiKlN0eDrtsE+rw7Nbh13OZFm/qVY5Je1JhwyplKEYrEBQwBnFrsgd280KpeS1ObEBUHVkInI2wp+XdC5Ydq0BnQb7cXxpkQ7aOnwWDkASvyk95FAXXnxn95/LNCznbYi4GEBnooLG6tSkPkazV1mG9/6Z1NW2stVyH2KvPVbytenEY5N5ogiEDCOb0BeyVvrbIKt/QCayrY6EAFg+hu3wV/0ms5+r2P0BMfNpQwi0KHkiIsiVIH7Gg31DSoXdFZ01eqYQgUC10Ku3VQAQMtyNMyovdABOfl88SFRxfqfdC3rgahlgdKEPpQheJfbziUNlqqwUBYaG1kb+cumjt4XdyxH4c0SvPrzuaDhLFD1MgOWwT3izm2GKZGpVRzX9tQsvhfeAarPB5Fh/vnUzKowW+4k3CHaDYfCdcbuOcEPhzWXI/rHdAy0VIuWUkv1KmctVn1dju6/c/2mxS5GyKpMLtQ2viMruYBqABXOvwqOgvFr9m/QKfVLYMKvBjFPvqO/DfpVLC7ghyNByWHQtivKPxUF0TtWznF00dzASdvZTJ1Z6LAGp9gUd63l5J8ZBKsXnFjqzrHFjnKTgk4/hw9xnYIQqhJ1xvx9+ifKhIh1kpKd/R+Lsu9XDjzTNezetPr7wqgr8N/xI0v76IYW26Z8e+DAa08AerJ4txIACtfJUO3J2IUpJOJu6AqLmqYLDuveZHkwtFMU261jBI7vZtrhGjTHNTpSF0kD6p7B94+aUW7vU5xBua3tO3w8rumVm6UN1AtdEB3gQaM1gMxUgFxERpjfvvj09lUMpdWWpLylRYSQg/ULEiJyCP4LpcXikLt6pvsxsL+boJ7jiepVffEc37pLjE4+79lXsNjpoDP9VtPmyn7EUsvza0D3k+Bbg4IjaOoYgMBwBfVKG7lYVivsL3dfE7xCIG9rQGdoFUqon/jXi5f15ReSjrCYRCIyY+9xGRElt96qsm+N5I5hdKljWKDVV5c6pBp0Sb0hPtw8KyxlOULZY9Gji52azS3kb2d4SjyLzCS7NV2PacyZMwJddczMKMsPLnadmUnBi3frYdojNe2Jxrcq7NebmL0iMBCIEEcO83AY+7sDFYUXSKbRzHb+t9n+rKkhp130L06UuKkKzV6uE3ZI/LehhxzJJ4qp1/APAtbxpiRgw5eoDiVT5Yw4dbGogqh1YIKqq/mIhIsL8q0UCiy6Mb8kZE60010hWpfYkYWa4S9vm8NmggJTR65SgwuhS+eruIpYoSiiQIpgCiKoLe/5+ReAXN4p12ww7MmGzSdvAcsWcyMrhrrxmQ20PK0dWVkwGk8TdrXLkp90r7ACejSqBCm6+3PGdxkchEZ+ITSi6Lk31B1beqZHcqd6yTVCtVBdYvgc+TyXs5MfxM7yEV4ePrxX2aZ8/SSDYSBvR8Loc/xvT2b42dQ/+a+bk/EzAEX//XQdz1vaApvvxdiYvfxuDHtDzYmRm6+0St2QLgtGFCozGOcgqZqrx5Lot8XwkFVQDZYVRfCBOGsfrk9BOeHqtLaMU0U/eYlJN1M1BFB0iwSI/kXG/y1ZautKu9cf/zoEPm8PrsxaWjiSwXhOlASbPBPvjd5ZXE6x+EGuASANNC0ppIu9rkOTy/5VDsZK25ewEyZIif6sMMb3KhiSaet4jBtoUKV/m19CMYCbA9D8D1VrlsI3+xCAL5cCRm5Gc2c6cGm2sJw4HBtos8ISZfsaM9JhFNo7Ipy76f5QnnpBB2S7NdtUwrc3YRplO358S7GLTYASH6XonjYPtOyVbryfsUt7YxF4hB+sqz77gXNf633YSDMDC3bAX/24djModljV/ogRjJeqSh7gQS5G9v1Butn+Y/TcYwZFidx6/mN1c3sUhRdgk6ipHI6DWZjc9TG2RBC+TNCZz5wBUcrm2aOzjMlTbJgl/xeDOyigfnoYzi26rDVzaOxCT87u8pmf/kurcRPXiCUby7uzaKc67QozfyDbmx3/nnt6pjcsNnXNePhsYDYv3FKxEML8Emn+SLZDSywuTvrgv8kqKl83fxEHmnZI1aABCFzerbSwL889vzLuytpj6hp/7RSalpXcxs4u4E3MDsKFuUM0+6b8Euqt/+eWCtTN/nSMkGLTRMk9NX5tacMC4C/XGBycZ6hhBaD6qGW6v+Fc63BfW9IwrXddcGsi2P/ywTZdxXOix2DmA1Yf4MCEifRZ17xpbwA2VaznUvUX3/ms3dRtHvf0c0GYXJqj/JpzL9EcUETPVkY0tk9+4AG/jUbEKxxgN3+ZFWpLXik55rAEZ5ujltk1aJEE0OCfWk29kvymu3rTLBeDAbX70J+4CHU/0CkLOwDbpChslVX/RMMLgIhTMInkqJdMN8LDI6lkCyoKcBkbcPu0xh3H2fVCjunhPmPoOc0O8m7053fzOtGwJEHaCZbIYNUveNkDtBAMnfUiSg2QthQTsxlE09Vnw8iMrKIBoRPGzBU7tp0TxyfqTncWF/mp8sI+D6Sy8/+Fm8zVf6+4Wt417Pw0UkrjE3xNuI5vwfSLC/sYpe9zRV26si0LsINsZ95he44zrFmt4WtI2MQUm7x5n/rGHn9TKrg/FfrG9+yoNzDjOgIB0WxfJCDhDoUMT0EjAXrBTB7pNZThwPJj94zmdKKLhRisvcN62haYUCaJkZYy64fYS35D7gmK0W4ywJecSKTHRVr/EGkLCzuUii5Rr1xWonUU27SUxYiI+2Sw8xH3Lt/KPhEoVw++1LSXV0Yd+jQd9kVqxc9fEcWEHgzVVLhL9O4fbp/58KnljhpcURtzz2oVPH6oK/7hMy4Qmjnz6BbsYoyElBJ5YRu3jIU1nbL+1PmhKOhZQixB6g06pC8C/d+mhO+g1xclzLZLDbzabyHvg/JJ0CbBtA7IH7yX0vTX8PCCuAThAmXErha3m6fL0pTGFVbwOZVnUvTHyWWtEcGYt7QoTTUSBU4z0X8w3NZxvP3nVS0ff8WBW/fEtELGk1KynIPXYE1KfVnGIIirT/BqXXMnwdBzDlqLqAo5bzlquZIH7blRvbYbJBfFJDyOO5ANQ0qgVXQZRk1yo5pnQrU98btAboMXoXmoOaWUJKLgN6CypxLA2A39GHXFZUQ6jfi+h9GP2LekRb9J+Ud13Jrl5t+/4ePxzIuOVYwHWznHasB47+BEXqs5leH6HgKpPc89SDmkfD+owFNZnNTvThZQYByu5vCDoARiKZHMAAUCXf80JLjQsxXYPiGacyVmpSIKteWkKYc4UvK+M50bRaugjkl9Bf+LjNItfASQbChuz++NImQj1Ys8NOy5HMWEDRaelOK4isVZhL/EHevh30bw4FNVlozBWB7D+XrT8k7ko5TpGP4QXMxYryRzTyh0/aPHNJGkjbpVnDM2Iu0a7LpmRztqaHzn9xBRYZsoj/soKw+HjQL36TTdyvqvNH5f17388AGM5w4hAIk94Locq+6ipC9Q49CZAhIELleJPsU2B2UAL7YZT6FYIdWGrm+jDRSX69BdsOAsT8i2iKlXmZCNRIIDD6rXAZoPun4HVt0G5cp10XiZGAVbysNLUWHkxBJq97qeXL+sH/hmMIca/TK29jfpYz/lQRqYb+FKcAAOL33atLpqSagwbBO0hU8n8W2dGJhgsonH5PFdNKmhpOcGv8H3uNV+/7SQNnp0NDbgwbOEofgsAJw1DdgzJw6crNU1PKYKN0k/n9JdaaXwVc+tzXGFSpgIfS62tuQSSoR5/r/piUWWWJ8lXhX1wsfZtZ8Hq2Ph0fQzDfGZ7zf9nWyM2xPMGiTxPmBHJzXoKQc+zj3+Vk2L97b3ghKVP2dT7OGwrOCu9TzMqSfsXip6QuhRpx7p2Hczjl48N+nu6DDYyMeO3Je+JGZ6L3pxYjCrFSkcT0mFAr3Qs9IH+cmzvtilir/jsW1CbjKUsm9L3gkHbmVAkuU5KWWGVcZ0QTmwfTdyOalubs0tXc7pHddzOvrnzFj86EYaTsuQV3PYMCsqVg1hY9lMcHG3hcHJq9ihdc+p0QV5vagdoh2YCp4muE/j5BD1uUgS/UWMerU7pVzw8aHf/cZu/gTk5OcRcdjfUj2wc9TCF2waGDxWJaIMcw7R5IGMA6wL2Mqc0gPlVxHoTtMe+P62Ql+aMvBlBKQYYDqgj2UAwHyxqgu9gAFsPGSLiMOr7wF8KTxRL+Mp9XLU+8+FGYLJjqNODTSO4d69Exg7z0e9kLJN7Q4a4UFUrdahjAljIRh7dDHypmXWKz6MRLDkeMRCAS6Gq+PiXzWp3CjzMJ8hoOYgQ8EptefMJFSER8YWRq2UVwYBp9QOPQl4iRb3e092pdl3ToCLYdOoBZ96Ukpjrm4QSeXArgtdxI587IL67amO0tr/SU/8quwRyh5+k/SlfNntTzH4x0fYGfejxP8ZAKmb6oTku1p6UmNZY1TOt0CHYLUHMD/p151MrIIkZRpohsAAwglxQYAAAAAA==\"\n\n//# sourceURL=webpack:///./src/images/machine-learning-logo.png?");

/***/ }),

/***/ "./src/images/right-arrow.svg":
/*!************************************!*\
  !*** ./src/images/right-arrow.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI5IDEyOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI5IDEyOSIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45NDE0OCAwIDAgMC45NDE0OCAzLjc3NDUzIDMuNzc0NTMpIj48Zz4KICAgIDxwYXRoIGQ9Im00MC40LDEyMS4zYy0wLjgsMC44LTEuOCwxLjItMi45LDEuMnMtMi4xLTAuNC0yLjktMS4yYy0xLjYtMS42LTEuNi00LjIgMC01LjhsNTEtNTEtNTEtNTFjLTEuNi0xLjYtMS42LTQuMiAwLTUuOCAxLjYtMS42IDQuMi0xLjYgNS44LDBsNTMuOSw1My45YzEuNiwxLjYgMS42LDQuMiAwLDUuOGwtNTMuOSw1My45eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPjwvZz4gPC9zdmc+Cg==\"\n\n//# sourceURL=webpack:///./src/images/right-arrow.svg?");

/***/ }),

/***/ "./src/images/search_icon.svg":
/*!************************************!*\
  !*** ./src/images/search_icon.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiBjbGFzcz0iIj4KICAgIDxnPjxwYXRoIGQ9Ik01NS4xNDYsNTEuODg3TDQxLjU4OCwzNy43ODZjMy40ODYtNC4xNDQsNS4zOTYtOS4zNTgsNS4zOTYtMTQuNzg2YzAtMTIuNjgyLTEwLjMxOC0yMy0yMy0yM3MtMjMsMTAuMzE4LTIzLDIzICBzMTAuMzE4LDIzLDIzLDIzYzQuNzYxLDAsOS4yOTgtMS40MzYsMTMuMTc3LTQuMTYybDEzLjY2MSwxNC4yMDhjMC41NzEsMC41OTMsMS4zMzksMC45MiwyLjE2MiwwLjkyICBjMC43NzksMCwxLjUxOC0wLjI5NywyLjA3OS0wLjgzN0M1Ni4yNTUsNTQuOTgyLDU2LjI5Myw1My4wOCw1NS4xNDYsNTEuODg3eiBNMjMuOTg0LDZjOS4zNzQsMCwxNyw3LjYyNiwxNywxN3MtNy42MjYsMTctMTcsMTcgIHMtMTctNy42MjYtMTctMTdTMTQuNjEsNiwyMy45ODQsNnoiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZmlsbD0iI0ZGRkZGRiIvPjwvZz4gPC9zdmc+Cg==\"\n\n//# sourceURL=webpack:///./src/images/search_icon.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_carousel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/carousel.css */ \"./src/styles/carousel.css\");\n/* harmony import */ var _styles_carousel_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_carousel_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_course_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/course.css */ \"./src/styles/course.css\");\n/* harmony import */ var _styles_course_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_course_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_feedback_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/feedback.css */ \"./src/styles/feedback.css\");\n/* harmony import */ var _styles_feedback_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_feedback_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/footer.css */ \"./src/styles/footer.css\");\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/header.css */ \"./src/styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/layout.css */ \"./src/styles/layout.css\");\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_offers_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/offers.css */ \"./src/styles/offers.css\");\n/* harmony import */ var _styles_offers_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_offers_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/common.css */ \"./src/styles/common.css\");\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_common_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _coursesGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coursesGenerator.js */ \"./src/coursesGenerator.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderCarousels = async (containerClass, dataPath, htmlGenerator) => {\r\n    const container = document.querySelector(containerClass);\r\n    const data = await (await fetch(dataPath)).json();\r\n    data.map(el => container.appendChild(htmlGenerator(el)));\r\n};\r\n\r\nconst renderCourses = async (containersClass, dataPath, htmlGenerator) => {\r\n    const containers = document.querySelectorAll(containersClass);\r\n    const data = await (await fetch(dataPath)).json();\r\n    containers.forEach(container => data.map(el => container.appendChild(htmlGenerator(el))));\r\n};\r\nrenderCarousels('.courses-carousel', './src/data/carousels.json', _coursesGenerator_js__WEBPACK_IMPORTED_MODULE_8__[\"generateCarousel\"])\r\n    .then(() => renderCourses('.carousel__courses-wrapper', './src/data/courses.json', _coursesGenerator_js__WEBPACK_IMPORTED_MODULE_8__[\"generateCourse\"]));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/carousel.css":
/*!*********************************!*\
  !*** ./src/styles/carousel.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./carousel.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/carousel.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/carousel.css?");

/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/common.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/common.css?");

/***/ }),

/***/ "./src/styles/course.css":
/*!*******************************!*\
  !*** ./src/styles/course.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./course.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/course.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/course.css?");

/***/ }),

/***/ "./src/styles/feedback.css":
/*!*********************************!*\
  !*** ./src/styles/feedback.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./feedback.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/feedback.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/feedback.css?");

/***/ }),

/***/ "./src/styles/footer.css":
/*!*******************************!*\
  !*** ./src/styles/footer.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/footer.css?");

/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/header.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/header.css?");

/***/ }),

/***/ "./src/styles/layout.css":
/*!*******************************!*\
  !*** ./src/styles/layout.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./layout.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/layout.css?");

/***/ }),

/***/ "./src/styles/offers.css":
/*!*******************************!*\
  !*** ./src/styles/offers.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./offers.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/offers.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/offers.css?");

/***/ })

/******/ });