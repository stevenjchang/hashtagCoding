webpackHotUpdate(0,{

/***/ 288:
/*!******************************************************************!*\
  !*** ./client/src/components/redux_components/CraigslistList.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 69);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 104);\n\nvar _CraigslistListItem = __webpack_require__(/*! ./CraigslistListItem */ 933);\n\nvar _CraigslistListItem2 = _interopRequireDefault(_CraigslistListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const CraigslistList_old = ({ todos, onButtonClick }) => (\n//   <ul>\n//     {todos.map(todo => (\n//       <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />\n//     ))}\n//   </ul>\n// )\n\nvar CraigslistList = function CraigslistList(_ref) {\n  var list = _ref.list,\n      onButtonClick = _ref.onButtonClick;\n\n  var renderedList = list[0] ? list[0] : [];\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Button,\n      { inverted: true, color: 'purple', onClick: onButtonClick },\n      'onButtonClick'\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Grid,\n      { centered: true, divided: 'vertically' },\n      _react2.default.createElement(\n        _semanticUiReact.Grid.Row,\n        { columns: 3, stretched: true, textAlign: 'center' },\n        list.map(function (item, i) {\n          return _react2.default.createElement(\n            _semanticUiReact.Grid.Column,\n            null,\n            _react2.default.createElement(_CraigslistListItem2.default, { item: item, key: i })\n          );\n        })\n      )\n    )\n  );\n};\n\n// CraigslistList.propTypes = {\n//   todos: PropTypes.arrayOf(\n//     PropTypes.shape({\n//       id: PropTypes.number.isRequired,\n//       completed: PropTypes.bool.isRequired,\n//       text: PropTypes.string.isRequired\n//     }).isRequired\n//   ).isRequired,\n//   onTodoClick: PropTypes.func.isRequired\n// }\n\nexports.default = CraigslistList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZWR1eF9jb21wb25lbnRzL0NyYWlnc2xpc3RMaXN0LmpzPzUxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IENyYWlnc2xpc3RMaXN0SXRlbSBmcm9tICcuL0NyYWlnc2xpc3RMaXN0SXRlbSdcblxuLy8gY29uc3QgQ3JhaWdzbGlzdExpc3Rfb2xkID0gKHsgdG9kb3MsIG9uQnV0dG9uQ2xpY2sgfSkgPT4gKFxuLy8gICA8dWw+XG4vLyAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcbi8vICAgICAgIDxUb2RvIGtleT17dG9kby5pZH0gey4uLnRvZG99IG9uQ2xpY2s9eygpID0+IG9uVG9kb0NsaWNrKHRvZG8uaWQpfSAvPlxuLy8gICAgICkpfVxuLy8gICA8L3VsPlxuLy8gKVxuXG5jb25zdCBDcmFpZ3NsaXN0TGlzdCA9ICh7IGxpc3QsIG9uQnV0dG9uQ2xpY2sgfSkgPT4ge1xuICBsZXQgcmVuZGVyZWRMaXN0ID0gbGlzdFswXSA/IGxpc3RbMF0gOiBbXTtcbiAgcmV0dXJuIChcbiAgPGRpdj5cbiAgICA8QnV0dG9uIGludmVydGVkIGNvbG9yPSdwdXJwbGUnIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9Pm9uQnV0dG9uQ2xpY2s8L0J1dHRvbj5cbiAgICA8R3JpZCBjZW50ZXJlZD17dHJ1ZX0gZGl2aWRlZD0ndmVydGljYWxseSc+XG4gICAgICA8R3JpZC5Sb3cgY29sdW1ucz17M30gc3RyZXRjaGVkPXt0cnVlfSB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAge1xuICAgICAgICAgIGxpc3QubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPENyYWlnc2xpc3RMaXN0SXRlbSBpdGVtPXtpdGVtfSBrZXk9e2l9PjwvQ3JhaWdzbGlzdExpc3RJdGVtPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj4pfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9HcmlkLlJvdz5cbiAgICA8L0dyaWQ+XG4gIDwvZGl2PlxuICApXG59XG5cblxuXG4vLyBDcmFpZ3NsaXN0TGlzdC5wcm9wVHlwZXMgPSB7XG4vLyAgIHRvZG9zOiBQcm9wVHlwZXMuYXJyYXlPZihcbi8vICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuLy8gICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgICAgIGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbi8vICAgICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuLy8gICAgIH0pLmlzUmVxdWlyZWRcbi8vICAgKS5pc1JlcXVpcmVkLFxuLy8gICBvblRvZG9DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBDcmFpZ3NsaXN0TGlzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9yZWR1eF9jb21wb25lbnRzL0NyYWlnc2xpc3RMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQU5BO0FBREE7QUFGQTtBQWdCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///288\n");

/***/ })

})