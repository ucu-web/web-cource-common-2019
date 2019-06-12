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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/beginner-resources/beginner-resources.less":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/beginner-resources/beginner-resources.less ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Beginner-resources {\\n  display: flex;\\n  flex-wrap: wrap;\\n  max-width: 1440px;\\n  margin: 0 auto;\\n  background-color: #F4F5F7;\\n  padding-top: 64px;\\n  padding-bottom: 16px;\\n}\\n.Beginner-resources__text-block {\\n  text-align: center;\\n  width: 50%;\\n  float: left;\\n  margin-left: 25%;\\n  padding: 16px;\\n}\\n.Beginner-resources__image-block {\\n  background-color: #FFFFFF;\\n  color: #091E42;\\n  padding: 40px;\\n  height: 80%;\\n}\\n.Beginner-resources__image-block-container {\\n  padding: 16px;\\n  width: 33.3%;\\n  margin-left: 15%;\\n  float: left;\\n  box-sizing: border-box;\\n}\\n.Beginner-resources__image-block-container:last-of-type {\\n  margin-left: 0;\\n}\\n.Beginner-resources__main-heading {\\n  font-size: 2.75rem;\\n  line-height: 1.2;\\n  margin-bottom: 16px;\\n  font-weight: 500;\\n}\\n.Beginner-resources__main-heading-extra {\\n  font-size: 1.25rem;\\n  letter-spacing: 0.3px;\\n  line-height: 1.4;\\n  color: #42526E;\\n}\\n.Beginner-resources__sub-heading {\\n  font-size: 1.5rem;\\n  margin-bottom: 16px;\\n  line-height: 1.3;\\n  letter-spacing: 0.3px;\\n}\\n.Beginner-resources__main-content {\\n  line-height: 24px;\\n  margin-bottom: 24px;\\n  font-weight: 400;\\n}\\n@media (max-width: 750px) {\\n  .Beginner-resources {\\n    flex-direction: column;\\n  }\\n  .Beginner-resources__image-block-container {\\n    width: 83.3%;\\n    margin-left: 8.3% !important;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/beginner-resources/beginner-resources.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/curve/curve-line.less":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/curve/curve-line.less ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Layout__curve-three-img {\\n  display: flex;\\n  flex-wrap: wrap;\\n  overflow: hidden;\\n  background-color: #fff;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n  padding-bottom: 64px;\\n}\\n.Curve {\\n  display: block;\\n  background-color: #F4F5F7;\\n}\\n.Curve__three-img {\\n  background-color: #fff;\\n}\\n.Curve__image {\\n  margin-bottom: 16px;\\n}\\n.Curve__one-block {\\n  width: 33.3333%;\\n  float: left;\\n  text-align: center;\\n  padding: 16px;\\n  box-sizing: border-box;\\n}\\n.Curve__heading {\\n  font-size: 1.5rem;\\n  line-height: 1.33333333;\\n  margin-bottom: 16px;\\n  letter-spacing: 0.3px;\\n}\\n.Curve__main-content {\\n  color: #253858;\\n  line-height: 24px;\\n}\\n@media (max-width: 800px) {\\n  .Layout__curve-three-img {\\n    justify-content: center;\\n  }\\n  .Curve__one-block {\\n    width: 50%;\\n  }\\n}\\n@media (max-width: 550px) {\\n  .Curve__one-block {\\n    width: 100%;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/curve/curve-line.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/feature/feature.less":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/feature/feature.less ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Feature {\\n  padding: 16px;\\n  max-width: 1200px;\\n  display: flex;\\n  margin: 0 auto;\\n}\\n.Feature__image {\\n  width: 66.6%;\\n  padding: 0 16px;\\n  box-sizing: border-box;\\n}\\n.Feature__image-mobile {\\n  display: none;\\n}\\n.Feature__text {\\n  width: 33.3%;\\n}\\n.Feature__extra-heading {\\n  margin-bottom: 16px;\\n  font-size: 0.75rem;\\n  letter-spacing: 1px;\\n  line-height: 2;\\n  text-transform: uppercase;\\n  font-weight: 400;\\n}\\n.Feature__main-heading {\\n  font-size: 2.25rem;\\n  line-height: 1.33;\\n  margin-bottom: 24px;\\n  font-weight: 500;\\n}\\n.Feature__main-content {\\n  font-size: 1.25rem;\\n  line-height: 1.4;\\n  color: #42526E;\\n}\\n@media (max-width: 1000px) {\\n  .Feature {\\n    flex-direction: column;\\n  }\\n  .Feature:nth-child(2) {\\n    flex-direction: column-reverse;\\n  }\\n  .Feature__image {\\n    width: 100%;\\n  }\\n  .Feature__text {\\n    width: 100%;\\n  }\\n}\\n@media (max-width: 750px) {\\n  .Feature__image-desktop {\\n    display: none;\\n  }\\n  .Feature__image-mobile {\\n    display: inline;\\n  }\\n  .Feature__main-heading {\\n    font-size: 1.5rem;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/feature/feature.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/header/header.less":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/header/header.less ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Layout__header {\\n  position: sticky;\\n  top: 0;\\n  overflow: hidden;\\n  height: 70px;\\n  background: #ffffff;\\n}\\n.Header {\\n  max-width: 1200px;\\n  height: 100%;\\n  margin: auto;\\n}\\n.Header__svg-log {\\n  display: block;\\n  box-sizing: border-box;\\n}\\n.Header__nav-bar {\\n  margin: 5px 15px;\\n  flex-grow: 2;\\n}\\n.Header__nav-bar-wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  box-sizing: border-box;\\n  padding: 0 16px;\\n  position: relative;\\n  width: 100%;\\n}\\n.Header__nav-bar-link {\\n  float: left;\\n  font-size: 1.125rem;\\n  margin: 0 15px;\\n  padding-bottom: 15px;\\n  padding-top: 26px;\\n}\\n.Header__nav-bar-link-log-in {\\n  float: right;\\n}\\n.Header__nav-bar-link:hover {\\n  color: #0065FF;\\n}\\n.Header__get-started-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.Header__get-started-button {\\n  font-size: 1rem;\\n  font-weight: 500;\\n  line-height: 1.75;\\n  border: 1px solid #0052CC;\\n  border-radius: 3px;\\n  height: 30px;\\n  padding: 0 10px;\\n}\\n.Header__get-started-button:hover {\\n  background: #EBECF0;\\n  transition: all 250ms;\\n  color: #0052CC;\\n}\\n@media (max-width: 1000px) {\\n  .Header__nav-bar-link {\\n    font-size: 1rem;\\n  }\\n}\\n@media (max-width: 750px) {\\n  .Header__nav-bar {\\n    display: none;\\n  }\\n  .Header__nav-bar-wrapper {\\n    height: 100%;\\n  }\\n  .Header__get-started-button {\\n    font-size: 0.9rem;\\n    height: 27px;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/header/header.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/integration/integrations.less":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/integration/integrations.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Integration {\\n  background: #F4F5F7;\\n  padding-top: 32px;\\n  padding-bottom: 64px;\\n}\\n.Integration__heading {\\n  margin: 16px;\\n  text-align: center;\\n}\\n.Integration__heading-main {\\n  font-size: 2.25rem;\\n  line-height: 1.3;\\n  margin-bottom: 24px;\\n  color: #253858;\\n}\\n.Integration__heading-extra {\\n  font-size: 1.25rem;\\n  letter-spacing: 0.3px;\\n  line-height: 1.4;\\n  color: #42526E;\\n  margin-bottom: 16px;\\n}\\n.Integration__feature {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin: 0 auto;\\n  max-width: 1200px;\\n}\\n.Integration__feature-heading {\\n  font-size: 1.5rem;\\n  line-height: 1.3;\\n  margin-bottom: 16px;\\n  color: #253858;\\n  letter-spacing: 0.3px;\\n}\\n.Integration__feature-content {\\n  font-weight: 400;\\n  line-height: 24px;\\n}\\n@media (max-width: 800px) {\\n  .Integration__feature {\\n    justify-content: center;\\n  }\\n  .Integration__heading-main {\\n    font-size: 1.5rem;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/integration/integrations.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/introduction/intro.less":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/introduction/intro.less ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Layout__intro {\\n  background-color: #F4F5F7;\\n  overflow: hidden;\\n  margin: 0 auto;\\n}\\n.Intro {\\n  padding: 16px;\\n  text-align: center;\\n  width: 66.6%;\\n  margin-left: 16%;\\n  float: left;\\n}\\n.Intro__heading {\\n  font-size: 2.75rem;\\n  margin-bottom: 16px;\\n  line-height: 1.18;\\n  color: #253858;\\n  font-weight: 500;\\n}\\n.Intro__sub-heading {\\n  color: #42526E;\\n  font-size: 1.25rem;\\n  line-height: 1.4;\\n}\\n.Intro__image {\\n  width: 100%;\\n}\\n.Intro__proposition {\\n  font-size: 1rem;\\n  color: #253858;\\n  line-height: 24px;\\n  margin-bottom: 24px;\\n}\\n.Intro__button {\\n  color: #FFF;\\n  display: inline-block;\\n  font-weight: 500;\\n  background-color: #0052CC;\\n  border: 1px solid #0052CC;\\n  height: 40px;\\n  line-height: 38px;\\n  padding: 0 16px;\\n  border-radius: 3px;\\n  margin-bottom: 16px;\\n}\\n.Intro__button:hover {\\n  background: #0047B3;\\n  border-color: #0047B3;\\n  transition: all 250ms;\\n}\\n@media (max-width: 750px) {\\n  .Intro__heading {\\n    font-size: 2rem;\\n    line-height: 1.25;\\n    margin-bottom: 14px;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/introduction/intro.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/login/login.less":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/login/login.less ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Login {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n  min-height: 500px;\\n  width: 400px;\\n  margin: 0 auto;\\n}\\n.Login__wrapper {\\n  width: 100%;\\n  background-color: #0747A6;\\n}\\n.Login__header {\\n  margin-top: 48px;\\n  text-align: center;\\n  display: block;\\n}\\n.Login__header-title {\\n  color: #deebff;\\n  font-size: 24px;\\n  font-weight: 500;\\n  line-height: 28px;\\n  margin-top: 40px;\\n}\\n.Login__logo {\\n  padding: 0 60px;\\n  color: #ffffff;\\n  display: inline-block;\\n  fill: #ffffff;\\n  height: 48px;\\n  position: relative;\\n}\\n.Login__form {\\n  margin: 48px 0;\\n}\\n.Login__box {\\n  background: #ffffff none repeat scroll 0% 0%;\\n  border-radius: 3px;\\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px;\\n  box-sizing: border-box;\\n  color: #172b4d;\\n  padding: 48px;\\n}\\n.Login__box-google {\\n  margin-bottom: 24px;\\n}\\n.Login__box-google-btn {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: center;\\n  max-width: 100%;\\n  opacity: 1;\\n  line-height: 39px !important;\\n  color: #505f79 !important;\\n  cursor: default;\\n  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0px !important;\\n  font-weight: bold;\\n  background-color: #ffffff;\\n  border-radius: 3px;\\n  border-width: 0;\\n  box-sizing: border-box;\\n  font-size: inherit;\\n  font-style: normal;\\n  height: 2.28571em;\\n  outline: currentcolor none medium !important;\\n  padding: 0 8px;\\n  text-decoration: none;\\n  vertical-align: middle;\\n  width: 100%;\\n}\\n.Login__box-submit {\\n  margin: 12px 0 0;\\n  padding: 0;\\n  color: #172b4d;\\n}\\n.Login__box-email {\\n  margin-top: 0;\\n  align-items: center;\\n  background-color: #fafbfc;\\n  border-color: #dfe1e6;\\n  border-radius: 3px;\\n  border-style: solid;\\n  box-sizing: border-box;\\n  color: #091e42;\\n  display: flex;\\n  flex: 1 0 auto;\\n  font-size: 14px;\\n  justify-content: space-between;\\n  line-height: 1.42857;\\n  max-width: 100%;\\n  overflow: hidden;\\n  transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;\\n  overflow-wrap: break-word;\\n  border-width: 2px;\\n  padding: 6px;\\n}\\n.Login__box-email-field {\\n  background: transparent none repeat scroll 0 0;\\n  border: 0 none;\\n  box-sizing: border-box;\\n  color: inherit;\\n  cursor: inherit;\\n  font-family: inherit;\\n  font-size: 14px;\\n  outline: currentcolor none medium;\\n  width: 100%;\\n}\\n.Login__box-continue {\\n  margin-top: 24px;\\n}\\n.Login__box-continue-btn {\\n  height: 39px !important;\\n  line-height: 39px !important;\\n  background-color: #0052cc;\\n  border-radius: 3px;\\n  border-width: 0;\\n  box-sizing: border-box;\\n  color: #ffffff !important;\\n  cursor: default;\\n  font-size: inherit;\\n  font-style: normal;\\n  max-width: 100%;\\n  padding: 0 8px;\\n  text-align: center;\\n  width: 100%;\\n}\\n.Login__box-continue-btn:hover {\\n  background-color: #0065ff;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/login/login.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/partners/partners.less":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/partners/partners.less ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Partners {\\n  padding-top: 64px;\\n  margin: 0 auto;\\n  overflow: hidden;\\n}\\n.Partners__heading {\\n  width: 50%;\\n  text-align: center;\\n  margin-left: 25%;\\n  font-size: 2.25rem;\\n  line-height: 1.3;\\n  font-weight: 500;\\n}\\n.Partners__image {\\n  text-align: center;\\n  width: 100%;\\n  padding: 16px;\\n  box-sizing: border-box;\\n}\\n.Partners__image-mobile {\\n  display: none;\\n}\\n@media (max-width: 800px) {\\n  .Partners__image-desktop {\\n    display: none;\\n  }\\n  .Partners__image-mobile {\\n    display: inline;\\n    width: 500px;\\n  }\\n  .Partners__heading {\\n    font-size: 1.5rem;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/partners/partners.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/pricing/pricing.less":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/pricing/pricing.less ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Pricing {\\n  padding: 16px 0;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n.Pricing__title {\\n  text-align: center;\\n  margin-left: 25%;\\n  max-width: 1200px;\\n  width: 50%;\\n  float: left;\\n  padding: 16px;\\n}\\n.Pricing__title-text {\\n  font-size: 2.25rem;\\n  line-height: 1.3;\\n}\\n.Pricing__container {\\n  max-width: 1200px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin: auto;\\n}\\n.Pricing__container-remarks {\\n  text-align: center;\\n  width: 100%;\\n  padding: 16px;\\n  float: left;\\n  box-sizing: border-box;\\n}\\n.Pricing__container-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 16px;\\n  width: 33%;\\n  box-sizing: border-box;\\n}\\n.Pricing__container-block {\\n  text-align: center;\\n  margin-left: 0;\\n  border-radius: 4px;\\n  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);\\n  height: 100%;\\n}\\n.Pricing__block {\\n  box-sizing: border-box;\\n}\\n.Pricing__block-bg {\\n  padding: 40px;\\n  background-color: #F4F5F7;\\n}\\n.Pricing__block-name {\\n  font-size: 1.25rem;\\n  line-height: 1.2;\\n  font-weight: 500;\\n}\\n.Pricing__block-subname {\\n  color: #253858;\\n  font-size: 1rem;\\n  font-weight: 400;\\n}\\n.Pricing__block-price {\\n  color: #0052CC;\\n  font-size: 72px;\\n  font-weight: 700;\\n  margin-bottom: 16px;\\n}\\n.Pricing__block-usability {\\n  color: #42526E;\\n  font-size: 1.25rem;\\n  letter-spacing: 0.3px;\\n  line-height: 1.4;\\n}\\n.Pricing__features {\\n  padding-left: 64px;\\n  padding-bottom: 32px;\\n  padding-top: 32px;\\n  text-align: left;\\n}\\n.Pricing__feature-active {\\n  list-style-type: none;\\n  margin-left: -20px;\\n  min-height: 15px;\\n  padding-left: 32px;\\n  margin-bottom: 12px;\\n}\\n.Pricing__feature-inactive {\\n  list-style-type: none;\\n  margin-left: -20px;\\n  min-height: 15px;\\n  padding-left: 32px;\\n  margin-bottom: 12px;\\n  opacity: 0.15;\\n}\\n.Pricing__separator {\\n  margin-top: 15px;\\n}\\n.Pricing__extra {\\n  padding-left: 64px;\\n  padding-bottom: 32px;\\n  padding-top: 32px;\\n  text-align: left;\\n}\\n.Pricing__extra-text {\\n  list-style-type: none;\\n  margin-bottom: 12px;\\n  font-size: 1rem;\\n  line-height: 1.5;\\n  color: inherit;\\n}\\n.Pricing__list {\\n  padding-left: 0;\\n}\\n.Pricing__btn-container {\\n  text-align: center;\\n  margin-top: 15px;\\n}\\n@media (max-width: 800px) {\\n  .Pricing__container {\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n  .Pricing__container-wrapper {\\n    width: 66.6%;\\n  }\\n  .Pricing__title {\\n    margin: 0;\\n  }\\n  .Pricing__title-text {\\n    font-size: 1.5rem;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/pricing/pricing.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/components/partners/horizontal-line.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/components/partners/horizontal-line.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Horizontal-line {\\n    padding: 16px;\\n    max-width: 1200px;\\n    margin: 0 auto;\\n    color: #42526E;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/components/partners/horizontal-line.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/common.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/common.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n    margin: 0;\\n    padding: 0;\\n    font-family: \\\"Charlie Text Regular\\\", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, \\\"Helvetica Neue\\\", sans-serif;\\n    font-style: normal;\\n    line-height: 1;\\n\\n}\\n\\na {\\n    text-decoration: none;\\n    cursor: pointer;\\n    color: #0052CC;\\n}\\n\\nh1, h2, h3, h4, h5 {\\n    margin: 0;\\n    color: #253858;\\n}\\n\\nimg {\\n    max-width: 100%;\\n    max-height: 100%;\\n    margin-bottom: 16px;\\n}\\n\\nhr {\\n    background: #DFE1E5;\\n    border: 0;\\n    height: 2px;\\n    margin: 0;\\n    padding: 0;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/styles/fonts.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/styles/fonts.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../fonts/charlie-text/Charlie_Text-Regular.woff */ \"./static/fonts/charlie-text/Charlie_Text-Regular.woff\"));\n\n// Module\nexports.push([module.i, \"@font-face {\\n    font-family: 'Charlie Text Regular';\\n    src: url(\" + ___CSS_LOADER_URL___0___ + \") format('woff');\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/styles/fonts.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./static/components/beginner-resources/Beginner-resources.js":
/*!********************************************************************!*\
  !*** ./static/components/beginner-resources/Beginner-resources.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderBegRes = () => {\n    const container = document.createElement(\"section\");\n    container.className = \"Beginner-resources\";\n    container.innerHTML = `<section class=\"Beginner-resources__text-block\">\n            <h2 class=\"Beginner-resources__main-heading\">New to Git?</h2>\n            <p class=\"Beginner-resources__main-heading-extra\">\n                No problem. We have resources to get you up to speed,\n                quickly.\n            </p>\n        </section>\n        <div class=\"Beginner-resources__image-block-container\">\n            <section class=\"Beginner-resources__image-block\">\n                <img src=\"/images/07_Branches.png\" alt=\"Git branch icon\" style=\"height: 90px\">\n                <h3 class=\"Beginner-resources__sub-heading\">Learn Git with interactive tutorials</h3>\n                <p class=\"Beginner-resources__main-content\">\n                    Make Bitbucket your Git sandbox with tutorials that bring you up to speed with Git and help you\n                    build\n                    effective workflows.\n                </p>\n                <a href=\"#\">Learn more\n                    <svg width=\"11px\" height=\"8px\" viewBox=\"0 0 11 8\" version=\"1.1\"\n                         xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                        <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                            <g class=\"group-path\" transform=\"translate(-138.000000, -586.000000)\" fill=\"#0052CC\">\n                                <path d=\"M145.2803,586.507862 L144.2193,587.568863 L145.9393,589.287862 L138.7503,589.287862 C138.3363,589.287862 138.0003,589.623862 138.0003,590.037862 C138.0003,590.451862 138.3363,590.787862 138.7503,590.787862 L145.9393,590.787862 L144.2193,592.507862 L145.2803,593.568863 L148.8103,590.037862 L145.2803,586.507862 Z\"\n                                      id=\"Fill-1\"></path>\n                            </g>\n                        </g>\n                    </svg>\n                </a>\n            </section>\n        </div>\n        <div class=\"Beginner-resources__image-block-container\">\n            <section class=\"Beginner-resources__image-block\">\n                <img src=\"/images/08_Sourcetree.svg\" alt=\"Sourcetree icon\" style=\"height: 90px\">\n                <h3 class=\"Beginner-resources__sub-heading\">Download Sourcetree, our free Git GUI</h3>\n                <p class=\"Beginner-resources__main-content\">\n                    Say goodbye to the command line - Sourcetree simplifies how you interact with your Git repositories\n                    so\n                    you can focus on coding.\n                </p>\n                <a href=\"#\">Learn more\n                    <svg width=\"11px\" height=\"8px\" viewBox=\"0 0 11 8\" version=\"1.1\"\n                         xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                        <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                            <g class=\"group-path\" transform=\"translate(-138.000000, -586.000000)\" fill=\"#0052CC\">\n                                <path d=\"M145.2803,586.507862 L144.2193,587.568863 L145.9393,589.287862 L138.7503,589.287862 C138.3363,589.287862 138.0003,589.623862 138.0003,590.037862 C138.0003,590.451862 138.3363,590.787862 138.7503,590.787862 L145.9393,590.787862 L144.2193,592.507862 L145.2803,593.568863 L148.8103,590.037862 L145.2803,586.507862 Z\"\n                                      id=\"Fill-1\"></path>\n                            </g>\n                        </g>\n                    </svg>\n                </a>\n            </section>\n        </div>`;\n    return container;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderBegRes);\n\n//# sourceURL=webpack:///./static/components/beginner-resources/Beginner-resources.js?");

/***/ }),

/***/ "./static/components/beginner-resources/beginner-resources.less":
/*!**********************************************************************!*\
  !*** ./static/components/beginner-resources/beginner-resources.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./beginner-resources.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/beginner-resources/beginner-resources.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/beginner-resources/beginner-resources.less?");

/***/ }),

/***/ "./static/components/beginner-resources/index.js":
/*!*******************************************************!*\
  !*** ./static/components/beginner-resources/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _beginner_resources_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beginner-resources.less */ \"./static/components/beginner-resources/beginner-resources.less\");\n/* harmony import */ var _beginner_resources_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_beginner_resources_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Beginner_resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Beginner-resources */ \"./static/components/beginner-resources/Beginner-resources.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Beginner_resources__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./static/components/beginner-resources/index.js?");

/***/ }),

/***/ "./static/components/curve/Curve.js":
/*!******************************************!*\
  !*** ./static/components/curve/Curve.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderCurve = () => {\n    const container = document.createElement(\"section\");\n    container.className = \"Layout__curve\";\n    container.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 68\"\n             enable-background=\"new 0 0 1440 68\" class=\"Curve\">\n            <path d=\"m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8\"\n                  fill=\"#F4F5F7\" transform=\"translate(0-1977)\" style=\"fill: #FFFFFF;\"></path>\n        </svg>\n        <div class=\"Layout__curve-three-img\">\n            <section class=\"Curve__one-block\">\n                <div>\n                    <img src=\"/images/01_Files.png\" alt=\"Files logo\" class=\"Curve__image\" style=\"height: 140px;\">\n                </div>\n                <div>\n                    <h3 class=\"Curve__heading\">Free unlimited private repositories</h3>\n                    <p class=\"Curve__main-content\">\n                        Free for small teams under 5 and priced to scale with Standard ($2/user/mo) or Premium\n                        ($5/user/mo) plans.\n                    </p>\n                </div>\n            </section>\n            <section class=\"Curve__one-block\">\n                <div>\n                    <img src=\"/images/02_Integration.png\" alt=\"Integration logo\" class=\"Curve__image\"\n                         style=\"height: 132px;\">\n                </div>\n                <div>\n                    <h3 class=\"Curve__heading\">Best-in-class Jira & Trello integration</h3>\n                    <p class=\"Curve__main-content\">\n                        Keep your projects organized by creating Bitbucket branches right from Jira issues or Trello\n                        cards.\n                    </p>\n                </div>\n            </section>\n            <section class=\"Curve__one-block\">\n                <div>\n                    <img src=\"/images/03_Delivery.png\" alt=\"Delivery logo\" class=\"Curve__image\" style=\"height: 140px\">\n                </div>\n                <div>\n                    <h3 class=\"Curve__heading\">\n                        Built-in Continuous\n                        Delivery\n                    </h3>\n                    <p class=\"Curve__main-content\">\n                        Build, test and deploy with integrated CI/CD. Benefit from configuration as code and fast\n                        feedback loops.\n                    </p>\n                </div>\n            </section>\n        </div>`;\n    return container;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderCurve);\n\n//# sourceURL=webpack:///./static/components/curve/Curve.js?");

/***/ }),

/***/ "./static/components/curve/curve-line.less":
/*!*************************************************!*\
  !*** ./static/components/curve/curve-line.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./curve-line.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/curve/curve-line.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/curve/curve-line.less?");

/***/ }),

/***/ "./static/components/curve/index.js":
/*!******************************************!*\
  !*** ./static/components/curve/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curve_line_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve-line.less */ \"./static/components/curve/curve-line.less\");\n/* harmony import */ var _curve_line_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_curve_line_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Curve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Curve */ \"./static/components/curve/Curve.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Curve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./static/components/curve/index.js?");

/***/ }),

/***/ "./static/components/feature/Feature.js":
/*!**********************************************!*\
  !*** ./static/components/feature/Feature.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper */ \"./static/helper.js\");\n\n\nconst renderFeature = async (root, endpoint) => {\n    const container = document.createElement(\"div\");\n    root.appendChild(container);\n    const data = await Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"getData\"])(endpoint);\n    let text = (textData) => `<div class=\"Feature__text\">\n            <h5 class=\"Feature__extra-heading\">${textData.title}</h5>\n            <h2 class=\"Feature__main-heading\">${textData.subtitle}</h2>\n            <p class=\"Feature__main-content\">\n                ${textData.mainContent}\n            </p>\n        </div>`;\n\n    let icon = (imgData) => `<div class=\"Feature__image\">\n            <img class=\"Feature__image-desktop\" src=${imgData.desktop.src} alt=${imgData.alt}>\n            <img class=\"Feature__image-mobile\" src=${imgData.mobile.src} alt=${imgData.alt}>\n        </div>`;\n    let wrapper = (elem) => `<section class=\"Feature\">${elem}</section>`;\n    let correlation = {\n        \"text\": (data) => text(data),\n        \"image\": (data) => icon(data)\n    };\n    container.innerHTML = `${data.map(element => wrapper(element.map(item => correlation[item.type](item.data)).join(\"\"))).join(\"\")}`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderFeature);\n\n//# sourceURL=webpack:///./static/components/feature/Feature.js?");

/***/ }),

/***/ "./static/components/feature/feature.less":
/*!************************************************!*\
  !*** ./static/components/feature/feature.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./feature.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/feature/feature.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/feature/feature.less?");

/***/ }),

/***/ "./static/components/feature/index.js":
/*!********************************************!*\
  !*** ./static/components/feature/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feature_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature.less */ \"./static/components/feature/feature.less\");\n/* harmony import */ var _feature_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_feature_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feature */ \"./static/components/feature/Feature.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Feature__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./static/components/feature/index.js?");

/***/ }),

/***/ "./static/components/header/Header.js":
/*!********************************************!*\
  !*** ./static/components/header/Header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderHeader = () => {\n    const container = document.createElement(\"header\");\n    container.className = \"Layout__header\";\n    container.innerHTML = `<div class=\"Header\">\n        <div class=\"Header__nav-bar-wrapper\">\n            <svg class=\"Header__svg-logo\" xmlns=\"http://www.w3.org/2000/svg\"\n                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMinYMin meet\"\n                 viewBox=\"0 0 443.43 98.26\"\n                 width=\"195.18\" height=\"35\">\n                <defs>\n                    <style> .logo__text__fill {\n                        fill: #253858;\n                    }\n\n                    .header__svg-logo__icon--path--3 {\n                        fill: #2684ff;\n                    }\n\n                    .header__svg-logo__icon--path--4 {\n                        fill: url(#logo-gradient);\n                    } </style>\n                    <linearGradient id=\"logo-gradient\" x1=\"64.01\" y1=\"65.26\" x2=\"32.99\" y2=\"89.48\"\n                                    gradientUnits=\"userSpaceOnUse\">\n                        <stop offset=\"0.18\" stop-color=\"#0052cc\"></stop>\n                        <stop offset=\"1\" stop-color=\"#2684ff\"></stop>\n                    </linearGradient>\n                </defs>\n                <title>Bitbucket logo</title>\n                <g class=\"header__svg-logo__icon\">\n                    <path class=\"header__svg-logo__icon--path--3\"\n                          d=\"M2,41.25a2,2,0,0,0-2,2.32L8.49,95.11a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68l8.51-52.11a2,2,0,0,0-2-2.32ZM37.75,78.5h-13L21.23,60.12H40.9Z\"></path>\n                    <path class=\"header__svg-logo__icon--path--4\"\n                          d=\"M59.67,60.12H40.9L37.75,78.5h-13L9.4,96.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z\"></path>\n                </g>\n                <g class=\"header__svg-logo__atlassian svg-hide-on-stuck\">\n                    <path class=\"logo__text__fill\"\n                          d=\"M160.49,5.22c0,2.6,1.21,4.66,5.92,5.57,2.81.59,3.4,1,3.4,2s-.59,1.5-2.57,1.5a14.51,14.51,0,0,1-6.83-1.85v4.23a14,14,0,0,0,6.78,1.47c4.93,0,6.88-2.2,6.88-5.46m0,0c0-3.08-1.63-4.53-6.24-5.52-2.54-.56-3.16-1.12-3.16-1.93,0-1,.91-1.45,2.6-1.45a14.63,14.63,0,0,1,5.95,1.47v-4A13.44,13.44,0,0,0,167.39,0c-4.55,0-6.91,2-6.91,5.22\"></path>\n                    <polygon class=\"logo__text__fill\"\n                             points=\"223.79 0.27 223.79 17.86 227.54 17.86 227.54 4.45 229.12 8.01 234.43 17.86 239.14 17.86 239.14 0.27 235.39 0.27 235.39 11.62 233.97 8.33 229.71 0.27 223.79 0.27\"></polygon>\n                    <rect class=\"logo__text__fill\" x=\"195.85\" y=\"0.27\" width=\"4.1\" height=\"17.6\"></rect>\n                    <path class=\"logo__text__fill\"\n                          d=\"M191.12,12.67c0-3.08-1.63-4.53-6.24-5.52-2.54-.56-3.16-1.12-3.16-1.93,0-1,.91-1.45,2.6-1.45a14.63,14.63,0,0,1,5.95,1.47v-4A13.44,13.44,0,0,0,184.45,0c-4.55,0-6.91,2-6.91,5.22,0,2.6,1.21,4.66,5.92,5.57,2.81.59,3.4,1,3.4,2s-.59,1.5-2.57,1.5a14.51,14.51,0,0,1-6.83-1.85v4.23a14,14,0,0,0,6.78,1.47c4.93,0,6.88-2.2,6.88-5.46\"></path>\n                    <polygon class=\"logo__text__fill\"\n                             points=\"128.65 0.27 128.65 17.86 137.08 17.86 138.4 14.06 132.78 14.06 132.78 0.27 128.65 0.27\"></polygon>\n                    <polygon class=\"logo__text__fill\"\n                             points=\"112.01 0.27 112.01 4.07 116.57 4.07 116.57 17.86 120.69 17.86 120.69 4.07 125.56 4.07 125.56 0.27 112.01 0.27\"></polygon>\n                    <path class=\"logo__text__fill\"\n                          d=\"M106,.27h-5.4l-6.14,17.6h4.69l.87-3a11.65,11.65,0,0,0,6.56,0l.87,3h4.69Zm-2.7,11.46a8,8,0,0,1-2.25-.32l2.25-7.68,2.25,7.68A8,8,0,0,1,103.33,11.73Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M151.6.27h-5.4l-6.14,17.6h4.69l.87-3a11.65,11.65,0,0,0,6.56,0l.87,3h4.69Zm-2.7,11.46a8,8,0,0,1-2.25-.32l2.25-7.68,2.25,7.68A8,8,0,0,1,148.89,11.73Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M214.71.27h-5.4l-6.14,17.6h4.69l.87-3a11.65,11.65,0,0,0,6.56,0l.87,3h4.69ZM212,11.73a8,8,0,0,1-2.25-.32L212,3.72l2.25,7.68A8,8,0,0,1,212,11.73Z\"></path>\n                </g>\n                <g class=\"header__svg-logo__text\">\n                    <path class=\"logo__text__fill\"\n                          d=\"M116.87,39.57c11.79,0,17.51,5.81,17.51,15.14,0,7-3.17,11.26-9.68,12.85,8.54,1.41,12.76,6.07,12.76,14.26,0,9.24-6.25,15.58-19.18,15.58H94.43V39.57Zm-14.52,7.57V64.38h13.46c7.48,0,10.56-3.43,10.56-9s-3.34-8.27-10.56-8.27Zm0,24.29v18h16.19c7.57,0,11-2.73,11-8.54,0-6.16-3.26-9.5-11.17-9.5Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M150.4,36.49a4.94,4.94,0,0,1,5.28,5.28,5.28,5.28,0,0,1-10.56,0A4.94,4.94,0,0,1,150.4,36.49Zm-3.87,16.89h7.57v44h-7.57Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M183,90a24,24,0,0,0,4.75-.62v7.3a18.19,18.19,0,0,1-5.1.7c-9.42,0-14-5.54-14-13.73V60.42h-7.13v-7h7.13V44.06H176v9.33h11.7v7H176V83.48C176,87.35,178.29,90,183,90Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M218.95,98.26c-6.42,0-11.35-2.9-14-8.62v7.74h-7.57V35H205V61.3c2.82-5.81,8.1-8.8,14.87-8.8,11.7,0,17.6,9.94,17.6,22.88C237.43,87.79,231.27,98.26,218.95,98.26ZM217.8,59.54C211,59.54,205,63.86,205,73.62v3.52c0,9.77,5.54,14.08,12,14.08,8.54,0,12.94-5.63,12.94-15.84C229.86,64.82,225.64,59.54,217.8,59.54Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M245.35,53.38h7.57V80c0,7.92,3.17,11.44,10.38,11.44,7,0,11.88-4.66,11.88-13.55V53.38h7.57v44h-7.57V90.17a15.43,15.43,0,0,1-13.9,8.1c-10.12,0-15.93-7-15.93-19.1Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M325.25,96.24c-2.64,1.41-6.69,2-10.74,2-15.66,0-23-9.5-23-23,0-13.29,7.3-22.79,23-22.79A23.26,23.26,0,0,1,325,54.62v7A22.18,22.18,0,0,0,315,59.54c-11.44,0-16.1,7.22-16.1,15.75S303.69,91,315.22,91a27.8,27.8,0,0,0,10-1.58Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M333.88,97.38V35h7.57V74l18.92-20.59h9.86L349.54,75,371.1,97.38H360.8L341.44,76.79V97.38Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M396.18,98.26c-16.46,0-23.67-9.5-23.67-23,0-13.29,7.39-22.79,20.77-22.79,13.55,0,19,9.42,19,22.79v3.43H380.16c1.06,7.48,5.9,12.32,16.28,12.32a39,39,0,0,0,13.38-2.38v7C406.21,97.56,400.67,98.26,396.18,98.26Zm-16.1-26h24.55c-.44-8.18-4.14-12.85-11.7-12.85C384.91,59.37,380.87,64.56,380.08,72.22Z\"></path>\n                    <path class=\"logo__text__fill\"\n                          d=\"M438.68,90a24,24,0,0,0,4.75-.62v7.3a18.19,18.19,0,0,1-5.1.7c-9.42,0-14-5.54-14-13.73V60.42h-7.13v-7h7.13V44.06h7.39v9.33h11.7v7h-11.7V83.48C431.73,87.35,434,90,438.68,90Z\"></path>\n                </g>\n            </svg>\n            <nav class=\"Header__nav-bar\">\n                <a href=\"#\" class=\"Header__nav-bar-link\">Features</a>\n                <a href=\"#\" class=\"Header__nav-bar-link\">Self-Hosted</a>\n                <a href=\"#\" class=\"Header__nav-bar-link\">Pricing</a>\n                <a href=\"login\" class=\"Header__nav-bar-link Header__nav-bar-link-log-in\">Log in</a>\n            </nav>\n            <div class=\"Header__get-started-container\">\n                <a href=\"#\" class=\"Header__get-started-button\">Get started</a>\n            </div>\n        </div>\n        \n    </div>`;\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderHeader);\n\n//# sourceURL=webpack:///./static/components/header/Header.js?");

/***/ }),

/***/ "./static/components/header/header.less":
/*!**********************************************!*\
  !*** ./static/components/header/header.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./header.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/header/header.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/header/header.less?");

/***/ }),

/***/ "./static/components/header/index.js":
/*!*******************************************!*\
  !*** ./static/components/header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.less */ \"./static/components/header/header.less\");\n/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./static/components/header/Header.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./static/components/header/index.js?");

/***/ }),

/***/ "./static/components/integration/Integration.js":
/*!******************************************************!*\
  !*** ./static/components/integration/Integration.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderIntegration = () => {\n    const container = document.createElement(\"section\");\n    container.className = \"Integration\";\n    container.innerHTML = `\n        <div class=\"Integration__heading\">\n            <h2 class=\"Integration__heading-main\">\n                Integrations: Bitbucket, but better\n            </h2>\n            <p class=\"Integration__heading-extra\">\n                Start with Bitbucket, then bring in the tools you already use to build better software\n            </p>\n        </div>\n        <section class=\"Integration__feature\">\n            <section class=\"Integration__feature-block Curve__one-block\">\n                <img src=\"/images/09_Software.png\" alt=\"Jira Software\" style=\"height: 90px\">\n                <h3 class=\"Integration__feature-heading\">Jira Software</h3>\n                <p class=\"Integration__feature-content\">\n                    Improve efficiency by connecting branches, commits, and pull requests to Jira Software issues.\n                </p>\n                <a href=\"#\">See all integrations\n                    <svg width=\"11px\" height=\"8px\" viewBox=\"0 0 11 8\" version=\"1.1\"\n                         xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                        <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                            <g class=\"group-path\" transform=\"translate(-138.000000, -586.000000)\" fill=\"#0052CC\">\n                                <path d=\"M145.2803,586.507862 L144.2193,587.568863 L145.9393,589.287862 L138.7503,589.287862 C138.3363,589.287862 138.0003,589.623862 138.0003,590.037862 C138.0003,590.451862 138.3363,590.787862 138.7503,590.787862 L145.9393,590.787862 L144.2193,592.507862 L145.2803,593.568863 L148.8103,590.037862 L145.2803,586.507862 Z\"\n                                      id=\"Fill-1\"></path>\n                            </g>\n                        </g>\n                    </svg>\n                </a>\n            </section>\n            <section class=\"Integration__feature-block Curve__one-block\">\n                <img src=\"/images/10_IntegratioPuzzle.png\" alt=\"Connect framework (puzzle image)\" style=\"height: 90px\">\n                <h3 class=\"Integration__feature-heading\">Connect framework</h3>\n                <p class=\"Integration__feature-content\">\n                    Customize Bitbucket your way with apps that embed right in Bitbucket’s UI, built with Bitbucket\n                    Connect.\n                </p>\n            </section>\n            <section class=\"Integration__feature-block Curve__one-block\">\n                <img src=\"/images/11_Connection.png\" alt=\"Trigger Webhooks\" style=\"height: 90px\">\n                <h3 class=\"Integration__feature-heading\">Trigger Webhooks</h3>\n                <p class=\"Integration__feature-content\">\n                    Integrate easily with systems you already use in your day-to-day using Bitbucket webhooks.\n                </p>\n            </section>\n        </section>`;\n    return container;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderIntegration);\n\n//# sourceURL=webpack:///./static/components/integration/Integration.js?");

/***/ }),

/***/ "./static/components/integration/index.js":
/*!************************************************!*\
  !*** ./static/components/integration/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _integrations_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integrations.less */ \"./static/components/integration/integrations.less\");\n/* harmony import */ var _integrations_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_integrations_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Integration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Integration */ \"./static/components/integration/Integration.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Integration__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./static/components/integration/index.js?");

/***/ }),

/***/ "./static/components/integration/integrations.less":
/*!*********************************************************!*\
  !*** ./static/components/integration/integrations.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./integrations.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/integration/integrations.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/integration/integrations.less?");

/***/ }),

/***/ "./static/components/introduction/Introduction.js":
/*!********************************************************!*\
  !*** ./static/components/introduction/Introduction.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderIntro = () => {\n    const container = document.createElement('section');\n    container.className = \"Layout__intro\";\n    container.innerHTML = `<div class=\"Intro\">\n            <h1 class=\"Intro__heading\">\n                Built for professional teams\n            </h1>\n            <p class=\"Intro__sub-heading\">\n                Bitbucket is more than just Git code management. Bitbucket gives teams one\n                place to plan projects, collaborate on code, test, and deploy.\n            </p>\n            <div>\n                <a href=\"#\" class=\"Intro__button\">Get started for free</a>\n            </div>\n            <p class=\"Intro__proposition\">Or host it yourself with <a href=\"#\"> Bitbucket Enterprise\n                <svg width=\"11px\" height=\"8px\" viewBox=\"0 0 11 8\" version=\"1.1\"\n                     xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g class=\"group-path\" transform=\"translate(-138.000000, -586.000000)\" fill=\"#0052CC\">\n                            <path d=\"M145.2803,586.507862 L144.2193,587.568863 L145.9393,589.287862 L138.7503,589.287862 C138.3363,589.287862 138.0003,589.623862 138.0003,590.037862 C138.0003,590.451862 138.3363,590.787862 138.7503,590.787862 L145.9393,590.787862 L144.2193,592.507862 L145.2803,593.568863 L148.8103,590.037862 L145.2803,586.507862 Z\"\n                                  id=\"Fill-1\"></path>\n                        </g>\n                    </g>\n                </svg>\n            </a></p>\n            <img src=\"/images/00_HeroImage.png\" alt=\"Hero Image\" class=\"Intro__image\">\n        </div>`;\n    return container;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderIntro);\n\n//# sourceURL=webpack:///./static/components/introduction/Introduction.js?");

/***/ }),

/***/ "./static/components/introduction/index.js":
/*!*************************************************!*\
  !*** ./static/components/introduction/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _intro_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.less */ \"./static/components/introduction/intro.less\");\n/* harmony import */ var _intro_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_intro_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Introduction */ \"./static/components/introduction/Introduction.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Introduction__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./static/components/introduction/index.js?");

/***/ }),

/***/ "./static/components/introduction/intro.less":
/*!***************************************************!*\
  !*** ./static/components/introduction/intro.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./intro.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/introduction/intro.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/introduction/intro.less?");

/***/ }),

/***/ "./static/components/login/Login.js":
/*!******************************************!*\
  !*** ./static/components/login/Login.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loginForm = () => {\n    const container = document.createElement('div');\n    container.className = \"Login__wrapper\";\n    container.innerHTML =\n        `<div class=\"Login\">\n        <header class=\"Login__header\">\n            <span class=\"Login__logo\">\n                <svg viewBox=\"0 0 190 32\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" aria-hidden=\"true\">\n            <defs>\n                <linearGradient x1=\"99.684716%\" y1=\"15.8138128%\" x2=\"39.8444399%\" y2=\"97.4388388%\"\n                                id=\"718f8e1b-b6b2-4ed7-8ec1-4bc5f6c01ae6\">\n                    <stop stop-color=\"inherit\" stop-opacity=\"0.4\" offset=\"0%\"></stop>\n                    <stop stop-color=\"inherit\" offset=\"100%\"></stop>\n                </linearGradient>\n            </defs>\n            <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"nonzero\">\n                <path d=\"M6.90502605,15.6123193 C6.76436383,15.4302139 6.53773035,15.3340846 6.30742588,15.35884 C6.0771214,15.3835955 5.876643,15.525635 5.7787929,15.7333781 L0.0719979599,27.0218487 C-0.0337056449,27.2310259 -0.0224063827,27.4794358 0.101860917,27.6783741 C0.226128216,27.8773125 0.445645594,27.9984148 0.68202605,27.9984369 L8.62844459,27.9984369 C8.88847261,28.0044096 9.12761649,27.8581627 9.23847268,27.6253781 C10.9526159,24.1210252 9.91378448,18.7926722 6.90502605,15.6123193 Z\"\n                      fill=\"url(#718f8e1b-b6b2-4ed7-8ec1-4bc5f6c01ae6)\"></path>\n                <path d=\"M11.0859556,5.33713587 C8.19309829,9.74089822 7.85921851,15.3267488 10.2073011,20.0371359 L14.0383488,27.6176065 C14.1538739,27.8462194 14.3900332,27.9906411 14.6483769,27.9906653 L22.5933685,27.9906653 C22.829749,27.9906431 23.0492663,27.8695408 23.1735336,27.6706025 C23.2978009,27.4716641 23.3091002,27.2232543 23.2033966,27.014077 C23.2033966,27.014077 12.5147056,5.8619594 12.2460792,5.33290058 C12.1377032,5.11315026 11.9118188,4.97410225 11.6646746,4.97500451 C11.4175304,4.97590676 11.1926893,5.11660025 11.0859556,5.33713587 L11.0859556,5.33713587 Z\"\n                      fill=\"currentColor\"></path>\n                <path d=\"M104.2774,14.3919316 C104.2774,17.1872257 105.588069,19.4065198 110.714802,20.3862846 C113.773504,21.0215787 114.414212,21.5100493 114.414212,22.5187551 C114.414212,23.4985198 113.772077,24.1327551 111.617715,24.1327551 C109.013896,24.0864379 106.462135,23.403307 104.189999,22.1442846 L104.189999,26.6972257 C105.733976,27.4465198 107.772754,28.2822846 111.559566,28.2822846 C116.919251,28.2822846 119.045788,25.9175787 119.045788,22.4033434 M119.045788,22.4033434 C119.045788,19.0892257 117.268858,17.5327551 112.25878,16.4668728 C109.491535,15.8615787 108.821574,15.2566375 108.821574,14.3919316 C108.821574,13.297814 109.811889,12.835814 111.646968,12.835814 C113.860906,12.835814 116.045591,13.4986375 118.113622,14.4208728 L118.113622,10.0691081 C116.130615,9.17615406 113.970906,8.73311319 111.792518,8.7724022 C106.840589,8.7724022 104.2774,10.9048728 104.2774,14.3919316\"\n                      fill=\"inherit\"></path>\n                <polygon fill=\"inherit\"\n                         points=\"173.129997 9.07000017 173.129997 28.0038825 177.20791 28.0038825 177.20791 13.5657649 178.926691 17.3983531 184.694132 28.0038825 189.820865 28.0038825 189.820865 9.07000017 185.742952 9.07000017 185.742952 21.2891766 184.198975 17.7442355 179.567399 9.07000017\"></polygon>\n                <rect fill=\"inherit\" x=\"142.740005\" y=\"9.07000017\" width=\"4.45677247\" height=\"18.9338824\"></rect>\n                <path d=\"M137.600792,22.4033434 C137.600792,19.0892257 135.823862,17.5327551 130.813784,16.4668728 C128.046539,15.8615787 127.376579,15.2566375 127.376579,14.3919316 C127.376579,13.297814 128.366893,12.835814 130.201972,12.835814 C132.41591,12.835814 134.600595,13.4986375 136.668626,14.4208728 L136.668626,10.0691081 C134.685619,9.17615406 132.52591,8.73311319 130.347522,8.7724022 C125.395593,8.7724022 122.832404,10.9048728 122.832404,14.3919316 C122.832404,17.1872257 124.143073,19.4065198 129.269806,20.3862846 C132.328508,21.0215787 132.969216,21.5100493 132.969216,22.5187551 C132.969216,23.4985198 132.327081,24.1327551 130.172719,24.1327551 C127.568901,24.0864379 125.017139,23.403307 122.745003,22.1442846 L122.745003,26.6972257 C124.28898,27.4465198 126.327758,28.2822846 130.11457,28.2822846 C135.474256,28.2822846 137.600792,25.9175787 137.600792,22.4033434\"\n                      fill=\"inherit\"></path>\n                <polygon fill=\"inherit\"\n                         points=\"69.6599979 9.07000017 69.6599979 28.0038825 78.8204081 28.0038825 80.2627142 23.9115296 74.1456665 23.9115296 74.1456665 9.07000017\"></polygon>\n                <polygon fill=\"inherit\"\n                         points=\"51.5549984 9.07000017 51.5549984 13.1620002 56.5069282 13.1620002 56.5069282 28.0038825 60.9925967 28.0038825 60.9925967 13.1620002 66.2941332 13.1620002 66.2941332 9.07000017\"></polygon>\n                <path d=\"M45.0573091,9.07000017 L39.1785647,9.07000017 L32.5050001,28.0038825 L37.6014102,28.0038825 L38.5474889,24.815059 C40.877531,25.4919503 43.3551322,25.4919503 45.6851743,24.815059 L46.6312529,28.0038825 L51.7287333,28.0038825 L45.0573091,9.07000017 Z M42.1177585,21.4007061 C41.287584,21.4006584 40.4616854,21.2831148 39.6651602,21.0516472 L42.1177585,12.7889413 L44.5703569,21.0544708 C43.7736914,21.2849831 42.9477956,21.4015755 42.1177585,21.4007061 L42.1177585,21.4007061 Z\"\n                      fill=\"inherit\"></path>\n                <path d=\"M94.6019534,9.07000017 L88.7235658,9.07000017 L82.0500011,28.0038825 L87.1474815,28.0038825 L88.0935601,24.815059 C90.4236023,25.4919503 92.9012034,25.4919503 95.2312455,24.815059 L96.1773242,28.0038825 L101.274805,28.0038825 L94.6019534,9.07000017 Z M91.6627596,21.4007061 C90.8325851,21.4006584 90.0066865,21.2831148 89.2101613,21.0516472 L91.6627596,12.7889413 L94.1153579,21.0544708 C93.3186924,21.2849831 92.4927966,21.4015755 91.6627596,21.4007061 L91.6627596,21.4007061 Z\"\n                      fill=\"inherit\"></path>\n                <path d=\"M163.256954,9.07000017 L157.378566,9.07000017 L150.705002,28.0038825 L155.802482,28.0038825 L156.748561,24.815059 C159.078603,25.4919503 161.556204,25.4919503 163.886246,24.815059 L164.832325,28.0038825 L169.930162,28.0038825 L163.256954,9.07000017 Z M160.315977,21.4007061 C159.485802,21.4006584 158.659903,21.2831148 157.863378,21.0516472 L160.315977,12.7889413 L162.768575,21.0544708 C161.971909,21.2849831 161.146014,21.4015755 160.315977,21.4007061 L160.315977,21.4007061 Z\"\n                      fill=\"inherit\"></path>\n            </g>\n        </svg>\n            </span>\n        <h1 class=\"Login__header-title\">Log in to continue to Bitbucket</h1>\n    </header>\n    <div class=\"Login__form\">\n        <div class=\"Login__box\">\n            <div class=\"Login__box-google\">\n                <button class=\"Login__box-google-btn\"\n                        type=\"button\"><img\n                        src=\"https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/4.3.6/static/media/google-logo.c21ca9d1.svg\"\n                        alt=\"\" style=\"height: 18px; margin-right: 8px; vertical-align: middle; width: 18px; margin-bottom: 0;\">\n                    <span>Log in with Google</span>\n                </button>\n            </div>\n            <form class=\"Login__box-submit\">\n                <div class=\"Login__box-email\">\n                    <input placeholder=\"Enter email\" type=\"email\" class=\"Login__box-email-field\">\n                </div>\n                <div class=\"Login__box-continue\">\n                    <button class=\"Login__box-continue-btn\" type=\"submit\">\n                        Continue\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>`;\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (loginForm);\n\n//# sourceURL=webpack:///./static/components/login/Login.js?");

/***/ }),

/***/ "./static/components/login/index.js":
/*!******************************************!*\
  !*** ./static/components/login/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.less */ \"./static/components/login/login.less\");\n/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ \"./static/components/login/Login.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./static/components/login/index.js?");

/***/ }),

/***/ "./static/components/login/login.less":
/*!********************************************!*\
  !*** ./static/components/login/login.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./login.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/login/login.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/login/login.less?");

/***/ }),

/***/ "./static/components/partners/Partners.js":
/*!************************************************!*\
  !*** ./static/components/partners/Partners.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderPartners = () => {\n    const container = document.createElement(\"section\");\n    container.className = \"Partners\";\n    container.innerHTML = `<h2 class=\"Partners__heading\">\n            More than 1 million teams and 6 million developers love Bitbucket\n        </h2>\n        <div class=\"Partners__image\">\n            <img class=\"Partners__image-desktop\" src=\"/images/12_Partners.png\" alt=\"Customers icon\" style=\"height: 75px;\">\n            <img class=\"Partners__image-mobile\" src=\"/images/12_Partners_Mobile.png\" alt=\"Customers icon\">\n        </div>\n<div class=\"Horizontal-line\">\n    <hr>\n</div>`;\n    return container;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderPartners);\n\n//# sourceURL=webpack:///./static/components/partners/Partners.js?");

/***/ }),

/***/ "./static/components/partners/horizontal-line.css":
/*!********************************************************!*\
  !*** ./static/components/partners/horizontal-line.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./horizontal-line.css */ \"./node_modules/css-loader/dist/cjs.js!./static/components/partners/horizontal-line.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/partners/horizontal-line.css?");

/***/ }),

/***/ "./static/components/partners/index.js":
/*!*********************************************!*\
  !*** ./static/components/partners/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partners_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partners.less */ \"./static/components/partners/partners.less\");\n/* harmony import */ var _partners_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_partners_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _horizontal_line_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-line.css */ \"./static/components/partners/horizontal-line.css\");\n/* harmony import */ var _horizontal_line_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_horizontal_line_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Partners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partners */ \"./static/components/partners/Partners.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Partners__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./static/components/partners/index.js?");

/***/ }),

/***/ "./static/components/partners/partners.less":
/*!**************************************************!*\
  !*** ./static/components/partners/partners.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./partners.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/partners/partners.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/partners/partners.less?");

/***/ }),

/***/ "./static/components/pricing/Pricing.js":
/*!**********************************************!*\
  !*** ./static/components/pricing/Pricing.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderPricing = () => {\n    const container = document.createElement(\"section\");\n    container.className = \"Pricing\";\n    container.innerHTML = `<div class=\"Pricing__container\">\n            <div class=\"Pricing__title\">\n                <h2 class=\"Pricing__title-text\">Simple plans hosted in the cloud. Priced to scale.</h2>\n            </div>\n            <div class=\"Pricing__container-wrapper\">\n                <div class=\"Pricing__container-block\">\n                    <div class=\"Pricing__block\">\n                        <div class=\"Pricing__block-bg\">\n                            <div class=\"Pricing__block-text\">\n                                <h4 class=\"Pricing__block-name\">Free</h4>\n                                <p class=\"Pricing__block-subname\">for small teams</p>\n                            </div>\n                            <div>\n                                <h2 class=\"Pricing__block-price\">$0</h2>\n                            </div>\n                            <div>\n                                <p class=\"Pricing__block-subname\">/ user / month</p>\n                            </div>\n                            <div>\n                                <p class=\"Pricing__block-usability\">Free for up to 5 users</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"Pricing__features\">\n                        <div>\n                            <ul class=\"Pricing__list\">\n                                <li class=\"Pricing__feature-active\">Unlimited private repos</li>\n                                <li class=\"Pricing__feature-active\">Jira Software integration</li>\n                                <li class=\"Pricing__feature-active\">Projects</li>\n                                <li class=\"Pricing__feature-active\">Pipelines</li>\n                                <li class=\"Pricing__feature-inactive\">Unlimited users</li>\n                                <li class=\"Pricing__feature-inactive\">Merge checks</li>\n                                <li class=\"Pricing__feature-inactive\">Deployment permissions</li>\n                                <li class=\"Pricing__feature-inactive\">IP Whitelisting</li>\n                                <li class=\"Pricing__feature-inactive\">Required two-step verification</li>\n                                <li class=\"Pricing__feature-inactive\">Smart Mirroring</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"Pricing__separator\">\n                        <hr>\n                    </div>\n                    <div class=\"Pricing__extra\">\n                        <ul class=\"Pricing__list\">\n                            <li class=\"Pricing__extra-text\"><i>Included with your account:</i></li>\n                            <li class=\"Pricing__extra-text\">*Build minutes: 50 mins/mo</li>\n                            <li class=\"Pricing__extra-text\">*File storage: 1GB/mo</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"Pricing__btn-container\">\n                    <a href=\"\" class=\"Intro__button\">Get started for free </a>\n                </div>\n            </div>\n            <div class=\"Pricing__container-wrapper\">\n                <div class=\"Pricing__container-block\">\n                    <div class=\"Pricing__block\">\n                        <div class=\"Pricing__block-bg\">\n                            <div class=\"Pricing__block-text\">\n                                <h4 class=\"Pricing__block-name\">Standard</h4>\n                                <p class=\"Pricing__block-subname\">for growing teams</p>\n                            </div>\n                            <div>\n                                <h2 class=\"Pricing__block-price\">$2</h2>\n                            </div>\n                            <div>\n                                <p class=\"Pricing__block-subname\">/ user / month</p>\n                            </div>\n                            <div>\n                                <p class=\"Pricing__block-usability\">Starts at $10 /month</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"Pricing__features\">\n                        <div>\n                            <ul class=\"Pricing__list\">\n                                <li class=\"Pricing__feature-active\">Unlimited private repos</li>\n                                <li class=\"Pricing__feature-active\">Jira Software integration</li>\n                                <li class=\"Pricing__feature-active\">Projects</li>\n                                <li class=\"Pricing__feature-active\">Pipelines</li>\n                                <li class=\"Pricing__feature-active\">Unlimited users</li>\n                                <li class=\"Pricing__feature-inactive\">Merge checks</li>\n                                <li class=\"Pricing__feature-inactive\">Deployment permissions</li>\n                                <li class=\"Pricing__feature-inactive\">IP Whitelisting</li>\n                                <li class=\"Pricing__feature-inactive\">Required two-step verification</li>\n                                <li class=\"Pricing__feature-inactive\">Smart Mirroring</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"Pricing__separator\">\n                        <hr>\n                    </div>\n                    <div class=\"Pricing__extra\">\n                        <ul class=\"Pricing__list\">\n                            <li class=\"Pricing__extra-text\"><i>Included with your account:</i></li>\n                            <li class=\"Pricing__extra-text\">*Build minutes: 500 mins/mo</li>\n                            <li class=\"Pricing__extra-text\">*File storage: 5GB/mo</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"Pricing__btn-container\">\n                    <a href=\"\" class=\"Intro__button\">Try it </a>\n                </div>\n            </div>\n            <div class=\"Pricing__container-wrapper\">\n                <div class=\"Pricing__container-block\">\n                    <div class=\"Pricing__block\">\n                        <div class=\"Pricing__block-bg\">\n                            <div class=\"Pricing__block-text\">\n                                <h4 class=\"Pricing__block-name\">Premium</h4>\n                                <p class=\"Pricing__block-subname\">for large teams</p>\n                            </div>\n                            <div>\n                                <h2 class=\"Pricing__block-price\">$5</h2>\n                            </div>\n                            <div>\n                                <p class=\"Pricing__block-subname\">/ user / month</p>\n                            </div>\n                            <div>\n                                <p class=\"Pricing__block-usability\">Starts at 25$ /month</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"Pricing__features\">\n                        <div>\n                            <ul class=\"Pricing__list\">\n                                <li class=\"Pricing__feature-active\">Unlimited private repos</li>\n                                <li class=\"Pricing__feature-active\">Jira Software integration</li>\n                                <li class=\"Pricing__feature-active\">Projects</li>\n                                <li class=\"Pricing__feature-active\">Pipelines</li>\n                                <li class=\"Pricing__feature-active\">Unlimited users</li>\n                                <li class=\"Pricing__feature-active\">Merge checks</li>\n                                <li class=\"Pricing__feature-active\">Deployment permissions</li>\n                                <li class=\"Pricing__feature-active\">IP Whitelisting</li>\n                                <li class=\"Pricing__feature-active\">Required two-step verification</li>\n                                <li class=\"Pricing__feature-active\">Smart Mirroring</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"Pricing__separator\">\n                        <hr>\n                    </div>\n                    <div class=\"Pricing__extra\">\n                        <ul class=\"Pricing__list\">\n                            <li class=\"Pricing__extra-text\"><i>Included with your account:</i></li>\n                            <li class=\"Pricing__extra-text\">*Build minutes: 1000 mins/mo</li>\n                            <li class=\"Pricing__extra-text\">*File storage: 10GB/mo</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"Pricing__btn-container\">\n                    <a href=\"\" class=\"Intro__button\">Get started for free </a>\n                </div>\n            </div>\n            <div class=\"Pricing__container-remarks\">\n                <p>*Build minutes are for&nbsp;\n                    <a href=\"#\">Bitbucket Pipelines</a>\n                    &nbsp;and File storage is for&nbsp;\n                    <a href=\"#\">Git\n                        Large File Storage<br> (LFS)</a>.\n                    Build minutes and file storage are shared among all users on\n                    an account.&nbsp;\n                </p>\n            </div>\n        </div>`;\n    return container;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderPricing);\n\n//# sourceURL=webpack:///./static/components/pricing/Pricing.js?");

/***/ }),

/***/ "./static/components/pricing/index.js":
/*!********************************************!*\
  !*** ./static/components/pricing/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pricing_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing.less */ \"./static/components/pricing/pricing.less\");\n/* harmony import */ var _pricing_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pricing_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Pricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pricing */ \"./static/components/pricing/Pricing.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Pricing__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./static/components/pricing/index.js?");

/***/ }),

/***/ "./static/components/pricing/pricing.less":
/*!************************************************!*\
  !*** ./static/components/pricing/pricing.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./pricing.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./static/components/pricing/pricing.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/components/pricing/pricing.less?");

/***/ }),

/***/ "./static/fonts/charlie-text/Charlie_Text-Regular.woff":
/*!*************************************************************!*\
  !*** ./static/fonts/charlie-text/Charlie_Text-Regular.woff ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b7e8ae700922f44a87cf9bfa816f47f3.woff\";\n\n//# sourceURL=webpack:///./static/fonts/charlie-text/Charlie_Text-Regular.woff?");

/***/ }),

/***/ "./static/helper.js":
/*!**************************!*\
  !*** ./static/helper.js ***!
  \**************************/
/*! exports provided: getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\nconst getData = async (endpoint) => await (await fetch(endpoint)).json();\n\n\n//# sourceURL=webpack:///./static/helper.js?");

/***/ }),

/***/ "./static/index.js":
/*!*************************!*\
  !*** ./static/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.css */ \"./static/styles/common.css\");\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_common_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/fonts.css */ \"./static/styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_login___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/ */ \"./static/components/login/index.js\");\n/* harmony import */ var _components_beginner_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/beginner-resources */ \"./static/components/beginner-resources/index.js\");\n/* harmony import */ var _components_curve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/curve */ \"./static/components/curve/index.js\");\n/* harmony import */ var _components_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/feature */ \"./static/components/feature/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ \"./static/components/header/index.js\");\n/* harmony import */ var _components_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/integration */ \"./static/components/integration/index.js\");\n/* harmony import */ var _components_introduction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/introduction */ \"./static/components/introduction/index.js\");\n/* harmony import */ var _components_partners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/partners */ \"./static/components/partners/index.js\");\n/* harmony import */ var _components_pricing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pricing */ \"./static/components/pricing/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst path_name = window.location.pathname;\nconst appBody = document.getElementsByTagName(\"body\")[0];\nappBody.appendChild(Object(_components_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\nappBody.appendChild(Object(_components_introduction__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\nappBody.appendChild(Object(_components_curve__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\nObject(_components_feature__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(appBody, \"/featureData.json\");\nappBody.appendChild(Object(_components_beginner_resources__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\nappBody.appendChild(Object(_components_integration__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\nappBody.appendChild(Object(_components_partners__WEBPACK_IMPORTED_MODULE_9__[\"default\"])());\nappBody.appendChild(Object(_components_pricing__WEBPACK_IMPORTED_MODULE_10__[\"default\"])());\n\nif (path_name === \"/login\") {\n    appBody.innerHTML = \"\";\n    appBody.appendChild(Object(_components_login___WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n}\n\n//# sourceURL=webpack:///./static/index.js?");

/***/ }),

/***/ "./static/styles/common.css":
/*!**********************************!*\
  !*** ./static/styles/common.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/common.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/common.css?");

/***/ }),

/***/ "./static/styles/fonts.css":
/*!*********************************!*\
  !*** ./static/styles/fonts.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./static/styles/fonts.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/styles/fonts.css?");

/***/ })

/******/ });