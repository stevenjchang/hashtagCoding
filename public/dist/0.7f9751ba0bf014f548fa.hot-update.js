webpackHotUpdate(0,{

/***/ 587:
/*!**************************************!*\
  !*** ./client/src/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ 165);\n\nvar _todos = __webpack_require__(/*! ./todos.jsx */ 588);\n\nvar _todos2 = _interopRequireDefault(_todos);\n\nvar _visibilityFilter = __webpack_require__(/*! ./visibilityFilter.jsx */ 589);\n\nvar _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);\n\nvar _instagram = __webpack_require__(/*! ./instagram */ 590);\n\nvar _instagram2 = _interopRequireDefault(_instagram);\n\nvar _twitter = __webpack_require__(/*! ./twitter */ 951);\n\nvar _twitter2 = _interopRequireDefault(_twitter);\n\nvar _apiCall = __webpack_require__(/*! ./apiCall.jsx */ 591);\n\nvar _apiCall2 = _interopRequireDefault(_apiCall);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar todoApp = (0, _redux.combineReducers)({\n  apiCall: _apiCall2.default,\n  todos: _todos2.default,\n  visibilityFilter: _visibilityFilter2.default,\n  instagram: _instagram2.default,\n  twitter: _twitter2.default\n  // routing: routerReducer\n});\n// import { routerReducer } from 'react-router-redux'\n\nexports.default = todoApp;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanM/Yzk0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0b2RvcyBmcm9tICcuL3RvZG9zLmpzeCdcbmltcG9ydCB2aXNpYmlsaXR5RmlsdGVyIGZyb20gJy4vdmlzaWJpbGl0eUZpbHRlci5qc3gnXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJy4vaW5zdGFncmFtJ1xuaW1wb3J0IHR3aXR0ZXIgZnJvbSAnLi90d2l0dGVyJ1xuLy8gaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcblxuaW1wb3J0IGFwaUNhbGwgZnJvbSAnLi9hcGlDYWxsLmpzeCdcblxuY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFwaUNhbGwsXG4gIHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyLFxuICBpbnN0YWdyYW0sXG4gIHR3aXR0ZXJcbiAgLy8gcm91dGluZzogcm91dGVyUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0FwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFKQTtBQUNBO0FBWUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///587\n");

/***/ }),

/***/ 951:
/*!****************************************!*\
  !*** ./client/src/reducers/twitter.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar twitter = function twitter() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_TWITTER_FEED':\n      return [action.data.data];\n    default:\n      return state;\n  }\n};\n\nexports.default = twitter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvdHdpdHRlci5qcz84ODcxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHR3aXR0ZXIgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfVFdJVFRFUl9GRUVEJzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGFjdGlvbi5kYXRhLmRhdGFcbiAgICAgIF1cbiAgICBkZWZhdWx0OiBcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHR3aXR0ZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL3JlZHVjZXJzL3R3aXR0ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///951\n");

/***/ })

})