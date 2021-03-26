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

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// *\tVariables:\r\nconst preload = document.querySelector('#preload');\r\nconst header = document.querySelector('.header');\r\nconst burger = document.querySelector('.burger');\r\nconst mobileMenu = document.querySelector('.header__mobile');\r\nconst headerLogo = document.querySelector('.header__logo');\r\nconst headerMenu = document.querySelectorAll('.header__nav-link');\r\nconst burgerLine = document.querySelectorAll('.burger__line');\r\nconst toggle = document.querySelector('.header__toggle');\r\nconst lightBG = 'light-mode-bg';\r\nconst darkColor = 'dark-mode-col';\r\nconst darkBG = 'dark-mode-bg';\r\n\r\n// !\tPRELOAD\r\n\r\nwindow.onload = function () {\r\n  preload.style.display = 'none';\r\n};\r\n\r\n// !\tTOGGLE\r\n\r\ntoggle.addEventListener('change', () => {\r\n  // *\tHeader menu\r\n  for (let i = 0; i < headerMenu.length; i++) {\r\n    if (toggle.checked) {\r\n      headerMenu[i].classList.toggle(darkColor);\r\n    } else {\r\n      headerMenu[i].classList.toggle(darkColor);\r\n    }\r\n  }\r\n\r\n  // *\tBurger line\r\n  for (let i = 0; i < burgerLine.length; i++) {\r\n    if (toggle.checked) {\r\n      burgerLine[i].classList.toggle(lightBG);\r\n    } else {\r\n      burgerLine[i].classList.toggle(lightBG);\r\n    }\r\n  }\r\n\r\n  // *\tHeader & Header logo\r\n  if (toggle.checked) {\r\n    header.classList.toggle(darkBG);\r\n    mobileMenu.classList.toggle(darkBG);\r\n    headerLogo.classList.toggle(darkColor);\r\n  } else {\r\n    header.classList.toggle(darkBG);\r\n    mobileMenu.classList.toggle(darkBG);\r\n    headerLogo.classList.toggle(darkColor);\r\n  }\r\n});\r\n\r\n// !\tBurger menu\r\n\r\nburger.addEventListener('click', () => {\r\n  mobileMenu.classList.toggle('header__active');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! E:\\FE\\github\\online-zoo\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! E:\\FE\\github\\online-zoo\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });