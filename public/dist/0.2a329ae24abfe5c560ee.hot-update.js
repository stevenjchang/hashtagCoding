webpackHotUpdate(0,{

/***/ 947:
/*!************************************************!*\
  !*** ./client/src/components/InstagramList.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 71);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 72);\n\nvar _InstagramListItem = __webpack_require__(/*! ./InstagramListItem */ 950);\n\nvar _InstagramListItem2 = _interopRequireDefault(_InstagramListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar InstagramList = function InstagramList(_ref) {\n  var images = _ref.images;\n\n  var renderedList = images[0] ? images[0].data : [];\n  if (images[0]) {\n    console.log('images 0 =>', images[0].data);\n    console.log('renderedList', renderedList);\n  }\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Grid,\n      { centered: true, divided: 'vertically' },\n      _react2.default.createElement(\n        _semanticUiReact.Grid.Row,\n        { columns: 3, stretched: true, textAlign: 'center' },\n        renderedList.map(function (item, i) {\n          return _react2.default.createElement(\n            _semanticUiReact.Grid.Column,\n            null,\n            _react2.default.createElement(_InstagramListItem2.default, { item: item, key: i })\n          );\n        })\n      )\n    )\n  );\n};\n\nexports.default = InstagramList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9JbnN0YWdyYW1MaXN0LmpzP2JlNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IEluc3RhZ3JhbUxpc3RJdGVtIGZyb20gJy4vSW5zdGFncmFtTGlzdEl0ZW0nXG5cbmNvbnN0IEluc3RhZ3JhbUxpc3QgPSAoe2ltYWdlc30pID0+IHtcbiAgbGV0IHJlbmRlcmVkTGlzdCA9IGltYWdlc1swXSA/IGltYWdlc1swXS5kYXRhIDogW107XG4gIGlmIChpbWFnZXNbMF0pIHtcbiAgICBjb25zb2xlLmxvZygnaW1hZ2VzIDAgPT4nLCBpbWFnZXNbMF0uZGF0YSk7XG4gICAgY29uc29sZS5sb2coJ3JlbmRlcmVkTGlzdCcsIHJlbmRlcmVkTGlzdClcblxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHcmlkIGNlbnRlcmVkPXt0cnVlfSBkaXZpZGVkPSd2ZXJ0aWNhbGx5Jz5cbiAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezN9IHN0cmV0Y2hlZD17dHJ1ZX0gdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAge3JlbmRlcmVkTGlzdC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8SW5zdGFncmFtTGlzdEl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpfSAvPlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPil9XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YWdyYW1MaXN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb21wb25lbnRzL0luc3RhZ3JhbUxpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUxBO0FBREE7QUFEQTtBQWFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///947\n");

/***/ })

})