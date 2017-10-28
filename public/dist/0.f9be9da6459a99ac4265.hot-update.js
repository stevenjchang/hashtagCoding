webpackHotUpdate(0,{

/***/ 584:
/*!**************************************!*\
  !*** ./client/src/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ 164);\n\nvar _todos = __webpack_require__(/*! ./todos.jsx */ 585);\n\nvar _todos2 = _interopRequireDefault(_todos);\n\nvar _visibilityFilter = __webpack_require__(/*! ./visibilityFilter.jsx */ 586);\n\nvar _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);\n\nvar _apiCall = __webpack_require__(/*! ./apiCall.jsx */ 939);\n\nvar _apiCall2 = _interopRequireDefault(_apiCall);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar todoApp = (0, _redux.combineReducers)({\n  apiCall: _apiCall2.default,\n  todos: _todos2.default,\n  visibilityFilter: _visibilityFilter2.default\n});\n\nexports.default = todoApp;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanM/Yzk0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0b2RvcyBmcm9tICcuL3RvZG9zLmpzeCdcbmltcG9ydCB2aXNpYmlsaXR5RmlsdGVyIGZyb20gJy4vdmlzaWJpbGl0eUZpbHRlci5qc3gnXG5cbmltcG9ydCBhcGlDYWxsIGZyb20gJy4vYXBpQ2FsbC5qc3gnXG5cbmNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhcGlDYWxsLFxuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0FwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///584\n");

/***/ }),

/***/ 939:
/*!*****************************************!*\
  !*** ./client/src/reducers/apiCall.jsx ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ 168);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar apiCall = function apiCall() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_CRAIGSLIST_FEED':\n      _axios2.default.get('./craigslist_scraper').then(function (result) {\n        return console.log('apiCall call has been made!!!!!!!');\n      }).catch(function (error) {\n        return console.log('error inside apiCall', error);\n      });\n      return [];\n  }\n};\n\nexports.default = apiCall;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTM5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvYXBpQ2FsbC5qc3g/YzlhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IGFwaUNhbGwgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQ1JBSUdTTElTVF9GRUVEJzogXG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KCcuL2NyYWlnc2xpc3Rfc2NyYXBlcicpXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IGNvbnNvbGUubG9nKCdhcGlDYWxsIGNhbGwgaGFzIGJlZW4gbWFkZSEhISEhISEnKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coJ2Vycm9yIGluc2lkZSBhcGlDYWxsJywgZXJyb3IpKVxuICAgICAgcmV0dXJuIFtcblxuICAgICAgXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUNhbGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9yZWR1Y2Vycy9hcGlDYWxsLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///939\n");

/***/ })

})