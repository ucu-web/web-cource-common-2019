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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const generate_field_test = (generate_field, field_size) => {\n    let field = generate_field(field_size);\n    if (field.length !== field_size) {\n        console.log(\"Error length\");\n    }\n    field.map((v, i) => {\n        if (v.length !== field_size) {\n            console.log(\"Error length y\");\n        }\n    });\n    field.map((a, x) => {\n        a.map((v, y) => {\n            if (v !== 0) {\n                console.log(\"Error not 0\");\n            }\n        })\n    });\n    console.log(\"END\");\n};\n\nconst generate_life_test = (generate_life, field, num) => {\n    if (num > field.length * field.length) {\n        console.log(\"Invalid num\");\n    }\n    let new_field = generate_life(field, num);\n    let count = 0;\n    for (let i = 0; i < field.length; i++) {\n        for (let j = 0; j < field.length; j++) {\n            count += field[i][j];\n        }\n    }\n    if (count !== num) {\n        console.log(\"Error num\");\n    }\n};\nconst count_neighbours_test = (count_neighbours, field, x, y) => {\n    let neighbours = count_neighbours(field, x, y);\n\n    let count = 0;\n    let coords = [-1, 0, 1];\n    for (let i = 0; i < 3; i++) {\n        for (let j = 0; j < 3; j++) {\n            let new_x = x + coords[i];\n            let new_y = y + coords[j];\n            if ((new_x > 0 && new_y > 0) && (new_x < field.length && new_y < field.length)) {\n                count += (i !== 1 && j !== 1) ? field[new_x][new_y] : 0;\n            }\n        }\n    }\n    if (count !== neighbours) {\n        console.log(\"Error number of neighbours\");\n    }\n};\n\nconst new_field_test = (gen_new_field, field) => {\n    let new_field = gen_new_field(field);\n\n    field.map((a, x) => {\n        a.map((v, y) => {\n                let count = count_neighbours(field, x, y);\n                if (count < 2 && new_field[x][y] === 1) {\n                    console.log(\"Error: has to die\");\n                } else if (count < 4 && ((field[x][y] === 1 && new_field[x][y] === 1) || field[x][y] === 0)) {\n                    console.log(\"Error: has to survive\");\n                } else if (count === 3 && ((field[x][y] === 0 && new_field[x][y] === 1) || field[x][y] === 1)) {\n                    console.log(\"Error: should ressurect\");\n                } else if (count > 3 && ((field[x][y] === 1 && new_field[x][y] === 0) || field[x][y] === 0)) {\n                    console.log(\"Error: should die\");\n                }\n            }\n        )\n    })\n};\n\nconst generate_field = (field_size) => {\n    let arr = [];\n    for (let i = 0; i < field_size; i++) {\n        arr.push(new Array(field_size).fill(0));\n    }\n    console.log(arr);\n    return arr;\n};\n\nconst random = (min, max) => Math.floor(Math.random() * (max - min) + min);\n\nconst generate_life = (field, num) => {\n    for (let i = 0; i < num; i++) {\n        let x = random(0, field.length - 1);\n        let y = random(0, field.length - 1);\n        while (field[x][y] !== 0) {\n            let x = random(0, field.length - 1);\n            let y = random(0, field.length - 1);\n        }\n        field[x][y] = 1;\n    }\n    return field;\n};\n\n\nconst count_neighbours = (field, x, y) => {\n    let number = 0;\n    for (let i = x - 1; i <= x + 1; i++) {\n        for (let j = y - 1; j <= y + 1; j++) {\n            if (x < 0 || y < 0 || x > field.length - 1 || y > length - 1) {\n                continue;\n            }\n            if (field[i][j] === 1) {\n                number++;\n            }\n        }\n    }\n    return number - 1;\n};\n\n\nconst new_field = (field) => {\n    let new_field = generate_field(field.length);\n    for (let i = 0; i < field.length; i++) {\n        for (let j = 0; j < field[i].length; j++) {\n            let neighbours = count_neighbours(field, i, j);\n            if (neighbours < 2 && field[i][j] === 1) {\n                new_field[i][j] = 0;\n            } \n        }\n    }\n};\n\n\ngenerate_field_test(generate_field, 5);\ngenerate_life_test(generate_life, generate_field(5), 7);\ncount_neighbours_test(count_neighbours, generate_life(generate_field(5), 7), 2, 2);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });