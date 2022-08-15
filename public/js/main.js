/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_nationality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/nationality.js */ \"./src/js/module/nationality.js\");\n\r\n\r\nwindow.onload = function() {\r\n\r\n    AOS.init()\r\n\r\n    // AOS.init({\r\n    //     duration: 2000,\r\n    // });\r\n\r\n    const input = document.querySelectorAll('input');\r\n    console.log(input.length);\r\n\r\n    const myVivus = new Vivus('my-svg');\r\n        myVivus.stop().reset().play(.5);\r\n\r\n    const day = document.getElementById('selectDay')\r\n    const month = document.getElementById('selectMonth')\r\n    const year = document.getElementById('selectYear')\r\n    const nation = document.getElementById('selectNat')\r\n    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\r\n    const date = new Date();\r\n\r\n    function getDay() {\r\n        for (let i = 1; i <= 31; i++) {\r\n            let item = document.createElement('option')\r\n            item.className = 'item'\r\n            item.value = i\r\n            item.innerHTML = i\r\n            day.append(item)\r\n        }\r\n    }\r\n\r\n    function getMonth() { \r\n        for (let i = 0; i < months.length; i++) {\r\n            let item = document.createElement('option')\r\n            item.className = 'item'\r\n            item.value = months[i]\r\n            item.innerHTML = months[i]\r\n            month.append(item)\r\n        }\r\n    }\r\n\r\n    function getYear() { \r\n        for (let i = 1920; i <= date.getFullYear(); i++) {\r\n            let item = document.createElement('option')\r\n            item.className = 'item'\r\n            item.value = i\r\n            item.innerHTML = i\r\n            year.append(item)\r\n        }\r\n    }\r\n\r\n    function getNationalyti() {\r\n        for (let i = 0; i < _module_nationality_js__WEBPACK_IMPORTED_MODULE_0__.nationalities.length; i++) {\r\n            let item = document.createElement('option')\r\n            item.className = 'item';\r\n            item.value = _module_nationality_js__WEBPACK_IMPORTED_MODULE_0__.nationalities[i]\r\n            item.innerHTML = _module_nationality_js__WEBPACK_IMPORTED_MODULE_0__.nationalities[i]\r\n            nation.append(item)\r\n        }\r\n    }\r\n\r\n    getDay();\r\n    getMonth(months);\r\n    getYear();\r\n    getNationalyti(_module_nationality_js__WEBPACK_IMPORTED_MODULE_0__.nationalities)\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://task_vtopz/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/nationality.js":
/*!**************************************!*\
  !*** ./src/js/module/nationality.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nationalities\": function() { return /* binding */ nationalities; }\n/* harmony export */ });\nvar nationalities = [\r\n    \"Afghan\",\r\n    \"Albanian\",\r\n    \"Algerian\",\r\n    \"American\",\r\n    \"Andorran\",\r\n    \"Angolan\",\r\n    \"Anguillian\",\r\n    \"Antiguans\",\r\n    \"Argentinean\",\r\n    \"Armenian\",\r\n    \"Australian\",\r\n    \"Austrian\",\r\n    \"Azerbaijani\",\r\n    \"Bahamian\",\r\n    \"Bahraini\",\r\n    \"Bangladeshi\",\r\n    \"Barbadian\",\r\n    \"Barbudans\",\r\n    \"Batswana\",\r\n    \"Belarusian\",\r\n    \"Belgian\",\r\n    \"Belizean\",\r\n    \"Beninese\",\r\n    \"Bermudian\",\r\n    \"Bhutanese\",\r\n    \"Bolivian\",\r\n    \"Bosnian\",\r\n    \"Brazilian\",\r\n    \"British\",\r\n    \"Bruneian\",\r\n    \"Bulgarian\",\r\n    \"Burkinabe\",\r\n    \"Burmese\",\r\n    \"Burundian\",\r\n    \"Cambodian\",\r\n    \"Cameroonian\",\r\n    \"Canadian\",\r\n    \"Cape Verdean\",\r\n    \"Central African\",\r\n    \"Chadian\",\r\n    \"Chilean\",\r\n    \"Chinese\",\r\n    \"Colombian\",\r\n    \"Comoran\",\r\n    \"Congolese\",\r\n    \"Costa Rican\",\r\n    \"Croatian\",\r\n    \"Cuban\",\r\n    \"Cypriot\",\r\n    \"Czech\",\r\n    \"Danish\",\r\n    \"Djibouti\",\r\n    \"Dominican\",\r\n    \"Dutch\",\r\n    \"East Timorese\",\r\n    \"Ecuadorean\",\r\n    \"Egyptian\",\r\n    \"Emirian\",\r\n    \"Equatorial Guinean\",\r\n    \"Eritrean\",\r\n    \"Estonian\",\r\n    \"Ethiopian\",\r\n    \"Fijian\",\r\n    \"Filipino\",\r\n    \"Finnish\",\r\n    \"French\",\r\n    \"Gabonese\",\r\n    \"Gambian\",\r\n    \"Georgian\",\r\n    \"German\",\r\n    \"Ghanaian\",\r\n    \"Greek\",\r\n    \"Grenadian\",\r\n    \"Guatemalan\",\r\n    \"Guinea-Bissauan\",\r\n    \"Guinean\",\r\n    \"Guyanese\",\r\n    \"Haitian\",\r\n    \"Herzegovinian\",\r\n    \"Honduran\",\r\n    \"Hungarian\",\r\n    \"Icelander\",\r\n    \"Indian\",\r\n    \"Indonesian\",\r\n    \"Iranian\",\r\n    \"Iraqi\",\r\n    \"Irish\",\r\n    \"Israeli\",\r\n    \"Italian\",\r\n    \"Ivorian\",\r\n    \"Jamaican\",\r\n    \"Japanese\",\r\n    \"Jordanian\",\r\n    \"Kazakhstani\",\r\n    \"Kenyan\",\r\n    \"Kittian and Nevisian\",\r\n    \"Kuwaiti\",\r\n    \"Kyrgyz\",\r\n    \"Laotian\",\r\n    \"Latvian\",\r\n    \"Lebanese\",\r\n    \"Liberian\",\r\n    \"Libyan\",\r\n    \"Liechtensteiner\",\r\n    \"Lithuanian\",\r\n    \"Luxembourger\",\r\n    \"Macedonian\",\r\n    \"Malagasy\",\r\n    \"Malawian\",\r\n    \"Malaysian\",\r\n    \"Maldivan\",\r\n    \"Malian\",\r\n    \"Maltese\",\r\n    \"Marshallese\",\r\n    \"Mauritanian\",\r\n    \"Mauritian\",\r\n    \"Mexican\",\r\n    \"Micronesian\",\r\n    \"Moldovan\",\r\n    \"Monacan\",\r\n    \"Mongolian\",\r\n    \"Moroccan\",\r\n    \"Mosotho\",\r\n    \"Motswana\",\r\n    \"Mozambican\",\r\n    \"Namibian\",\r\n    \"Nauruan\",\r\n    \"Nepalese\",\r\n    \"New Zealander\",\r\n    \"Ni-Vanuatu\",\r\n    \"Nicaraguan\",\r\n    \"Nigerien\",\r\n    \"North Korean\",\r\n    \"Northern Irish\",\r\n    \"Norwegian\",\r\n    \"Omani\",\r\n    \"Pakistani\",\r\n    \"Palauan\",\r\n    \"Panamanian\",\r\n    \"Papua New Guinean\",\r\n    \"Paraguayan\",\r\n    \"Peruvian\",\r\n    \"Polish\",\r\n    \"Portuguese\",\r\n    \"Qatari\",\r\n    \"Romanian\",\r\n    \"Russian\",\r\n    \"Rwandan\",\r\n    \"Saint Lucian\",\r\n    \"Salvadoran\",\r\n    \"Samoan\",\r\n    \"San Marinese\",\r\n    \"Sao Tomean\",\r\n    \"Saudi\",\r\n    \"Scottish\",\r\n    \"Senegalese\",\r\n    \"Serbian\",\r\n    \"Seychellois\",\r\n    \"Sierra Leonean\",\r\n    \"Singaporean\",\r\n    \"Slovakian\",\r\n    \"Slovenian\",\r\n    \"Solomon Islander\",\r\n    \"Somali\",\r\n    \"South African\",\r\n    \"South Korean\",\r\n    \"Spanish\",\r\n    \"Sri Lankan\",\r\n    \"Sudanese\",\r\n    \"Surinamer\",\r\n    \"Swazi\",\r\n    \"Swedish\",\r\n    \"Swiss\",\r\n    \"Syrian\",\r\n    \"Taiwanese\",\r\n    \"Tajik\",\r\n    \"Tanzanian\",\r\n    \"Thai\",\r\n    \"Togolese\",\r\n    \"Tongan\",\r\n    \"Trinidadian or Tobagonian\",\r\n    \"Tunisian\",\r\n    \"Turkish\",\r\n    \"Tuvaluan\",\r\n    \"Ugandan\",\r\n    \"Ukrainian\",\r\n    \"Uruguayan\",\r\n    \"Uzbekistani\",\r\n    \"Venezuelan\",\r\n    \"Vietnamese\",\r\n    \"Welsh\",\r\n    \"Yemenite\",\r\n    \"Zambian\",\r\n    \"Zimbabwean\"\r\n  ]\r\n\n\n//# sourceURL=webpack://task_vtopz/./src/js/module/nationality.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;