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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_colorGen__ = __webpack_require__(/*! ./modules/colorGen */ 1);\n\n// import {prependHash} from './modules/inputFocus';\n\nconst colorInputs = [...document.getElementsByClassName('colorInput')];\nconst billIcons = [...document.getElementsByClassName('lockIcon')];\nconst columns = [...document.getElementsByClassName('col')];\n\n// initialize color inputs \ncolorInputs.forEach((element) => {\n    let color = Object(__WEBPACK_IMPORTED_MODULE_0__modules_colorGen__[\"a\" /* genHexColor */])();\n    element.parentElement.style.backgroundColor = color;\n    element.value = color;\n});\n\n// fire function w/ spacebar \ndocument.body.onkeyup = function(e){\n    if(e.keyCode == 32){\n        columns.forEach((element, index) => {\n            let color = Object(__WEBPACK_IMPORTED_MODULE_0__modules_colorGen__[\"a\" /* genHexColor */])();    \n            let child = element.children[0];\n            let childClasses = child.classList.toString();\n\n            // if lock disabled \n            if (childClasses.includes('fa-lock') === false) {\n                element.style.backgroundColor = color;\n                colorInputs[index].value = color;\n            }\n        });\n    }\n}\n \n// toggle color lock \nbillIcons.forEach((element, index, array) => {\n    array[index].onclick = function() {\n        if (event.target.classList.contains('fa-lock')) {\n            event.target.classList.remove('fa-lock');\n            event.target.classList.add('fa-unlock-alt');\n        } else {\n            event.target.classList.remove('fa-unlock-alt');\n            event.target.classList.add('fa-lock');\n        }\n    };\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dlbkhleENvbG9yfSBmcm9tICcuL21vZHVsZXMvY29sb3JHZW4nO1xuLy8gaW1wb3J0IHtwcmVwZW5kSGFzaH0gZnJvbSAnLi9tb2R1bGVzL2lucHV0Rm9jdXMnO1xuXG5jb25zdCBjb2xvcklucHV0cyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2xvcklucHV0JyldO1xuY29uc3QgYmlsbEljb25zID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvY2tJY29uJyldO1xuY29uc3QgY29sdW1ucyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2wnKV07XG5cbi8vIGluaXRpYWxpemUgY29sb3IgaW5wdXRzIFxuY29sb3JJbnB1dHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCBjb2xvciA9IGdlbkhleENvbG9yKCk7XG4gICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIGVsZW1lbnQudmFsdWUgPSBjb2xvcjtcbn0pO1xuXG4vLyBmaXJlIGZ1bmN0aW9uIHcvIHNwYWNlYmFyIFxuZG9jdW1lbnQuYm9keS5vbmtleXVwID0gZnVuY3Rpb24oZSl7XG4gICAgaWYoZS5rZXlDb2RlID09IDMyKXtcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gZ2VuSGV4Q29sb3IoKTsgICAgXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgbGV0IGNoaWxkQ2xhc3NlcyA9IGNoaWxkLmNsYXNzTGlzdC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAvLyBpZiBsb2NrIGRpc2FibGVkIFxuICAgICAgICAgICAgaWYgKGNoaWxkQ2xhc3Nlcy5pbmNsdWRlcygnZmEtbG9jaycpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICAgICAgY29sb3JJbnB1dHNbaW5kZXhdLnZhbHVlID0gY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiBcbi8vIHRvZ2dsZSBjb2xvciBsb2NrIFxuYmlsbEljb25zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGFycmF5W2luZGV4XS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1sb2NrJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmYS1sb2NrJyk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZmEtdW5sb2NrLWFsdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXVubG9jay1hbHQnKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdmYS1sb2NrJyk7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./src/modules/colorGen.js ***!
  \*********************************/
/*! exports provided: genHexColor */
/*! exports used: genHexColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return genHexColor; });\nconst genHexColor = () => {\n\treturn '#'+(Math.random()*0xFFFFFF<<0).toString(16).toUpperCase();\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbG9yR2VuLmpzPzJmZjgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2VuSGV4Q29sb3IgPSAoKSA9PiB7XG5cdHJldHVybiAnIycrKE1hdGgucmFuZG9tKCkqMHhGRkZGRkY8PDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xufVxuXG5leHBvcnQge2dlbkhleENvbG9yfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbG9yR2VuLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);