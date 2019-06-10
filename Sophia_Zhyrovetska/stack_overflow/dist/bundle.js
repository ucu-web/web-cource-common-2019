/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["BlogBlock"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/CommunityBulletin/Community-bulletin.less":
      /*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/CommunityBulletin/Community-bulletin.less ***!
  \***********************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".Community-bulletin {\\n  background-color: #fff8dc;\\n  border: 1px solid #e0dcbf;\\n  border-bottom-color: transparent;\\n  border-radius: 3px;\\n  box-shadow: 0 2px 8px rgba(59, 64, 69, 0.1);\\n  font-size: 0.81rem;\\n  line-height: 1.3;\\n}\\n.Community-bulletin__cell {\\n  padding: 0.75rem 0.94rem;\\n  border-bottom: 1px solid #e0dcbf;\\n  display: flex;\\n}\\n.Community-bulletin__cell--title {\\n  background-color: #f7f1d5;\\n  color: #737063;\\n  font-size: 0.75rem;\\n}\\n.Community-bulletin__icon {\\n  margin-right: 0.38em;\\n}\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/CommunityBulletin/Community-bulletin.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/FeaturedTagsBlock/Featured-tags-block.less":
      /*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/FeaturedTagsBlock/Featured-tags-block.less ***!
  \************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".Featured-tags-block {\\n  border: 1px solid #d6d9dc;\\n  border-radius: 3px;\\n  box-shadow: 0 2px 8px rgba(59, 64, 69, 0.1);\\n}\\n.Featured-tags-block__header {\\n  display: flex;\\n  padding: 0.8em 1em;\\n  background: #fafafb;\\n  color: #6a737c;\\n  font-size: 0.9em;\\n  font-weight: normal;\\n  border-bottom: 1px solid #e4e6e8;\\n}\\n.Featured-tags-block__icon {\\n  margin: 0 0.3em 0 0;\\n  display: flex;\\n  fill: #6a737c;\\n}\\n.Featured-tags-block__title {\\n  flex: 1 auto;\\n  font-size: 1em;\\n  font-weight: normal;\\n}\\n.Featured-tags-block__edit {\\n  color: #6a737c;\\n}\\n.Featured-tags-block__content {\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 1.3em 0.9em;\\n}\\n.Featured-tags-block__tag {\\n  margin: 0.1em 0.5em 0.8em 0;\\n}\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/FeaturedTagsBlock/Featured-tags-block.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/HotNetworkQuestions/Hot-network-questions.less":
      /*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/HotNetworkQuestions/Hot-network-questions.less ***!
  \****************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".Hot-network-questions {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.Hot-network-questions__title {\\n  margin-bottom: 1.4em;\\n}\\n.Hot-network-questions__title-link {\\n  font-weight: normal;\\n  color: #242729;\\n  font-size: 1.2em;\\n}\\n.Hot-network-questions__list {\\n  margin: 0;\\n  padding: 0;\\n}\\n.Hot-network-questions__question {\\n  display: flex;\\n  text-decoration: none;\\n  margin-bottom: 0.7em;\\n}\\n.Hot-network-questions__question-link {\\n  font-size: 0.75rem;\\n  flex: 13;\\n}\\n.Hot-network-questions__icon {\\n  flex: 1;\\n}\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/HotNetworkQuestions/Hot-network-questions.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/QuestionPost/Question-post.less":
      /*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/QuestionPost/Question-post.less ***!
  \*************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".Question-post {\\n  padding: 0.75em 0.5em 0.75em 0.5em;\\n  display: flex;\\n  border-bottom: 1px solid #eff0f1;\\n}\\n.Question-post--tagged-interesting {\\n  background-color: #fffbec;\\n}\\n.Question-post__summary {\\n  order: 2;\\n  flex: 1 auto;\\n}\\n.Question-post__title {\\n  line-height: 1.3;\\n  margin: 0 0 1.2em 0;\\n  font-size: 1rem;\\n  font-weight: 400;\\n}\\n.Question-post__tags {\\n  display: flex;\\n  flex-wrap: wrap;\\n  float: left;\\n}\\n.Question-post__tag {\\n  margin: 0.1em 0.5em 0.8em 0;\\n}\\n.Question-post__started {\\n  white-space: normal;\\n  padding: 1em 0 0;\\n  float: right;\\n  font-size: 0.7em;\\n}\\n.Question-post__started-link {\\n  color: #9199a1;\\n}\\n.Question-post__author-reputation-score {\\n  color: #848d95;\\n  font-weight: bold;\\n  font-size: 1em;\\n  margin: 0 0.2em 0 0;\\n}\\n.Question-post__reaction {\\n  display: flex;\\n  cursor: pointer;\\n  order: 1;\\n}\\n.Question-post__counter {\\n  margin: 0 0.27em 0 0;\\n}\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/QuestionPost/Question-post.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        eval(
          "\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?"
        );

        /***/
      },

    /***/ "./node_modules/style-loader/lib/addStyles.js":
      /*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === "undefined") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve "head" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }\n                // }\n                if (typeof target === \'function\') {\n                        return target();\n                }\n                if (typeof memo[target] === "undefined") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== "undefined" && DEBUG) {\n\t\tif (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === "object" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = "head";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = "bottom";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error("Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === "top") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === "bottom") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === "object" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error("[Style Loader]\\n\\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\\n Must be \'top\', \'bottom\', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement("style");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = "text/css";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement("link");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = "text/css";\n\t}\n\toptions.attrs.rel = "stylesheet";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === \'function\'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don\'t add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === "function" &&\n\t\ttypeof URL.createObjectURL === "function" &&\n\t\ttypeof URL.revokeObjectURL === "function" &&\n\t\ttypeof Blob === "function" &&\n\t\ttypeof btoa === "function"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join(\'\\n\');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? "" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute("media", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn\'t defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += "\\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";\n\t}\n\n\tvar blob = new Blob([css], { type: "text/css" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/lib/urls.js":
      /*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          '\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function "fixes" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== "undefined" && window.location;\n\n  if (!location) {\n    throw new Error("fixUrls requires window.location");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== "string") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + "//" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, "/");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word "url" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn\'t a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn\'t a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn\'t a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^"(.*)"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^\'(.*)\'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf("//") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf("/") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with \'/\'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, ""); // Strip leading \'./\'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn "url(" + JSON.stringify(newUrl) + ")";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?'
        );

        /***/
      },

    /***/ "./src/components/CommunityBulletin/Community-bulletin.less":
      /*!******************************************************************!*\
  !*** ./src/components/CommunityBulletin/Community-bulletin.less ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./Community-bulletin.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/CommunityBulletin/Community-bulletin.less");\n\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {"hmr":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/CommunityBulletin/Community-bulletin.less?'
        );

        /***/
      },

    /***/ "./src/components/CommunityBulletin/CommunityBulletin.js":
      /*!***************************************************************!*\
  !*** ./src/components/CommunityBulletin/CommunityBulletin.js ***!
  \***************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Community_bulletin_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Community-bulletin.less */ "./src/components/CommunityBulletin/Community-bulletin.less");\n/* harmony import */ var _Community_bulletin_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Community_bulletin_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/BEM */ "./src/helpers/BEM.js");\n\n\nconst b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_1__["default"])("Community-bulletin");\n\nconst CommunityBulletin = data => {\n  const rootEl = document.createElement("div");\n\n  rootEl.innerHTML = `\n  <div class="${b("cell")} ${b("cell--title")}">\n      <h4 class="${b("title")}">${data.title}</h4>\n  </div>\n  ${data.questions.map(question => `<div class="${b("cell")}"><a href="#" class="${b("icon")}"><div aria-label="Meta Stack Exchange" class="Favicon Favicon--${question.icon}"></div></a><a href="#" class="Ordinary-link ${b("link")}">${question.link}</a></div>`).join("")}\n`;\n\n  return rootEl;\n};\n/* harmony default export */ __webpack_exports__["default"] = (CommunityBulletin);\n\n\n//# sourceURL=webpack:///./src/components/CommunityBulletin/CommunityBulletin.js?'
        );

        /***/
      },

    /***/ "./src/components/CommunityBulletin/index.js":
      /*!***************************************************!*\
  !*** ./src/components/CommunityBulletin/index.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CommunityBulletin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommunityBulletin */ "./src/components/CommunityBulletin/CommunityBulletin.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CommunityBulletin__WEBPACK_IMPORTED_MODULE_0__["default"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/CommunityBulletin/index.js?'
        );

        /***/
      },

    /***/ "./src/components/FeaturedTagsBlock/Featured-tags-block.less":
      /*!*******************************************************************!*\
  !*** ./src/components/FeaturedTagsBlock/Featured-tags-block.less ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./Featured-tags-block.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/FeaturedTagsBlock/Featured-tags-block.less");\n\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {"hmr":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/FeaturedTagsBlock/Featured-tags-block.less?'
        );

        /***/
      },

    /***/ "./src/components/FeaturedTagsBlock/FeaturedTagsBlock.js":
      /*!***************************************************************!*\
  !*** ./src/components/FeaturedTagsBlock/FeaturedTagsBlock.js ***!
  \***************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Featured_tags_block_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Featured-tags-block.less */ "./src/components/FeaturedTagsBlock/Featured-tags-block.less");\n/* harmony import */ var _Featured_tags_block_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Featured_tags_block_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/BEM */ "./src/helpers/BEM.js");\n\n\nconst b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_1__["default"])("Featured-tags-block");\n\nconst FeaturedTagsBlock = data => {\n  const rootEl = document.createElement("section");\n  rootEl.className = b() + " Aside-panel__item";\n\n  rootEl.innerHTML = `\n  <header class="${b("header")}">\n            <span class="${b("icon")}">\n              <svg\n                      aria-hidden="true"\n                      width="18"\n                      height="18"\n                      viewBox="0 0 18 18"\n              >\n                <path\n                        d="${data.iconPath}"\n                ></path>\n              </svg>\n            </span>\n    <h3 class="${b("title")}">${data.title}</h3>\n    <a href="#" class="${b("edit")}">edit</a>\n  </header>\n  <div class="${b("content")}">\n  ${data.tags\n    .map(tag => `<a href="#" class="Tag ${b("tag")}" title="show questions tagged \'${tag}\'">${tag}</a>`)\n    .join("")}\n  </div>\n`;\n\n  return rootEl;\n};\n/* harmony default export */ __webpack_exports__["default"] = (FeaturedTagsBlock);\n\n\n//# sourceURL=webpack:///./src/components/FeaturedTagsBlock/FeaturedTagsBlock.js?'
        );

        /***/
      },

    /***/ "./src/components/FeaturedTagsBlock/index.js":
      /*!***************************************************!*\
  !*** ./src/components/FeaturedTagsBlock/index.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturedTagsBlock */ "./src/components/FeaturedTagsBlock/FeaturedTagsBlock.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_0__["default"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/FeaturedTagsBlock/index.js?'
        );

        /***/
      },

    /***/ "./src/components/HotNetworkQuestions/Hot-network-questions.less":
      /*!***********************************************************************!*\
  !*** ./src/components/HotNetworkQuestions/Hot-network-questions.less ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./Hot-network-questions.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/HotNetworkQuestions/Hot-network-questions.less");\n\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {"hmr":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/HotNetworkQuestions/Hot-network-questions.less?'
        );

        /***/
      },

    /***/ "./src/components/HotNetworkQuestions/HotNetworkQuestions.js":
      /*!*******************************************************************!*\
  !*** ./src/components/HotNetworkQuestions/HotNetworkQuestions.js ***!
  \*******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Hot_network_questions_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hot-network-questions.less */ "./src/components/HotNetworkQuestions/Hot-network-questions.less");\n/* harmony import */ var _Hot_network_questions_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hot_network_questions_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/BEM */ "./src/helpers/BEM.js");\n\n\nconst b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_1__["default"])("Hot-network-questions");\n\nconst HotNetworkQuestions = data => {\n  const rootEl = document.createElement("li");\n  rootEl.className = b("question");\n\n  rootEl.innerHTML = `\n      <div\n              class="Favicon Favicon--${data.icon} ${b("icon")}"\n              title="The Workplace Stack Exchange"\n      ></div>\n      <a\n              href="#"\n              class="Ordinary-link ${b("question-link")}"\n      >${data.question}</a\n      >\n`;\n\n  return rootEl;\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (HotNetworkQuestions);\n\n\n//# sourceURL=webpack:///./src/components/HotNetworkQuestions/HotNetworkQuestions.js?'
        );

        /***/
      },

    /***/ "./src/components/HotNetworkQuestions/index.js":
      /*!*****************************************************!*\
  !*** ./src/components/HotNetworkQuestions/index.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HotNetworkQuestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HotNetworkQuestions */ "./src/components/HotNetworkQuestions/HotNetworkQuestions.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HotNetworkQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/HotNetworkQuestions/index.js?'
        );

        /***/
      },

    /***/ "./src/components/QuestionPost/Question-post.less":
      /*!********************************************************!*\
  !*** ./src/components/QuestionPost/Question-post.less ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./Question-post.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/QuestionPost/Question-post.less");\n\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {"hmr":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/QuestionPost/Question-post.less?'
        );

        /***/
      },

    /***/ "./src/components/QuestionPost/QuestionPost.js":
      /*!*****************************************************!*\
  !*** ./src/components/QuestionPost/QuestionPost.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Question_post_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Question-post.less */ "./src/components/QuestionPost/Question-post.less");\n/* harmony import */ var _Question_post_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Question_post_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/BEM */ "./src/helpers/BEM.js");\n\n\nconst b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_1__["default"])("Question-post");\n\nconst QuestionPost = data => {\n  const rootEl = document.createElement("article");\n  rootEl.className = b({ "tagged-interesting": data.tagged });\n\n  rootEl.innerHTML = `\n    <section class="${b("summary")}" >\n      <h3>\n        <a href="#" class="Ordinary-link ${b("title")}"\n          >${data.question}</a\n        >\n      </h3>\n      <div class=" ${b("tags")}">\n        ${data.tags.map(tag => `<a href="#" class="Tag ${b("tag")}">${tag}</a>`).join("")}\n      </div>\n      <footer class=" ${b("started")}">\n        <a href="#" class=" ${b("started-link")}"\n          >asked\n          <time datetime="2019-02-10T12:20">${data.time}</time>\n        </a>\n        <a href="#" rel="author" class="Ordinary-link">${data.author}</a>\n        <span\n          class="${b("author-reputation-score")}"\n          title="reputation score"\n          >${data.score}</span>\n      </footer>\n    </section>\n\n    <section class="${b("reaction")}">\n      <div class="${b("counter")} Question-reaction-counter Question-reaction-counter--votes">\n        <span class="Question-reaction-counter__number" title="0 votes">\n            ${data.votes}\n        </span>\n        <span>votes</span>\n      </div>\n      <div\n        class="${b("counter")} Question-reaction-counter Question-reaction-counter--answers Question-reaction-counter--answers--has-no-answer"\n      >\n        <span\n          class="Question-reaction-counter__number"\n          title="${data.answers} answers"\n          >${data.answers}</span\n        >\n        <span>answers</span>\n      </div>\n      <div\n        class="${b("counter")} Question-reaction-counter Question-reaction-counter--views"\n      >\n        <span class="Question-reaction-counter__number" title="${\n          data.views\n        } views"\n          >${data.views}</span\n        >\n        <span>views</span>\n      </div>\n    </section>\n`;\n\n  return rootEl;\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (QuestionPost);\n\n\n//# sourceURL=webpack:///./src/components/QuestionPost/QuestionPost.js?'
        );

        /***/
      },

    /***/ "./src/components/QuestionPost/index.js":
      /*!**********************************************!*\
  !*** ./src/components/QuestionPost/index.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _QuestionPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionPost */ "./src/components/QuestionPost/QuestionPost.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _QuestionPost__WEBPACK_IMPORTED_MODULE_0__["default"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/components/QuestionPost/index.js?'
        );

        /***/
      },

    /***/ "./src/helpers/BEM.js":
      /*!****************************!*\
  !*** ./src/helpers/BEM.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\nconst ELEMENT_SEPARATOR = "__",\r\n  MODIFIER_SEPARATOR = "--";\r\n\r\nfunction getBEMPAth({ b, e, m }) {\r\n  const base = e ? [b, e].join(ELEMENT_SEPARATOR) : b;\r\n\r\n  return [base, ...m.map(modifier => [base, modifier].join(MODIFIER_SEPARATOR))]\r\n    .join(" ")\r\n    .trim();\r\n}\r\n\r\nconst b = b => (elementName, modifiers = {}) => {\r\n  let e, m;\r\n\r\n  if (typeof elementName === "string") {\r\n    e = elementName;\r\n  } else {\r\n    modifiers = elementName || {};\r\n  }\r\n\r\n  if (Array.isArray(modifiers)) {\r\n    m = modifiers;\r\n  } else {\r\n    m = Object.keys(modifiers).filter(modifier => modifiers[modifier]) || [];\r\n  }\r\n\r\n  return getBEMPAth({ b, e, m });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__["default"] = (b);\r\n\n\n//# sourceURL=webpack:///./src/helpers/BEM.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_QuestionPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/QuestionPost */ "./src/components/QuestionPost/index.js");\n/* harmony import */ var _components_FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FeaturedTagsBlock */ "./src/components/FeaturedTagsBlock/index.js");\n/* harmony import */ var _components_HotNetworkQuestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HotNetworkQuestions */ "./src/components/HotNetworkQuestions/index.js");\n/* harmony import */ var _components_CommunityBulletin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CommunityBulletin */ "./src/components/CommunityBulletin/index.js");\n\r\n\r\n\r\n\r\n\r\nconst RenderQuestionList = async () => {\r\n  const questionContainer = document.querySelector(".Questions-list");\r\n  const data = await (await fetch(\r\n    "src/components/QuestionPost/data.json"\r\n  )).json();\r\n\r\n  data.map(question => questionContainer.appendChild(Object(_components_QuestionPost__WEBPACK_IMPORTED_MODULE_0__["default"])(question)));\r\n};\r\n\r\nconst RenderFeaturedTagsBlocks = async () => {\r\n  const blockContainer = document.querySelector(".Tags-blocks");\r\n  const data = await (await fetch(\r\n      "src/components/FeaturedTagsBlock/data.json"\r\n  )).json();\r\n  data.map(block => blockContainer.appendChild(Object(_components_FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_1__["default"])(block)));\r\n};\r\n\r\nconst RenderHotNetworkQuestions = async () => {\r\n  const blockContainer = document.querySelector(".Hot-network-questions__list");\r\n  const data = await (await fetch(\r\n      "src/components/HotNetworkQuestions/data.json"\r\n  )).json();\r\n  data.map(question => blockContainer.appendChild(Object(_components_HotNetworkQuestions__WEBPACK_IMPORTED_MODULE_2__["default"])(question)));\r\n};\r\n\r\nconst RenderCommunityBulletin = async () => {\r\n  const blockContainer = document.querySelector(".Community-bulletin");\r\n  const data = await (await fetch(\r\n      "src/components/CommunityBulletin/data.json"\r\n  )).json();\r\n\r\n  data.map(block => blockContainer.appendChild(Object(_components_CommunityBulletin__WEBPACK_IMPORTED_MODULE_3__["default"])(block)));\r\n};\r\n\r\nRenderQuestionList();\r\nRenderFeaturedTagsBlocks();\r\nRenderHotNetworkQuestions();\r\nRenderCommunityBulletin();\n\n//# sourceURL=webpack:///./src/index.js?'
        );

        /***/
      }

    /******/
  }
);
