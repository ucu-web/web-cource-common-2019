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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/control_state.js":
/*!******************************!*\
  !*** ./src/control_state.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ControlState; });\nfunction ControlState() {\n  var states = {\n    up: false,\n    down: false,\n    left: false,\n    right: false,\n    fire: false\n  };\n\n  var getCurrentState = function getCurrentState() {\n    for (var state in states) {\n      if (states[state] === true) return state;\n    }\n  };\n\n  Object.defineProperty(this, \"state\", {\n    get: function get() {\n      return getCurrentState();\n    }\n  });\n  var keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire']]);\n  document.addEventListener('keydown', function (event) {\n    return update(event, true);\n  });\n  document.addEventListener('keyup', function (event) {\n    return update(event, false);\n  });\n\n  function update(event, pressed) {\n    if (keyMap.has(event.keyCode)) {\n      event.preventDefault();\n      states[keyMap.get(event.keyCode)] = pressed;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/control_state.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_window */ \"./src/game_window.js\");\n/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ \"./src/scenes/loading.js\");\n/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu */ \"./src/scenes/menu.js\");\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene */ \"./src/scene.js\");\n/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control_state */ \"./src/control_state.js\");\n/* harmony import */ var _scenes_game_level__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/game_level */ \"./src/scenes/game_level.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$width = _ref.width,\n        width = _ref$width === void 0 ? 900 : _ref$width,\n        _ref$height = _ref.height,\n        height = _ref$height === void 0 ? 900 : _ref$height;\n\n    _classCallCheck(this, Game);\n\n    this.gameWindow = new _game_window__WEBPACK_IMPORTED_MODULE_0__[\"default\"](width, height);\n    this.gameWindow.loadImages({\n      tanks: \"../img/tanks.png\",\n      tiles: \"../img/tiles.png\",\n      title: \"../img/title.png\"\n    });\n    this.controlState = new _control_state__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    this.scenes = {\n      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this),\n      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this),\n      gameLevel: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this)\n    };\n    this.currentScene = this.scenes.loading;\n    this.currentScene.init();\n  }\n\n  _createClass(Game, [{\n    key: \"changeScene\",\n    value: function changeScene(status) {\n      switch (status) {\n        case _scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LOADED:\n          return this.scenes.menu;\n\n        case _scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"].START_GAME:\n          return this.scenes.gameLevel;\n\n        default:\n          return this.scenes.menu;\n      }\n    }\n  }, {\n    key: \"frame\",\n    value: function frame(time) {\n      if (this.currentScene.status !== _scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"].WORKING) {\n        this.currentScene = this.changeScene(this.currentScene.status);\n        this.currentScene.init();\n      }\n\n      this.currentScene.render(time);\n      requestAnimationFrame(this.frame.bind(this));\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      requestAnimationFrame(this.frame.bind(this));\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_window.js":
/*!****************************!*\
  !*** ./src/game_window.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_loader */ \"./src/image_loader.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction GameWindow(width, height) {\n  this.fill = fill;\n  this.loadImages = loadImages;\n  this.printText = printText;\n  this.drawImage = drawImage;\n  this.isImagesLoaded = false;\n  var canvas = createCanvas(width, height);\n  var context = canvas.getContext('2d');\n  var images = {};\n\n  function createCanvas(width, height) {\n    var elements = document.getElementsByTagName(\"canvas\");\n    var canvas = elements[0] || document.createElement('canvas');\n    document.body.appendChild(canvas);\n    canvas.width = width;\n    canvas.height = height;\n    return canvas;\n  }\n\n  function fill(color) {\n    context.fillStyle = color;\n    context.fillRect(0, 0, width, height);\n  }\n\n  function loadImages(imageFiles) {\n    var _this = this;\n\n    Promise.all(Object.entries(imageFiles).map(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return Object(_image_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value).then(function (img) {\n        return images[key] = img;\n      });\n    })).then(function () {\n      return _this.isImagesLoaded = true;\n    });\n  }\n\n  function printText(x, y, text) {\n    context.fillStyle = \"#fff\";\n    context.font = \"24px PT Mono\";\n    context.fillText(text, x, y);\n  }\n\n  function drawImage(x, y, imageName) {\n    context.drawImage(images[imageName], x, y);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameWindow);\n\n//# sourceURL=webpack:///./src/game_window.js?");

/***/ }),

/***/ "./src/image_loader.js":
/*!*****************************!*\
  !*** ./src/image_loader.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar loadImage = function loadImage(src) {\n  return new Promise(function (res, rej) {\n    var img = new Image();\n\n    img.onload = function () {\n      return res(img);\n    };\n\n    img.src = src;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadImage);\n\n//# sourceURL=webpack:///./src/image_loader.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/common.css */ \"./style/common.css\");\n/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nvar theTank = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ntheTank.run();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Scene =\n/*#__PURE__*/\nfunction () {\n  function Scene(game) {\n    _classCallCheck(this, Scene);\n\n    this.game = game;\n    this.status = this.constructor.WORKING;\n  }\n\n  _createClass(Scene, [{\n    key: \"init\",\n    value: function init() {\n      this.status = this.constructor.WORKING;\n    }\n  }, {\n    key: \"finish\",\n    value: function finish(status) {\n      this.status = status;\n    }\n  }, {\n    key: \"render\",\n    value: function render(time) {}\n  }], [{\n    key: \"WORKING\",\n    get: function get() {\n      return 'WORKING';\n    }\n  }, {\n    key: \"LOADED\",\n    get: function get() {\n      return 'LOADED';\n    }\n  }, {\n    key: \"START_GAME\",\n    get: function get() {\n      return 'START_GAME';\n    }\n  }, {\n    key: \"GAME_OVER\",\n    get: function get() {\n      return 'GAME_OVER';\n    }\n  }, {\n    key: \"GAME_WIN\",\n    get: function get() {\n      return 'GAME_WIN';\n    }\n  }, {\n    key: \"FINISH\",\n    get: function get() {\n      return 'FINISH';\n    }\n  }]);\n\n  return Scene;\n}();\n\n\n\n//# sourceURL=webpack:///./src/scene.js?");

/***/ }),

/***/ "./src/scenes/game_level.js":
/*!**********************************!*\
  !*** ./src/scenes/game_level.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameLevel; });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ \"./src/scene.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar GameLevel =\n/*#__PURE__*/\nfunction (_Scene) {\n  _inherits(GameLevel, _Scene);\n\n  function GameLevel(game) {\n    _classCallCheck(this, GameLevel);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));\n  }\n\n  _createClass(GameLevel, [{\n    key: \"init\",\n    value: function init() {\n      _get(_getPrototypeOf(GameLevel.prototype), \"init\", this).call(this);\n    }\n  }, {\n    key: \"render\",\n    value: function render(time) {\n      this.game.gameWindow.fill(\"black\");\n\n      _get(_getPrototypeOf(GameLevel.prototype), \"render\", this).call(this, time);\n    }\n  }]);\n\n  return GameLevel;\n}(_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/scenes/game_level.js?");

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Loading; });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ \"./src/scene.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Loading =\n/*#__PURE__*/\nfunction (_Scene) {\n  _inherits(Loading, _Scene);\n\n  function Loading(game) {\n    _classCallCheck(this, Loading);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game));\n  }\n\n  _createClass(Loading, [{\n    key: \"init\",\n    value: function init() {\n      _get(_getPrototypeOf(Loading.prototype), \"init\", this).call(this);\n\n      this.loadedAt = 0;\n    }\n  }, {\n    key: \"update\",\n    value: function update(time) {\n      if (this.loadedAt === 0 && this.game.gameWindow.isImagesLoaded === true) {\n        this.loadedAt = time;\n      }\n\n      if (this.loadedAt !== 0 && time - this.loadedAt > 1000) {\n        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOADED);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render(time) {\n      this.update(time);\n      this.game.gameWindow.fill(\"#515151\");\n      this.game.gameWindow.printText(50, 70, \"Loading...\");\n\n      _get(_getPrototypeOf(Loading.prototype), \"render\", this).call(this, time);\n    }\n  }]);\n\n  return Loading;\n}(_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/scenes/loading.js?");

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ \"./src/scene.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Menu =\n/*#__PURE__*/\nfunction (_Scene) {\n  _inherits(Menu, _Scene);\n\n  function Menu(game) {\n    _classCallCheck(this, Menu);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));\n  }\n\n  _createClass(Menu, [{\n    key: \"init\",\n    value: function init() {\n      _get(_getPrototypeOf(Menu.prototype), \"init\", this).call(this);\n    }\n  }, {\n    key: \"update\",\n    value: function update(time) {\n      if (this.game.controlState.state === 'fire') {\n        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"].START_GAME);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render(time) {\n      this.update(time);\n      this.game.gameWindow.drawImage(0, 0, 'title');\n      this.game.gameWindow.printText(400, 600, \"Press SpaceBar\");\n\n      _get(_getPrototypeOf(Menu.prototype), \"render\", this).call(this, time);\n    }\n  }]);\n\n  return Menu;\n}(_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/scenes/menu.js?");

/***/ }),

/***/ "./style/common.css":
/*!**************************!*\
  !*** ./style/common.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type.\\n> body {\\r\\n|     margin: 0;\\r\\n| }\");\n\n//# sourceURL=webpack:///./style/common.css?");

/***/ })

/******/ });