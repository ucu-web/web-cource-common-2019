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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Account.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Account.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Account__block--underscored {\\n  border-bottom: 1px solid #D2D6D7; }\\n\\n.Account__block--right-webkit summary::-webkit-details-marker {\\n  float: right;\\n  transform: rotate(90deg);\\n  margin-left: 8px;\\n  font-size: 12px;\\n  width: 5px; }\\n\\n.Account__block {\\n  padding: 16px 0;\\n  margin: 0 24px; }\\n\\n.Account__block--right-webkit summary::-webkit-details-marker {\\n  margin-top: 10px; }\\n\\n.Account__details-summary {\\n  display: inline-block; }\\n\\n.Account__nick-name {\\n  font-weight: 600;\\n  vertical-align: middle; }\\n\\n.Account__github-photo {\\n  border-radius: 3px;\\n  width: 20px;\\n  height: 20px;\\n  vertical-align: middle; }\\n\\n.Account__block-title {\\n  font-weight: 600;\\n  margin: 0; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Account.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Footer.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Footer.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Footer {\\n  padding: 16px 0;\\n  margin: 0 16px; }\\n\\n.Footer {\\n  font-size: 12px;\\n  color: #6a737d; }\\n  .Footer__github-icon {\\n    width: 24px;\\n    height: 24px;\\n    fill: #c6cbd1; }\\n  .Footer__github-link {\\n    color: #6a737d;\\n    text-decoration: none;\\n    margin-right: 32px; }\\n  .Footer__github-link-text, .Footer__github-icon {\\n    vertical-align: middle; }\\n  .Footer__navigation, .Footer__links {\\n    display: inline-block; }\\n  .Footer__links {\\n    vertical-align: top;\\n    list-style-type: none;\\n    margin-top: 0; }\\n  .Footer__list-element {\\n    margin-bottom: 4px; }\\n  .Footer__nav-link {\\n    text-decoration: none;\\n    color: #586069; }\\n  .Footer__nav-link:hover {\\n    color: #0366d6;\\n    text-decoration: underline; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Footer.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/General-navigation.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/General-navigation.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".General-navigation__list-of-options {\\n  display: inline-block;\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0; }\\n\\n.General-navigation__list-element {\\n  display: inline-block;\\n  vertical-align: middle;\\n  margin-left: 12px; }\\n\\n.General-navigation__search-form {\\n  display: inline-block;\\n  vertical-align: middle; }\\n\\n.General-navigation__search-input {\\n  width: 300px;\\n  height: 28px;\\n  background: rgba(255, 255, 255, 0.125);\\n  border: none;\\n  border-radius: 3px;\\n  padding-left: 7px; }\\n\\n.General-navigation__search-input::placeholder {\\n  color: #9a9899; }\\n\\n.General-navigation__link {\\n  color: white;\\n  font-weight: 600;\\n  text-decoration: none; }\\n\\n.General-navigation__link:hover {\\n  color: #A4A4A4; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/General-navigation.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Header.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Header.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Header {\\n  padding: 12px 16px;\\n  background: #24292e; }\\n  .Header__github-logo-link, .Header__left-navigation {\\n    display: inline-block;\\n    vertical-align: middle; }\\n  .Header__left-navigation {\\n    margin-left: 10px; }\\n  .Header__svg-logo {\\n    fill: #fff;\\n    width: 32px;\\n    height: 32px; }\\n  .Header__right-navigation {\\n    float: right;\\n    margin-top: 7px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Header.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Layout.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Layout.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Layout {\\n  display: flex; }\\n  .Layout__navigation {\\n    max-width: 350px;\\n    width: 25%;\\n    border-right: 1px solid #D2D6D7;\\n    background: white; }\\n  .Layout__main {\\n    width: 50%; }\\n  .Layout__sidebar {\\n    max-width: 350px;\\n    width: 25%;\\n    margin-top: 32px; }\\n  .Layout__navigation-content {\\n    position: sticky;\\n    top: 0; }\\n  .Layout__main, .Layout__navigation-content {\\n    margin-top: 16px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Layout.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/News.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/News.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".News__post-info-link {\\n  text-decoration: none;\\n  color: black;\\n  font-weight: 600; }\\n\\n.News__post-info-link:hover {\\n  color: #0366d6; }\\n\\n.News--underscored {\\n  border-bottom: 1px solid #D2D6D7; }\\n\\n.News {\\n  padding: 16px 0;\\n  margin: 0 16px; }\\n\\n.News {\\n  display: flex; }\\n  .News__user-link {\\n    margin-right: 16px; }\\n  .News__user-photo {\\n    width: 32px;\\n    height: 32px;\\n    border-radius: 3px; }\\n  .News__content {\\n    width: 100%; }\\n  .News__post-info {\\n    margin-top: 5px; }\\n  .News__post-time {\\n    font-size: 12px;\\n    color: #6a737d; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/News.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Profile-navigation.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Profile-navigation.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Profile-navigation__list-of-options {\\n  display: inline-block;\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0; }\\n\\n.Profile-navigation__list-element {\\n  display: inline-block;\\n  vertical-align: middle;\\n  margin-left: 12px; }\\n\\n.Profile-navigation__details--right-webkit summary::-webkit-details-marker {\\n  float: right;\\n  transform: rotate(90deg);\\n  margin-left: 8px;\\n  font-size: 12px;\\n  width: 5px; }\\n\\n.Profile-navigation__details {\\n  color: white; }\\n\\n.Profile-navigation__details--right-webkit summary::-webkit-details-marker {\\n  margin-top: 7px; }\\n\\n.Profile-navigation__additional-info-icon, .Profile-navigation__notifications-icon {\\n  width: 14px;\\n  height: 16px; }\\n\\n.Profile-navigation__notifications-icon {\\n  fill: rgba(255, 255, 255, 0.75); }\\n\\n.Profile-navigation__additional-info-icon {\\n  fill: white; }\\n\\n.Profile-navigation__github-photo {\\n  border-radius: 3px;\\n  width: 20px;\\n  height: 20px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Profile-navigation.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Project.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Project.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Project__link {\\n  text-decoration: none;\\n  color: black;\\n  font-weight: 600; }\\n\\n.Project__link:hover {\\n  color: #0366d6; }\\n\\n.Project {\\n  background: white;\\n  border: 1px solid #D2D6D7;\\n  border-radius: 3px;\\n  padding: 16px; }\\n  .Project__star-form {\\n    float: right; }\\n  .Project__star-button {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    height: 26px;\\n    width: 60px;\\n    background-color: #eff3f6;\\n    border-radius: 3px;\\n    border: 1px solid rgba(34, 34, 34, 0.25); }\\n  .Project__star-icon {\\n    width: 14px;\\n    height: 16px;\\n    fill: #24292e; }\\n  .Project__star-span {\\n    font-weight: 600;\\n    font-size: 12px; }\\n  .Project__name {\\n    font-size: 16px;\\n    margin: 4px 0; }\\n  .Project__information {\\n    color: #6a737d;\\n    margin: 4px 0; }\\n  .Project__creation-time {\\n    font-size: 12px;\\n    color: #6a737d; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Project.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Repository-block.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Repository-block.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Repository-block__title-link {\\n  text-decoration: none;\\n  color: black;\\n  font-weight: 600; }\\n\\n.Repository-block__title-link:hover {\\n  color: #0366d6; }\\n\\n.Repository-block--underscored {\\n  border-bottom: 1px solid #D2D6D7; }\\n\\n.Repository-block {\\n  padding: 8px 0; }\\n  .Repository-block__title, .Repository-block__description {\\n    margin: 4px 0; }\\n  .Repository-block__description, .Repository-block__language, .Repository-block__subscribers {\\n    font-size: 12px;\\n    color: #6a737d; }\\n  .Repository-block__star-icon {\\n    fill: #586069;\\n    margin-left: 8px;\\n    width: 14px;\\n    height: 16px;\\n    vertical-align: bottom; }\\n  .Repository-block__language--circle::before {\\n    content: ' ';\\n    display: inline-block;\\n    border-radius: 50%;\\n    height: 12px;\\n    width: 12px;\\n    margin-right: 3px; }\\n  .Repository-block__language--orange-circle::before {\\n    background-color: #e34c26; }\\n  .Repository-block__language--blue-circle::before {\\n    background-color: #1556D3; }\\n  .Repository-block__language--yellow-circle::before {\\n    background-color: #F18E33; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Repository-block.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Repository-navigation.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Repository-navigation.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Repository-navigation__title {\\n  font-weight: 600; }\\n\\n.Repository-navigation__new-repository {\\n  font-size: 12px;\\n  float: right;\\n  background: #28a745;\\n  padding: 3px 10px;\\n  line-height: 20px;\\n  text-decoration: none;\\n  color: white;\\n  border-radius: 3px;\\n  border: 1px solid #D2D6D7; }\\n\\n.Repository-navigation__new-repository:hover {\\n  background: #24973e; }\\n\\n.Repository-navigation__repository-icon {\\n  vertical-align: middle;\\n  width: 12px;\\n  height: 16px; }\\n\\n.Repository-navigation__repository-icon--white {\\n  fill: white; }\\n\\n.Repository-navigation__repository-icon--grey {\\n  fill: #6a737d; }\\n\\n.Repository-navigation__input {\\n  width: 100%;\\n  height: 28px;\\n  border-radius: 2px;\\n  border: 1px solid rgba(34, 34, 34, 0.25); }\\n\\n.Repository-navigation__input::placeholder {\\n  color: #bfbfbf; }\\n\\n.Repository-navigation__list {\\n  list-style-type: none;\\n  overflow: hidden;\\n  padding-left: 0; }\\n\\n.Repository-navigation__list-element {\\n  margin-bottom: 8px; }\\n\\n.Repository-navigation__repository-name {\\n  font-weight: 600;\\n  text-decoration: none;\\n  color: #0366d6; }\\n\\n.Repository-navigation__repository-name:hover {\\n  text-decoration: underline; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Repository-navigation.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Sidebar.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Sidebar.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Sidebar__title {\\n  margin: 0;\\n  font-weight: 600; }\\n\\n.Sidebar__block {\\n  margin: 8px 32px 8px 0; }\\n\\n.Sidebar__footer-link {\\n  color: #6a737d;\\n  font-size: 12px;\\n  text-decoration: none; }\\n\\n.Sidebar__footer-link:hover {\\n  color: #0366d6; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Sidebar.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Subscribing.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Subscribing.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Subscribing {\\n  padding: 16px 0;\\n  margin: 0 16px; }\\n\\n.Subscribing {\\n  font-size: 12px;\\n  color: #586069; }\\n  .Subscribing__icon-light {\\n    fill: #586069;\\n    width: 12px;\\n    height: 16px; }\\n  .Subscribing__network-icon {\\n    fill: #586069;\\n    width: 10px;\\n    height: 16px; }\\n  .Subscribing__line-part, .Subscribing__link, .Subscribing__icon-light, .Subscribing__network-icon {\\n    vertical-align: middle; }\\n  .Subscribing__link {\\n    text-decoration: none;\\n    color: #0366d6; }\\n  .Subscribing__news {\\n    text-decoration: none;\\n    color: #586069; }\\n  .Subscribing__link:hover, .Subscribing__news:hover {\\n    text-decoration: underline;\\n    color: #0366d6; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/Subscribing.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/body-styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/body-styles.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  font-family: Segoe UI, sans-serif;\\n  background: #f6f8fa;\\n  font-size: 14px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/body-styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

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

/***/ "./src/htmlGenerator.js":
/*!******************************!*\
  !*** ./src/htmlGenerator.js ***!
  \******************************/
/*! exports provided: friendsRepository, recommendedRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"friendsRepository\", function() { return friendsRepository; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recommendedRepository\", function() { return recommendedRepository; });\nconst friendsRepository = (user, repository) => {\n    const rootEl = document.createElement(\"article\");\n    rootEl.className = \"News News--underscored\";\n\n    rootEl.innerHTML = `\n                <a class=\"News__user-link\" href=\"#\">\n                    <img class=\"News__user-photo\" alt=\"User's photo\" src=\"unknown.jpeg\">\n                </a>\n                <div class=\"News__content\">\n                    <p class=\"News__post-info\">\n                        <a class=\"News__post-info-link\" href=\"#\">${user.name}</a> created a repository\n                        <a class=\"News__post-info-link\" href=\"#\">${repository.name}</a>\n                        <time class=\"News__post-time\" datetime=\"10-01-2019\">${repository.creationTime}</time>\n                    </p>\n                    <div class=\"Project\">\n                        <form class=\"Project__star-form\">\n                            <button class=\"Project__star-button\" type=\"button\">\n                                <svg class=\"Project__star-icon\" version=\"1.1\">\n                                    <path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z\"></path>\n                                </svg>\n                                <span class=\"Project__star-span\">Star</span>\n                            </button>\n                        </form>\n                        <h4 class=\"Project__name\">\n                            <a class=\"Project__link\" href=\"#\">${repository.name}</a>\n                        </h4>\n                        <p class=\"Project__information\">\n                            ${repository.description}\n                        </p>\n                        <footer>\n                            <time class=\"Project__creation-time\" datetime=\"11-01-2019\">Updated ${repository.updateTime}</time>\n                        </footer>\n                    </div>\n                </div>\n    `;\n\n    return rootEl;\n};\n\nconst getRandomColor = () => [\"blue\", \"yellow\", \"orange\"][(Math.random() * 3) ^ 0];\n\nconst recommendedRepository = (user, repository) => {\n    const rootEl = document.createElement(\"div\");\n    rootEl.className = \"Sidebar__block\";\n\n    rootEl.innerHTML = `\n                        <div class=\"Repository-block Repository-block--underscored\">\n                            <h5 class=\"Repository-block__title\">\n                                <a class=\"Repository-block__title-link\" href=\"#\">${repository.name}</a>\n                            </h5>\n                            <p class=\"Repository-block__description\">\n                                ${repository.description}\n                            </p>\n                            <footer>\n                            <span class=\"Repository-block__language Repository-block__language--circle Repository-block__language--${getRandomColor()}-circle\">\n                                ${repository.language}\n                            </span>\n                                <span class=\"Repository-block__subscribers\">\n                                <svg class=\"Repository-block__star-icon\" version=\"1.1\">\n                                    <path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z\"></path>\n                                </svg>\n                                ${repository.stars}\n                            </span>\n                            </footer>\n                        </div>\n    `;\n\n    return rootEl;\n};\n\n\n//# sourceURL=webpack:///./src/htmlGenerator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_body_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/body-styles.scss */ \"./src/styles/body-styles.scss\");\n/* harmony import */ var _styles_body_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_body_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Header.scss */ \"./src/styles/Header.scss\");\n/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_General_navigation_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/General-navigation.scss */ \"./src/styles/General-navigation.scss\");\n/* harmony import */ var _styles_General_navigation_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_General_navigation_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Profile_navigation_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Profile-navigation.scss */ \"./src/styles/Profile-navigation.scss\");\n/* harmony import */ var _styles_Profile_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_navigation_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Layout.scss */ \"./src/styles/Layout.scss\");\n/* harmony import */ var _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_News_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/News.scss */ \"./src/styles/News.scss\");\n/* harmony import */ var _styles_News_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_News_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Project_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Project.scss */ \"./src/styles/Project.scss\");\n/* harmony import */ var _styles_Project_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Project_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Sidebar_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Sidebar.scss */ \"./src/styles/Sidebar.scss\");\n/* harmony import */ var _styles_Sidebar_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Sidebar_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Repository_block_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Repository-block.scss */ \"./src/styles/Repository-block.scss\");\n/* harmony import */ var _styles_Repository_block_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Repository_block_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Subscribing_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Subscribing.scss */ \"./src/styles/Subscribing.scss\");\n/* harmony import */ var _styles_Subscribing_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Subscribing_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/Footer.scss */ \"./src/styles/Footer.scss\");\n/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Account_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/Account.scss */ \"./src/styles/Account.scss\");\n/* harmony import */ var _styles_Account_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Account_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_Repository_navigation_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/Repository-navigation.scss */ \"./src/styles/Repository-navigation.scss\");\n/* harmony import */ var _styles_Repository_navigation_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Repository_navigation_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _htmlGenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./htmlGenerator */ \"./src/htmlGenerator.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst generateData = async () => {\n    const user = await (await fetch(\"api/users/1\")).json();\n    const repositories = await (await fetch(\"api/users/1/repositories\")).json();\n\n    const container1 = document.querySelector(\".News-Container\");\n    const container2 = document.querySelector(\".Sidebar__block-container\");\n\n    repositories.map(element => container1.appendChild(Object(_htmlGenerator__WEBPACK_IMPORTED_MODULE_13__[\"friendsRepository\"])(user, element)));\n    repositories.map(element => container2.appendChild(Object(_htmlGenerator__WEBPACK_IMPORTED_MODULE_13__[\"recommendedRepository\"])(user, element)));\n};\n\ngenerateData();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/Account.scss":
/*!*********************************!*\
  !*** ./src/styles/Account.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Account.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Account.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Account.scss?");

/***/ }),

/***/ "./src/styles/Footer.scss":
/*!********************************!*\
  !*** ./src/styles/Footer.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Footer.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Footer.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Footer.scss?");

/***/ }),

/***/ "./src/styles/General-navigation.scss":
/*!********************************************!*\
  !*** ./src/styles/General-navigation.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./General-navigation.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/General-navigation.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/General-navigation.scss?");

/***/ }),

/***/ "./src/styles/Header.scss":
/*!********************************!*\
  !*** ./src/styles/Header.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Header.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Header.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Header.scss?");

/***/ }),

/***/ "./src/styles/Layout.scss":
/*!********************************!*\
  !*** ./src/styles/Layout.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Layout.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Layout.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Layout.scss?");

/***/ }),

/***/ "./src/styles/News.scss":
/*!******************************!*\
  !*** ./src/styles/News.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./News.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/News.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/News.scss?");

/***/ }),

/***/ "./src/styles/Profile-navigation.scss":
/*!********************************************!*\
  !*** ./src/styles/Profile-navigation.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Profile-navigation.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Profile-navigation.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Profile-navigation.scss?");

/***/ }),

/***/ "./src/styles/Project.scss":
/*!*********************************!*\
  !*** ./src/styles/Project.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Project.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Project.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Project.scss?");

/***/ }),

/***/ "./src/styles/Repository-block.scss":
/*!******************************************!*\
  !*** ./src/styles/Repository-block.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Repository-block.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Repository-block.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Repository-block.scss?");

/***/ }),

/***/ "./src/styles/Repository-navigation.scss":
/*!***********************************************!*\
  !*** ./src/styles/Repository-navigation.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Repository-navigation.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Repository-navigation.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Repository-navigation.scss?");

/***/ }),

/***/ "./src/styles/Sidebar.scss":
/*!*********************************!*\
  !*** ./src/styles/Sidebar.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Sidebar.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Sidebar.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Sidebar.scss?");

/***/ }),

/***/ "./src/styles/Subscribing.scss":
/*!*************************************!*\
  !*** ./src/styles/Subscribing.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Subscribing.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/Subscribing.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/Subscribing.scss?");

/***/ }),

/***/ "./src/styles/body-styles.scss":
/*!*************************************!*\
  !*** ./src/styles/body-styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./body-styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/body-styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/body-styles.scss?");

/***/ })

/******/ });