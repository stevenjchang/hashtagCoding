webpackHotUpdate(0,{

/***/ 587:
/*!**************************************!*\
  !*** ./client/src/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ 165);\n\nvar _todos = __webpack_require__(/*! ./todos.jsx */ 588);\n\nvar _todos2 = _interopRequireDefault(_todos);\n\nvar _visibilityFilter = __webpack_require__(/*! ./visibilityFilter.jsx */ 589);\n\nvar _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);\n\nvar _contentful = __webpack_require__(/*! ./contentful */ 952);\n\nvar _contentful2 = _interopRequireDefault(_contentful);\n\nvar _craigslist = __webpack_require__(/*! ./craigslist */ 590);\n\nvar _craigslist2 = _interopRequireDefault(_craigslist);\n\nvar _instagram = __webpack_require__(/*! ./instagram */ 591);\n\nvar _instagram2 = _interopRequireDefault(_instagram);\n\nvar _twitter = __webpack_require__(/*! ./twitter */ 592);\n\nvar _twitter2 = _interopRequireDefault(_twitter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import { routerReducer } from 'react-router-redux'\n\nvar todoApp = (0, _redux.combineReducers)({\n  todos: _todos2.default,\n  visibilityFilter: _visibilityFilter2.default,\n  contentful: _contentful2.default,\n  craigslist: _craigslist2.default,\n  instagram: _instagram2.default,\n  twitter: _twitter2.default\n  // routing: routerReducer\n});\n\nexports.default = todoApp;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanM/Yzk0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0b2RvcyBmcm9tICcuL3RvZG9zLmpzeCdcbmltcG9ydCB2aXNpYmlsaXR5RmlsdGVyIGZyb20gJy4vdmlzaWJpbGl0eUZpbHRlci5qc3gnXG5pbXBvcnQgY29udGVudGZ1bCBmcm9tICcuL2NvbnRlbnRmdWwnXG5pbXBvcnQgY3JhaWdzbGlzdCBmcm9tICcuL2NyYWlnc2xpc3QnXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJy4vaW5zdGFncmFtJ1xuaW1wb3J0IHR3aXR0ZXIgZnJvbSAnLi90d2l0dGVyJ1xuLy8gaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcblxuY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyLFxuICBjb250ZW50ZnVsLFxuICBjcmFpZ3NsaXN0LFxuICBpbnN0YWdyYW0sXG4gIHR3aXR0ZXJcbiAgLy8gcm91dGluZzogcm91dGVyUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0FwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///587\n");

/***/ }),

/***/ 952:
/*!*******************************************!*\
  !*** ./client/src/reducers/contentful.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar contentful = function contentful() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_CONTENTFUL_FEED':\n      return [action.data.data];\n    default:\n      return state;\n  }\n};\n\nexports.default = contentful;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvY29udGVudGZ1bC5qcz8xYTc0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnRmdWwgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0dFVF9DT05URU5URlVMX0ZFRUQnOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgYWN0aW9uLmRhdGEuZGF0YVxuICAgICAgXVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50ZnVsXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9yZWR1Y2Vycy9jb250ZW50ZnVsLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///952\n");

/***/ })

})