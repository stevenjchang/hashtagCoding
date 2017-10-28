webpackHotUpdate(0,{

/***/ 942:
/*!******************************************!*\
  !*** ./client/src/containers/Twitter.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 83);\n\nvar _actions = __webpack_require__(/*! ../actions */ 103);\n\nvar _TweetList_semantic = __webpack_require__(/*! ../components/TweetList_semantic */ 945);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    images: {}\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    click: function click() {\n      dispatch();\n    }\n  };\n};\n\nvar Twitter = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TweetList_semantic.TweetList);\n\nexports.default = Twitter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzPzc4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0VHdpdHRlckZlZWQgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IHsgVHdlZXRMaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ud2VldExpc3Rfc2VtYW50aWMnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbWFnZXM6IHt9XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaCgpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFR3aXR0ZXIgPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsIFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoVHdlZXRMaXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///942\n");

/***/ }),

/***/ 943:
false,

/***/ 945:
/*!*****************************************************!*\
  !*** ./client/src/components/TweetList_semantic.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 104);\n\nvar _Tweet_semantic = __webpack_require__(/*! ./Tweet_semantic.jsx */ 944);\n\nvar _Tweet_semantic2 = _interopRequireDefault(_Tweet_semantic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TweetList_semantic_old = function TweetList_semantic_old(_ref) {\n  var images = _ref.images;\n\n  var imagesComponent = _react2.default.createElement(\n    'div',\n    null,\n    'before'\n  );\n  if (images) {\n    imagesComponent = _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        _semanticUiReact.Grid,\n        { centered: true },\n        _react2.default.createElement(\n          _semanticUiReact.Grid.Row,\n          { columns: 3, divided: true, stretched: true, textAlign: \"right\" },\n          images.map(function (item, i) {\n            return _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              null,\n              _react2.default.createElement(_Tweet_semantic2.default, { image: item.image, key: i, text: item.text })\n            );\n          })\n        )\n      )\n    );\n  }\n  return imagesComponent;\n};\n\nvar TweetList_semantic = function TweetList_semantic(_ref2) {\n  var images = _ref2.images;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h1',\n      null,\n      ' HELOOOOOOOOOO '\n    )\n  );\n};\n\nexports.default = TweetList_semantic;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9Ud2VldExpc3Rfc2VtYW50aWMuanM/NzEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHcmlkLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFR3ZWV0X3NlbWFudGljIGZyb20gJy4vVHdlZXRfc2VtYW50aWMuanN4J1xuXG5jb25zdCBUd2VldExpc3Rfc2VtYW50aWNfb2xkID0gKHtpbWFnZXN9KSA9PiB7XG4gIGxldCBpbWFnZXNDb21wb25lbnQgPSA8ZGl2PmJlZm9yZTwvZGl2PjtcbiAgaWYgKGltYWdlcykge1xuICAgIGltYWdlc0NvbXBvbmVudCA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkIGNlbnRlcmVkPXt0cnVlfT4gXG4gICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezN9IGRpdmlkZWQ9e3RydWV9IHN0cmV0Y2hlZD17dHJ1ZX0gdGV4dEFsaWduPXtcInJpZ2h0XCJ9PlxuICAgICAgICAgIHtpbWFnZXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPFR3ZWV0X3NlbWFudGljIGltYWdlPXtpdGVtLmltYWdlfSBrZXk9e2l9IHRleHQ9e2l0ZW0udGV4dH0gLz5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+IFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJldHVybiBpbWFnZXNDb21wb25lbnRcbn1cblxuY29uc3QgVHdlZXRMaXN0X3NlbWFudGljID0gKHtpbWFnZXN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4gSEVMT09PT09PT09PTyA8L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWV0TGlzdF9zZW1hbnRpY1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9Ud2VldExpc3Rfc2VtYW50aWMuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBUEE7QUFEQTtBQURBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///945\n");

/***/ })

})