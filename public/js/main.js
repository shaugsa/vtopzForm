/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("window.onload = function() {\r\n\r\n    const day = document.getElementById('selectDay')\r\n    const month = document.getElementById('selectMonth')\r\n    const year = document.getElementById('selectYear')\r\n    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\r\n    const date = new Date();\r\n\r\n    function getDay() {\r\n        for (let i = 0; i <= 31; i++) {\r\n            let item = document.createElement('option')\r\n            item.className = 'item'\r\n            item.value = i\r\n            item.innerHTML = i\r\n            day.append(item)\r\n        }\r\n    }\r\n\r\n    function getMonth() { \r\n        for (let i = 0; i < months.length; i++) {\r\n            let item = document.createElement('option')\r\n            item.className = 'item'\r\n            item.value = months[i]\r\n            item.innerHTML = months[i]\r\n            month.append(item)\r\n        }\r\n    }\r\n\r\n    function getYear() { \r\n        for (let i = 1920; i <= date.getFullYear(); i++) {\r\n            let item = document.createElement('option')\r\n            item.className = 'item'\r\n            item.value = i\r\n            item.innerHTML = i\r\n            year.append(item)\r\n        }\r\n    }\r\n\r\n    getDay();\r\n    getMonth(months);\r\n    getYear();\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://task_vtopz/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;