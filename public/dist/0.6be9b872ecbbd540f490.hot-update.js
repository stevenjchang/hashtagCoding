webpackHotUpdate(0,{

/***/ 288:
/*!******************************!*\
  !*** ./contentful.config.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _contentful = __webpack_require__(/*! contentful */ 606);\n\n// import ENV from './apikey.json'\n// const ENV = process.env;\nvar ENV = process.env || __webpack_require__(/*! ./apikey.json */ 947);\nvar showENV = function showENV() {\n  return console.log('ENV ======>', ENV);\n};\nshowENV();\n\nvar client = (0, _contentful.createClient)({\n  space: ENV.CONTENTFUL_SPACE_ID,\n  accessToken: ENV.CONTENTFUL_DELIVERY_API\n});\n\nexports.default = client;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./node_modules/process/browser.js */ 0)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbnRlbnRmdWwuY29uZmlnLmpzPzdiZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gJ2NvbnRlbnRmdWwnXG4vLyBpbXBvcnQgRU5WIGZyb20gJy4vYXBpa2V5Lmpzb24nXG4vLyBjb25zdCBFTlYgPSBwcm9jZXNzLmVudjtcbmNvbnN0IEVOViA9IHByb2Nlc3MuZW52IHx8IHJlcXVpcmUoJy4vYXBpa2V5Lmpzb24nKVxuY29uc3Qgc2hvd0VOViA9ICgpID0+IGNvbnNvbGUubG9nKCdFTlYgPT09PT09PicsIEVOVilcbnNob3dFTlYoKTtcblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IEVOVi5DT05URU5URlVMX1NQQUNFX0lELFxuICBhY2Nlc3NUb2tlbjogRU5WLkNPTlRFTlRGVUxfREVMSVZFUllfQVBJXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250ZW50ZnVsLmNvbmZpZy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///288\n");

/***/ })

})