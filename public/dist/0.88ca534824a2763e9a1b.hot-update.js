webpackHotUpdate(0,{

/***/ 586:
/*!**************************************!*\
  !*** ./client/src/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ 165);\n\nvar _todos = __webpack_require__(/*! ./todos.jsx */ 587);\n\nvar _todos2 = _interopRequireDefault(_todos);\n\nvar _visibilityFilter = __webpack_require__(/*! ./visibilityFilter.jsx */ 588);\n\nvar _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);\n\nvar _instagram = __webpack_require__(/*! ./instagram */ 949);\n\nvar _instagram2 = _interopRequireDefault(_instagram);\n\nvar _apiCall = __webpack_require__(/*! ./apiCall.jsx */ 589);\n\nvar _apiCall2 = _interopRequireDefault(_apiCall);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar todoApp = (0, _redux.combineReducers)({\n  apiCall: _apiCall2.default,\n  todos: _todos2.default,\n  visibilityFilter: _visibilityFilter2.default,\n  instagram: _instagram2.default\n  // routing: routerReducer\n});\n// import { routerReducer } from 'react-router-redux'\n\nexports.default = todoApp;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanM/Yzk0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0b2RvcyBmcm9tICcuL3RvZG9zLmpzeCdcbmltcG9ydCB2aXNpYmlsaXR5RmlsdGVyIGZyb20gJy4vdmlzaWJpbGl0eUZpbHRlci5qc3gnXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJy4vaW5zdGFncmFtJ1xuLy8gaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcblxuaW1wb3J0IGFwaUNhbGwgZnJvbSAnLi9hcGlDYWxsLmpzeCdcblxuY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFwaUNhbGwsXG4gIHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyLFxuICBpbnN0YWdyYW1cbiAgLy8gcm91dGluZzogcm91dGVyUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0FwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFDQTtBQVdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///586\n");

/***/ }),

/***/ 949:
/*!******************************************!*\
  !*** ./client/src/reducers/instagram.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar instagram = function instagram() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_INSTAGRAM_FEED':\n      return [action.data];\n    default:\n      return state;\n  }\n};\n\nexports.default = instagram;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5zdGFncmFtLmpzPzA2NzIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5zdGFncmFtID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfSU5TVEFHUkFNX0ZFRUQnOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgYWN0aW9uLmRhdGFcbiAgICAgIF1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFncmFtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9yZWR1Y2Vycy9pbnN0YWdyYW0uanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///949\n");

/***/ })

})