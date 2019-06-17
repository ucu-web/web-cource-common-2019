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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/Layout.scss":
/*!****************************!*\
  !*** ./client/Layout.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./Layout.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/Layout.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/Layout.scss?");

/***/ }),

/***/ "./client/componentParts/miniProfile/MiniProfile.js":
/*!**********************************************************!*\
  !*** ./client/componentParts/miniProfile/MiniProfile.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"mini-profile\");\nconst NavBar = () => {\n    let data = {\n        icon: \"/images/logo.jpg\",\n        title: \"veronika\",\n        subTitle: \"Ternopil\",\n        modifications: []\n    };\n\n\n    let container = document.createElement(\"div\");\n    container.className = b();\n    container.innerHTML =\n\n        `       <a class=\"${b(\"icon-wrapper\")}\">\n                    <img  class=\"${b(\"icon\")}\" src=${data.icon} alt=\"\">\n                </a>\n                <div class=\"${b(\"content\")}\">\n                    <div class=\"${b(\"content-title\")}\">\n                        ${data.title}\n                    </div>\n                    <div class=\"${b(\"content-sub-title\")}\">\n                        ${data.subTitle}\n                    </div>\n                </div>\n                \n        `;\n    container.className = b();\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\n//# sourceURL=webpack:///./client/componentParts/miniProfile/MiniProfile.js?");

/***/ }),

/***/ "./client/componentParts/miniProfile/MiniProfile.scss":
/*!************************************************************!*\
  !*** ./client/componentParts/miniProfile/MiniProfile.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./MiniProfile.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/componentParts/miniProfile/MiniProfile.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/componentParts/miniProfile/MiniProfile.scss?");

/***/ }),

/***/ "./client/componentParts/miniProfile/index.js":
/*!****************************************************!*\
  !*** ./client/componentParts/miniProfile/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MiniProfile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiniProfile.scss */ \"./client/componentParts/miniProfile/MiniProfile.scss\");\n/* harmony import */ var _MiniProfile_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MiniProfile_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MiniProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiniProfile */ \"./client/componentParts/miniProfile/MiniProfile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/componentParts/miniProfile/index.js?");

/***/ }),

/***/ "./client/components/AsideFooter/AsideFooter.js":
/*!******************************************************!*\
  !*** ./client/components/AsideFooter/AsideFooter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"footer\");\nconst AsideFooter = () => {\n    let container = document.createElement(\"div\");\n    container.className = b();\n    container.innerHTML =\n        `<ul class='${b(\"list\")}'>\n                    <li class=\"${b(\"list-element\")}\"><a>Про нас</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>Підтримка</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>Преса</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>API</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>Вакансії</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>Конфіденційність</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>Умови</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>Каталог</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>Профілі</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>Хештеги</a></li>\n                    <li class=\"${b(\"list-element\")}\"><a>Мова</a></li>\n                </ul>\n                <span class='${b(\"title\")}'>© Instagram, 2019</span>\n        `;\n\n    // const profileRoot = container.getElementsByClassName(b(\"profiles\"))[0];\n    // profiles.map(item => profileRoot.appendChild(item));\n\n\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsideFooter);\n\n//# sourceURL=webpack:///./client/components/AsideFooter/AsideFooter.js?");

/***/ }),

/***/ "./client/components/AsideFooter/AsideFooter.scss":
/*!********************************************************!*\
  !*** ./client/components/AsideFooter/AsideFooter.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./AsideFooter.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideFooter/AsideFooter.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/AsideFooter/AsideFooter.scss?");

/***/ }),

/***/ "./client/components/AsideFooter/index.js":
/*!************************************************!*\
  !*** ./client/components/AsideFooter/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AsideFooter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsideFooter.scss */ \"./client/components/AsideFooter/AsideFooter.scss\");\n/* harmony import */ var _AsideFooter_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AsideFooter_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsideFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideFooter */ \"./client/components/AsideFooter/AsideFooter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _AsideFooter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/AsideFooter/index.js?");

/***/ }),

/***/ "./client/components/AsideProfile/AsideProfile.js":
/*!********************************************************!*\
  !*** ./client/components/AsideProfile/AsideProfile.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../componentParts/miniProfile/MiniProfile */ \"./client/componentParts/miniProfile/MiniProfile.js\");\n\n\n\n\n// const b = bem(\"\");\nconst AsideProfile = () => {\n\n\n    // let container = document.createElement(\"nav\");\n    // container.className = b();\n    // container.innerHTML =\n    //     `\n    //\n    //     `;\n    // return container;\n    return Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsideProfile);\n\n//# sourceURL=webpack:///./client/components/AsideProfile/AsideProfile.js?");

/***/ }),

/***/ "./client/components/AsideProfile/AsideProfile.scss":
/*!**********************************************************!*\
  !*** ./client/components/AsideProfile/AsideProfile.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./AsideProfile.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideProfile/AsideProfile.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/AsideProfile/AsideProfile.scss?");

/***/ }),

/***/ "./client/components/AsideProfile/index.js":
/*!*************************************************!*\
  !*** ./client/components/AsideProfile/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AsideProfile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsideProfile.scss */ \"./client/components/AsideProfile/AsideProfile.scss\");\n/* harmony import */ var _AsideProfile_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AsideProfile_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsideProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideProfile */ \"./client/components/AsideProfile/AsideProfile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _AsideProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/AsideProfile/index.js?");

/***/ }),

/***/ "./client/components/AsideRecomendation/AsideRecomendation.js":
/*!********************************************************************!*\
  !*** ./client/components/AsideRecomendation/AsideRecomendation.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../componentParts/miniProfile/MiniProfile */ \"./client/componentParts/miniProfile/MiniProfile.js\");\n\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"recomendation\");\nconst AsideRecomendation = () => {\n    let profiles = [\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()];\n    let container = document.createElement(\"div\");\n    container.className = b();\n    container.innerHTML =\n        `\n        <div class=\"${b(\"wrapper\")}\">\n            <div class=\"${b(\"header\")}\">\n            \n            <span class=\"${b(\"header-title\")}\">Рекомендації для вас</span>\n            <span class=\"${b(\"header-subtitle\")}\">Переглянути всіх</span>\n            \n            </div>\n            \n            \n            <div class=\"${b(\"profiles\")}\">\n\n            \n            </div>\n        </div>\n        `;\n\n    const profileRoot = container.getElementsByClassName(b(\"profiles\"))[0];\n    profiles.map(item => profileRoot.appendChild(item));\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsideRecomendation);\n\n//# sourceURL=webpack:///./client/components/AsideRecomendation/AsideRecomendation.js?");

/***/ }),

/***/ "./client/components/AsideRecomendation/AsideRecomendation.scss":
/*!**********************************************************************!*\
  !*** ./client/components/AsideRecomendation/AsideRecomendation.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./AsideRecomendation.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideRecomendation/AsideRecomendation.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/AsideRecomendation/AsideRecomendation.scss?");

/***/ }),

/***/ "./client/components/AsideRecomendation/index.js":
/*!*******************************************************!*\
  !*** ./client/components/AsideRecomendation/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AsideRecomendation_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsideRecomendation.scss */ \"./client/components/AsideRecomendation/AsideRecomendation.scss\");\n/* harmony import */ var _AsideRecomendation_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AsideRecomendation_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsideRecomendation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideRecomendation */ \"./client/components/AsideRecomendation/AsideRecomendation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _AsideRecomendation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/AsideRecomendation/index.js?");

/***/ }),

/***/ "./client/components/AsideStory/AsideStore.scss":
/*!******************************************************!*\
  !*** ./client/components/AsideStory/AsideStore.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./AsideStore.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideStory/AsideStore.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/AsideStory/AsideStore.scss?");

/***/ }),

/***/ "./client/components/AsideStory/AsideStory.js":
/*!****************************************************!*\
  !*** ./client/components/AsideStory/AsideStory.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../componentParts/miniProfile/MiniProfile */ \"./client/componentParts/miniProfile/MiniProfile.js\");\n\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"story\");\nconst AsideStory = () => {\n    let profiles = [\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        Object(_componentParts_miniProfile_MiniProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()];\n    let container = document.createElement(\"div\");\n    container.className = b();\n    container.innerHTML =\n        `\n        <div class=\"${b(\"wrapper\")}\">\n            <div class=\"${b(\"header\")}\">\n            \n            <span class=\"${b(\"header-title\")}\">Розповіді</span>\n            <span class=\"${b(\"header-subtitle\")}\">Переглянути Все</span>\n            \n            </div>\n            \n            \n            <div class=\"${b(\"profiles\")}\">\n\n            \n            </div>\n        </div>\n        `;\n\n    const profileRoot = container.getElementsByClassName(b(\"profiles\"))[0];\n    profiles.map(item => profileRoot.appendChild(item));\n\n\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsideStory);\n\n//# sourceURL=webpack:///./client/components/AsideStory/AsideStory.js?");

/***/ }),

/***/ "./client/components/AsideStory/index.js":
/*!***********************************************!*\
  !*** ./client/components/AsideStory/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AsideStore_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsideStore.scss */ \"./client/components/AsideStory/AsideStore.scss\");\n/* harmony import */ var _AsideStore_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AsideStore_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsideStory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideStory */ \"./client/components/AsideStory/AsideStory.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _AsideStory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/AsideStory/index.js?");

/***/ }),

/***/ "./client/components/Icon/Icon.scss":
/*!******************************************!*\
  !*** ./client/components/Icon/Icon.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./Icon.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Icon/Icon.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/Icon/Icon.scss?");

/***/ }),

/***/ "./client/components/Icon/index.js":
/*!*****************************************!*\
  !*** ./client/components/Icon/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Icon_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon.scss */ \"./client/components/Icon/Icon.scss\");\n/* harmony import */ var _Icon_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Icon_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./client/components/Icon/index.js?");

/***/ }),

/***/ "./client/components/NavBar/NavBar.js":
/*!********************************************!*\
  !*** ./client/components/NavBar/NavBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav-bar\");\nconst i = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"icon\");\nconst NavBar = () => {\n    let container = document.createElement(\"nav\");\n    container.className = b();\n    container.innerHTML =\n        `\n        <div class=\"${b(\"wrapper\")}\">\n            <div class=\"${b(\"logo\")}\">\n                <div class=\"${i([\"logo\"])}\"></div>\n                <div class=\"${b(\"line\")}\"></div>\n                <div class=\"${i([\"logo-text\"])}\"></div>\n            </div>\n            <div class=\"${b(\"search\")}\">\n                <input class=\"${b(\"search-input\")}\" placeholder=\"Пошук\" type=\"text\">\n            </div>\n            <div class=\"${b(\"navigation\")}\">\n                <div class=\"${i([\"hart\", \"margin\"])}\"></div>\n                <div class=\"${i([\"profile\", \"margin\"])}\"></div>\n                <div class=\"${i([\"explore\", \"margin\"])}\"></div>\n            </div>\n        </div>\n                \n        `;\n    return container;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\n//# sourceURL=webpack:///./client/components/NavBar/NavBar.js?");

/***/ }),

/***/ "./client/components/NavBar/NavBar.scss":
/*!**********************************************!*\
  !*** ./client/components/NavBar/NavBar.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./NavBar.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/NavBar/NavBar.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/NavBar/NavBar.scss?");

/***/ }),

/***/ "./client/components/NavBar/index.js":
/*!*******************************************!*\
  !*** ./client/components/NavBar/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NavBar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.scss */ \"./client/components/NavBar/NavBar.scss\");\n/* harmony import */ var _NavBar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_NavBar_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./client/components/NavBar/NavBar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/NavBar/index.js?");

/***/ }),

/***/ "./client/components/Post/Post.js":
/*!****************************************!*\
  !*** ./client/components/Post/Post.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _componentParts_miniProfile___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../componentParts/miniProfile/ */ \"./client/componentParts/miniProfile/index.js\");\n\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"post\");\nconst i = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"icon\");\nconst c = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\")\nconst NavBar = () => {\n        let container = document.createElement(\"div\");\n        container.className = b();\n        container.innerHTML =\n            `\n                <div class=\"${b(\"header\")}\">\n                    \n                    <div class=\"${b(\"profile-wrapper\")}\">\n                    \n                    \n                    \n                    \n                    </div>\n                     \n                    \n                   \n                    <button class=\"${c([\"dots-wrapper\"])}\">\n                        <div class=\"${i([\"dots\"])}\"></div>\n                    </button>\n                </div>\n                \n                <div class=\"${b(\"content\")}\">\n                    <div class=\"${b(\"content-icon\")}\">\n                        <img src=\"/images/veronikaromanko.jpg\" class=\"${b(\"image\")}\">\n                        <div class=\"${b(\"navigation\")}\">\n                            <div class=\"${b(\"navigation-wrapper\")}\">\n                                <button class=\"button--dots-wrapper\">\n                                    <span class=\"${i([\"hart\"])}\"></span>\n                                </button>\n                                <button class=\"button--dots-wrapper\">\n                                    <span class=\"${i([\"coment\"])}\"></span>\n                                </button>\n                                <button class=\"button--dots-wrapper\">\n                                    <span class=\"${i([\"share\"])}\"></span>\n                                </button>\n                            </div>\n                            <button class=\"button--dots-wrapper\"><span class=\"${i([\"save\"])}\"></span></button>\n                        </div>\n                    </div>\n                    <section class=\"${b(\"feedback\")}\">\n                             <a href=\"#\" class=\"${b(\"feedback-icon-wrapper\")}\"><img class=\"${b(\"feedback-icon\")}\" src=\"images/logo.jpg\"></a>\n                             <span class=\"${b(\"feedback-text\")}\">Уподобали <b>yaryna.skrypets і ще 5004</b></span>\n                    </section>\n                </div>\n                 <div class=\"${b(\"comments\")}\">\n                    <ul class=\"${b(\"list\")}\">\n                  \n                        <li class=\"${b(\"list-element\")}\"><b>vromanko2</b> web is beautiful</li>\n                        <li class=\"${b(\"list-element\")}\"><button class=\"${b('list-button')}\">Переглянути всі коментарі</button></li>\n                        <li class=\"${b(\"list-element\")}\"><b>vromanko2</b> web is beautiful</li>\n                        <li class=\"${b(\"list-element\")}\"><b>vromanko2</b> web is beautiful</li>\n                    </ul>\n                    <a class =\"${b('time')}\" href=\"#\"><time>19 год тому</time></a>\n                    \n                    <section class=\"${b(\"add\")}\">\n                         <form class=\"${b(\"form\")}\" action=\"\" method=\"post\">\n                            <textarea class=\"${b(\"textarea\")}\" aria-label=\"Додайте коментар...\" placeholder=\"Додайте коментар...\"></textarea>\n                            <button class=\"${b(\"button\")}\" type=\"submit\">Опублікувати</button>\n                        </form>\n                    </section>\n                </div>\n                \n        `;\n\n\n        container.getElementsByClassName(b(\"profile-wrapper\"))[0].appendChild(Object(_componentParts_miniProfile___WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n        return container;\n    }\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\n//# sourceURL=webpack:///./client/components/Post/Post.js?");

/***/ }),

/***/ "./client/components/Post/Post.scss":
/*!******************************************!*\
  !*** ./client/components/Post/Post.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./Post.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Post/Post.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/Post/Post.scss?");

/***/ }),

/***/ "./client/components/Post/index.js":
/*!*****************************************!*\
  !*** ./client/components/Post/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Post_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.scss */ \"./client/components/Post/Post.scss\");\n/* harmony import */ var _Post_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Post_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ \"./client/components/Post/Post.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/Post/index.js?");

/***/ }),

/***/ "./client/helpers/bem.js":
/*!*******************************!*\
  !*** ./client/helpers/bem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ELEMENT_SEPARATOR = \"__\",\n    MODIFIER_SEPARATOR = \"--\";\n\nfunction getBEMPAth({ b, e, m }) {\n    const base = e ? [b, e].join(ELEMENT_SEPARATOR) : b;\n\n    return [base, ...m.map(modifier => [base, modifier].join(MODIFIER_SEPARATOR))]\n        .join(\" \")\n        .trim();\n}\n\nconst b = b => (elementName, modifiers = {}) => {\n    let e, m;\n\n    if (typeof elementName === \"string\") {\n        e = elementName;\n    } else {\n        modifiers = elementName || {};\n    }\n\n    if (Array.isArray(modifiers)) {\n        m = modifiers;\n    } else {\n        m = Object.keys(modifiers).filter(modifier => modifiers[modifier]) || [];\n    }\n\n    return getBEMPAth({ b, e, m });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (b);\n\n//# sourceURL=webpack:///./client/helpers/bem.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NavBar */ \"./client/components/NavBar/index.js\");\n/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Icon */ \"./client/components/Icon/index.js\");\n/* harmony import */ var _components_Post___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Post/ */ \"./client/components/Post/index.js\");\n/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.scss */ \"./client/Layout.scss\");\n/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AsideProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AsideProfile */ \"./client/components/AsideProfile/index.js\");\n/* harmony import */ var _components_AsideStory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AsideStory */ \"./client/components/AsideStory/index.js\");\n/* harmony import */ var _components_AsideRecomendation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AsideRecomendation */ \"./client/components/AsideRecomendation/index.js\");\n/* harmony import */ var _components_AsideFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/AsideFooter */ \"./client/components/AsideFooter/index.js\");\n\n\n\n\n\n\n\n\n\nconst LayoutHeader = document.getElementsByClassName(\"Layout__header\")[0];\nconst LayoutContent = document.getElementsByClassName(\"Layout__content\")[0];\nconst LayoutAside = document.getElementsByClassName(\"Layout__aside\")[0];\nconst LayoutFooter = document.getElementsByClassName(\"Layout__footer\")[0];\n\n\nLayoutHeader.appendChild(Object(_components_NavBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nLayoutContent.appendChild(Object(_components_Post___WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\nLayoutContent.appendChild(Object(_components_Post___WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\nLayoutContent.appendChild(Object(_components_Post___WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\nLayoutContent.appendChild(Object(_components_Post___WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\nLayoutContent.appendChild(Object(_components_Post___WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\nLayoutContent.appendChild(Object(_components_Post___WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\nLayoutAside.appendChild(Object(_components_AsideProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\nLayoutAside.appendChild(Object(_components_AsideStory__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n//LayoutAside.appendChild(AsideStory());\nLayoutAside.appendChild(Object(_components_AsideRecomendation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\nLayoutAside.appendChild(Object(_components_AsideFooter__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\n\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/Layout.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/Layout.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body, html, ul, li {\\n  margin: 0;\\n  padding: 0; }\\n\\nbody {\\n  background: #fafafa; }\\n\\n.Layout__header {\\n  margin: auto; }\\n\\n.Layout__main {\\n  padding-top: 70px;\\n  margin: auto;\\n  max-width: 1035px;\\n  display: flex; }\\n\\n.Layout__content {\\n  flex: 4;\\n  margin-right: 40px; }\\n\\n.Layout__aside {\\n  flex: 2; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/Layout.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/componentParts/miniProfile/MiniProfile.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/componentParts/miniProfile/MiniProfile.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".mini-profile {\\n  display: flex;\\n  width: 100%;\\n  padding-left: 16px;\\n  padding-right: 16px; }\\n  .mini-profile__icon {\\n    width: 32px;\\n    height: 32px;\\n    border-radius: 50%; }\\n    .mini-profile__icon-wrapper {\\n      cursor: pointer;\\n      color: #003569;\\n      text-decoration: none;\\n      background: none; }\\n  .mini-profile__content {\\n    display: flex;\\n    flex-direction: column;\\n    margin-left: 14px; }\\n    .mini-profile__content-title {\\n      color: #262626;\\n      font-weight: 600;\\n      font-size: 18px;\\n      line-height: 18px; }\\n    .mini-profile__content-sub-title {\\n      font-size: 14px;\\n      color: #999; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/componentParts/miniProfile/MiniProfile.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideFooter/AsideFooter.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideFooter/AsideFooter.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".footer {\\n  color: #c7c7c7;\\n  font-size: 11px;\\n  font-weight: 400;\\n  line-height: 13px; }\\n  .footer__list {\\n    margin-top: 12px;\\n    list-style: none;\\n    margin-bottom: 16px; }\\n    .footer__list-element {\\n      text-transform: capitalize;\\n      text-decoration: none;\\n      display: inline-block;\\n      padding-right: 4px; }\\n    .footer__list-element::after {\\n      content: \\\"\\\\00B7\\\";\\n      margin: 0 .25em; }\\n  .footer__title {\\n    text-transform: uppercase; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/AsideFooter/AsideFooter.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideProfile/AsideProfile.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideProfile/AsideProfile.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/AsideProfile/AsideProfile.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideRecomendation/AsideRecomendation.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideRecomendation/AsideRecomendation.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".recomendation {\\n  margin-top: 12px;\\n  margin-bottom: 12px; }\\n  .recomendation__header {\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 1rem; }\\n    .recomendation__header-title {\\n      color: #999;\\n      font-size: 18px;\\n      line-height: 18px;\\n      font-weight: 500; }\\n    .recomendation__header-subtitle {\\n      color: #262626;\\n      font-weight: 600; }\\n  .recomendation__profiles {\\n    padding: 0 1rem;\\n    padding-bottom: 1rem; }\\n  .recomendation__wrapper {\\n    background: #fff;\\n    border-radius: 4px;\\n    overflow: hidden;\\n    border: 1px solid #e6e6e6; }\\n  .recomendation__item {\\n    padding: 8px 16px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/AsideRecomendation/AsideRecomendation.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideStory/AsideStore.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/AsideStory/AsideStore.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".story {\\n  margin-top: 10px; }\\n  .story__header {\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 1rem; }\\n    .story__header-title {\\n      color: #999;\\n      font-size: 18px;\\n      line-height: 18px;\\n      font-weight: 500; }\\n    .story__header-subtitle {\\n      color: #262626;\\n      font-weight: 600; }\\n  .story__profiles {\\n    padding: 0 1rem;\\n    height: 200px;\\n    overflow: scroll; }\\n  .story__wrapper {\\n    background: #fff;\\n    border-radius: 4px;\\n    overflow: hidden;\\n    border: 1px solid #e6e6e6; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/AsideStory/AsideStore.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Icon/Icon.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Icon/Icon.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".icon {\\n  height: 24px;\\n  width: 24px;\\n  float: left;\\n  border-radius: 50%;\\n  background-repeat: no-repeat;\\n  background-image: url(\\\"/images/icons.png\\\");\\n  color: #003569; }\\n  .icon--logo {\\n    background-position: -52px -234px; }\\n  .icon--logo-text {\\n    background-position: -94px -72px;\\n    height: 29px;\\n    width: 103px;\\n    border-radius: 0; }\\n  .icon--explore {\\n    background-position: -130px -286px;\\n    border-radius: 0; }\\n  .icon--hart {\\n    background-position: -52px -260px;\\n    border-radius: 0; }\\n  .icon--profile {\\n    border-radius: 0;\\n    background-position: -271px -182px; }\\n  .icon--margin {\\n    margin-left: 30px; }\\n  .icon--dots {\\n    background-position: -297px -208px;\\n    border-radius: 0; }\\n  .icon--coment {\\n    background-position: -239px -202px;\\n    border-radius: 0; }\\n  .icon--share {\\n    background-position: -323px -52px;\\n    border-radius: 0; }\\n  .icon--save {\\n    background-position: -234px -286px;\\n    border-radius: 0; }\\n\\n.button--dots-wrapper {\\n  min-height: 40px;\\n  min-width: 40px;\\n  background: transparent;\\n  border: none;\\n  cursor: pointer; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/Icon/Icon.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/NavBar/NavBar.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/NavBar/NavBar.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".nav-bar {\\n  background: #fff;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0975); }\\n  .nav-bar__wrapper {\\n    height: 77px;\\n    margin: auto;\\n    padding: 10px 5px;\\n    box-sizing: border-box;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    max-width: 1100px; }\\n  .nav-bar__search {\\n    height: 28px;\\n    min-width: 125px;\\n    width: 215px; }\\n    .nav-bar__search-input {\\n      font-size: 16px;\\n      border: solid 1px #dbdbdb;\\n      border-radius: 3px;\\n      outline: 0;\\n      padding: 3px 10px 3px 26px;\\n      z-index: 2;\\n      box-sizing: border-box;\\n      height: 100%;\\n      width: 100%;\\n      background: #fafafa;\\n      color: #999;\\n      cursor: text;\\n      font-weight: 300; }\\n  .nav-bar__logo {\\n    display: flex; }\\n  .nav-bar__line {\\n    background-color: #262626;\\n    height: 28px;\\n    margin: 0 16px;\\n    width: 1px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/NavBar/NavBar.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Post/Post.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Post/Post.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".post {\\n  border-radius: 3px;\\n  background: #ffffff;\\n  border: 1px solid #e6e6e6;\\n  overflow: hidden;\\n  margin-bottom: 70px; }\\n  .post__header {\\n    display: flex;\\n    justify-content: space-between;\\n    height: 60px;\\n    box-sizing: border-box; }\\n  .post__profile-wrapper {\\n    flex: 1;\\n    display: flex;\\n    align-self: center; }\\n  .post__navigation {\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 1rem;\\n    box-sizing: border-box; }\\n  .post__image {\\n    width: 100%; }\\n  .post__list {\\n    padding: 0 1rem;\\n    box-sizing: border-box;\\n    margin: 0;\\n    line-height: 18px; }\\n    .post__list-element {\\n      padding-top: 0.50rem;\\n      list-style-type: none; }\\n    .post__list-button {\\n      color: #999 !important;\\n      font-weight: 500 !important;\\n      outline: 0 !important;\\n      cursor: pointer;\\n      background: 0 0;\\n      text-transform: inherit;\\n      text-overflow: ellipsis;\\n      border: 0;\\n      padding: 0;\\n      font-size: 14px; }\\n  .post__add {\\n    padding-left: 16px;\\n    padding-right: 16px;\\n    border-top: 1px solid #efefef;\\n    color: #999;\\n    font-size: 14px;\\n    line-height: 18px;\\n    min-height: 56px;\\n    display: flex;\\n    flex-direction: row;\\n    margin-top: 4px; }\\n  .post__form {\\n    color: #999;\\n    display: flex;\\n    width: 100%;\\n    flex-direction: row;\\n    justify-content: space-between; }\\n  .post__textarea {\\n    background: 0 0;\\n    border: 0;\\n    color: #262626;\\n    font-size: inherit;\\n    height: 18px;\\n    max-height: 80px;\\n    outline: 0;\\n    padding: 0;\\n    resize: none; }\\n  .post__button {\\n    opacity: .3;\\n    pointer-events: none;\\n    border: 0;\\n    color: #3897f0;\\n    padding: 0; }\\n  .post__feedback {\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Helvetica, Arial, sans-serif;\\n    font-size: 14px;\\n    line-height: 18px;\\n    padding: 0 1rem;\\n    margin-bottom: 8px; }\\n    .post__feedback-icon {\\n      width: 20px;\\n      height: 20px;\\n      border-radius: 50%; }\\n      .post__feedback-icon-wrapper {\\n        text-decoration: none; }\\n  .post__time {\\n    color: #999;\\n    margin-bottom: 5px;\\n    text-transform: uppercase;\\n    padding: 0 1rem;\\n    text-decoration: none;\\n    font-size: 10px;\\n    letter-spacing: .2px;\\n    line-height: 18px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/Post/Post.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

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

/***/ })

/******/ });