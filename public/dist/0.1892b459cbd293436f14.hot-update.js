webpackHotUpdate(0,{

/***/ 288:
false,

/***/ 936:
false,

/***/ 944:
/*!**********************************************!*\
  !*** ./client/src/containers/Craigslist.jsx ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 39);\n\nvar _actions = __webpack_require__(/*! ../actions */ 48);\n\nvar _CraigslistList = __webpack_require__(/*! ../components/CraigslistList */ 957);\n\nvar _CraigslistList2 = _interopRequireDefault(_CraigslistList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const getVisibleTodos = (todos, filter) => {\n//   switch (filter) {\n//     case 'SHOW_ALL':\n//       return todos\n//     case 'SHOW_COMPLETED':\n//       return todos.filter(t => t.completed)\n//     case 'SHOW_ACTIVE':\n//       return todos.filter(t => !t.completed)\n//   }\n// }\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.craigslist\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onButtonClick: function onButtonClick() {\n      dispatch((0, _actions.getCraigslistFeed)());\n    }\n  };\n};\n\nvar Craigslist = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CraigslistList2.default);\n\nexports.default = Craigslist;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9DcmFpZ3NsaXN0LmpzeD82MWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldENyYWlnc2xpc3RGZWVkIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBDcmFpZ3NsaXN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0NyYWlnc2xpc3RMaXN0J1xuXG4vLyBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuLy8gICBzd2l0Y2ggKGZpbHRlcikge1xuLy8gICAgIGNhc2UgJ1NIT1dfQUxMJzpcbi8vICAgICAgIHJldHVybiB0b2Rvc1xuLy8gICAgIGNhc2UgJ1NIT1dfQ09NUExFVEVEJzpcbi8vICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIodCA9PiB0LmNvbXBsZXRlZClcbi8vICAgICBjYXNlICdTSE9XX0FDVElWRSc6XG4vLyAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKHQgPT4gIXQuY29tcGxldGVkKVxuLy8gICB9XG4vLyB9XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsaXN0OiBzdGF0ZS5jcmFpZ3NsaXN0XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQnV0dG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldENyYWlnc2xpc3RGZWVkKCkpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IENyYWlnc2xpc3QgPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShDcmFpZ3NsaXN0TGlzdClcblxuZXhwb3J0IGRlZmF1bHQgQ3JhaWdzbGlzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29udGFpbmVycy9DcmFpZ3NsaXN0LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///944\n");

/***/ }),

/***/ 957:
/*!*************************************************!*\
  !*** ./client/src/components/CraigslistList.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 60);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 49);\n\nvar _CraigslistListItem = __webpack_require__(/*! ./CraigslistListItem */ 958);\n\nvar _CraigslistListItem2 = _interopRequireDefault(_CraigslistListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CraigslistList = function CraigslistList(_ref) {\n  var list = _ref.list,\n      onButtonClick = _ref.onButtonClick;\n\n  var renderedList = list[0] ? list[0] : [];\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Grid,\n      { centered: true, divided: 'vertically' },\n      _react2.default.createElement(\n        _semanticUiReact.Grid.Row,\n        { columns: 3, stretched: true, textAlign: 'center' },\n        renderedList.map(function (item, i) {\n          return _react2.default.createElement(\n            _semanticUiReact.Grid.Column,\n            null,\n            _react2.default.createElement(_CraigslistListItem2.default, { item: item, key: i })\n          );\n        })\n      )\n    )\n  );\n};\n\nexports.default = CraigslistList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdC5qcz9kNDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEdyaWQsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBDcmFpZ3NsaXN0TGlzdEl0ZW0gZnJvbSAnLi9DcmFpZ3NsaXN0TGlzdEl0ZW0nXG5cbmNvbnN0IENyYWlnc2xpc3RMaXN0ID0gKHsgbGlzdCwgb25CdXR0b25DbGljayB9KSA9PiB7XG4gIGxldCByZW5kZXJlZExpc3QgPSBsaXN0WzBdID8gbGlzdFswXSA6IFtdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8R3JpZCBjZW50ZXJlZD17dHJ1ZX0gZGl2aWRlZD0ndmVydGljYWxseSc+XG4gICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXszfSBzdHJldGNoZWQ9e3RydWV9IHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIHtyZW5kZXJlZExpc3QubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENyYWlnc2xpc3RMaXN0SXRlbSBpdGVtPXtpdGVtfSBrZXk9e2l9PjwvQ3JhaWdzbGlzdExpc3RJdGVtPlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPil9XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmFpZ3NsaXN0TGlzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBTEE7QUFEQTtBQURBO0FBYUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///957\n");

/***/ }),

/***/ 958:
/*!*****************************************************!*\
  !*** ./client/src/components/CraigslistListItem.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 49);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CraigslistListItem = function CraigslistListItem(_ref) {\n  var item = _ref.item;\n\n  return _react2.default.createElement(\n    _semanticUiReact.Card.Group,\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Card,\n      { fluid: true },\n      _react2.default.createElement(\n        _semanticUiReact.Card.Content,\n        null,\n        _react2.default.createElement(\n          'h3',\n          null,\n          item.title\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          item.neighborhood,\n          ' ~ ',\n          _react2.default.createElement(\n            'span',\n            { style: { color: \"red\" } },\n            item.price\n          )\n        ),\n        item.images ? _react2.default.createElement(_semanticUiReact.Image, { src: 'https://images.craigslist.org/' + item.images.split(',')[0].substring(2) + '_300x300.jpg' }) : _react2.default.createElement(\n          'p',\n          null,\n          'No image'\n        ),\n        _react2.default.createElement(\n          'a',\n          { href: item.href },\n          _react2.default.createElement(\n            'p',\n            null,\n            'link'\n          )\n        ),\n        _react2.default.createElement('br', null)\n      )\n    )\n  );\n};\n\nexports.default = CraigslistListItem;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTU4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdEl0ZW0uanM/NDI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkLCBJY29uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBDcmFpZ3NsaXN0TGlzdEl0ZW0gPSAoe2l0ZW19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENhcmQuR3JvdXA+XG4gICAgICA8Q2FyZCBmbHVpZD17dHJ1ZX0+XG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHA+e2l0ZW0ubmVpZ2hib3Job29kfSB+IDxzcGFuIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT57aXRlbS5wcmljZX08L3NwYW4+PC9wPlxuICAgICAgICAgIHsoaXRlbS5pbWFnZXMpID8gPEltYWdlIHNyYz17J2h0dHBzOi8vaW1hZ2VzLmNyYWlnc2xpc3Qub3JnLycgKyBpdGVtLmltYWdlcy5zcGxpdCgnLCcpWzBdLnN1YnN0cmluZygyKSArICdfMzAweDMwMC5qcGcnfT48L0ltYWdlPiA6IDxwPk5vIGltYWdlPC9wPn1cbiAgICAgICAgICA8YSBocmVmPXtpdGVtLmhyZWZ9PjxwPmxpbms8L3A+PC9hPlxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NhcmQuR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JhaWdzbGlzdExpc3RJdGVtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdEl0ZW0uanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFEQTtBQURBO0FBWUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///958\n");

/***/ })

})