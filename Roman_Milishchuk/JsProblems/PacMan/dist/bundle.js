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

/***/ "./src/Characters.js":
/*!***************************!*\
  !*** ./src/Characters.js ***!
  \***************************/
/*! exports provided: Pacman, Shadow, Apple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pacman\", function() { return Pacman; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shadow\", function() { return Shadow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Apple\", function() { return Apple; });\n/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ \"./src/drawing.js\");\n/* harmony import */ var _gameHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameHelpers */ \"./src/gameHelpers.js\");\n\n\n\nclass Entity {\n    constructor(x, y, dir) {\n        this.x = x;\n        this.y = y;\n        this.dir = dir;\n    }\n\n    move(step, field_size) {\n        [this.x, this.y] = [this.x, this.y].map((v, i) => {\n            let new_pos = v + this.dir[i] * step;\n            if (new_pos > 0 && new_pos < field_size - step) {\n                return new_pos;\n            }\n            return v;\n        });\n    }\n}\n\nclass Pacman extends Entity {\n    draw(ctx, width) {\n        Object(_drawing__WEBPACK_IMPORTED_MODULE_0__[\"drawPacman\"])(ctx, this.x, this.y, width, width);\n    }\n}\n\nclass Shadow extends Entity {\n    draw(ctx, width) {\n        Object(_drawing__WEBPACK_IMPORTED_MODULE_0__[\"drawGhost\"])(ctx, this.x, this.y, width, width);\n    }\n\n    move(step, field_size, pacman) {\n        let rel_x = pacman.x - this.x ? (pacman.x - this.x) / Math.abs(pacman.x - this.x) : 0;\n        let rel_y = pacman.y - this.y ? (pacman.y - this.y) / Math.abs(pacman.y - this.y) : 0;\n        let dir = [rel_x, rel_y];\n        if (dir[0] + dir[1] !== 1) {\n            if ((pacman.x - this.x) > (pacman.y - this.y)) {\n                this.dir = [0, dir[1]];\n            } else {\n                this.dir = [dir[0], 0];\n            }\n        } else {\n            this.dir = dir;\n        }\n        super.move(step, field_size);\n    }\n}\n\nclass Apple extends Entity {\n    draw(ctx, width) {\n        Object(_drawing__WEBPACK_IMPORTED_MODULE_0__[\"drawApple\"])(ctx, this.x, this.y, width, width);\n    }\n}\n\n// export default {Pacman, Shadow, Apple};\n\n\n//# sourceURL=webpack:///./src/Characters.js?");

/***/ }),

/***/ "./src/drawing.js":
/*!************************!*\
  !*** ./src/drawing.js ***!
  \************************/
/*! exports provided: drawGhost, drawPacman, drawApple, drawField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawGhost\", function() { return drawGhost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPacman\", function() { return drawPacman; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawApple\", function() { return drawApple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawField\", function() { return drawField; });\nconst roundedRect = (ctx, x, y, width, height, radius) => {\n    ctx.beginPath();\n    ctx.moveTo(x, y + radius);\n    ctx.lineTo(x, y + height - radius);\n    ctx.arcTo(x, y + height, x + radius, y + height, radius);\n    ctx.lineTo(x + width - radius, y + height);\n    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);\n    ctx.lineTo(x + width, y + radius);\n    ctx.arcTo(x + width, y, x + width - radius, y, radius);\n    ctx.lineTo(x + radius, y);\n    ctx.arcTo(x, y, x, y + radius, radius);\n    ctx.stroke();\n};\n\nconst drawGhost = (ctx, x, y, width, height) => {\n    y = y + height;\n    ctx.beginPath();\n    ctx.moveTo(x, y);\n    ctx.lineTo(x, y - height / 2);\n    ctx.bezierCurveTo(x, y - height * 1.7 / 2, x + width / 4, y - height, x + width / 2, y - height);\n    ctx.bezierCurveTo(x + width, y - height, x + width, y - height / 2, x + width, y - height / 2);\n    ctx.lineTo(x + width, y);\n    ctx.lineTo(x, y);\n    ctx.fill();\n};\n\nconst drawPacman = (ctx, x, y, width, height) => {\n    y = y + height;\n    ctx.beginPath();\n    ctx.arc(x + width / 2, y - height / 2, width / 2, Math.PI / 7, -Math.PI / 7, false);\n    ctx.lineTo(x + width / 2, y - width / 2);\n    ctx.fill();\n};\n\nconst drawApple = (ctx, x, y, width, height) => {\n    ctx.fillRect(x + width / 3, y + height / 3, width / 3, height / 3);\n};\n\nconst drawField = (ctx, field_size, cell_size) => {\n    roundedRect(ctx, 0, 0, field_size, field_size, 15);\n    roundedRect(ctx, cell_size / 4, cell_size / 4, field_size - cell_size / 2, field_size - cell_size / 2, 9);\n};\n\n\n//# sourceURL=webpack:///./src/drawing.js?");

/***/ }),

/***/ "./src/gameHelpers.js":
/*!****************************!*\
  !*** ./src/gameHelpers.js ***!
  \****************************/
/*! exports provided: randChoice, initCharacters, draw, keyController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randChoice\", function() { return randChoice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initCharacters\", function() { return initCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyController\", function() { return keyController; });\n/* harmony import */ var _Characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Characters */ \"./src/Characters.js\");\n\n\nconst random = (min, max) => Math.floor(Math.random() * (max - min) + min);\nconst randPos = (fieldSize, PosNum) => Math.round(random(0, fieldSize) / PosNum) * PosNum;\nconst randChoice = (arr) => arr[random(0, arr.length)];\nconst randDir = () => {\n    let tmp = randChoice([-1, 0, 1]);\n    return tmp !== 0 ? [tmp, 0] : [tmp, randChoice([-1, 0, 1])];\n};\n\n\nconst initCharacters = (field_size, cell_size) => {\n    let cellNum = field_size / cell_size;\n    let pac = new _Characters__WEBPACK_IMPORTED_MODULE_0__[\"Pacman\"](cell_size, cell_size, [1, 0]);\n    let shadows = new Array(3).fill(0).map(() => new _Characters__WEBPACK_IMPORTED_MODULE_0__[\"Shadow\"](randPos(field_size, cell_size), randPos(field_size, cell_size), randDir()));\n    let apples = new Array((cellNum - 2) * (cellNum - 2)).fill(0).map((v, i) => new _Characters__WEBPACK_IMPORTED_MODULE_0__[\"Apple\"]((1 + i % (cellNum - 2)) * cell_size, (1 + Math.floor(i / (cellNum - 2))) * cell_size, [0, 0]));\n    return [pac, shadows, apples];\n};\n\nconst draw = (ctx, field_size, cell_size, characters) => {\n    let [pac, shadows, apples] = characters;\n    ctx.clearRect(cell_size / 4, cell_size / 4, field_size - cell_size / 2, field_size - cell_size / 2);\n\n    [pac, ...shadows].forEach((v) => v.move(cell_size, field_size, pac));\n\n    characters[2] = apples = apples.filter((v) => v.x !== pac.x || v.y !== pac.y);\n    if (shadows.filter((v) => v.x === pac.x && v.y === pac.y).length > 0) {\n        alert(\"End of game\\n\" + \"Score: \" + +((field_size / cell_size - 2) * (field_size / cell_size - 2) - apples.length));\n    }\n    [pac, ...shadows, ...apples].forEach((v) => v.draw(ctx, cell_size));\n};\nconst keyController = (pacman, e) => {\n    switch (e.key) {\n        case \"ArrowLeft\":\n            pacman.dir = [-1, 0];\n            break;\n        case \"ArrowRight\":\n            pacman.dir = [1, 0];\n            break;\n        case \"ArrowUp\":\n            pacman.dir = [0, -1];\n            break;\n        case \"ArrowDown\":\n            pacman.dir = [0, 1];\n            break;\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/gameHelpers.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing.js */ \"./src/drawing.js\");\n/* harmony import */ var _gameHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameHelpers */ \"./src/gameHelpers.js\");\n\n\n\nconst startGame = (canvas) => {\n    let ctx = canvas.getContext(\"2d\");\n\n    let [field_size, cell_size] = [canvas.width, canvas.width / 25];\n    let characters = Object(_gameHelpers__WEBPACK_IMPORTED_MODULE_1__[\"initCharacters\"])(field_size, cell_size);\n    console.log(characters);\n    Object(_drawing_js__WEBPACK_IMPORTED_MODULE_0__[\"drawField\"])(ctx, field_size, cell_size);\n    setInterval(_gameHelpers__WEBPACK_IMPORTED_MODULE_1__[\"draw\"].bind(null, ctx, field_size, cell_size, characters), 180);\n\n    document.onkeypress = _gameHelpers__WEBPACK_IMPORTED_MODULE_1__[\"keyController\"].bind(null, characters[0]);\n};\n\nstartGame(document.getElementById(\"field\"));\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });