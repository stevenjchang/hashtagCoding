webpackHotUpdate(0,{

/***/ 942:
/*!******************************************!*\
  !*** ./client/src/containers/Twitter.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 69);\n\nvar _actions = __webpack_require__(/*! ../actions */ 84);\n\nvar _TweetList_semantic = __webpack_require__(/*! ../components/TweetList_semantic.jsx */ 943);\n\nvar _TweetList_semantic2 = _interopRequireDefault(_TweetList_semantic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    images: state.apiCall\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onButtonClick: function onButtonClick() {\n      dispatch((0, _actions.getTwitterFeed)());\n    }\n  };\n};\n\nvar Twitter = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TweetList_semantic2.default);\n\nexports.default = Twitter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzPzc4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0VHdpdHRlckZlZWQgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IFR3ZWV0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1R3ZWV0TGlzdF9zZW1hbnRpYy5qc3gnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbWFnZXM6IHN0YXRlLmFwaUNhbGxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25CdXR0b25DbGljazogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0VHdpdHRlckZlZWQoKSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFR3aXR0ZXIgPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsIFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoVHdlZXRMaXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb250YWluZXJzL1R3aXR0ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///942\n");

/***/ })

})