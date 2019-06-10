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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/Asteroid.js":
/*!*****************************!*\
  !*** ./scripts/Asteroid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Asteroid; });\nclass Asteroid {\n    constructor(ctx, canvas, x, y, xVelocity, yVelocity, radius, color) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.radius = radius;\n        this.x = x;\n        this.y = y;\n        this.xVelocity = xVelocity;\n        this.yVelocity = yVelocity;\n        this.color = color;\n    }\n\n    draw() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        this.ctx.strokeStyle = \"#fff\";\n        this.ctx.fillStyle = this.color;\n        this.ctx.fill();\n        this.ctx.stroke();\n    }\n\n    update() {\n        if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {\n            this.xVelocity = -this.xVelocity;\n        }\n        if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {\n            this.yVelocity = -this.yVelocity;\n        }\n\n        this.x += this.xVelocity;\n        this.y += this.yVelocity;\n        this.draw();\n    }\n\n    increaseSpeed() {\n        this.accelarteX += this.xVelocity * 0.1;\n        this.accelarteY += this.yVelocity * 0.1;\n    }\n}\n\n//# sourceURL=webpack:///./scripts/Asteroid.js?");

/***/ }),

/***/ "./scripts/Bullet.js":
/*!***************************!*\
  !*** ./scripts/Bullet.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bullet; });\nclass Bullet {\n    constructor(ctx, x, y, vectorVelocity, size) {\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.xVelocity = Math.cos(vectorVelocity) * 10;\n        this.yVelocity = -Math.sin(vectorVelocity) * 10;\n        this.size = size;\n    }\n\n    draw() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);\n        this.ctx.strokeStyle = \"red\";\n        this.ctx.fillStyle = 'white';\n        this.ctx.fill();\n    }\n\n    update() {\n        this.x += this.xVelocity;\n        this.y += this.yVelocity;\n        this.draw();\n    }\n}\n\n\n//# sourceURL=webpack:///./scripts/Bullet.js?");

/***/ }),

/***/ "./scripts/Game.js":
/*!*************************!*\
  !*** ./scripts/Game.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Asteroid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asteroid.js */ \"./scripts/Asteroid.js\");\n/* harmony import */ var _SpaceShip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpaceShip.js */ \"./scripts/SpaceShip.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./scripts/index.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.js */ \"./scripts/helpers.js\");\n\n\n\n\n\nlet count = 0;\n\nclass Game {\n    constructor(canvas, players = 1, screens = 1) {\n        count++;\n        this.canvas = document.getElementById(canvas);\n        this.canvas.style.display = 'block';\n        this.canvas.width = window.innerWidth / screens;\n        this.canvas.height = window.innerHeight;\n        this.ctx = this.canvas.getContext(\"2d\");\n\n        this.isGameLost = false;\n        this.timeRunning = 0;\n        this.lastTimeSpawned = 0;\n\n        this.players = players;\n        this.score = 0;\n        this.scoreX = this.canvas.width * .05;\n        this.scoreY = this.canvas.height / 8;\n\n        this.spaceShips = Array.from({length: this.players}, () =>\n            new _SpaceShip_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.canvas, this.canvas.width / 2, this.canvas.height / 2, Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[\"getRandomColor\"])()));\n\n        this.asteroids = Array.from({length: 5}, () => this.createAsteroid());\n\n        this.render();\n    }\n\n    keyDown(ev) {\n        let canvases = document.getElementsByTagName(\"canvas\");\n        if (this.players === 2) {\n            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_3__[\"moveSpaceshipUpButton\"])(ev, this.spaceShips[0], this.spaceShips[1], this.timeRunning);\n        } else if (this.canvas === canvases[0]) {\n            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_3__[\"moveSpaceshipUpButton\"])(ev, this.spaceShips[0], undefined, this.timeRunning);\n        } else {\n            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_3__[\"moveSpaceshipUpButton\"])(ev, undefined, this.spaceShips[0], this.timeRunning);\n        }\n    }\n\n    keyUp(ev) {\n        let canvases = document.getElementsByTagName(\"canvas\");\n        if (this.players === 2) {\n            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_3__[\"moveSpaceShipDownButton\"])(ev, this.spaceShips[0], this.spaceShips[1]);\n        } else if (this.canvas === canvases[0]) {\n            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_3__[\"moveSpaceShipDownButton\"])(ev, this.spaceShips[0], undefined);\n        } else {\n            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_3__[\"moveSpaceShipDownButton\"])(ev, undefined, this.spaceShips[0]);\n        }\n    }\n\n    createAsteroid() {\n        let radius = Math.round(Math.random() * 30) + 1;\n        let coordinates = {'x': this.spaceShips[0].x, 'y': this.spaceShips[0].y};\n        do {\n            coordinates = Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[\"randomCoordinates\"])(this.canvas, radius);\n        } while (Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[\"distanceBetweenTwoCoordinates\"])(this.spaceShips[0].x, this.spaceShips[0].y, coordinates['x'], coordinates['y']) < 200);\n        let xVelocity = (Math.random() - .5) * 5;\n        let yVelocity = (Math.random() - .5) * 5;\n        return new _Asteroid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas,\n            coordinates['x'], coordinates['y'],\n            xVelocity, yVelocity,\n            radius, Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[\"getRandomColor\"])());\n    }\n\n    deleteAsteroid(spaceShip) {\n        this.asteroids.map((asteroid, idx1) => {\n            asteroid.update();\n            if (Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[\"distanceBetweenTwoCoordinates\"])(asteroid.x, asteroid.y, spaceShip.x, spaceShip.y) <= spaceShip.radius + asteroid.radius) {\n                this.isGameLost = true;\n            }\n            spaceShip.bullets.map((bull, idx2) => {\n                if (Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[\"distanceBetweenTwoCoordinates\"])(asteroid.x, asteroid.y, bull.x, bull.y) < asteroid.radius + bull.size) {\n                    this.asteroids.splice(idx1, 1);\n                    spaceShip.destroyBullet(idx2);\n                }\n            })\n        });\n    }\n\n    onGameOver() {\n        this.ctx.fill();\n        this.ctx.fillStyle = \"red\";\n        this.ctx.font = \"bold 40px Arial\";\n        let displayScore = Math.round(this.score);\n        this.ctx.fillText(displayScore.toString(), this.scoreX, this.scoreY);\n        this.spaceShips.map(ship => ship.draw());\n    }\n\n    render(time = 0) {\n        this.timeRunning = time;\n        if (this.isGameLost) {\n            return 0;\n        }\n        this.score += time / 250135;\n        requestAnimationFrame(this.render.bind(this));\n        document.addEventListener('keydown', this.keyDown.bind(this));\n        document.addEventListener(\"keyup\", this.keyUp.bind(this));\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n        this.spaceShips.map(ship => {\n            ship.bullets.map(bullet => bullet.update());\n            this.deleteAsteroid(ship);\n        });\n\n        if (!this.isGameLost) {\n            this.spaceShips.map(ship => ship.update(time));\n            this.ctx.fill();\n            this.ctx.fillStyle = \"red\";\n            this.ctx.font = \"bold 40px Arial\";\n            let displayScore = Math.round(this.score);\n            if (displayScore % 10 === 0 && displayScore !== this.lastTimeSpawned) {\n                this.lastTimeSpawned = displayScore;\n                this.asteroids.push(this.createAsteroid());\n                this.asteroids.map(el => el.increaseSpeed());\n            }\n            this.ctx.fillText(displayScore.toString(), this.scoreX, this.scoreY);\n        } else {\n            this.onGameOver();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./scripts/Game.js?");

/***/ }),

/***/ "./scripts/SpaceShip.js":
/*!******************************!*\
  !*** ./scripts/SpaceShip.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpaceShip; });\n/* harmony import */ var _Bullet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullet.js */ \"./scripts/Bullet.js\");\n\r\n\r\n\r\nclass SpaceShip {\r\n\r\n    constructor(ctx, canvas, x, y, color) {\r\n        this.ctx = ctx;\r\n        this.canvas = canvas;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.size = 20;\r\n        this.angle = 90 / 180 * Math.PI;\r\n        this.radius = this.size / 2;\r\n        this.lastFrame = 0;\r\n        this.dt = 0;\r\n        this.turnSpeed = 2 * Math.PI;\r\n        this.rotCoef = 0;\r\n\r\n        this.moveSpeed = 5;\r\n        this.movePower = {x: 0, y: 0};\r\n        this.moveing = false;\r\n\r\n        this.timeLastFired = 0;\r\n        this.fireRate = 2;\r\n        this.bullets = [];\r\n        this.bulletSize = 4;\r\n\r\n        this.color = color;\r\n\r\n        this.fireSound = new Audio(\"audio/shoot.wav\");\r\n        this.moveSound = new Audio(\"audio/jetpack.wav\");\r\n        this.deathSound = new Audio(\"audio/lose.wav\");\r\n    }\r\n\r\n    rotate() {\r\n        this.angle += this.rotCoef * this.turnSpeed * this.dt;\r\n    }\r\n\r\n    draw() {\r\n        this.ctx.strokeStyle = \"black\";\r\n        this.ctx.fillStyle = this.color;\r\n        this.ctx.lineWidth = this.size / 20;\r\n        this.ctx.beginPath();\r\n        this.ctx.moveTo(\r\n            this.x + 4 / 3 * this.radius * Math.cos(this.angle),\r\n            this.y - 4 / 3 * this.radius * Math.sin(this.angle)\r\n        );\r\n        this.ctx.lineTo(\r\n            this.x - this.radius * (2 / 3 * Math.cos(this.angle) + Math.sin(this.angle)),\r\n            this.y + this.radius * (2 / 3 * Math.sin(this.angle) - Math.cos(this.angle))\r\n        );\r\n        this.ctx.lineTo(\r\n            this.x - this.radius * (2 / 3 * Math.cos(this.angle) - Math.sin(this.angle)),\r\n            this.y + this.radius * (2 / 3 * Math.sin(this.angle) + Math.cos(this.angle))\r\n        );\r\n\r\n        this.ctx.closePath();\r\n        this.ctx.stroke();\r\n        this.ctx.fill();\r\n    };\r\n\r\n    move() {\r\n        this.movePower.x += this.moveSpeed * Math.cos(this.angle) * this.dt;\r\n        this.movePower.y -= this.moveSpeed * Math.sin(this.angle) * this.dt;\r\n        this.x += this.movePower.x;\r\n        this.y += this.movePower.y;\r\n        this.moveSound.play();\r\n    }\r\n\r\n    decelerate() {\r\n        let friction = .5;\r\n        this.movePower.x -= friction * this.movePower.x * this.dt;\r\n        this.movePower.y -= friction * this.movePower.y * this.dt;\r\n        this.x += this.movePower.x;\r\n        this.y += this.movePower.y;\r\n    }\r\n\r\n    fire(time) {\r\n        if (time - this.timeLastFired > this.fireRate) {\r\n            this.bullets.push(new _Bullet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.x, this.y, this.angle, this.bulletSize));\r\n            this.fireSound.play();\r\n            this.timeLastFired = time;\r\n        }\r\n    }\r\n\r\n    die() {\r\n        this.deathSound.play();\r\n    }\r\n\r\n    update(time) {\r\n        this.dt = (time - this.lastFrame) / 1024;\r\n        this.draw();\r\n\r\n        this.rotCoef !== 0 ? this.rotate() : null;\r\n        this.moveing ? this.move() : this.decelerate();\r\n\r\n        this.x < - this.radius\r\n            ? this.x = this.canvas.width - this.radius\r\n            : this.x > this.canvas.width - this.radius\r\n                ? this.x = +this.radius\r\n                : null;\r\n        this.y < 0 - this.radius\r\n            ? this.y = this.canvas.height - this.radius\r\n            : this.y > this.canvas.height - this.radius\r\n                ? this.y = this.radius\r\n                : null;\r\n\r\n        this.bullets.map((el, idx) => (el.x < 0 || el.y < 0) ? this.destroyBullet(idx) : null);\r\n        this.lastFrame = time;\r\n    }\r\n\r\n    destroyBullet(i) {\r\n        this.bullets.splice(i, 1);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/SpaceShip.js?");

/***/ }),

/***/ "./scripts/helpers.js":
/*!****************************!*\
  !*** ./scripts/helpers.js ***!
  \****************************/
/*! exports provided: moveSpaceshipUpButton, moveSpaceShipDownButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSpaceshipUpButton\", function() { return moveSpaceshipUpButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSpaceShipDownButton\", function() { return moveSpaceShipDownButton; });\nconst moveSpaceshipUpButton = (ev, shipNumberOne = undefined, shipNumberTwo = undefined, timeRunning) => {\n    if (shipNumberOne) {\n        ev.key === \"w\" ? shipNumberOne.moveing = true :\n            ev.key === \"a\" ? shipNumberOne.rotCoef = 1 :\n                ev.key === \"d\" ? shipNumberOne.rotCoef = -1 :\n                    ev.key === \"s\" ? shipNumberOne.fire(timeRunning) :\n                        null;\n    }\n    if (shipNumberTwo) {\n        ev.key === \"ArrowUp\" ? shipNumberTwo.moveing = true :\n            ev.key === \"ArrowLeft\" ? shipNumberTwo.rotCoef = 1 :\n                ev.key === \"ArrowRight\" ? shipNumberTwo.rotCoef = -1 :\n                    ev.key === \"ArrowDown\" ? shipNumberTwo.fire(timeRunning) :\n                        null;\n    }\n};\n\nconst moveSpaceShipDownButton = (ev, shipNumberOne = undefined, shipNumberTwo = undefined) => {\n    if (shipNumberOne) {\n        ev.key === \"w\" ? shipNumberOne.moveing = false :\n            ev.key === \"a\" || ev.key === \"d\" ? shipNumberOne.rotCoef = 0 :\n                null;\n    }\n    if (shipNumberTwo) {\n        ev.key === \"ArrowUp\" ? shipNumberTwo.moveing = false :\n            ev.key === \"ArrowLeft\" || ev.key === \"ArrowRight\" ? shipNumberTwo.rotCoef = 0 :\n                null;\n    }\n};\n\n//# sourceURL=webpack:///./scripts/helpers.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! exports provided: distanceBetweenTwoCoordinates, randomCoordinates, getRandomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distanceBetweenTwoCoordinates\", function() { return distanceBetweenTwoCoordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomCoordinates\", function() { return randomCoordinates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomColor\", function() { return getRandomColor; });\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./scripts/Game.js\");\n\n\nconst getRandomColor = () => {\n    return \"#\" + ((1 << 24) * Math.random() | 0).toString(16);\n};\n\nconst getRandomId = () => {\n    return '_' + Math.random().toString(36).substr(2, 9);\n};\n\nconst clamp = (min, max, num) => (num <= min ? min : num >= max ? max : num);\n\nconst distanceBetweenTwoCoordinates = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n\nconst randomCoordinates = (canvas, radius) => ({\n    x: clamp(radius, canvas.width - radius * 2, Math.random() * canvas.width),\n    y: clamp(radius, canvas.height - radius * 2, Math.random() * canvas.height)\n});\n\n\n\nconst main = (fields = 1, players = 1) => {\n    // if (fields > 2 || players > 2) {\n    //     throw \"Such number is not available. (FIELDS <= 2, PLAYERS <= 2)\"\n    // }\n    let canvas = document.getElementsByTagName(\"canvas\");\n    if (fields > canvas.length) {\n        for (let i = 0; i < fields - canvas.length; i++) {\n            let newCanvas = document.createElement(\"canvas\");\n            let randomId = 0;\n            do {\n                randomId = getRandomId();\n                newCanvas.id = randomId;\n            } while (document.getElementById(randomId) !== undefined);\n            document.getElementsByTagName(\"body\")[0].appendChild(newCanvas);\n        }\n    }\n    let games = new Array(fields);\n    for (let i = 0; i < fields; i++) {\n        games[i] = new _Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas[i].id, players, fields);\n    }\n};\n\nmain(3, 1);\n\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ })

/******/ });