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

/***/ "./node_modules/css-loader/dist/cjs.js!./style/calendar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/calendar.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".calendar {\\r\\n  width: calc(7 * 55px);\\r\\n  margin: auto;\\r\\n}\\r\\n.calendar__day {\\r\\n  width: 50px;\\r\\n  display: inline-block;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  padding: 5px 2px;\\r\\n  text-decoration: none;\\r\\n  -webkit-user-select: none;\\r\\n  -moz-user-select: none;\\r\\n  -ms-user-select: none;\\r\\n  color: #000;\\r\\n  overflow: hidden;\\r\\n}\\r\\n.calendar__button {\\r\\n  padding: 5px 10px;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.calendar__button:hover, .calendar__day:hover {\\r\\n  background: #E0F2F1;\\r\\n}\\r\\n.calendar__button:active .calendar__day:active {\\r\\n  background: #B2DFDB;\\r\\n  outline: none;\\r\\n  color: #000;\\r\\n}\\r\\n[active], [active]:hover {\\r\\n  background: #B2DFDB;\\r\\n}\\r\\n.disabled {\\r\\n  width: 50px;\\r\\n  display: inline-block;\\r\\n  text-align: center;\\r\\n  padding: 5px 2px;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./style/calendar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/todolist.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/todolist.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".todolist {\\r\\n    width: 400px;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n.todolist__input {\\r\\n    width: 100%;\\r\\n    outline: none;\\r\\n    border: none;\\r\\n    background: #E1F5FE;\\r\\n    border-radius: 10px;\\r\\n    padding: 10px 15px;\\r\\n    margin: 10px 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.todolist__current-day {\\r\\n    width: 90px;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n.todolist__tasks {\\r\\n    list-style-type: none;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n.todolist__task {\\r\\n    padding: 15px;\\r\\n    background: #E0F7FA;\\r\\n    margin: 10px;\\r\\n    border-radius: 30px;\\r\\n    font-family: Consolas, sans-serif;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n    word-wrap: break-word;\\r\\n}\\r\\n\\r\\n[chosen] {\\r\\n    background: #B2EBF2;\\r\\n}\\r\\n\\r\\n.todolist__task_info {\\r\\n    width: 85%;\\r\\n    padding: 5px;\\r\\n}\\r\\n\\r\\n.todolist__task_checkbox {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.todolist__task_deletion {\\r\\n    border-radius: 50%;\\r\\n    float: right;\\r\\n    transform: rotate(45deg);\\r\\n    margin-bottom: 1px;\\r\\n    font-family: Monospaced;\\r\\n    font-size: 25px;\\r\\n    cursor: pointer;\\r\\n    padding: 3px 10px;\\r\\n    background: none;\\r\\n    border: none;\\r\\n}\\r\\n\\r\\n.todolist__task_deletion:hover {\\r\\n    background: #B2EBF2;\\r\\n}\\r\\n\\r\\n.todolist__task_deletion:active {\\r\\n    background: #B2EBF2;\\r\\n}\\r\\n\\r\\n.todolist__save, .todolist__cancel{\\r\\n    padding: 5px 10px;\\r\\n    background: none;\\r\\n    border: none;\\r\\n    cursor: pointer;\\r\\n    /*outline: none;*/\\r\\n}\\r\\n\\r\\n.todolist__save, .todolist__cancel {\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n.todolist__save:hover, .todolist__cancel:hover {\\r\\n    background: #E0E0E0;\\r\\n}\\r\\n\\r\\n.todolist__save:active, .todolist__cancel:active {\\r\\n    background: #BDBDBD;\\r\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./style/todolist.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/Calendar.js":
/*!*************************!*\
  !*** ./src/Calendar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./src/lib.js\");\n/* harmony import */ var _calendarHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendarHelpers */ \"./src/calendarHelpers.js\");\n/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PubSub */ \"./src/PubSub.js\");\n/* harmony import */ var _style_calendar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/calendar.css */ \"./style/calendar.css\");\n/* harmony import */ var _style_calendar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_calendar_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\nclass Calendar {\r\n  constructor(container) {\r\n    this.date = new Date();\r\n\r\n    this.model = Object(_calendarHelpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.date);\r\n    this.container = container;\r\n    this.currentDay = undefined;\r\n    this.render();\r\n    this.initHandlers();\r\n    this.onChangeMonthPubSub = new _PubSub__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    this.onDaySelectPubSub = new _PubSub__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    this.onDaySelect(this.changeActiveDay.bind(this));\r\n    this.history = true;\r\n  }\r\n\r\n  onChangeMonth(callbackFn) {\r\n    return this.onChangeMonthPubSub.subscribe(callbackFn);\r\n  }\r\n\r\n  onDaySelect(callbackFn) {\r\n    return this.onDaySelectPubSub.subscribe(callbackFn);\r\n  }\r\n\r\n  renderDays(week) {\r\n    return week\r\n      .map(\r\n        day => {\r\n          let dayHTML = document.createElement('a');\r\n          dayHTML.innerHTML = day || \"\";\r\n          if (dayHTML.innerHTML === \"\") { dayHTML.className = 'disabled'; return dayHTML.outerHTML; }\r\n          dayHTML.href = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${day}`;\r\n          dayHTML.className = \"calendar__day\";\r\n          dayHTML.dataset.day = day;\r\n          dayHTML.tabIndex = 0;\r\n          return dayHTML.outerHTML;\r\n          // return `<div class = \"calendar__day\" data-day=\"${day}\" >${day || \"\"}</div>`\r\n        }\r\n      )\r\n      .join(\"\");\r\n  }\r\n\r\n  renderWeeks(weeks) {\r\n    return weeks.map(week => `${this.renderDays(week)}`).join(\"\");\r\n  }\r\n\r\n  goToDate(date) {\r\n    this.date = date;\r\n    this.model = Object(_calendarHelpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.date);\r\n    this.render();\r\n    this.onChangeMonthPubSub.publish(date);\r\n  }\r\n\r\n  goToPrevMonth() {\r\n    this.goToDate(Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"addMonth\"])(this.date, -1));\r\n  }\r\n  goToNextMonth() {\r\n    this.goToDate(Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"addMonth\"])(this.date, 1));\r\n  }\r\n\r\n  changeActiveDay(date, ev) {\r\n    if (typeof this.currentDay !== \"undefined\") this.currentDay.toggleAttribute('active');\r\n    this.currentDay = ev.target;\r\n    this.currentDay.toggleAttribute('active');\r\n  }\r\n\r\n  initHandlers() {\r\n    Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(this.container, \".calendar__day\", \"click\", ev => {\r\n      if (ev.ctrlKey || ev.metaKey) return;\r\n      ev.preventDefault();\r\n      const date = new Date(this.date);\r\n      date.setDate(ev.target.dataset.day);\r\n      this.onDaySelectPubSub.publish(date, ev);\r\n      if (this.history) history.pushState({}, ev.target.href, ev.target.href);\r\n      this.history = true;\r\n    });\r\n\r\n    Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(this.container, \".calendar__day\", \"keydown\", ev => {\r\n      if (ev.key !== 'Enter') return;\r\n      ev.target.click();\r\n    });\r\n\r\n    Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(this.container, \".calendar__button_prev\", \"click\", () => {\r\n      this.goToPrevMonth();\r\n    });\r\n\r\n    Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(this.container, \".calendar__button_next\", \"click\", () => {\r\n      this.goToNextMonth();\r\n    });\r\n  }\r\n\r\n  render() {\r\n    this.container.innerHTML = `\r\n      <div class=\"calendar\">\r\n        <button class=\"calendar__button calendar__button_prev\">< prev</button>\r\n        <button class=\"calendar__button calendar__button_next\">next ></button>\r\n        <br>\r\n      \r\n        ${this.renderWeeks(this.model)}\r\n      </div>\r\n  `;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\r\n\n\n//# sourceURL=webpack:///./src/Calendar.js?");

/***/ }),

/***/ "./src/CheckBoxHelper.js":
/*!*******************************!*\
  !*** ./src/CheckBoxHelper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction CheckBoxHelper(overall, ingredients) {\r\n    overall.addEventListener('click', checkAll);\r\n    let checkedCount = 0;\r\n\r\n    function checkAll() {\r\n        (overall.checked) ? checkedCount = ingredients.length : checkedCount = 0;\r\n        ingredients.forEach(ingr => {ingr.checked = overall.checked; ingr.click()});\r\n    }\r\n\r\n    ingredients.forEach(ingr => ingr.addEventListener('click', updateDisplay));\r\n\r\n    function updateDisplay() {\r\n        console.log('click1');\r\n\r\n        checkedCount = 0;\r\n        ingredients.forEach(ingr => checkedCount += ingr.checked);\r\n\r\n        if (checkedCount === 0) {\r\n            overall.checked = false;\r\n            overall.indeterminate = false;\r\n        } else if (checkedCount === ingredients.length) {\r\n            overall.checked = true;\r\n            overall.indeterminate = false;\r\n        } else {\r\n            overall.checked = false;\r\n            overall.indeterminate = true;\r\n        }\r\n    }\r\n\r\n    function getSelected(elements) {\r\n        let selected = [];\r\n        elements.forEach(elem => {if (elem.querySelector('input[type=\"checkbox\"]').checked) selected.push(elem)});\r\n        return selected;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckBoxHelper);\r\n\n\n//# sourceURL=webpack:///./src/CheckBoxHelper.js?");

/***/ }),

/***/ "./src/FormHelper.js":
/*!***************************!*\
  !*** ./src/FormHelper.js ***!
  \***************************/
/*! exports provided: CreateForm, CreateInput, ConfigureForm, AssembleForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateForm\", function() { return CreateForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateInput\", function() { return CreateInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigureForm\", function() { return ConfigureForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AssembleForm\", function() { return AssembleForm; });\nfunction CreateForm(name) {\r\n    let taskForm = document.createElement('form');\r\n    taskForm.className = name + '__form';\r\n\r\n    return taskForm;\r\n}\r\nfunction CreateInput(type, parentName, value='') {\r\n    let inputElement = document.createElement('input');\r\n    inputElement.className = parentName + '__' + value.toLowerCase();\r\n    inputElement.type = type;\r\n    inputElement.value = value;\r\n    return inputElement;\r\n}\r\n\r\nfunction ConfigureForm(form) {\r\n\r\n}\r\n\r\nfunction AssembleForm(form, elements = []) {\r\n    form.innerHTML = '';\r\n    elements.forEach(elem => form.appendChild(elem));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/FormHelper.js?");

/***/ }),

/***/ "./src/PubSub.js":
/*!***********************!*\
  !*** ./src/PubSub.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass PubSub {\r\n    constructor() {\r\n        this.callbacks = [];\r\n    }\r\n\r\n    subscribe(callback) {\r\n        this.callbacks.push(callback);\r\n\r\n        return () =>\r\n            (this.callbacks = this.callbacks.filter(fn => fn !== callback));\r\n    }\r\n\r\n    publish() {\r\n        this.callbacks.forEach(fn => fn(...arguments));\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PubSub);\r\n\n\n//# sourceURL=webpack:///./src/PubSub.js?");

/***/ }),

/***/ "./src/ToDoHelper.js":
/*!***************************!*\
  !*** ./src/ToDoHelper.js ***!
  \***************************/
/*! exports provided: stringsToTodoTasks, initDay, getDayTasks, refreshTodoContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringsToTodoTasks\", function() { return stringsToTodoTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initDay\", function() { return initDay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDayTasks\", function() { return getDayTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"refreshTodoContainer\", function() { return refreshTodoContainer; });\n/* harmony import */ var _ToDoTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoTask */ \"./src/ToDoTask.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ \"./src/lib.js\");\n\r\n\r\n\r\nfunction stringsToTodoTasks(from_, to_, onTaskDeletionCallback) {\r\n    for (const year in from_) {\r\n        if (!from_.hasOwnProperty(year)) continue;\r\n        for (const month in from_[year]) {\r\n            if (!from_[year].hasOwnProperty(month)) continue;\r\n            for (const day in from_[year][month]) {\r\n                if (!from_[year][month].hasOwnProperty(day)) continue;\r\n                initDay(to_, {year, month, day});\r\n                from_[year][month][day].forEach(task => {\r\n                    const newTask = new _ToDoTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task);\r\n                    newTask.onTaskDeletion(() => onTaskDeletionCallback(newTask));\r\n                    to_[year][month][day].push(newTask);\r\n                });\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction initDay(tasks, {year, month, day}) {\r\n    tasks[year] = tasks[year] || {};\r\n    tasks[year][month] = tasks[year][month] || {};\r\n    tasks[year][month][day] = tasks[year][month][day] || [];\r\n}\r\n\r\nfunction getDayTasks(tasks, date) {\r\n    const [year, month, day] = Object(_lib__WEBPACK_IMPORTED_MODULE_1__[\"getYearMonthDay\"])(date);\r\n    initDay(tasks, {year, month, day});\r\n    return tasks[year][month][day];\r\n}\r\n\r\nconst refreshTodoContainer = (container, date, todoList) => {\r\n    container.innerHTML = '';\r\n    container.appendChild(date);\r\n    container.appendChild(todoList);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/ToDoHelper.js?");

/***/ }),

/***/ "./src/ToDoList.js":
/*!*************************!*\
  !*** ./src/ToDoList.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_todolist_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/todolist.css */ \"./style/todolist.css\");\n/* harmony import */ var _style_todolist_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_todolist_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ToDoTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoTask */ \"./src/ToDoTask.js\");\n/* harmony import */ var _CheckBoxHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckBoxHelper */ \"./src/CheckBoxHelper.js\");\n/* harmony import */ var _FormHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormHelper */ \"./src/FormHelper.js\");\n/* harmony import */ var _ToDoHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToDoHelper */ \"./src/ToDoHelper.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib */ \"./src/lib.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass ToDoList {\r\n    constructor(container, tasks = {}) {\r\n        this.container = container;\r\n        this.tasksValues = tasks;\r\n        this.tasks = {};\r\n\r\n        // If there are already stored tasks, convert them to ToDoTask objects\r\n        Object(_ToDoHelper__WEBPACK_IMPORTED_MODULE_4__[\"stringsToTodoTasks\"])(tasks, this.tasks, this.removeTask.bind(this));\r\n\r\n        this.selectAll = Object(_FormHelper__WEBPACK_IMPORTED_MODULE_3__[\"CreateInput\"])('checkbox', 'todolist');\r\n        this.selectAll.hidden = true;\r\n\r\n        this.todoList = document.createElement('div');\r\n        this.todoList.className = 'todolist';\r\n\r\n        this.form = Object(_FormHelper__WEBPACK_IMPORTED_MODULE_3__[\"CreateForm\"])('todolist');\r\n        this.submit = Object(_FormHelper__WEBPACK_IMPORTED_MODULE_3__[\"CreateInput\"])('submit', 'todolist', 'Save');\r\n        this.cancel = Object(_FormHelper__WEBPACK_IMPORTED_MODULE_3__[\"CreateInput\"])('reset', 'todolist', 'Cancel');\r\n\r\n        this.configureForm(this.form);\r\n    }\r\n\r\n    createTaskInput() {\r\n        this.taskInput = document.createElement('input');\r\n        this.taskInput.className = 'todolist__input';\r\n    }\r\n\r\n    addTask(task, tasksList) {\r\n        let taskList = Object(_ToDoHelper__WEBPACK_IMPORTED_MODULE_4__[\"getDayTasks\"])(this.tasks, this.currentDate);\r\n\r\n        let newTask = new _ToDoTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"](task);\r\n        taskList.push(newTask);\r\n        newTask.render(tasksList);\r\n        newTask.onTaskDeletion(() => this.removeTask(newTask));\r\n        return newTask;\r\n    }\r\n\r\n    _removeTaskFromList(task, tasks) {\r\n        const [year, month, day] = Object(_lib__WEBPACK_IMPORTED_MODULE_5__[\"getYearMonthDay\"])(this.currentDate);\r\n\r\n        let taskList = Object(_ToDoHelper__WEBPACK_IMPORTED_MODULE_4__[\"getDayTasks\"])(tasks, this.currentDate);\r\n        const taskIndex = taskList.indexOf(task);\r\n        if (taskIndex !== -1)\r\n            tasks[year][month][day] = taskList.filter(el => taskIndex !== taskList.indexOf(el));\r\n\r\n    }\r\n\r\n    removeTask(task) {\r\n        this._removeTaskFromList(task, this.tasks);\r\n        this._removeTaskFromList(task.getValue(), this.tasksValues);\r\n        this.newTask = undefined;\r\n        this.render(this.currentDate);\r\n    }\r\n\r\n    renderTasks() {\r\n        let taskList = document.createElement(\"ul\");\r\n        taskList.className = 'todolist__tasks';\r\n\r\n        let tasks = Object(_ToDoHelper__WEBPACK_IMPORTED_MODULE_4__[\"getDayTasks\"])(this.tasks, this.currentDate);\r\n        if (typeof tasks !== \"undefined\")\r\n            tasks.forEach(task => task.render(taskList));\r\n\r\n        let listChild = taskList.childNodes;\r\n        let tasksCheckboxes = [];\r\n        listChild.forEach(elem => tasksCheckboxes.push(elem.querySelector('input[type=\"checkbox\"]')));\r\n        new _CheckBoxHelper__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.selectAll, tasksCheckboxes);\r\n        return taskList;\r\n    }\r\n\r\n    commitTaskViaBlur(taskInput) {\r\n        const [year, month, day] = Object(_lib__WEBPACK_IMPORTED_MODULE_5__[\"getYearMonthDay\"])(this.currentDate);\r\n\r\n        if (taskInput.value.trim() === \"\")\r\n            this.newTask.publishTaskDeletion();\r\n        else {\r\n            let taskList = Object(_ToDoHelper__WEBPACK_IMPORTED_MODULE_4__[\"getDayTasks\"])(this.tasksValues, this.currentDate);\r\n            taskList.push(taskInput.value);\r\n            this.tasksValues[year][month][day] = taskList;\r\n        }\r\n        taskInput.value = \"\";\r\n    }\r\n\r\n    commitTaskViaSubmit(taskInput, e) {\r\n        e.preventDefault();\r\n        taskInput.blur();\r\n        taskInput.focus();\r\n    }\r\n\r\n    configureInput(whereToSubmit) {\r\n        this.taskInput.addEventListener('focus', () => this.newTask = this.addTask(\"\", whereToSubmit));\r\n        this.taskInput.addEventListener('input', () => this.newTask.update(this.taskInput.value));\r\n        this.taskInput.addEventListener('blur', () => this.commitTaskViaBlur(this.taskInput));\r\n    }\r\n\r\n    configureForm(form) {\r\n        form.addEventListener('submit', (e) => this.commitTaskViaSubmit(this.taskInput, e));\r\n        form.addEventListener('reset', () => {\r\n            if (typeof this.newTask !== \"undefined\") this.newTask.publishTaskDeletion()\r\n        });\r\n    }\r\n\r\n    render(date) {\r\n        this.currentDate = date;\r\n\r\n        this.createTaskInput();\r\n\r\n        Object(_FormHelper__WEBPACK_IMPORTED_MODULE_3__[\"AssembleForm\"])(this.form, [this.taskInput, this.submit, this.cancel]);\r\n        this.todoList.innerHTML = '';\r\n\r\n        let currentDate = document.createElement('div');\r\n\r\n        if (typeof date !== \"undefined\") {\r\n            let tasksList = this.renderTasks();\r\n            this.configureInput(tasksList);\r\n            this.todoList.appendChild(this.form);\r\n            this.todoList.appendChild(tasksList);\r\n            currentDate.innerHTML = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;\r\n        }\r\n        currentDate.className = 'todolist__current-day';\r\n\r\n        Object(_ToDoHelper__WEBPACK_IMPORTED_MODULE_4__[\"refreshTodoContainer\"])(this.container, currentDate, this.todoList);\r\n    }\r\n\r\n    backup() {\r\n        return this.tasksValues;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDoList);\r\n\n\n//# sourceURL=webpack:///./src/ToDoList.js?");

/***/ }),

/***/ "./src/ToDoTask.js":
/*!*************************!*\
  !*** ./src/ToDoTask.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PubSub */ \"./src/PubSub.js\");\n\r\n\r\nclass ToDoTask {\r\n    constructor(task) {\r\n        this.task = task;\r\n\r\n        this.taskCheckBox = document.createElement(\"input\");\r\n        this.taskCheckBox.className = 'todolist__task_checkbox';\r\n        this.taskCheckBox.type = 'checkbox';\r\n\r\n        this.taskElement = document.createElement(\"li\");\r\n        this.taskElement.className = 'todolist__task';\r\n        this.taskElement.addEventListener('click', () => {this.taskCheckBox.checked = !this.taskCheckBox.checked; this.taskCheckBox.click()});\r\n        this.taskCheckBox.addEventListener('click', () => this.taskElement.toggleAttribute('chosen'));\r\n\r\n        this.taskInfo = document.createElement('span');\r\n        this.taskInfo.className = 'todolist__task_info';\r\n\r\n        this.deleteTaskButton = document.createElement('button');\r\n        this.deleteTaskButton.className = 'todolist__task_deletion';\r\n\r\n        this.onTaskDeletionPubSub = new _PubSub__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    }\r\n\r\n    onTaskDeletion(callback) {\r\n        this.onTaskDeletionPubSub.subscribe(callback);\r\n    }\r\n\r\n    publishTaskDeletion() {\r\n        this.onTaskDeletionPubSub.publish();\r\n    }\r\n\r\n    update(newTask) {\r\n        this.task = newTask;\r\n        this.taskInfo.innerText = this.task;\r\n    }\r\n\r\n    getValue() {\r\n        return this.task;\r\n    }\r\n\r\n    render(container) {\r\n        this.taskInfo.innerText = this.task;\r\n        this.deleteTaskButton.innerHTML = '+';\r\n        this.deleteTaskButton.addEventListener('click', () => this.publishTaskDeletion());\r\n\r\n        this.taskElement.appendChild(this.taskCheckBox);\r\n        this.taskElement.appendChild(this.taskInfo);\r\n        this.taskElement.appendChild(this.deleteTaskButton);\r\n        container.appendChild(this.taskElement);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDoTask);\n\n//# sourceURL=webpack:///./src/ToDoTask.js?");

/***/ }),

/***/ "./src/calendarHelpers.js":
/*!********************************!*\
  !*** ./src/calendarHelpers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./src/lib.js\");\n\r\n\r\nconst generateCalendarModel = (currentDate, startDay = 0) => {\r\n    const DAYS_OF_THE_WEEK = 7;\r\n\r\n    const numberOfDays = Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"getNumberOfDaysInMonth\"])(currentDate);\r\n\r\n    currentDate.setDate(1);\r\n    let firstDayOfWeek = currentDate.getDay();\r\n\r\n    firstDayOfWeek =\r\n        (DAYS_OF_THE_WEEK - (startDay - firstDayOfWeek)) % DAYS_OF_THE_WEEK;\r\n\r\n    let month = [\r\n        ...new Array(firstDayOfWeek).fill(),\r\n        ...new Array(numberOfDays).fill().map((el, i) => i + 1)\r\n    ];\r\n\r\n    return Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"chunk\"])(month, DAYS_OF_THE_WEEK);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateCalendarModel);\r\n\n\n//# sourceURL=webpack:///./src/calendarHelpers.js?");

/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! exports provided: getNumberOfDaysInMonth, delegateEvent, addMonth, chunk, getDateFromCurrentUrl, getYearMonthDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNumberOfDaysInMonth\", function() { return getNumberOfDaysInMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delegateEvent\", function() { return delegateEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMonth\", function() { return addMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDateFromCurrentUrl\", function() { return getDateFromCurrentUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getYearMonthDay\", function() { return getYearMonthDay; });\nconst getNumberOfDaysInMonth = date => {\r\n    const d = new Date(date.getFullYear(), date.getMonth() + 1, 0);\r\n    return d.getDate();\r\n};\r\n\r\nconst delegateEvent = (node, cssPath, eventName, callbackFn) => {\r\n    const evHandler = ev => {\r\n        if (ev.target.matches(cssPath)) {\r\n            callbackFn.call(ev.target, ev);\r\n        }\r\n    };\r\n    node.addEventListener(eventName, evHandler);\r\n\r\n    return () => node.removeEventListener(eventName, evHandler);\r\n};\r\n\r\nconst addMonth = (date, monthAmount) => {\r\n    const currentMonth = date.getMonth();\r\n    const result = new Date(date);\r\n    result.setMonth(currentMonth + monthAmount);\r\n    return result;\r\n};\r\n\r\nconst chunk = (array, size = 1) => {\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i += size) {\r\n        result.push(array.slice(i, i + size));\r\n    }\r\n    return result;\r\n};\r\n\r\nconst getDateFromCurrentUrl = () => {\r\n    try {\r\n        let date = window.location.pathname.slice(1).split('-').map(n => +n);\r\n        if (date.length !== 3) return undefined;\r\n        return new Date(date[0], date[1] - 1, date[2]);\r\n    } catch (e) {\r\n        return undefined;\r\n    }\r\n};\r\n\r\nconst getYearMonthDay = date => {\r\n    const year = date.getFullYear();\r\n    const month = date.getMonth() + 1;\r\n    const day = date.getDate();\r\n    return [year, month, day];\r\n};\r\n\n\n//# sourceURL=webpack:///./src/lib.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ \"./src/Calendar.js\");\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoList */ \"./src/ToDoList.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib */ \"./src/lib.js\");\n\r\n\r\n\r\n\r\nconst xhr = new XMLHttpRequest();\r\nxhr.open('GET', 'db', false);\r\nxhr.send();\r\n\r\nconst calendar = new _Calendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.body.getElementsByTagName(\"section\")[0]);\r\nconst toDoList = new _ToDoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.body.getElementsByTagName(\"section\")[1], JSON.parse(xhr.responseText));\r\n\r\nconst saveCnanges = () => {\r\n    xhr.open('POST', 'db', false);\r\n    xhr.setRequestHeader('Content-Type', 'application/json');\r\n    xhr.send(JSON.stringify(toDoList.backup()));\r\n};\r\n\r\nconst renderPage = (date) => {\r\n    toDoList.render(date);\r\n    calendar.goToDate(date);\r\n    const day = document.querySelector(`.calendar__day[href='${window.location.pathname.slice(1)}']`);\r\n    day.click();\r\n    saveCnanges();\r\n};\r\n\r\nconst date = Object(_lib__WEBPACK_IMPORTED_MODULE_2__[\"getDateFromCurrentUrl\"])();\r\nif (typeof date !== \"undefined\") renderPage(date);\r\n\r\ncalendar.onChangeMonth(() => {\r\n    toDoList.render();\r\n    saveCnanges();\r\n});\r\n\r\ncalendar.onDaySelect(day => {\r\n    toDoList.render(new Date(day));\r\n    saveCnanges();\r\n});\r\n\r\nwindow.addEventListener('beforeunload', (e) => {\r\n    e.preventDefault();\r\n    saveCnanges();\r\n});\r\n\r\nwindow.addEventListener('popstate', () => {\r\n    const date = Object(_lib__WEBPACK_IMPORTED_MODULE_2__[\"getDateFromCurrentUrl\"])();\r\n    if (typeof date === \"undefined\") return;\r\n    calendar.history = false;\r\n    renderPage(date);\r\n    saveCnanges();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./style/calendar.css":
/*!****************************!*\
  !*** ./style/calendar.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./calendar.css */ \"./node_modules/css-loader/dist/cjs.js!./style/calendar.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./style/calendar.css?");

/***/ }),

/***/ "./style/todolist.css":
/*!****************************!*\
  !*** ./style/todolist.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./todolist.css */ \"./node_modules/css-loader/dist/cjs.js!./style/todolist.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./style/todolist.css?");

/***/ })

/******/ });