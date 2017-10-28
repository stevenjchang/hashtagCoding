webpackHotUpdate(0,{

/***/ 947:
/*!************************************************!*\
  !*** ./client/src/components/InstagramList.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 71);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 72);\n\nvar _InstagramListItem = __webpack_require__(/*! ./InstagramListItem */ 950);\n\nvar _InstagramListItem2 = _interopRequireDefault(_InstagramListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar InstagramList = function InstagramList(_ref) {\n  var images = _ref.images;\n\n  var renderedList = images[0] ? images[0].data : [];\n  if (images[0]) {\n    console.log('images 0 =>', images[0].data);\n    console.log('renderedList', renderedList);\n  }\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Grid,\n      { centered: true, divided: 'vertically' },\n      _react2.default.createElement(\n        _semanticUiReact.Grid.Row,\n        { columns: 3, stretched: true, textAlign: 'center' },\n        renderedList.map(function (item, i) {\n          console.log('item =>', item.images.low_resolution.url);\n          _react2.default.createElement(\n            _semanticUiReact.Grid.Column,\n            null,\n            _react2.default.createElement(_InstagramListItem2.default, { image: item.images.low_resolution.url })\n          );\n        })\n      )\n    )\n  );\n};\n\nexports.default = InstagramList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9JbnN0YWdyYW1MaXN0LmpzP2JlNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IEluc3RhZ3JhbUxpc3RJdGVtIGZyb20gJy4vSW5zdGFncmFtTGlzdEl0ZW0nXG5cbmNvbnN0IEluc3RhZ3JhbUxpc3QgPSAoe2ltYWdlc30pID0+IHtcbiAgbGV0IHJlbmRlcmVkTGlzdCA9IGltYWdlc1swXSA/IGltYWdlc1swXS5kYXRhIDogW107XG4gIGlmIChpbWFnZXNbMF0pIHtcbiAgICBjb25zb2xlLmxvZygnaW1hZ2VzIDAgPT4nLCBpbWFnZXNbMF0uZGF0YSk7XG4gICAgY29uc29sZS5sb2coJ3JlbmRlcmVkTGlzdCcsIHJlbmRlcmVkTGlzdClcblxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHcmlkIGNlbnRlcmVkPXt0cnVlfSBkaXZpZGVkPSd2ZXJ0aWNhbGx5Jz5cbiAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezN9IHN0cmV0Y2hlZD17dHJ1ZX0gdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAge3JlbmRlcmVkTGlzdC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtID0+JywgaXRlbS5pbWFnZXMubG93X3Jlc29sdXRpb24udXJsKTtcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPEluc3RhZ3JhbUxpc3RJdGVtIGltYWdlPXtpdGVtLmltYWdlcy5sb3dfcmVzb2x1dGlvbi51cmx9IC8+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFncmFtTGlzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9JbnN0YWdyYW1MaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBREE7QUFEQTtBQWNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///947\n");

/***/ })

})