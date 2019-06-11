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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db/db */ \"./db/db.js\");\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst http = __webpack_require__(/*! http */ \"http\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\n\r\n\r\nconst hostname = '127.0.0.1';\r\nconst port = 3000;\r\n\r\nconst app = express();\r\napp.use(\r\n    bodyParser.urlencoded({\r\n        extended: true\r\n    })\r\n);\r\n\r\napp.use(bodyParser.json());\r\n\r\napp.use(express.static(path.join('./dist')));\r\n\r\nlet dbFile = new _db_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('todo');\r\napp.get('/db', (req, res, next) => {\r\n    res.setHeader(\"Content-Type\", \"application/json\");\r\n    res.end( dbFile.getData() )\r\n});\r\n\r\napp.post('/db', (req, res, next) => {\r\n   res.end('got it!', req.body);\r\n   dbFile.dump(req.body);\r\n});\r\n\r\napp.get(\"/*\", (req, res, next) => {\r\n    if (req.url === '/') {\r\n    } else {\r\n        res.sendFile('/dist/index.html', {root: '.'});\r\n    }\r\n});\r\n\r\nhttp.createServer(app).listen(port, () => {\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./db/db.js":
/*!******************!*\
  !*** ./db/db.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction FileManager(filename) {\r\n    this.filepath = `./db/${filename}.json`;\r\n    this.fileData = '{}';\r\n    this.upToDate = false;\r\n\r\n    const writeFile = () => {\r\n        fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile(this.filepath, this.fileData, (err) => {\r\n            if (err) throw err;\r\n            console.log('The file has been saved!');\r\n        });\r\n    };\r\n\r\n    const readFile = () => {\r\n        fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFile(this.filepath, 'utf8', (err, data) => {\r\n            if (err) throw err;\r\n            console.log('The file has been read:', data);\r\n            this.fileData = JSON.stringify(data);\r\n        });\r\n    };\r\n\r\n    this.getData = () => {\r\n        console.log('Up To Date', this.upToDate);\r\n        if (this.upToDate) return fileData;\r\n        fs__WEBPACK_IMPORTED_MODULE_0___default.a.access(this.filepath, fs__WEBPACK_IMPORTED_MODULE_0___default.a.constants.F_OK, (fileNotExists) => {\r\n            if (fileNotExists) {\r\n                writeFile();\r\n            } else {\r\n                fs__WEBPACK_IMPORTED_MODULE_0___default.a.access(this.filepath, fs__WEBPACK_IMPORTED_MODULE_0___default.a.constants.W_OK | fs__WEBPACK_IMPORTED_MODULE_0___default.a.constants.R_OK, (err) => {\r\n                    if (err) throw err;\r\n                    readFile();\r\n                });\r\n            }\r\n        });\r\n        this.upToDate = true;\r\n        // console.log('typeof', typeof this.fileData);\r\n        return this.fileData;\r\n    };\r\n\r\n    this.dump = (data) => {\r\n        // console.log('file to dump', typeof data, data);\r\n        this.fileData = JSON.stringify(data);\r\n        writeFile();\r\n        this.upToDate = false;\r\n    };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileManager);\r\n\n\n//# sourceURL=webpack:///./db/db.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app.js */\"./app.js\");\n\n\n//# sourceURL=webpack:///multi_./app.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });