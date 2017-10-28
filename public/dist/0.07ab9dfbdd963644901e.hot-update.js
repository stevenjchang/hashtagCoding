webpackHotUpdate(0,{

/***/ 587:
/*!*****************************************!*\
  !*** ./client/src/reducers/apiCall.jsx ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ 102);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar apiCall = function apiCall() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_CRAIGSLIST_FEED':\n      _axios2.default.get('./craigslist_scraper').then(function (result) {\n        return console.log('apiCall call has been made!!!!!!!');\n      }).catch(function (error) {\n        return console.log('error inside apiCall', error);\n      });\n      return ['hello'];\n    default:\n      return state;\n  }\n};\n\nexports.default = apiCall;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvYXBpQ2FsbC5qc3g/YzlhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IGFwaUNhbGwgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQ1JBSUdTTElTVF9GRUVEJzogXG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KCcuL2NyYWlnc2xpc3Rfc2NyYXBlcicpXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IGNvbnNvbGUubG9nKCdhcGlDYWxsIGNhbGwgaGFzIGJlZW4gbWFkZSEhISEhISEnKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coJ2Vycm9yIGluc2lkZSBhcGlDYWxsJywgZXJyb3IpKVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgJ2hlbGxvJ1xuICAgICAgXVxuICAgIGRlZmF1bHQ6IFxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpQ2FsbFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvcmVkdWNlcnMvYXBpQ2FsbC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///587\n");

/***/ })

})