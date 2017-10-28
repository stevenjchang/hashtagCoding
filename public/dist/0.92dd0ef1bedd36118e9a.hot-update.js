webpackHotUpdate(0,{

/***/ 170:
/*!******************************************************************!*\
  !*** ./client/src/components/redux_components/CraigslistList.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 70);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 103);\n\nvar _CraigslistListItem = __webpack_require__(/*! ./CraigslistListItem */ 933);\n\nvar _CraigslistListItem2 = _interopRequireDefault(_CraigslistListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CraigslistList = function CraigslistList(_ref) {\n  var list = _ref.list,\n      onButtonClick = _ref.onButtonClick;\n\n  var renderedList = list[0] ? list[0] : [];\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Button,\n      { inverted: true, color: 'purple', onClick: onButtonClick },\n      'onButtonClick'\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Grid,\n      { centered: true, divided: 'vertically' },\n      _react2.default.createElement(\n        _semanticUiReact.Grid.Row,\n        { columns: 3, stretched: true, textAlign: 'center' },\n        renderedList.map(function (item, i) {\n          return _react2.default.createElement(\n            _semanticUiReact.Grid.Column,\n            null,\n            _react2.default.createElement(_CraigslistListItem2.default, { item: item, key: i })\n          );\n        })\n      )\n    )\n  );\n};\n\n// CraigslistList.propTypes = {\n//   todos: PropTypes.arrayOf(\n//     PropTypes.shape({\n//       id: PropTypes.number.isRequired,\n//       completed: PropTypes.bool.isRequired,\n//       text: PropTypes.string.isRequired\n//     }).isRequired\n//   ).isRequired,\n//   onTodoClick: PropTypes.func.isRequired\n// }\n\nexports.default = CraigslistList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZWR1eF9jb21wb25lbnRzL0NyYWlnc2xpc3RMaXN0LmpzPzUxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IENyYWlnc2xpc3RMaXN0SXRlbSBmcm9tICcuL0NyYWlnc2xpc3RMaXN0SXRlbSdcblxuY29uc3QgQ3JhaWdzbGlzdExpc3QgPSAoeyBsaXN0LCBvbkJ1dHRvbkNsaWNrIH0pID0+IHtcbiAgbGV0IHJlbmRlcmVkTGlzdCA9IGxpc3RbMF0gPyBsaXN0WzBdIDogW107XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gaW52ZXJ0ZWQgY29sb3I9J3B1cnBsZScgb25DbGljaz17b25CdXR0b25DbGlja30+b25CdXR0b25DbGljazwvQnV0dG9uPlxuICAgICAgPEdyaWQgY2VudGVyZWQ9e3RydWV9IGRpdmlkZWQ9J3ZlcnRpY2FsbHknPlxuICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17M30gc3RyZXRjaGVkPXt0cnVlfSB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICB7cmVuZGVyZWRMaXN0Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDcmFpZ3NsaXN0TGlzdEl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpfT48L0NyYWlnc2xpc3RMaXN0SXRlbT5cbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj4pfVxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbi8vIENyYWlnc2xpc3RMaXN0LnByb3BUeXBlcyA9IHtcbi8vICAgdG9kb3M6IFByb3BUeXBlcy5hcnJheU9mKFxuLy8gICAgIFByb3BUeXBlcy5zaGFwZSh7XG4vLyAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICAgICAgY29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuLy8gICAgICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4vLyAgICAgfSkuaXNSZXF1aXJlZFxuLy8gICApLmlzUmVxdWlyZWQsXG4vLyAgIG9uVG9kb0NsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IENyYWlnc2xpc3RMaXN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb21wb25lbnRzL3JlZHV4X2NvbXBvbmVudHMvQ3JhaWdzbGlzdExpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFMQTtBQURBO0FBRkE7QUFjQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///170\n");

/***/ })

})