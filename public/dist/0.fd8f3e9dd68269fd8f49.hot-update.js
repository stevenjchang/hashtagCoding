webpackHotUpdate(0,{

/***/ 459:
/*!******************************************************!*\
  !*** ./client/src/components/TweetList_semantic.jsx ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 72);\n\nvar _Tweet_semantic = __webpack_require__(/*! ./Tweet_semantic.jsx */ 945);\n\nvar _Tweet_semantic2 = _interopRequireDefault(_Tweet_semantic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TweetList_semantic = function TweetList_semantic(_ref) {\n  var images = _ref.images,\n      onButtonClick = _ref.onButtonClick;\n\n  var renderedImages = images[0] ? images[0] : [];\n  var imagesComponent = _react2.default.createElement(\n    'div',\n    null,\n    'before'\n  );\n  if (images) {\n    imagesComponent = _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        _semanticUiReact.Button,\n        { inverted: true, color: 'blue', onClick: onButtonClick },\n        'Twitter'\n      ),\n      _react2.default.createElement(\n        _semanticUiReact.Grid,\n        { centered: true },\n        _react2.default.createElement(\n          _semanticUiReact.Grid.Row,\n          { columns: 3, divided: true, stretched: true, textAlign: \"right\" },\n          renderedImages.map(function (item, i) {\n            return _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              null,\n              _react2.default.createElement(_Tweet_semantic2.default, { image: item.image, key: i, text: item.text })\n            );\n          })\n        )\n      )\n    );\n  }\n  return imagesComponent;\n};\n\nvar TweetList_semantic_new = function TweetList_semantic_new(_ref2) {\n  var images = _ref2.images;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h1',\n      null,\n      ' HELOOOOOOOOOO '\n    )\n  );\n};\n\nexports.default = TweetList_semantic;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDU5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9Ud2VldExpc3Rfc2VtYW50aWMuanN4PzZlMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFR3ZWV0X3NlbWFudGljIGZyb20gJy4vVHdlZXRfc2VtYW50aWMuanN4J1xuXG5jb25zdCBUd2VldExpc3Rfc2VtYW50aWMgPSAoeyBpbWFnZXMsIG9uQnV0dG9uQ2xpY2sgfSkgPT4ge1xuICBsZXQgcmVuZGVyZWRJbWFnZXMgPSBpbWFnZXNbMF0gPyBpbWFnZXNbMF0gOiBbXTtcbiAgbGV0IGltYWdlc0NvbXBvbmVudCA9IDxkaXY+YmVmb3JlPC9kaXY+O1xuICBpZiAoaW1hZ2VzKSB7XG4gICAgaW1hZ2VzQ29tcG9uZW50ID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvbiBpbnZlcnRlZCBjb2xvcj0nYmx1ZScgb25DbGljaz17b25CdXR0b25DbGlja30+VHdpdHRlcjwvQnV0dG9uPlxuICAgICAgICA8R3JpZCBjZW50ZXJlZD17dHJ1ZX0+IFxuICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXszfSBkaXZpZGVkPXt0cnVlfSBzdHJldGNoZWQ9e3RydWV9IHRleHRBbGlnbj17XCJyaWdodFwifT5cbiAgICAgICAgICB7cmVuZGVyZWRJbWFnZXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPFR3ZWV0X3NlbWFudGljIGltYWdlPXtpdGVtLmltYWdlfSBrZXk9e2l9IHRleHQ9e2l0ZW0udGV4dH0gLz5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+IFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJldHVybiBpbWFnZXNDb21wb25lbnRcbn1cblxuY29uc3QgVHdlZXRMaXN0X3NlbWFudGljX25ldyA9ICh7aW1hZ2VzfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+IEhFTE9PT09PT09PT08gPC9oMT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUd2VldExpc3Rfc2VtYW50aWNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvVHdlZXRMaXN0X3NlbWFudGljLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQVBBO0FBREE7QUFGQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///459\n");

/***/ })

})