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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/button.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/button.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Button {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    border-radius: 999px;\\r\\n    border: none;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.Button__svg {\\r\\n    height: 24px;\\r\\n    fill: #8e8e8e;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/button.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/common.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-weight: 700;\\r\\n    font-size: 1rem;\\r\\n    text-decoration: none;\\r\\n    letter-spacing: -.4px;\\r\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto Oxygen-Sans\\\", Ubuntu, Cantarell, \\\"“Fira Sans”\\\", \\\"“Droid Sans”\\\", \\\"Helvetica Neue\\\", Helvetica, \\\"ヒラギノ角ゴ Pro W3\\\", \\\"Hiragino Kaku Gothic Pro\\\", メイリオ, Meiryo, \\\"ＭＳ Ｐゴシック\\\", Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\";\\r\\n}\\r\\n\\r\\nh4 {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n.Form {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin-left: 5px;\\r\\n    margin-right: 5px;\\r\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Footer {\\r\\n    width: 40px;\\r\\n    display: block;\\r\\n    position: fixed;\\r\\n    bottom: 0;\\r\\n    right: 37px;\\r\\n    z-index: 99;\\r\\n    cursor: pointer;\\r\\n    border-radius: 4px;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n.Footer__button__svg {\\r\\n    width: 1vw;\\r\\n    height: 1vw;\\r\\n    fill: #333;\\r\\n    padding: .75vw;\\r\\n}\\r\\n\\r\\n.Footer__button {\\r\\n    font-size: 11px;\\r\\n    background-color: #fff;\\r\\n    color: #333;\\r\\n    box-shadow: 0 2px 0 0 rgba(0, 0, 0, .1), 0 0 0 1px rgba(0, 0, 0, .04);\\r\\n    margin: 0 0 5px 20px;\\r\\n    padding: 1px;\\r\\n}\\r\\n\\r\\n.Footer__button_privacy {\\r\\n    font-size: 11px;\\r\\n    width: 30px;\\r\\n    text-decoration: none;\\r\\n    font-weight: lighter;\\r\\n    border-radius: 8px;\\r\\n    color: #333;\\r\\n    background-color: #fff;\\r\\n    padding: 0 5px;\\r\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\r\\n.Header__search-form {\\r\\n    border: none;\\r\\n    background-color: #efefef;\\r\\n    height: 60%;\\r\\n    border-radius: 7px;\\r\\n    width: 90%;\\r\\n}\\r\\n\\r\\n@media all and (max-width: 1367px) {\\r\\n    .Header__search-form {\\r\\n        width: 62%;\\r\\n    }\\r\\n}\\r\\n\\r\\n.Header__search-form__svg {\\r\\n    fill: #8e8e8e;\\r\\n    height: 20px;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n.Header__search-form__input {\\r\\n    color: #333;\\r\\n    font-size: 1rem;\\r\\n    font-weight: 700;\\r\\n    height: 100%;\\r\\n    width: 98%;\\r\\n    background: transparent;\\r\\n    border: none;\\r\\n}\\r\\n\\r\\n.Header__nav-button {\\r\\n    background: none;\\r\\n    box-sizing: border-box;\\r\\n    height: 60%;\\r\\n    padding-left: 0.6em;\\r\\n    padding-right: 0.6em;\\r\\n}\\r\\n\\r\\n.Header__nav-link {\\r\\n    box-sizing: border-box;\\r\\n    padding: 10px;\\r\\n    color: #8e8e8e;\\r\\n}\\r\\n\\r\\n.Header__link__image {\\r\\n    height: auto;\\r\\n    max-width: 23px;\\r\\n    border-radius: 100%;\\r\\n    margin-right: 0.4em;\\r\\n}\\r\\n\\r\\n.Header__nav-link:hover {\\r\\n    background-color: #efefef;\\r\\n}\\r\\n\\r\\n.Header__nav-link_active {\\r\\n    color: #333;\\r\\n}\\r\\n\\r\\n.Header__nav-button:hover {\\r\\n    background-color: #efefef;\\r\\n}\\r\\n\\r\\n\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Layout__header {\\r\\n  padding-right: 1em;\\r\\n  padding-left: 1em;\\r\\n  display: flex;\\r\\n  height: 64px;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  border-bottom: 1px solid #efefef;\\r\\n}\\r\\n\\r\\n.Layout__main-block__home {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));\\r\\n  grid-gap: 10px;\\r\\n  margin: 15px 25px 10px;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/layout.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/link.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/link.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Link {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    border-radius: 999px;\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/link.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/logo.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/logo.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Logo {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.Logo__link {\\r\\n    border-radius: 999px;\\r\\n    padding: 0.5em 0.5em 0.2em 0.4em;\\r\\n}\\r\\n\\r\\n.Logo__svg {\\r\\n    height: 1.75em;\\r\\n    width: 1.75em;\\r\\n    fill: #e60023;\\r\\n}\\r\\n\\r\\n.Logo__link:hover {\\r\\n    background-color: #efefef;\\r\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/logo.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/post.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/post.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/icons/dots.svg */ \"./src/images/icons/dots.svg\"));\n\n// Module\nexports.push([module.i, \".Post {\\r\\n    border-radius: 15px;\\r\\n}\\r\\n\\r\\n.Post:hover {\\r\\n    background-color: #efefef;\\r\\n}\\r\\n\\r\\n.Post:hover .Post__form, .Post:hover .Link__container {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.Post__image_container {\\r\\n    filter: none;\\r\\n    -webkit-filter: brightness(100%);\\r\\n    max-width: 93%;\\r\\n    padding-left: 9px;\\r\\n    padding-top: 7px;\\r\\n}\\r\\n\\r\\n.Post__form {\\r\\n    width: 90%;\\r\\n    background-color: transparent;\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    top: 1em;\\r\\n    left: 6.5%;\\r\\n    height: 2.6em;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.Post__button_select {\\r\\n    width: 70%;\\r\\n    height: 100%;\\r\\n    border-radius: 8px 0 0 8px;\\r\\n    color: #333;\\r\\n    background-color: #fff;\\r\\n}\\r\\n\\r\\n.Post__button_select:hover, .Post__button_save:hover, .Footer__button:hover {\\r\\n    filter: brightness(90%);\\r\\n}\\r\\n\\r\\n.Post__button_save {\\r\\n    border-radius: 0 8px 8px 0;\\r\\n    width: 30%;\\r\\n    color: #fff;\\r\\n    background-color: #e60023;\\r\\n}\\r\\n\\r\\n.Post__image {\\r\\n    width: 100%;\\r\\n    border-radius: 15px;\\r\\n}\\r\\n\\r\\n.Post__image_container:hover .Post__image {\\r\\n    filter: none;\\r\\n    -webkit-filter: brightness(85%);\\r\\n}\\r\\n\\r\\n.Post__title {\\r\\n    padding-left: 1em;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.Post__title_container {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    width: 95%;\\r\\n    min-height: 2.5em;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n\\r\\n.Post__link {\\r\\n    color: #fff;\\r\\n    fill: #fff;\\r\\n    background-color: rgba(51, 51, 51, .8);\\r\\n    padding: .5em;\\r\\n\\r\\n}\\r\\n\\r\\n.Post__link:hover {\\r\\n    background-color: #333;\\r\\n}\\r\\n\\r\\n.Post__link__svg {\\r\\n    height: 1em;\\r\\n}\\r\\n\\r\\n.Post__link-container {\\r\\n    display: none;\\r\\n    width: 87%;\\r\\n    position: absolute;\\r\\n    bottom: 1em;\\r\\n    left: 1.1em;\\r\\n    height: 2em;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.Post__button_more-info {\\r\\n    height: 1.5em;\\r\\n    width: 1.5em;\\r\\n    background-color: transparent;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\r\\n}\\r\\n\\r\\n.Post__button_more-info:hover {\\r\\n    filter: brightness(80%);\\r\\n    background-color: rgba(0, 0, 0, .06);\\r\\n}\\r\\n\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/post.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/images/icons/dots.svg":
/*!***********************************!*\
  !*** ./src/images/icons/dots.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyAgZmlsbD0iIzhlOGU4ZSIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMyLjA1NSAzMi4wNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyLjA1NSAzMi4wNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjk2OCwxMi4wNjFDMS43NzUsMTIuMDYxLDAsMTMuODM1LDAsMTYuMDI3YzAsMi4xOTIsMS43NzMsMy45NjcsMy45NjgsMy45NjdjMi4xODksMCwzLjk2Ni0xLjc3MiwzLjk2Ni0zLjk2Nw0KCQlDNy45MzQsMTMuODM1LDYuMTU3LDEyLjA2MSwzLjk2OCwxMi4wNjF6IE0xNi4yMzMsMTIuMDYxYy0yLjE4OCwwLTMuOTY4LDEuNzczLTMuOTY4LDMuOTY1YzAsMi4xOTIsMS43NzgsMy45NjcsMy45NjgsMy45NjcNCgkJczMuOTctMS43NzIsMy45Ny0zLjk2N0MyMC4yMDEsMTMuODM1LDE4LjQyMywxMi4wNjEsMTYuMjMzLDEyLjA2MXogTTI4LjA5LDEyLjA2MWMtMi4xOTIsMC0zLjk2OSwxLjc3NC0zLjk2OSwzLjk2Nw0KCQljMCwyLjE5LDEuNzc0LDMuOTY1LDMuOTY5LDMuOTY1YzIuMTg4LDAsMy45NjUtMS43NzIsMy45NjUtMy45NjVTMzAuMjc4LDEyLjA2MSwyOC4wOSwxMi4wNjF6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==\"\n\n//# sourceURL=webpack:///./src/images/icons/dots.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/button.css */ \"./src/styles/button.css\");\n/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_button_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/common.css */ \"./src/styles/common.css\");\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_common_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/footer.css */ \"./src/styles/footer.css\");\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/header.css */ \"./src/styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_link_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/link.css */ \"./src/styles/link.css\");\n/* harmony import */ var _styles_link_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_link_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/layout.css */ \"./src/styles/layout.css\");\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_logo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/logo.css */ \"./src/styles/logo.css\");\n/* harmony import */ var _styles_logo_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_logo_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_post_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/post.css */ \"./src/styles/post.css\");\n/* harmony import */ var _styles_post_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_post_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _postGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./postGenerator */ \"./src/postGenerator.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderColumns = async (containerClass, htmlGenerator, number) => {\r\n    const container = document.querySelector(containerClass);\r\n    for (let i = 0; i < number; i++) {\r\n        container.appendChild(htmlGenerator());\r\n    }\r\n};\r\n\r\nconst shuffle = (array) => {\r\n    for (let i = array.length - 1; i > 0; i--) {\r\n        const j = Math.floor(Math.random() * (i + 1));\r\n        [array[i], array[j]] = [array[j], array[i]];\r\n    }\r\n    return array;\r\n};\r\n\r\nconst renderPosts = async (containersClass, dataPath, htmlGenerator) => {\r\n    const containers = document.querySelectorAll(containersClass);\r\n    const data = await (await fetch(dataPath)).json();\r\n    containers.forEach(container => shuffle(data).map(el => container.appendChild(htmlGenerator(el))));\r\n};\r\n\r\nrenderColumns('.Layout__main-block__home', _postGenerator__WEBPACK_IMPORTED_MODULE_8__[\"generateColumn\"], 5)\r\n    .then(() => renderPosts('.Column', './src/data/posts.json', _postGenerator__WEBPACK_IMPORTED_MODULE_8__[\"generatePost\"]));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/postGenerator.js":
/*!******************************!*\
  !*** ./src/postGenerator.js ***!
  \******************************/
/*! exports provided: generateColumn, generatePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateColumn\", function() { return generateColumn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generatePost\", function() { return generatePost; });\nconst generateColumn = () => {\r\n    const parentElement = document.createElement('div');\r\n    parentElement.className = 'Column';\r\n    return parentElement;\r\n};\r\n\r\nconst generatePost = (data) => {\r\n    const parentElement = document.createElement('article');\r\n    parentElement.className = 'Post';\r\n    parentElement.innerHTML = `<div class=\"Post__image_container\">\r\n                     <a class=\"Post__image__link\"><img src=${data.image_link} alt=\"post photo\" class=\"Post__image\"></a>\r\n                     <form class=\"Post__form\">\r\n                        <button class=\"Button Post__button_select\">Home</button>\r\n                        <button class=\"Button Post__button_save\">Save</button>\r\n                     </form>\r\n                     <div class=\"Post__link-container\">\r\n                        <a class=\"Link Post__link\" href=${data.go_to_link} aria-label=\"go to\">Some link</a>\r\n                        <a class=\"Link Post__link\" href=${data.send_link} aria-label=\"send\">\r\n                           <svg viewBox=\"0 0 24 24\" class=\"Link Post__link__svg\" aria-hidden=\"true\" aria-label=\"\" role=\"img\" id=\"send-svg\">\r\n                              <title>Send</title>\r\n                              <path d=\"M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z\"></path>\r\n                           </svg>\r\n                        </a>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"Post__title_container\">\r\n                     <h4 aria-label=\"post-title\" class=\"Post__title\">${data.title}</h4>\r\n                     <button class=\"Button Post__button_more-info\" aria-label=\"more information\"></button>\r\n                  </div>`;\r\n    return parentElement;\r\n};\n\n//# sourceURL=webpack:///./src/postGenerator.js?");

/***/ }),

/***/ "./src/styles/button.css":
/*!*******************************!*\
  !*** ./src/styles/button.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./button.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/button.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/button.css?");

/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/common.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/common.css?");

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

/***/ "./src/styles/link.css":
/*!*****************************!*\
  !*** ./src/styles/link.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./link.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/link.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/link.css?");

/***/ }),

/***/ "./src/styles/logo.css":
/*!*****************************!*\
  !*** ./src/styles/logo.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./logo.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/logo.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/logo.css?");

/***/ }),

/***/ "./src/styles/post.css":
/*!*****************************!*\
  !*** ./src/styles/post.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./post.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/post.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/post.css?");

/***/ })

/******/ });