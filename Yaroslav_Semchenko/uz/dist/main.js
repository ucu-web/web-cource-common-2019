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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./authorization/authorization.js":
/*!****************************************!*\
  !*** ./authorization/authorization.js ***!
  \****************************************/
/*! exports provided: Authorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Authorization\", function() { return Authorization; });\nclass Authorization {\n    constructor() {\n    }\n\n    render(el) {\n        el.classList.add(\"authorization\");\n        el.innerHTML = \"Авторизуватись\";\n    }\n}\n\n//# sourceURL=webpack:///./authorization/authorization.js?");

/***/ }),

/***/ "./global-menu/global-menu.js":
/*!************************************!*\
  !*** ./global-menu/global-menu.js ***!
  \************************************/
/*! exports provided: GlobalNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalNav\", function() { return GlobalNav; });\nclass GlobalNav {\n    constructor(list) {\n        this.list = list;\n    }\n\n    render(el) {\n        el.classList.add(\"global-menu\");\n        el.innerHTML = this.list.map(el => `<div class=\"global-menu__item\">\n<a class=\"global-menu__header\" href=\"${el.link}\">${el.name}</a>\n<ul class=\"global-menu__sublist\">\n${el.sublist.map(link => `<li class=\"global-menu__subitem\"><a class=\"global-menu__link\" href=\"${link.link}\">${link.text}</a></li>`).join('')}\n</ul></div>`).join('');\n    }\n}\n\n//# sourceURL=webpack:///./global-menu/global-menu.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_control_main_control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-control/main-control.js */ \"./main-control/main-control.js\");\n/* harmony import */ var _global_menu_global_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-menu/global-menu.js */ \"./global-menu/global-menu.js\");\n/* harmony import */ var _authorization_authorization_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization/authorization.js */ \"./authorization/authorization.js\");\n/* harmony import */ var _train_search_train_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./train-search/train-search.js */ \"./train-search/train-search.js\");\n\n\n\n\n\nlet globalNav = new _global_menu_global_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"GlobalNav\"]([\n    {name: \"Про УЗ\", link: \"#\", sublist: [\n        {link:\"#\", text: \"Загальна інформація\"}\n        ]},\n    {name: \"Пасажирам\", link: \"#\", sublist: [\n            {link:\"#\", text: \"Загальна інформація\"}\n        ]},\n    {name: \"Вантажні перевезення\", link: \"#\", sublist: [\n            {link:\"#\", text: \"Нормативно-правова база\"},\n            {link:\"#\", text: \"Загальна інформація\"}\n        ]},\n    {name: \"Прес-центр\", link: \"#\", sublist: [\n            {link:\"#\", text: \"Загальна інформація\"}\n        ]},\n    {name: \"Контакти\", link: \"#\", sublist: [\n            {link:\"#\", text: \"Загальна інформація\"}\n        ]},\n]);\nlet auth = new _authorization_authorization_js__WEBPACK_IMPORTED_MODULE_2__[\"Authorization\"]();\nlet maincontrol = new _main_control_main_control_js__WEBPACK_IMPORTED_MODULE_0__[\"MainControl\"](\n    [{type: \"Skype\", name: \"uz_booking\", link: \"#\"},\n        {type: \"Email\", name: \"booking@uz.gov.ua\", link: \"#\"},\n        {type: \"Технічна підтримка\", name: \"+380 (44) 591-1988\", link: \"#\"},\n        {type: \"Довідкова служба\", name: \"+380 (44) 309-7005\", link: \"#\"},\n    ],\n    [{name: \"Замовлення квитків\", link: \"#\"},\n        {name: \"Договір оферти\", link: \"#\"},\n        {name: \"Приклади бланків\", link: \"#\"},\n        {name: \"Порядок надання послуг\", link: \"#\"},\n        {name: \"Перевірка ЕПД\", link: \"#\"},\n        {name: \"Повернення квитків\", link: \"#\"},\n    ], [ {name:\"UA\", link:\"#\", selected: true}, {name:\"EN\", link:\"#\", selected: false}]);\nlet searcher = new _train_search_train_search_js__WEBPACK_IMPORTED_MODULE_3__[\"TrainSearcher\"]([[\"Київ\", \"Харків\"], [\"Київ\", \"Львів\"], [\"Козятин\", \"Жмеринка\"]], [\"Київ\", \"Львів\", \"Харків\", \"Одеса\"]);\n\nmaincontrol.render();\nglobalNav.render(document.querySelector(\".main-control__global-nav\"));\nauth.render(document.querySelector(\".main-control__auth\"));\nsearcher.render();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./main-control/main-control.js":
/*!**************************************!*\
  !*** ./main-control/main-control.js ***!
  \**************************************/
/*! exports provided: MainControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainControl\", function() { return MainControl; });\nclass MainControl {\n    constructor(contacts, localNav, languages) {\n        this.contactList = contacts;\n        this.localNav = localNav;\n        this.lang = languages;\n    }\n\n    renderContacts() {\n        let el = document.querySelector(\".main-control__contact-list\");\n        el.innerHTML = this.contactList.map(el =>\n            `<div class=\"main-control__contact\">${el.type}: <a class=\"main-control__contact-link\" href=\"${el.link}\">${el.name}</a></div>`).join('');\n    }\n\n    renderLocalNav() {\n        let el = document.querySelector(\".main-control__local-nav\");\n        el.innerHTML = this.localNav.map(el => `<a class=\"main-control__local-nav-link\" href=${el.link}>${el.name}</a>`).join('')\n    }\n\n    renderLang() {\n        let el = document.querySelector(\".main-control__languages\");\n        el.innerHTML = this.lang.map(el =>\n            `<a href=\"${el.link}\" class=\"main-control__lang ${el.selected ? \"main-control__lang_state_active\" : \"main-control__lang_state_inactive\" }\">${el.name}</a>`).join('');\n    }\n\n    render() {\n        this.renderContacts();\n        this.renderLang();\n        this.renderLocalNav();\n    }\n}\n\n//# sourceURL=webpack:///./main-control/main-control.js?");

/***/ }),

/***/ "./train-search/train-search.js":
/*!**************************************!*\
  !*** ./train-search/train-search.js ***!
  \**************************************/
/*! exports provided: TrainSearcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TrainSearcher\", function() { return TrainSearcher; });\n\nfunction makeDate(date) {\n    return (\"0\" + date.getDate()).slice(-2) + \".\" + (\"0\" + (date.getMonth() + 1)).slice(-2) + \".\" + date.getFullYear().toString();\n}\n\nfunction process_trains(data) {\n    if (data[\"warning\"] !== undefined) {\n        let res = document.querySelector(\".train-search__error\");\n        res.innerHTML = data[\"warning\"];\n        res.style.display = \"block\";\n        document.querySelector(\".train-search__list\").style.display = \"none\";\n    } else {\n        let res = document.querySelector(\".train-search__list\");\n        res.innerHTML +=\n         `\n${data[\"list\"].map(el => `<tr>\n<td class=\"train-search__number\">${el[\"num\"]}</td>\n<td class=\"train-search__stations\">${el[\"from\"][\"stationTrain\"]}<br/>${el[\"to\"][\"stationTrain\"]}</td>\n<td><div class=\"train-search__dates\"><span>Відправлення</span><span>${el[\"from\"][\"date\"]}</span><span>Прибуття</span><span>${el[\"to\"][\"date\"]}</span></div></td>\n<td class=\"train-search__times\">${el[\"from\"][\"time\"]}<br/>${el[\"to\"][\"time\"]}</td>\n<td class=\"train-search__travel-time\">${el[\"travelTime\"]}</td>\n<td class=\"train-search__place-list\">${el[\"types\"].length ? el[\"types\"].map(el => `<div class=\"train-search__place\">\n<div class=\"train-search__place-type\">${el[\"letter\"]}</div>\n<div class=\"train-search__place-count\">${el[\"places\"]}</div>\n<button class=\"train-search__place-select\">Вибрати</button>\n</div>`).join('') : \"Немає вільних місць\"}</td>\n</tr>`).join('')}\n`;\n        document.querySelector(\".train-search__error\").style.display = \"none\";\n        res.style.display = \"table\";\n    }\n}\n\nclass TrainSearcher {\n    constructor(popularDirs, popularStations) {\n        this.directions = popularDirs;\n        this.stations = popularStations;\n        this.initCallbacks();\n    }\n\n    initCallbacks() {\n        document.addEventListener('click', ev => {\n            if (ev.target.matches(\".train-search__popular-station\")) {\n                let station = ev.target.innerText;\n                let el = ev.target.closest(\".train-search__station\").querySelector(\".train-search__input\");\n                el.value = station;\n            }\n            if (ev.target.matches(\".train-search__popular-train\")) {\n                let stations = ev.target.innerText.split(\" ↔ \");\n                let el = document.querySelectorAll(\".train-search__input\");\n                stations.forEach((st, ind) => el[ind].value = st);\n            }\n            if (ev.target.matches(\".train-search__reverse\")) {\n                let el = document.querySelectorAll(\".train-search__input\");\n                [el[0].value, el[1].value] = [el[1].value, el[0].value];\n            }\n        });\n        document.addEventListener('change', ev => {\n            if (ev.target.matches(\".train-search__input[type=date]\")) {\n                document.querySelector(\".train-search__date-display\").innerHTML = makeDate(new Date(ev.target.value));\n            }\n        });\n        document.addEventListener('click', async ev => {\n            if (ev.target.matches(\".train-search__button\") || ev.target.matches(\".train-search__button *\")) {\n                if (![...document.querySelectorAll(\".train-search__input\")].every(el => el.value.length)) {\n                    alert (\"Введіть станції відправлення та призначення!\");\n                    return;\n                }\n                let data = new URLSearchParams(new FormData(document.querySelector(\".train-search__form\")));\n                let result = await(await fetch(\"http://localhost:5000/\", {\n                    method: 'post',\n                    body: data,\n                })).json();\n                process_trains(result[\"data\"]);\n            }\n        });\n    }\n\n    renderPopular(){\n        let el = document.querySelector(\".train-search__popular-list\");\n        el.innerHTML = this.directions.map(el => `<div class=\"train-search__popular-train\">${el[0] + \" ↔ \" + el[1]}</div>`).join('')\n    }\n\n    renderPopularStations() {\n        return this.stations.map(el => `<span class=\"train-search__popular-station\">${el}</span>`).join('');\n    }\n\n    renderStation(name, label) {\n        return `<div class=\"train-search__station\">\n<div class=\"train-search__label\">${label}</div>\n<input type=\"text\" name=\"${name}\" class=\"train-search__input\" autocomplete=\"off\"/>\n${this.renderPopularStations()}\n</div>`;\n    }\n\n    renderDate() {\n        let date = new Date();\n        document.querySelector(\".train-search__date-display\").innerHTML = makeDate(date);\n        return `<div class=\"train-search__date\">\n<div class=\"train-search__label\">Дата відправлення</div>\n<input type=\"date\" name=\"date\" class=\"train-search__input\" value=\"${date.toISOString().split('T')[0]}\"/>\n</div>`;\n    }\n\n    renderForm() {\n        let el = document.querySelector(\".train-search__form\");\n        el.innerHTML = `${this.renderStation(\"from\", \"Звідки\")}\n<img class=\"train-search__reverse\" src=\"https://booking.uz.gov.ua/i/img/desktop/ic-change-direction.svg\"/>\n${this.renderStation(\"to\", \"Куди\")}\n${this.renderDate()}`;\n    }\n\n    render() {\n        this.renderPopular();\n        this.renderForm();\n    }\n}\n\n//# sourceURL=webpack:///./train-search/train-search.js?");

/***/ })

/******/ });