webpackHotUpdate(0,{

/***/ 459:
false,

/***/ 945:
/*!******************************************!*\
  !*** ./client/src/containers/Twitter.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 39);\n\nvar _actions = __webpack_require__(/*! ../actions */ 48);\n\nvar _TwitterList = __webpack_require__(/*! ../components/TwitterList */ 962);\n\nvar _TwitterList2 = _interopRequireDefault(_TwitterList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    images: state.twitter\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onButtonClick: function onButtonClick() {\n      return dispatch((0, _actions.getTwitterFeed)());\n    }\n  };\n};\n\nvar Twitter = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TwitterList2.default);\n\nexports.default = Twitter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzPzc4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0VHdpdHRlckZlZWQgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IFR3aXR0ZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVHdpdHRlckxpc3QnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbWFnZXM6IHN0YXRlLnR3aXR0ZXJcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25CdXR0b25DbGljazogKCkgPT4gZGlzcGF0Y2goZ2V0VHdpdHRlckZlZWQoKSlcbiAgfVxufVxuXG5jb25zdCBUd2l0dGVyID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLCBcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFR3aXR0ZXJMaXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb250YWluZXJzL1R3aXR0ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///945\n");

/***/ }),

/***/ 947:
/*!********************************************!*\
  !*** ./client/src/containers/Instagram.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 39);\n\nvar _actions = __webpack_require__(/*! ../actions */ 48);\n\nvar _InstagramList = __webpack_require__(/*! ../components/InstagramList */ 948);\n\nvar _InstagramList2 = _interopRequireDefault(_InstagramList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    images: state.instagram\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onButtonClick: function onButtonClick() {\n      return dispatch((0, _actions.getInstagramFeed)());\n    }\n  };\n};\n\nvar Instagram = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_InstagramList2.default);\n\nexports.default = Instagram;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9JbnN0YWdyYW0uanM/M2ZhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRJbnN0YWdyYW1GZWVkIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBJbnN0YWdyYW1MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSW5zdGFncmFtTGlzdCdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGltYWdlczogc3RhdGUuaW5zdGFncmFtXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQnV0dG9uQ2xpY2s6ICgpID0+IGRpc3BhdGNoKGdldEluc3RhZ3JhbUZlZWQoKSlcbiAgfVxufVxuXG5jb25zdCBJbnN0YWdyYW0gPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShJbnN0YWdyYW1MaXN0KVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YWdyYW1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbnRhaW5lcnMvSW5zdGFncmFtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///947\n");

/***/ }),

/***/ 962:
/*!**********************************************!*\
  !*** ./client/src/components/TwitterList.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 49);\n\nvar _Tweet_semantic = __webpack_require__(/*! ./Tweet_semantic.jsx */ 946);\n\nvar _Tweet_semantic2 = _interopRequireDefault(_Tweet_semantic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TwitterList = function TwitterList(_ref) {\n  var images = _ref.images,\n      onButtonClick = _ref.onButtonClick;\n\n  var renderedImages = images[0] ? images[0] : [];\n  var imagesComponent = _react2.default.createElement(\n    'div',\n    null,\n    'before'\n  );\n  if (images) {\n    imagesComponent = _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        _semanticUiReact.Button,\n        { inverted: true, color: 'blue', onClick: onButtonClick },\n        'Twitter'\n      ),\n      _react2.default.createElement(\n        _semanticUiReact.Grid,\n        { centered: true },\n        _react2.default.createElement(\n          _semanticUiReact.Grid.Row,\n          { columns: 3, divided: true, stretched: true, textAlign: \"right\" },\n          renderedImages.map(function (item, i) {\n            return _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              null,\n              _react2.default.createElement(_Tweet_semantic2.default, { image: item.image, key: i, text: item.text })\n            );\n          })\n        )\n      )\n    );\n  }\n  return imagesComponent;\n};\n\nexports.default = TwitterList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9Ud2l0dGVyTGlzdC5qcz9iYjQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdyaWQsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBUd2VldF9zZW1hbnRpYyBmcm9tICcuL1R3ZWV0X3NlbWFudGljLmpzeCdcblxuY29uc3QgVHdpdHRlckxpc3QgPSAoeyBpbWFnZXMsIG9uQnV0dG9uQ2xpY2sgfSkgPT4ge1xuICBsZXQgcmVuZGVyZWRJbWFnZXMgPSBpbWFnZXNbMF0gPyBpbWFnZXNbMF0gOiBbXTtcbiAgbGV0IGltYWdlc0NvbXBvbmVudCA9IDxkaXY+YmVmb3JlPC9kaXY+O1xuICBpZiAoaW1hZ2VzKSB7XG4gICAgaW1hZ2VzQ29tcG9uZW50ID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvbiBpbnZlcnRlZCBjb2xvcj0nYmx1ZScgb25DbGljaz17b25CdXR0b25DbGlja30+VHdpdHRlcjwvQnV0dG9uPlxuICAgICAgICA8R3JpZCBjZW50ZXJlZD17dHJ1ZX0+IFxuICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXszfSBkaXZpZGVkPXt0cnVlfSBzdHJldGNoZWQ9e3RydWV9IHRleHRBbGlnbj17XCJyaWdodFwifT5cbiAgICAgICAgICB7cmVuZGVyZWRJbWFnZXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPFR3ZWV0X3NlbWFudGljIGltYWdlPXtpdGVtLmltYWdlfSBrZXk9e2l9IHRleHQ9e2l0ZW0udGV4dH0gLz5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+IFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJldHVybiBpbWFnZXNDb21wb25lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlckxpc3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvVHdpdHRlckxpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFQQTtBQURBO0FBRkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///962\n");

/***/ })

})