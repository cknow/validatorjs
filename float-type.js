(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var floatType = exports.floatType = function floatType(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType1 = exports.floatType1 = function floatType1(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType2 = exports.floatType2 = function floatType2(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType3 = exports.floatType3 = function floatType3(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType4 = exports.floatType4 = function floatType4(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType5 = exports.floatType5 = function floatType5(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType6 = exports.floatType6 = function floatType6(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType7 = exports.floatType7 = function floatType7(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType8 = exports.floatType8 = function floatType8(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType9 = exports.floatType9 = function floatType9(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};
var floatType10 = exports.floatType10 = function floatType10(input) {
  return !Number.isInteger(input) && Number.isFinite(input);
};

exports.default = floatType;

/***/ })
/******/ ]);
});