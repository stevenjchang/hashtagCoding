webpackHotUpdate(0,{

/***/ 288:
/*!******************************************************************!*\
  !*** ./client/src/components/redux_components/CraigslistList.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 69);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 104);\n\nvar _CraigslistListItem = __webpack_require__(/*! ./CraigslistListItem */ 933);\n\nvar _CraigslistListItem2 = _interopRequireDefault(_CraigslistListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const CraigslistList_old = ({ todos, onButtonClick }) => (\n//   <ul>\n//     {todos.map(todo => (\n//       <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />\n//     ))}\n//   </ul>\n// )\n\nvar CraigslistList = function CraigslistList(_ref) {\n  var state = _ref.state,\n      onButtonClick = _ref.onButtonClick;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Button,\n      { inverted: true, color: 'purple', onClick: onButtonClick },\n      'onButtonClick'\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Grid,\n      { centered: true, divided: 'vertically' },\n      _react2.default.createElement(\n        _semanticUiReact.Grid.Row,\n        { columns: 3, stretched: true, textAlign: 'center' },\n        state.map(function (item, i) {\n          return _react2.default.createElement(\n            _semanticUiReact.Grid.Column,\n            null,\n            _react2.default.createElement(_CraigslistListItem2.default, { item: item, key: i })\n          );\n        })\n      )\n    )\n  );\n};\n\n// CraigslistList.propTypes = {\n//   todos: PropTypes.arrayOf(\n//     PropTypes.shape({\n//       id: PropTypes.number.isRequired,\n//       completed: PropTypes.bool.isRequired,\n//       text: PropTypes.string.isRequired\n//     }).isRequired\n//   ).isRequired,\n//   onTodoClick: PropTypes.func.isRequired\n// }\n\nexports.default = CraigslistList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZWR1eF9jb21wb25lbnRzL0NyYWlnc2xpc3RMaXN0LmpzPzUxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IENyYWlnc2xpc3RMaXN0SXRlbSBmcm9tICcuL0NyYWlnc2xpc3RMaXN0SXRlbSdcblxuLy8gY29uc3QgQ3JhaWdzbGlzdExpc3Rfb2xkID0gKHsgdG9kb3MsIG9uQnV0dG9uQ2xpY2sgfSkgPT4gKFxuLy8gICA8dWw+XG4vLyAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcbi8vICAgICAgIDxUb2RvIGtleT17dG9kby5pZH0gey4uLnRvZG99IG9uQ2xpY2s9eygpID0+IG9uVG9kb0NsaWNrKHRvZG8uaWQpfSAvPlxuLy8gICAgICkpfVxuLy8gICA8L3VsPlxuLy8gKVxuXG5jb25zdCBDcmFpZ3NsaXN0TGlzdCA9ICh7IHN0YXRlLCBvbkJ1dHRvbkNsaWNrIH0pID0+IChcbiAgPGRpdj5cbiAgICA8QnV0dG9uIGludmVydGVkIGNvbG9yPSdwdXJwbGUnIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9Pm9uQnV0dG9uQ2xpY2s8L0J1dHRvbj5cbiAgICA8R3JpZCBjZW50ZXJlZD17dHJ1ZX0gZGl2aWRlZD0ndmVydGljYWxseSc+XG4gICAgICA8R3JpZC5Sb3cgY29sdW1ucz17M30gc3RyZXRjaGVkPXt0cnVlfSB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAge1xuICAgICAgICAgIHN0YXRlLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDxDcmFpZ3NsaXN0TGlzdEl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpfT48L0NyYWlnc2xpc3RMaXN0SXRlbT5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+KX1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvR3JpZC5Sb3c+XG4gICAgPC9HcmlkPlxuICA8L2Rpdj5cbilcblxuXG5cbi8vIENyYWlnc2xpc3RMaXN0LnByb3BUeXBlcyA9IHtcbi8vICAgdG9kb3M6IFByb3BUeXBlcy5hcnJheU9mKFxuLy8gICAgIFByb3BUeXBlcy5zaGFwZSh7XG4vLyAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICAgICAgY29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuLy8gICAgICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4vLyAgICAgfSkuaXNSZXF1aXJlZFxuLy8gICApLmlzUmVxdWlyZWQsXG4vLyAgIG9uVG9kb0NsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IENyYWlnc2xpc3RMaXN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb21wb25lbnRzL3JlZHV4X2NvbXBvbmVudHMvQ3JhaWdzbGlzdExpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFOQTtBQURBO0FBRkE7QUFEQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///288\n");

/***/ })

})