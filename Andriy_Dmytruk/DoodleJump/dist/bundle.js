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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Bullet.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Bullet.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".bullet {\\n  position: absolute;\\n  width: 10px;\\n  height: 10px;\\n  background-color: black;\\n  border: 2px solid #888;\\n  border-radius: 50%;\\n  box-sizing: border-box; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Bullet.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Doodle.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Doodle.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".doodle {\\n  z-index: 1; }\\n  .doodle__body {\\n    position: absolute;\\n    background-color: #dfc84f;\\n    height: 50px;\\n    width: 40px;\\n    border-radius: 20px 20px 0 0; }\\n  .doodle__bottom {\\n    position: absolute;\\n    bottom: 0;\\n    background-color: #53a665;\\n    width: 40px;\\n    height: 10px; }\\n  .doodle__nose {\\n    position: absolute;\\n    top: 20px;\\n    left: 20px;\\n    background-color: #dfc84f;\\n    transition: 0.2s; }\\n  .doodle_left .doodle__nose {\\n    transform: rotate(-180deg); }\\n  .doodle__nose-begin {\\n    position: absolute;\\n    top: -4px;\\n    left: 0;\\n    width: 32px;\\n    height: 8px;\\n    background-color: inherit;\\n    transition: 1s; }\\n  .doodle__nose-end {\\n    position: absolute;\\n    left: 25px;\\n    top: -7px;\\n    height: 14px;\\n    width: 7px;\\n    background-color: inherit;\\n    border-radius: 7px 0 0 7px; }\\n  .doodle__eye-left {\\n    position: absolute;\\n    background-color: #111;\\n    width: 4px;\\n    height: 6px;\\n    border-radius: 2px;\\n    left: 20px;\\n    top: 18px;\\n    transition: 0.2s; }\\n  .doodle__eye-right {\\n    position: absolute;\\n    background-color: #111;\\n    width: 4px;\\n    height: 6px;\\n    border-radius: 2px;\\n    left: 26px;\\n    top: 18px;\\n    transition: 0.2s; }\\n  .doodle_left .doodle__eye-left {\\n    left: 10px; }\\n  .doodle_left .doodle__eye-right {\\n    left: 16px; }\\n  .doodle__legs {\\n    position: absolute;\\n    left: 6px;\\n    height: 12px;\\n    width: 28px;\\n    top: 50px;\\n    transition: 0.2s, top 0.1s; }\\n  .doodle_left .doodle__legs {\\n    left: 6px; }\\n  .doodle_jumping .doodle__legs {\\n    top: 46px; }\\n  .doodle__leg {\\n    position: absolute;\\n    height: 12px;\\n    width: 3px;\\n    background-color: #222;\\n    border-radius: 0 0 2px 2px; }\\n  .doodle__foot {\\n    position: absolute;\\n    left: 0;\\n    bottom: 0;\\n    width: 6px;\\n    height: 3px;\\n    background-color: #222;\\n    border-radius: 2px;\\n    transition: 0.2s; }\\n  .doodle_left .doodle__foot {\\n    left: -3px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Doodle.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Enemy.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Enemy.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".enemy {\\n  transition: transform 0.2s; }\\n  .enemy_hit {\\n    transform: scale(1.1); }\\n  .enemy_dead {\\n    transform: scale(0); }\\n  .enemy__eye-left {\\n    position: absolute;\\n    background-color: #111;\\n    width: 4px;\\n    height: 6px;\\n    border-radius: 2px;\\n    left: 0; }\\n  .enemy__eye-right {\\n    position: absolute;\\n    background-color: #111;\\n    width: 4px;\\n    height: 6px;\\n    border-radius: 2px;\\n    right: 0; }\\n  .enemy__mouth {\\n    position: absolute;\\n    width: 8px;\\n    height: 8px;\\n    border-radius: 4px;\\n    background-color: #222;\\n    bottom: 0;\\n    left: calc(50% - 4px); }\\n  .enemy__circle {\\n    width: 60px;\\n    height: 60px;\\n    border-radius: 30px;\\n    background-color: #ea945b; }\\n\\n@keyframes face-move {\\n  0% {\\n    margin-top: -6px; }\\n  100% {\\n    margin-top: 6px; } }\\n    .enemy__circle__face {\\n      position: absolute;\\n      width: 12px;\\n      height: 20px;\\n      top: 16px;\\n      left: 24px;\\n      animation: face-move;\\n      animation-duration: 1s;\\n      animation-iteration-count: infinite;\\n      animation-direction: alternate;\\n      animation-timing-function: ease-in-out; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Enemy.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Field.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Field.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".field {\\n  background-color: #FFF5CC;\\n  overflow: hidden;\\n  position: relative; }\\n  .field__background {\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Field.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Game.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Game.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  overflow: hidden; }\\n\\n.game {\\n  width: 100%;\\n  height: 100%;\\n  position: relative; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Game.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Menu.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Menu.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".menu {\\n  background-color: #FFFFFFAA;\\n  font-family: \\\"Droid Sans Mono\\\", monospace;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 3; }\\n  .menu__background {\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center; }\\n    .menu__background_hidden {\\n      display: none; }\\n    .menu__background_start {\\n      background-color: #FFF; }\\n  .menu__row {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin-bottom: 100px; }\\n  .menu__title {\\n    color: #000000;\\n    font-size: 40px; }\\n  .menu__score {\\n    color: #000000AA;\\n    font-size: 28px; }\\n  .menu__button {\\n    background-color: #433521;\\n    border: none;\\n    color: #FFF;\\n    /*border: 2px solid #000000;*/\\n    outline: none;\\n    font-size: 22px;\\n    height: 34px;\\n    width: 104px;\\n    border-radius: 15px;\\n    box-sizing: border-box;\\n    cursor: pointer; }\\n    .menu__button:hover {\\n      background-color: #debc80; }\\n    .menu__button:active {\\n      width: 114px;\\n      height: 37px;\\n      border-radius: 16.5px;\\n      margin: -1.5px -5px; }\\n  .menu__overlay {\\n    display: flex;\\n    flex-direction: column;\\n    position: relative; }\\n  .menu__topbar {\\n    background-color: rgba(222, 235, 255, 0.67);\\n    height: 40px;\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center; }\\n  .menu__topbar-score {\\n    color: #433521;\\n    margin: 0 20px;\\n    font-family: \\\"Droid Sans Mono\\\", monospace;\\n    font-size: 30px; }\\n  .menu__topbar-button {\\n    position: relative;\\n    background-color: #433521;\\n    border: none;\\n    color: #FFF;\\n    /*border: 2px solid #0e2639;*/\\n    outline: none;\\n    font-size: 20px;\\n    height: 28px;\\n    width: 80px;\\n    border-radius: 14px;\\n    box-sizing: border-box;\\n    margin-left: 20px;\\n    cursor: pointer; }\\n  .menu__topbar-button:hover {\\n    background-color: #debc80; }\\n  .menu__topbar-button:active {\\n    left: -4px;\\n    width: 88px;\\n    height: 31px;\\n    border-radius: 15.5px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Menu.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Platform.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Platform.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".platform__static {\\n  width: 60px;\\n  height: 10px;\\n  background-color: #6cc668;\\n  border-radius: 5px; }\\n\\n.platform__breaking-right {\\n  width: 28px;\\n  height: 10px;\\n  background-color: #85503d;\\n  right: 0;\\n  border-radius: 2px 5px 5px 2px;\\n  transition: right 4s, transform 0.2s; }\\n\\n.platform__broken-right {\\n  right: -40px;\\n  transform: rotate(30deg); }\\n\\n.platform__breaking-left {\\n  position: absolute;\\n  width: 28px;\\n  height: 10px;\\n  background-color: #85503d;\\n  left: 0;\\n  border-radius: 5px 2px 2px 5px;\\n  transition: left 4s, transform 0.2s; }\\n\\n.platform__broken-left {\\n  left: -40px;\\n  transform: rotate(-30deg); }\\n\\n.platform__disappearing {\\n  width: 60px;\\n  height: 10px;\\n  border-radius: 5px;\\n  background-color: #b1deff;\\n  box-sizing: border-box;\\n  transition: background-color 0.5s; }\\n\\n.platform__disappeared {\\n  background-color: #eefff600; }\\n\\n.platform__horizontal {\\n  position: absolute;\\n  width: 60px;\\n  height: 10px;\\n  background-color: #4c94c6;\\n  border-radius: 5px; }\\n\\n.platform__vertical {\\n  position: absolute;\\n  width: 60px;\\n  height: 10px;\\n  background-color: #5a7081;\\n  border-radius: 5px; }\\n\\n.platform__destructing {\\n  position: absolute;\\n  width: 60px;\\n  height: 10px;\\n  background-color: #fdd056;\\n  border-radius: 5px;\\n  transition: background-color 0.2s, width 0.2s, height 0.2s, margin 0.2s; }\\n\\n.platform__destructing-alert {\\n  background-color: #e8594c; }\\n\\n.platform__destroyed {\\n  width: 84px;\\n  height: 14px;\\n  margin: -4px -12px;\\n  background-color: #e8594c00; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Platform.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

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

/***/ "./static/DoodleGame2/Game.js":
/*!************************************!*\
  !*** ./static/DoodleGame2/Game.js ***!
  \************************************/
/*! exports provided: Doodle, StaticPlatform, BreakingPlatform, PlatformDisappearing, PlatformHorizontal, PlatformVertical, PlatformDestructing, Bullet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Doodle\", function() { return Doodle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StaticPlatform\", function() { return StaticPlatform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BreakingPlatform\", function() { return BreakingPlatform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlatformDisappearing\", function() { return PlatformDisappearing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlatformHorizontal\", function() { return PlatformHorizontal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlatformVertical\", function() { return PlatformVertical; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlatformDestructing\", function() { return PlatformDestructing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bullet\", function() { return Bullet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ \"./static/Element/index.js\");\n/* harmony import */ var _styles_Bullet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Bullet.scss */ \"./static/DoodleGame2/styles/Bullet.scss\");\n/* harmony import */ var _styles_Bullet_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Bullet_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Doodle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Doodle.scss */ \"./static/DoodleGame2/styles/Doodle.scss\");\n/* harmony import */ var _styles_Doodle_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Doodle_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Enemy_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Enemy.scss */ \"./static/DoodleGame2/styles/Enemy.scss\");\n/* harmony import */ var _styles_Enemy_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Enemy_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Field_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Field.scss */ \"./static/DoodleGame2/styles/Field.scss\");\n/* harmony import */ var _styles_Field_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Field_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Game_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Game.scss */ \"./static/DoodleGame2/styles/Game.scss\");\n/* harmony import */ var _styles_Game_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Game_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Menu.scss */ \"./static/DoodleGame2/styles/Menu.scss\");\n/* harmony import */ var _styles_Menu_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Platform_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Platform.scss */ \"./static/DoodleGame2/styles/Platform.scss\");\n/* harmony import */ var _styles_Platform_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Platform_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\nconst setNewPosition = (object, newPosition) => {\n  Object.keys(newPosition).forEach(key => (object[key] = newPosition[key]));\n};\n\nconst getNewPositionBasedOnDuration = (object, duration) => ({\n  x: (object.x || 0) + (object.vX || 0) * duration,\n  y: (object.y || 0) + (object.vY || 0) * duration,\n  vY: (object.vY || 0) + (object.gravity || 0) * duration\n});\n\nconst updatePositionBasedOnDuration = (object, duration) => {\n  setNewPosition(object, getNewPositionBasedOnDuration(object, duration));\n};\n\nconst doCollideOneDim = (firstX1, firstX2, secondX1, secondX2) =>\n  (secondX1 <= firstX1 && firstX1 <= secondX2) ||\n  (secondX1 <= firstX2 && firstX2 <= secondX2) ||\n  (firstX1 <= secondX1 && secondX1 <= firstX2);\n\nconst doCollideBottom = (first, second) => {\n  const precision = Math.abs(first.vY - second.vY);\n\n  return (\n    doCollideOneDim(\n      first.x,\n      first.x + first.width,\n      second.x,\n      second.x + second.width\n    ) &&\n    doCollideOneDim(\n      first.y - precision,\n      first.y + precision,\n      second.y + second.height,\n      second.y + second.height\n    )\n  );\n};\n\nconst doCollide = (first, other) => {\n  return (\n    doCollideOneDim(\n      first.x,\n      first.x + first.width,\n      other.x,\n      other.x + other.width\n    ) &&\n    doCollideOneDim(\n      first.y,\n      first.y + first.height,\n      other.y,\n      other.y + other.height\n    )\n  );\n};\n\nclass Doodle {\n  constructor() {\n    this.width = 40;\n    this.height = 60;\n    this.gravity = -600;\n\n    this.exists = true;\n    this.lastNoseRotate = 1;\n\n    this.createElement();\n  }\n\n  createElement() {\n    const legs = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__legs\").addChild(\n      new Array(4)\n        .fill(0)\n        .map((v, i) =>\n          new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__leg\")\n            .absolutePosition(i * 8, 0)\n            .addChild(new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__foot\"))\n        )\n    );\n\n    this.nose = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__nose\").addChild(\n      new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__nose-begin\"),\n      new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__nose-end\")\n    );\n\n    this.element = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle\")\n      .dimensions(this.width, this.height)\n      .addChild(\n        legs,\n        this.nose,\n        new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__body\").addChild(new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__bottom\")),\n        new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__eye-left\"),\n        new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"doodle__eye-right\")\n      );\n  }\n\n  update(duration) {\n    this.lastNoseRotate += duration;\n\n    if (this.vY >= 200) this.element.addClass(\"doodle_jumping\");\n    else this.element.removeClass(\"doodle_jumping\");\n\n    if (this.vX < 0) this.element.addClass(\"doodle_left\");\n    if (this.vX > 0) this.element.removeClass(\"doodle_left\");\n\n    if (this.lastNoseRotate > 0.5) {\n      this.nose.transform(\"\");\n    }\n  }\n\n  rotateNose(angle) {\n    angle = -Math.PI / 2 + angle;\n    this.nose.transition(\"0s\").transform(\"rotate(\" + angle + \"rad)\");\n    this.lastNoseRotate = 0;\n  }\n}\n\nclass StaticPlatform {\n  constructor() {\n    this.width = 60;\n    this.height = 10;\n    this.exists = true;\n\n    this.createElement();\n  }\n\n  createElement() {\n    this.element = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"platform__static\");\n  }\n}\n\nclass BreakingPlatform {\n  constructor() {\n    this.width = 60;\n    this.height = 10;\n    this.exists = true;\n\n    this.createElement();\n  }\n\n  createElement() {\n    this.element = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"platform__breaking\");\n    this.left = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"platform__breaking-left\").insertInto(this.element);\n    this.right = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"platform__breaking-right\").insertInto(\n      this.element\n    );\n  }\n\n  jumpOnto() {\n    this.acceleration.y = -600;\n    this.left.addClass(\"platform__broken-left\");\n    this.right.addClass(\"platform__broken-right\");\n    return false;\n  }\n}\n\nclass PlatformDisappearing {\n  constructor() {\n    this.width = 60;\n    this.height = 10;\n    this.exists = true;\n\n    this.createElement();\n  }\n\n  createElement() {\n    this.element = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"platform__disappearing\").insertInto(\n      this.element\n    );\n    this.visible = true;\n  }\n\n  jumpOnto() {\n    this.element.addClass(\"platform__disappeared\");\n    this.exists = false;\n  }\n}\n\nclass PlatformHorizontal {\n  constructor() {\n    this.width = 60;\n    this.height = 10;\n    this.exists = true;\n\n    this.createElement();\n  }\n\n  createElement() {\n    this.element = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"platform__horizontal\");\n    this.vX = Math.round(\n      (20 + Math.random() * 60) * (Math.random > 0.5 ? 1 : -1)\n    );\n  }\n\n  update() {\n    if (this.x <= 0) {\n      this.vX = Math.abs(this.vX);\n    } else if (this.x >= 600) {\n      // TODO >= what\n      this.vX = -Math.abs(this.vX);\n    }\n  }\n}\n\nclass PlatformVertical {\n  createElement() {\n    this.element = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"platform__vertical\");\n  }\n\n  constructor(range) {\n    this.exists = true;\n    this.initialY = null;\n\n    this.range = range || 100 + Math.random() * 200;\n    this.vY = Math.round(\n      (20 + Math.random() * 20) * (Math.random > 0.5 ? 1 : -1)\n    );\n\n    this.createElement();\n  }\n\n  update() {\n    if (!this.initialY) this.initialY = this.y;\n\n    if (this.y <= this.initialY - this.range / 2) {\n      this.vY = Math.abs(this.vY);\n    } else if (this.y >= this.initialY + this.range / 2) {\n      this.vY = -Math.abs(this.vY);\n    }\n  }\n}\n\nclass PlatformDestructing {\n  createElement() {\n    this.element = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"platform__destructing\");\n  }\n\n  constructor(field, x = 0, y = 0, timeout) {\n    this.exists = true;\n    this.time = 0;\n    this.alertBefore = 1;\n    this.timeout = timeout || 2 + Math.random() * 4;\n\n    this.state = \"init\";\n    this.createElement();\n  }\n\n  update(duration) {\n    if (this.state !== \"init\") {\n      this.time += duration;\n    } else if (true) {\n      // TODO what this.field.bottom + this.field.height / 2 > this.y - 100\n      this.state = \"start\";\n    }\n\n    if (\n      this.state === \"start\" &&\n      this.time >= this.timeout - this.alertBefore\n    ) {\n      this.state = \"alert\";\n      this.inner.addClass(\"platform__destructing-alert\");\n    }\n    if (this.state === \"alert\" && this.time >= this.timeout) {\n      this.exists = false;\n      this.state = \"destroyed\";\n      this.inner.addClass(\"platform__destroyed\");\n    }\n  }\n}\n\nclass Bullet {\n  createElement(field) {\n    this.element = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"bullet\");\n  }\n\n  constructor(field, x, y) {\n    this.width = 20;\n    this.height = 20;\n    this.createElement();\n  }\n}\n\nclass Game {\n  constructor(container) {\n    this.width = 600;\n    this.height = 800;\n\n    this.createElements(container);\n\n    this.paused = false;\n    this.lastUpdateTime = 0;\n\n    this.doodle = new Doodle();\n    this.doodle.x = (this.width - this.doodle.width) / 2;\n    this.doodle.y = (this.height - this.doodle.height) / 2;\n    this.doodle.element.insertInto(this.field);\n\n    this.platforms = [];\n    this.bullets = [];\n    this.enemies = [];\n\n    this.fieldBottom = 0;\n  }\n\n  createElements(container) {\n    this.game = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"game\").insertInto(container);\n    let background = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"field__background\").insertInto(this.game);\n    this.field = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"field\")\n      .dimensions(this.width, this.height)\n      .insertInto(background);\n  }\n\n  updateObject(object, duration) {\n    updatePositionBasedOnDuration(object, duration);\n    const { x, y } = this.translatePosition(object);\n    object.element.absolutePosition(x, y);\n    object.update(duration);\n  }\n\n  doesObjectExist(object) {\n    return object.exists && object.y + object.height > this.fieldBottom;\n  }\n\n  render(duration) {\n    this.updateObject(this.doodle, duration);\n    this.platforms.forEach(o => this.updateObject(o, duration));\n    this.bullets.forEach(o => this.updateObject(o, duration));\n    this.enemies.forEach(o => this.updateObject(o, duration));\n\n    if (\n      this.doodle.y >\n      this.fieldBottom + this.height / 2 - this.doodle.height / 2\n    ) {\n      this.fieldBottom =\n        this.doodle.y + this.height / 2 - this.doodle.height / 2;\n    }\n\n    this.platforms = this.platforms.filter(this.doesObjectExist);\n    this.bullets = this.bullets.filter(this.doesObjectExist);\n    this.enemies = this.enemies.filter(this.doesObjectExist);\n  }\n\n  translatePosition(object) {\n    return { x: object.x, y: object.y - this.fieldBottom };\n  }\n\n  renderAnimationFrame() {\n    if (this.paused) return;\n\n    const currentTime = new Date().getTime() / 1000;\n    const duration = currentTime - this.lastUpdateTime;\n    if (duration < 1) {\n      this.render(duration);\n    }\n\n    this.lastUpdateTime = currentTime;\n    requestAnimationFrame(this.renderAnimationFrame.bind(this));\n  }\n\n  pause() {\n    this.paused = true;\n  }\n\n  play() {\n    this.paused = false;\n    this.renderAnimationFrame();\n  }\n}\n\n\n//# sourceURL=webpack:///./static/DoodleGame2/Game.js?");

/***/ }),

/***/ "./static/DoodleGame2/styles/Bullet.scss":
/*!***********************************************!*\
  !*** ./static/DoodleGame2/styles/Bullet.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./Bullet.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Bullet.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Bullet.scss?");

/***/ }),

/***/ "./static/DoodleGame2/styles/Doodle.scss":
/*!***********************************************!*\
  !*** ./static/DoodleGame2/styles/Doodle.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./Doodle.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Doodle.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Doodle.scss?");

/***/ }),

/***/ "./static/DoodleGame2/styles/Enemy.scss":
/*!**********************************************!*\
  !*** ./static/DoodleGame2/styles/Enemy.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./Enemy.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Enemy.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Enemy.scss?");

/***/ }),

/***/ "./static/DoodleGame2/styles/Field.scss":
/*!**********************************************!*\
  !*** ./static/DoodleGame2/styles/Field.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./Field.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Field.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Field.scss?");

/***/ }),

/***/ "./static/DoodleGame2/styles/Game.scss":
/*!*********************************************!*\
  !*** ./static/DoodleGame2/styles/Game.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./Game.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Game.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Game.scss?");

/***/ }),

/***/ "./static/DoodleGame2/styles/Menu.scss":
/*!*********************************************!*\
  !*** ./static/DoodleGame2/styles/Menu.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./Menu.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Menu.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Menu.scss?");

/***/ }),

/***/ "./static/DoodleGame2/styles/Platform.scss":
/*!*************************************************!*\
  !*** ./static/DoodleGame2/styles/Platform.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./Platform.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/DoodleGame2/styles/Platform.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/DoodleGame2/styles/Platform.scss?");

/***/ }),

/***/ "./static/Element/Element.js":
/*!***********************************!*\
  !*** ./static/Element/Element.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Element; });\nconst positionString = (v) => (typeof v === \"number\" || v instanceof Number) ? (v + \"px\") : v;\n\nclass Element {\n    constructor(classNames, tag=\"div\") {\n        this.element = document.createElement(tag);\n        if (classNames) this.addClasses(classNames);\n    }\n\n    addClasses(classNames) {\n        if (classNames instanceof String || typeof(classNames) === \"string\")\n            classNames = classNames.split(\" \");\n        classNames.map(className => this.addClass(className));\n        return this;\n    }\n\n    addClass(className) {\n        if (!this.element.classList.contains(className))\n            this.element.classList.add(className);\n        return this;\n    }\n\n    removeClass(className) {\n        this.element.classList.remove(className);\n        return this;\n    }\n\n    containsClass(className) {\n        return this.element.classList.contains(className);\n    }\n\n    addChild(...children) {\n        const add = (child) => {\n            if (child instanceof Array) {\n                child.map(c => add(c));\n            } else if (child instanceof window.Element) {\n                this.element.appendChild(child);\n            } else if (child.element) {\n                this.element.appendChild(child.element);\n            }\n        };\n\n        children.map(c => add(c));\n        return this;\n    }\n\n    insertInto(parent) {\n        if (parent instanceof window.Element) {\n            parent.appendChild(this.element);\n        } else if (parent.element) {\n            parent.element.appendChild(this.element);\n        }\n\n        return this;\n    }\n\n    rmParent() {\n        const parent = this.element.parentElement;\n        if (parent) parent.removeChild(this.element);\n\n        return this;\n    }\n\n    dimensions(width, height) {\n        this.element.style.width = positionString(width);\n        this.element.style.height = positionString(height);\n\n        return this;\n    }\n\n    absolutePosition(x, y) {\n        this.element.style.position = \"absolute\";\n        this.element.style.left = positionString(x);\n        this.element.style.bottom = positionString(y);\n\n        return this;\n    }\n\n    transition(v) {\n        this.element.style.transition = v;\n        return this;\n    }\n\n    transform(v) {\n        this.element.style.transform = v;\n        return this;\n    }\n\n    innerHTML(html) {\n        this.element.innerHTML = html;\n        return this;\n    }\n\n    innerText(text) {\n        this.element.innerText = text;\n        return this;\n    }\n\n    listener(type, callback, options) {\n        this.element.addEventListener(type, callback, options);\n        return this;\n    }\n\n    removeListener(type, callback, options) {\n        if (callback) this.element.removeEventListener(type, callback, options);\n        return this;\n    }\n\n    getRect() {\n        return this.element.getBoundingClientRect();\n    }\n\n    get style() { return this.element.style; }\n}\n\n\n//# sourceURL=webpack:///./static/Element/Element.js?");

/***/ }),

/***/ "./static/Element/index.js":
/*!*********************************!*\
  !*** ./static/Element/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ \"./static/Element/Element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./static/Element/index.js?");

/***/ }),

/***/ "./static/index.js":
/*!*************************!*\
  !*** ./static/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DoodleGame2_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoodleGame2/Game */ \"./static/DoodleGame2/Game.js\");\n\n\nconst doodleGame = new _DoodleGame2_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector(\"body\"));\ndoodleGame.play();\n\n\n//# sourceURL=webpack:///./static/index.js?");

/***/ })

/******/ });