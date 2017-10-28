webpackHotUpdate(0,{

/***/ 941:
/*!******************************************************************!*\
  !*** ./client/src/components/redux_components/CraigslistList.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 82);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 103);\n\nvar _CraigslistListItem = __webpack_require__(/*! ./CraigslistListItem */ 942);\n\nvar _CraigslistListItem2 = _interopRequireDefault(_CraigslistListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const CraigslistList_old = ({ todos, onButtonClick }) => (\n//   <ul>\n//     {todos.map(todo => (\n//       <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />\n//     ))}\n//   </ul>\n// )\n\nvar CraigslistList = function CraigslistList(_ref) {\n  var list = _ref.list,\n      onButtonClick = _ref.onButtonClick;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Button,\n      { inverted: true, color: 'purple', onClick: onButtonClick },\n      'onButtonClick'\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Grid,\n      { centered: true, divided: 'vertically' },\n      _react2.default.createElement(\n        _semanticUiReact.Grid.Row,\n        { columns: 3, stretched: true, textAlign: 'center' },\n        list.map(function (item, i) {\n          return _react2.default.createElement(\n            _semanticUiReact.Grid.Column,\n            null,\n            _react2.default.createElement(_CraigslistListItem2.default, { item: item, key: i })\n          );\n        })\n      )\n    )\n  );\n};\n\n// CraigslistList.propTypes = {\n//   todos: PropTypes.arrayOf(\n//     PropTypes.shape({\n//       id: PropTypes.number.isRequired,\n//       completed: PropTypes.bool.isRequired,\n//       text: PropTypes.string.isRequired\n//     }).isRequired\n//   ).isRequired,\n//   onTodoClick: PropTypes.func.isRequired\n// }\n\nexports.default = CraigslistList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZWR1eF9jb21wb25lbnRzL0NyYWlnc2xpc3RMaXN0LmpzPzUxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IENyYWlnc2xpc3RMaXN0SXRlbSBmcm9tICcuL0NyYWlnc2xpc3RMaXN0SXRlbSdcblxuLy8gY29uc3QgQ3JhaWdzbGlzdExpc3Rfb2xkID0gKHsgdG9kb3MsIG9uQnV0dG9uQ2xpY2sgfSkgPT4gKFxuLy8gICA8dWw+XG4vLyAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcbi8vICAgICAgIDxUb2RvIGtleT17dG9kby5pZH0gey4uLnRvZG99IG9uQ2xpY2s9eygpID0+IG9uVG9kb0NsaWNrKHRvZG8uaWQpfSAvPlxuLy8gICAgICkpfVxuLy8gICA8L3VsPlxuLy8gKVxuXG5jb25zdCBDcmFpZ3NsaXN0TGlzdCA9ICh7IGxpc3QsIG9uQnV0dG9uQ2xpY2sgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxCdXR0b24gaW52ZXJ0ZWQgY29sb3I9J3B1cnBsZScgb25DbGljaz17b25CdXR0b25DbGlja30+b25CdXR0b25DbGljazwvQnV0dG9uPlxuICAgIDxHcmlkIGNlbnRlcmVkPXt0cnVlfSBkaXZpZGVkPSd2ZXJ0aWNhbGx5Jz5cbiAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXszfSBzdHJldGNoZWQ9e3RydWV9IHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICB7XG4gICAgICAgICAgbGlzdC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8Q3JhaWdzbGlzdExpc3RJdGVtIGl0ZW09e2l0ZW19IGtleT17aX0+PC9DcmFpZ3NsaXN0TGlzdEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPil9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L0dyaWQuUm93PlxuICAgIDwvR3JpZD5cbiAgPC9kaXY+XG4pXG5cblxuXG4vLyBDcmFpZ3NsaXN0TGlzdC5wcm9wVHlwZXMgPSB7XG4vLyAgIHRvZG9zOiBQcm9wVHlwZXMuYXJyYXlPZihcbi8vICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuLy8gICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgICAgIGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbi8vICAgICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuLy8gICAgIH0pLmlzUmVxdWlyZWRcbi8vICAgKS5pc1JlcXVpcmVkLFxuLy8gICBvblRvZG9DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBDcmFpZ3NsaXN0TGlzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9yZWR1eF9jb21wb25lbnRzL0NyYWlnc2xpc3RMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBTkE7QUFEQTtBQUZBO0FBREE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///941\n");

/***/ })

})