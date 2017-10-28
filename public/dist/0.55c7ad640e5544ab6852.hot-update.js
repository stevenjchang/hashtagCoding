webpackHotUpdate(0,{

/***/ 288:
/*!******************************!*\
  !*** ./contentful.config.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _contentful = __webpack_require__(/*! contentful */ 606);\n\n// import ENV from './apikey.json'\n// const ENV = process.env;\nvar ENV = process.env || __webpack_require__(/*! ./apikey.json */ 947);\n\nvar client = (0, _contentful.createClient)({\n  space: ENV.CONTENTFUL_SPACE_ID,\n  accessToken: ENV.CONTENTFUL_DELIVERY_API\n});\n\nexports.default = client;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./node_modules/process/browser.js */ 0)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbnRlbnRmdWwuY29uZmlnLmpzPzdiZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gJ2NvbnRlbnRmdWwnXG4vLyBpbXBvcnQgRU5WIGZyb20gJy4vYXBpa2V5Lmpzb24nXG4vLyBjb25zdCBFTlYgPSBwcm9jZXNzLmVudjtcbmNvbnN0IEVOViA9IHByb2Nlc3MuZW52IHx8IHJlcXVpcmUoJy4vYXBpa2V5Lmpzb24nKVxuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBzcGFjZTogRU5WLkNPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBFTlYuQ09OVEVOVEZVTF9ERUxJVkVSWV9BUElcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbnRlbnRmdWwuY29uZmlnLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///288\n");

/***/ }),

/***/ 947:
/*!*********************!*\
  !*** ./apikey.json ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = {\"ACCESS_TOKEN\":\"5763991014.7f95f6c.326cac606251431eac808f64b6d2b080\",\"CLIENT_ID\":\"7f95f6c4a8f54c358256d06d035963f1\",\"CLIENT_SECRET\":\"c6dcfa76f9a7450ea0db94a44b68444a\",\"TWITTER_CONSUMER_KEY\":\"2UFQD2gnZPJO4kZqKkJqXZymJ\",\"TWITTER_CONSUMER_SECRET\":\"gNZbRYlnMoOadGzbHx1huCYsIyuALlKtjU547UdEqUOsdOQxOZ\",\"TWITTER_ACCESS_TOKEN\":\"888188966414860288-J4eYPweYKc5rW9zyShFda7xNWMw8vu5\",\"TWITTER_ACCESS_SECRET\":\"ObRHpXYJdM59tchcm4nzNmEKKqkl8rarEfSBdtkLoJVRa\",\"CONTENTFUL_SPACE_ID\":\"ejzxoe50z5pb\",\"CONTENTFUL_DELIVERY_API\":\"6e5f2b3f1dfcd2659137dfa1175ef686d7b95fc7070bbfdc44ae7a73f029ec0c\"}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBpa2V5Lmpzb24/MDc2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcIkFDQ0VTU19UT0tFTlwiOlwiNTc2Mzk5MTAxNC43Zjk1ZjZjLjMyNmNhYzYwNjI1MTQzMWVhYzgwOGY2NGI2ZDJiMDgwXCIsXCJDTElFTlRfSURcIjpcIjdmOTVmNmM0YThmNTRjMzU4MjU2ZDA2ZDAzNTk2M2YxXCIsXCJDTElFTlRfU0VDUkVUXCI6XCJjNmRjZmE3NmY5YTc0NTBlYTBkYjk0YTQ0YjY4NDQ0YVwiLFwiVFdJVFRFUl9DT05TVU1FUl9LRVlcIjpcIjJVRlFEMmduWlBKTzRrWnFLa0pxWFp5bUpcIixcIlRXSVRURVJfQ09OU1VNRVJfU0VDUkVUXCI6XCJnTlpiUllsbk1vT2FkR3piSHgxaHVDWXNJeXVBTGxLdGpVNTQ3VWRFcVVPc2RPUXhPWlwiLFwiVFdJVFRFUl9BQ0NFU1NfVE9LRU5cIjpcIjg4ODE4ODk2NjQxNDg2MDI4OC1KNGVZUHdlWUtjNXJXOXp5U2hGZGE3eE5XTXc4dnU1XCIsXCJUV0lUVEVSX0FDQ0VTU19TRUNSRVRcIjpcIk9iUkhwWFlKZE01OXRjaGNtNG56Tm1FS0txa2w4cmFyRWZTQmR0a0xvSlZSYVwiLFwiQ09OVEVOVEZVTF9TUEFDRV9JRFwiOlwiZWp6eG9lNTB6NXBiXCIsXCJDT05URU5URlVMX0RFTElWRVJZX0FQSVwiOlwiNmU1ZjJiM2YxZGZjZDI2NTkxMzdkZmExMTc1ZWY2ODZkN2I5NWZjNzA3MGJiZmRjNDRhZTdhNzNmMDI5ZWMwY1wifVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBpa2V5Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDk0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///947\n");

/***/ })

})