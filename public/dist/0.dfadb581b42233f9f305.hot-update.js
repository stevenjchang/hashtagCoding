webpackHotUpdate(0,{

/***/ 945:
/*!********************************************!*\
  !*** ./client/src/containers/Instagram.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 39);\n\nvar _actions = __webpack_require__(/*! ../actions */ 48);\n\nvar _InstagramList = __webpack_require__(/*! ../components/InstagramList */ 946);\n\nvar _InstagramList2 = _interopRequireDefault(_InstagramList);\n\nvar _TweetList_semantic = __webpack_require__(/*! ../components/TweetList_semantic.jsx */ 943);\n\nvar _TweetList_semantic2 = _interopRequireDefault(_TweetList_semantic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    images: state.instagram\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onButtonClick: function onButtonClick() {\n      return dispatch((0, _actions.getInstagramFeed)());\n    }\n  };\n};\n\nvar Instagram = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_InstagramList2.default);\n\nexports.default = Instagram;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9JbnN0YWdyYW0uanM/M2ZhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRJbnN0YWdyYW1GZWVkIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBJbnN0YWdyYW1MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSW5zdGFncmFtTGlzdCdcbmltcG9ydCBUd2VldGxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ud2VldExpc3Rfc2VtYW50aWMuanN4J1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW1hZ2VzOiBzdGF0ZS5pbnN0YWdyYW1cbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25CdXR0b25DbGljazogKCkgPT4gZGlzcGF0Y2goZ2V0SW5zdGFncmFtRmVlZCgpKVxuICB9XG59XG5cbmNvbnN0IEluc3RhZ3JhbSA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEluc3RhZ3JhbUxpc3QpXG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhZ3JhbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29udGFpbmVycy9JbnN0YWdyYW0uanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///945\n");

/***/ })

})