webpackHotUpdate(0,{

/***/ 954:
/*!*********************************************!*\
  !*** ./client/src/containers/Contentful.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 39);\n\nvar _actions = __webpack_require__(/*! ../actions */ 48);\n\nvar _Contentful = __webpack_require__(/*! ../components/Contentful */ 953);\n\nvar _Contentful2 = _interopRequireDefault(_Contentful);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    links: state.contentful\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onButtonClick: function onButtonClick() {\n      return dispatch((0, _actions.getContentfulFeed)());\n    }\n  };\n};\n\nvar Instagram = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Contentful2.default);\n\nexports.default = Instagram;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTU0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9Db250ZW50ZnVsLmpzPzQ5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0Q29udGVudGZ1bEZlZWQgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IENvbnRlbnRmdWwgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50ZnVsJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGlua3M6IHN0YXRlLmNvbnRlbnRmdWwsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQnV0dG9uQ2xpY2s6ICgpID0+IGRpc3BhdGNoKGdldENvbnRlbnRmdWxGZWVkKCkpXG4gIH1cbn1cblxuY29uc3QgSW5zdGFncmFtID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQ29udGVudGZ1bClcblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFncmFtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb250YWluZXJzL0NvbnRlbnRmdWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///954\n");

/***/ })

})