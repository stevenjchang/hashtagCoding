webpackHotUpdate(0,{

/***/ 230:
/*!*****************************************!*\
  !*** ./client/src/components/Footer.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _FilterLink = __webpack_require__(/*! ../containers/FilterLink */ 235);\n\nvar _FilterLink2 = _interopRequireDefault(_FilterLink);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Footer = function Footer() {\n  return _react2.default.createElement(\n    'p',\n    null,\n    'Show:',\n    ' ',\n    _react2.default.createElement(\n      _FilterLink2.default,\n      { filter: 'SHOW_ALL' },\n      'All'\n    ),\n    ', ',\n    _react2.default.createElement(\n      _FilterLink2.default,\n      { filter: 'SHOW_ACTIVE' },\n      'Active'\n    ),\n    ', ',\n    _react2.default.createElement(\n      _FilterLink2.default,\n      { filter: 'SHOW_COMPLETED' },\n      'Completed'\n    )\n  );\n};\n\nexports.default = Footer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9Gb290ZXIuanM/YmU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tICcuLi9jb250YWluZXJzL0ZpbHRlckxpbmsnXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPHA+XG4gICAgU2hvdzpcbiAgICB7JyAnfVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj1cIlNIT1dfQUxMXCI+XG4gICAgICBBbGxcbiAgICA8L0ZpbHRlckxpbms+XG4gICAgeycsICd9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPVwiU0hPV19BQ1RJVkVcIj5cbiAgICAgIEFjdGl2ZVxuICAgIDwvRmlsdGVyTGluaz5cbiAgICB7JywgJ31cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9XCJTSE9XX0NPTVBMRVRFRFwiPlxuICAgICAgQ29tcGxldGVkXG4gICAgPC9GaWx0ZXJMaW5rPlxuICA8L3A+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBREE7QUFDQTtBQWlCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///230\n");

/***/ }),

/***/ 235:
/*!*********************************************!*\
  !*** ./client/src/containers/FilterLink.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 52);\n\nvar _actions = __webpack_require__(/*! ../actions */ 97);\n\nvar _Link = __webpack_require__(/*! ../components/Link */ 236);\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return {\n    active: ownProps.filter === state.visibilityFilter\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    onClick: function onClick() {\n      dispatch((0, _actions.setVisibilityFilter)(ownProps.filter));\n    }\n  };\n};\n\nvar FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Link2.default);\n\nexports.default = FilterLink;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9GaWx0ZXJMaW5rLmpzP2ZiYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21wb25lbnRzL0xpbmsnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmU6IG93blByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRWaXNpYmlsaXR5RmlsdGVyKG93blByb3BzLmZpbHRlcikpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEZpbHRlckxpbmsgPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShMaW5rKVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJMaW5rXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb250YWluZXJzL0ZpbHRlckxpbmsuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///235\n");

/***/ }),

/***/ 236:
/*!***************************************!*\
  !*** ./client/src/components/Link.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 33);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Link = function Link(_ref) {\n  var active = _ref.active,\n      children = _ref.children,\n      _onClick = _ref.onClick;\n\n  if (active) {\n    return _react2.default.createElement(\n      'span',\n      null,\n      children\n    );\n  }\n\n  return _react2.default.createElement(\n    'a',\n    {\n      href: '#',\n      onClick: function onClick(e) {\n        e.preventDefault();\n        _onClick();\n      }\n    },\n    children\n  );\n};\n\nLink.propTypes = {\n  active: _propTypes2.default.bool.isRequired,\n  children: _propTypes2.default.node.isRequired,\n  onClick: _propTypes2.default.func.isRequired\n};\n\nexports.default = Link;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9MaW5rLmpzPzkxZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBMaW5rID0gKHsgYWN0aXZlLCBjaGlsZHJlbiwgb25DbGljayB9KSA9PiB7XG4gIGlmIChhY3RpdmUpIHtcbiAgICByZXR1cm4gPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9XCIjXCJcbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgb25DbGljaygpXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gIClcbn1cblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9MaW5rLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///236\n");

/***/ })

})