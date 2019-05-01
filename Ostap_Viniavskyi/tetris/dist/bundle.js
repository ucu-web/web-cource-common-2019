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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\nclass Board{\r\n    constructor(rows, columns, square_size){\r\n        this.rows = rows;\r\n        this.columns = columns;\r\n        this.square_size = square_size;\r\n        this.board = [];\r\n        for (let i = 0; i < this.rows; i++) {\r\n            this.board[i] = [];\r\n            for (let j = 0; j < this.columns; j++) {\r\n                this.board[i][j] = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"EMPTY\"];\r\n            }\r\n        }\r\n    }\r\n    draw(context){\r\n        for (let i = 0; i < this.rows; i++) {\r\n            for (let j = 0; j < this.columns; j++) {\r\n                Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"drawSquare\"])(j, i, this.square_size, this.board[i][j], context);\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n/* harmony import */ var _piece_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece.js */ \"./src/piece.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor(rows, columns, square_size, tickDuration) {\r\n        this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](rows, columns, square_size);\r\n        this.piece = _piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getRandomPiece(square_size);\r\n        this.tickDuration = tickDuration;\r\n        this.square_size = square_size;\r\n        this.isOver = false;\r\n        this.context = document.getElementById(\"tetris\").getContext(\"2d\");\r\n        document.addEventListener(\"keydown\", this.CONTROL.bind(this));\r\n        this.board.draw(this.context);\r\n        this.scoreElement = document.getElementById(\"score\");\r\n        this.score = 0;\r\n        this.lastTick = Date.now();\r\n        this.play();\r\n    }\r\n\r\n    CONTROL(event) {\r\n        if (event.code === \"ArrowLeft\") {\r\n            this.movePieceLeft();\r\n            this.lastTick = Date.now();\r\n        } else if (event.code === \"ArrowUp\") {\r\n            this.rotatePiece();\r\n            this.lastTick = Date.now();\r\n        } else if (event.code === \"ArrowRight\") {\r\n            this.movePieceRight();\r\n            this.lastTick = Date.now();\r\n        } else if (event.code === \"ArrowDown\")\r\n            this.movePieceDown();\r\n    }\r\n\r\n    play() {\r\n        let now = Date.now();\r\n        if (now - this.lastTick > this.tickDuration) {\r\n            this.movePieceDown();\r\n            this.lastTick = Date.now();\r\n        }\r\n        if (!this.isOver)\r\n            requestAnimationFrame(this.play.bind(this));\r\n    }\r\n\r\n    movePieceDown() {\r\n        if (!this.collision(this.piece.x, this.piece.y + 1, this.piece.tetromino)) {\r\n            this.piece.moveDown(this.context);\r\n        } else {\r\n            this.lockPiece();\r\n        }\r\n    }\r\n\r\n    movePieceLeft() {\r\n        if (!this.collision(this.piece.x - 1, this.piece.y, this.piece.tetromino)) {\r\n            this.piece.moveLeft(this.context);\r\n        }\r\n    }\r\n\r\n    movePieceRight() {\r\n        if (!this.collision(this.piece.x + 1, this.piece.y, this.piece.tetromino)) {\r\n            this.piece.moveRight(this.context);\r\n        }\r\n    }\r\n\r\n    rotatePiece(){\r\n        let nextTetromino = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"rotateMatrix\"])(this.piece.tetromino);\r\n        let kick = 0;\r\n\r\n        if(this.collision(this.piece.x, this.piece.y, nextTetromino)){\r\n            if(this.piece.x > this.board.columns / 2)\r\n                kick--;\r\n            else\r\n                kick++;\r\n        }\r\n        if (!this.collision(this.piece.x + kick, this.piece.y, nextTetromino)){\r\n            this.piece.rotate(kick, this.context);\r\n        }\r\n    }\r\n\r\n    collision(newX, newY, tetromino){\r\n        for (let i = 0; i < tetromino.length; i++) {\r\n            for (let j = 0; j < tetromino.length; j++) {\r\n                if(tetromino[i][j]){\r\n                    if(newX + j < 0 || newX + j >= this.board.columns || newY + i >= this.board.rows)\r\n                        return true;\r\n                    if (newY + i < 0)\r\n                        continue;\r\n                    if (this.board.board[newY + i][newX + j] !== _utils_js__WEBPACK_IMPORTED_MODULE_2__[\"EMPTY\"])\r\n                        return true;\r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    lockPiece(){\r\n        for (let i = 0; i < this.piece.tetromino.length; i++) {\r\n            for (let j = 0; j < this.piece.tetromino.length; j++) {\r\n                if(this.piece.tetromino[i][j]){\r\n                    if(this.piece.y + i < 0){\r\n                        alert(\"GAME OVER\");\r\n                        this.isOver = true;\r\n                        break;\r\n                    }\r\n                    this.board.board[this.piece.y + i][this.piece.x + j] = this.piece.color;\r\n                }\r\n            }\r\n        }\r\n        for (let i = 0; i < this.board.rows; i++) {\r\n            let isRowFull = true;\r\n            for (let j = 0; j < this.board.columns; j++) {\r\n                isRowFull = isRowFull && (this.board.board[i][j] !== _utils_js__WEBPACK_IMPORTED_MODULE_2__[\"EMPTY\"]);\r\n            }\r\n            if (isRowFull){\r\n                for (let y = i; y > 0; y--) {\r\n                    for (let j = 0; j < this.board.columns; j++) {\r\n                        this.board.board[y][j] = this.board.board[y - 1][j];\r\n                    }\r\n                }\r\n\r\n                for (let j = 0; j < this.board.columns; j++) {\r\n                    this.board.board[0][j] = _utils_js__WEBPACK_IMPORTED_MODULE_2__[\"EMPTY\"];\r\n                }\r\n                this.score += 10;\r\n            }\r\n        }\r\n        this.board.draw(this.context);\r\n        this.scoreElement.innerHTML = this.score;\r\n        this.piece = _piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getRandomPiece(this.square_size);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\r\n\r\nconst ROWS = 20;\r\nconst COLUMNS = 10;\r\nconst SQUARE_SIZE = 20;\r\nconst TICK_DURATION = 250;\r\n\r\n\r\nlet game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ROWS, COLUMNS, SQUARE_SIZE, TICK_DURATION);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/piece.js":
/*!**********************!*\
  !*** ./src/piece.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Piece; });\n/* harmony import */ var _tetrominoes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tetrominoes.js */ \"./src/tetrominoes.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\nclass Piece {\r\n\r\n    static get PIECES(){\r\n        return [\r\n            [_tetrominoes_js__WEBPACK_IMPORTED_MODULE_0__[\"Z\"], \"red\"],\r\n            [_tetrominoes_js__WEBPACK_IMPORTED_MODULE_0__[\"S\"], \"green\"],\r\n            [_tetrominoes_js__WEBPACK_IMPORTED_MODULE_0__[\"T\"], \"purple\"],\r\n            [_tetrominoes_js__WEBPACK_IMPORTED_MODULE_0__[\"O\"], \"yellow\"],\r\n            [_tetrominoes_js__WEBPACK_IMPORTED_MODULE_0__[\"L\"], \"orange\"],\r\n            [_tetrominoes_js__WEBPACK_IMPORTED_MODULE_0__[\"I\"], \"cyan\"],\r\n            [_tetrominoes_js__WEBPACK_IMPORTED_MODULE_0__[\"J\"], \"blue\"]\r\n        ]\r\n    }\r\n\r\n    constructor(tetromino, color, square_size) {\r\n        this.tetromino = tetromino;\r\n        this.color = color;\r\n        this.square_size = square_size;\r\n        this.x = 3;\r\n        this.y = -2\r\n    }\r\n\r\n    static getRandomPiece(square_size) {\r\n        let r = Math.floor(Math.random() * Piece.PIECES.length);\r\n        return new Piece(...Piece.PIECES[r], square_size);\r\n    }\r\n\r\n    fill(color, context) {\r\n        for (let r = 0; r < this.tetromino.length; r++) {\r\n            for (let c = 0; c < this.tetromino.length; c++) {\r\n                // we draw only occupied squares\r\n                if (this.tetromino[r][c]) {\r\n                    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"drawSquare\"])(this.x + c, this.y + r, this.square_size, color, context);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    draw(context) {\r\n        this.fill(this.color, context);\r\n    }\r\n\r\n    unDraw(context) {\r\n        this.fill(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"EMPTY\"], context);\r\n    }\r\n\r\n    moveDown(context) {\r\n        this.unDraw(context);\r\n        this.y++;\r\n        this.draw(context);\r\n    }\r\n\r\n    moveLeft(context) {\r\n        this.unDraw(context);\r\n        this.x--;\r\n        this.draw(context);\r\n    }\r\n\r\n    moveRight(context) {\r\n        this.unDraw(context);\r\n        this.x++;\r\n        this.draw(context);\r\n    }\r\n\r\n    rotate(kick, context){\r\n        this.unDraw(context);\r\n        this.x += kick;\r\n        this.tetromino = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rotateMatrix\"])(this.tetromino);\r\n        this.draw(context);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/piece.js?");

/***/ }),

/***/ "./src/tetrominoes.js":
/*!****************************!*\
  !*** ./src/tetrominoes.js ***!
  \****************************/
/*! exports provided: I, J, L, O, S, T, Z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"I\", function() { return I; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"J\", function() { return J; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"L\", function() { return L; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"O\", function() { return O; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"S\", function() { return S; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"T\", function() { return T; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Z\", function() { return Z; });\nconst I = [\r\n    [0, 0, 0, 0],\r\n    [1, 1, 1, 1],\r\n    [0, 0, 0, 0],\r\n    [0, 0, 0, 0],\r\n];\r\n\r\nconst J = [\r\n    [1, 0, 0],\r\n    [1, 1, 1],\r\n    [0, 0, 0]\r\n];\r\n\r\nconst L = [\r\n    [0, 0, 1],\r\n    [1, 1, 1],\r\n    [0, 0, 0]\r\n\r\n];\r\n\r\nconst O = [\r\n    [0, 0, 0, 0],\r\n    [0, 1, 1, 0],\r\n    [0, 1, 1, 0],\r\n    [0, 0, 0, 0]\r\n];\r\n\r\nconst S = [\r\n    [0, 1, 1],\r\n    [1, 1, 0],\r\n    [0, 0, 0]\r\n];\r\n\r\nconst T = [\r\n    [0, 1, 0],\r\n    [1, 1, 1],\r\n    [0, 0, 0]\r\n];\r\n\r\nconst Z = [\r\n    [1, 1, 0],\r\n    [0, 1, 1],\r\n    [0, 0, 0]\r\n];\n\n//# sourceURL=webpack:///./src/tetrominoes.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: EMPTY, drawSquare, rotateMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPTY\", function() { return EMPTY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSquare\", function() { return drawSquare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotateMatrix\", function() { return rotateMatrix; });\nconst EMPTY = 'WHITE';\r\nconst drawSquare = (x, y, size, color, context) => {\r\n    context.fillStyle = color;\r\n    context.fillRect(x * size, y * size, size, size);\r\n    context.strokeStyle = \"black\";\r\n    context.strokeRect(x * size, y * size, size, size);\r\n};\r\nconst rotateMatrix = (matrix) => {\r\n    const N = matrix.length - 1;\r\n    const result = matrix.map((row, i) =>\r\n        row.map((val, j) => matrix[N - j][i])\r\n    );\r\n    return result;\r\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });