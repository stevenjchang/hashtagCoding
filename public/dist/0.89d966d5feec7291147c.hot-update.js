webpackHotUpdate(0,{

/***/ 944:
/*!******************************************!*\
  !*** ./client/src/containers/Twitter.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 39);\n\nvar _actions = __webpack_require__(/*! ../actions */ 48);\n\nvar _TweetList_semantic = __webpack_require__(/*! ../components/TweetList_semantic.jsx */ 459);\n\nvar _TweetList_semantic2 = _interopRequireDefault(_TweetList_semantic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    images: state.twitter\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onButtonClick: function onButtonClick() {\n      return dispatch((0, _actions.getTwitterFeed)());\n    }\n  };\n};\n\nvar Twitter = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TweetList_semantic2.default);\n\nexports.default = Twitter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzPzc4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0VHdpdHRlckZlZWQgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IFR3ZWV0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1R3ZWV0TGlzdF9zZW1hbnRpYy5qc3gnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbWFnZXM6IHN0YXRlLnR3aXR0ZXJcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25CdXR0b25DbGljazogKCkgPT4gZGlzcGF0Y2goZ2V0VHdpdHRlckZlZWQoKSlcbiAgfVxufVxuXG5jb25zdCBUd2l0dGVyID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLCBcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFR3ZWV0TGlzdClcblxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///944\n");

/***/ })

})