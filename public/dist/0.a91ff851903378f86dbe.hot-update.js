webpackHotUpdate(0,{

/***/ 942:
false,

/***/ 960:
/*!**************************************!*\
  !*** ./client/src/components/App.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ButtonMenu = __webpack_require__(/*! ../containers/ButtonMenu */ 950);\n\nvar _ButtonMenu2 = _interopRequireDefault(_ButtonMenu);\n\nvar _Contentful = __webpack_require__(/*! ../containers/Contentful */ 954);\n\nvar _Contentful2 = _interopRequireDefault(_Contentful);\n\nvar _Craigslist = __webpack_require__(/*! ./../containers/Craigslist */ 959);\n\nvar _Craigslist2 = _interopRequireDefault(_Craigslist);\n\nvar _MenuBar = __webpack_require__(/*! ./MenuBar */ 961);\n\nvar _MenuBar2 = _interopRequireDefault(_MenuBar);\n\nvar _Instagram = __webpack_require__(/*! ../containers/Instagram */ 947);\n\nvar _Instagram2 = _interopRequireDefault(_Instagram);\n\nvar _Twitter = __webpack_require__(/*! ./../containers/Twitter */ 945);\n\nvar _Twitter2 = _interopRequireDefault(_Twitter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_MenuBar2.default, null),\n    _react2.default.createElement(_ButtonMenu2.default, null),\n    _react2.default.createElement(_Contentful2.default, null),\n    _react2.default.createElement(_Instagram2.default, null),\n    _react2.default.createElement(_Twitter2.default, null),\n    _react2.default.createElement(_Craigslist2.default, null)\n  );\n};\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanM/MzZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uTWVudSBmcm9tICcuLi9jb250YWluZXJzL0J1dHRvbk1lbnUnXG5pbXBvcnQgQ29udGVudGZ1bCBmcm9tICcuLi9jb250YWluZXJzL0NvbnRlbnRmdWwnXG5pbXBvcnQgQ3JhaWdzbGlzdCBmcm9tICcuLy4uL2NvbnRhaW5lcnMvQ3JhaWdzbGlzdCdcbmltcG9ydCBNZW51YmFyIGZyb20gJy4vTWVudUJhcidcbmltcG9ydCBJbnN0YWdyYW0gZnJvbSAnLi4vY29udGFpbmVycy9JbnN0YWdyYW0nXG5pbXBvcnQgVHdpdHRlciBmcm9tICcuLy4uL2NvbnRhaW5lcnMvVHdpdHRlcidcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxNZW51YmFyIC8+XG4gICAgPEJ1dHRvbk1lbnUgLz5cbiAgICA8Q29udGVudGZ1bCAvPlxuICAgIDxJbnN0YWdyYW0gLz5cbiAgICA8VHdpdHRlciAvPlxuICAgIDxDcmFpZ3NsaXN0IC8+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQUNBO0FBVUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///960\n");

/***/ }),

/***/ 961:
/*!******************************************!*\
  !*** ./client/src/components/MenuBar.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 49);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MenuBar = function (_React$Component) {\n  _inherits(MenuBar, _React$Component);\n\n  function MenuBar() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, MenuBar);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuBar.__proto__ || Object.getPrototypeOf(MenuBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: 'home' }, _this.handleItemClick = function (e, _ref2) {\n      var name = _ref2.name;\n      return _this.setState({ activeItem: name });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(MenuBar, [{\n    key: 'render',\n    value: function render() {\n      var _React$createElement;\n\n      var activeItem = this.state.activeItem;\n\n\n      return _react2.default.createElement(\n        _semanticUiReact.Segment,\n        { inverted: true, color: 'blue' },\n        _react2.default.createElement(\n          _semanticUiReact.Menu,\n          (_React$createElement = { inverted: true, secondary: true, color: 'blue' }, _defineProperty(_React$createElement, 'inverted', true), _defineProperty(_React$createElement, 'widths', 7), _React$createElement),\n          _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'home', active: activeItem === 'home', onClick: this.handleItemClick }),\n          _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'messages', active: activeItem === 'messages', onClick: this.handleItemClick }),\n          _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'friends', active: activeItem === 'friends', onClick: this.handleItemClick }),\n          _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'about', active: activeItem === 'about', onClick: this.handleItemClick }),\n          _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'projects', active: activeItem === 'projects', onClick: this.handleItemClick })\n        )\n      );\n    }\n  }]);\n\n  return MenuBar;\n}(_react2.default.Component);\n\nexports.default = MenuBar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9NZW51QmFyLmpzPzMwZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWVudSwgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jbGFzcyBNZW51QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGFjdGl2ZUl0ZW06ICdob21lJyB9XG5cbiAgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogbmFtZSB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VnbWVudCBpbnZlcnRlZCBjb2xvcj0nYmx1ZSc+XG4gICAgICAgIDxNZW51IGludmVydGVkIHNlY29uZGFyeSBjb2xvcj0nYmx1ZScgaW52ZXJ0ZWQgd2lkdGhzPXs3fT5cbiAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2hvbWUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cbiAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J21lc3NhZ2VzJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdtZXNzYWdlcyd9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxuICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nZnJpZW5kcycgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnZnJpZW5kcyd9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfSAvPlxuICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nYWJvdXQnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2Fib3V0J30gb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9IC8+XG4gICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcm9qZWN0cycgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJvamVjdHMnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30gLz5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9TZWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51QmFyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb21wb25lbnRzL01lbnVCYXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVVBOzs7O0FBbkJBO0FBQ0E7QUFxQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///961\n");

/***/ })

})