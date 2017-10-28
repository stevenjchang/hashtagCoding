webpackHotUpdate(0,{

/***/ 891:
/*!**************************************************!*\
  !*** ./client/src/components/CraigslistList.jsx ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 99);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 271);\n\nvar _CraigslistListItem = __webpack_require__(/*! ./CraigslistListItem.jsx */ 892);\n\nvar _CraigslistListItem2 = _interopRequireDefault(_CraigslistListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CraigslistList = function (_React$Component) {\n  _inherits(CraigslistList, _React$Component);\n\n  function CraigslistList(props) {\n    _classCallCheck(this, CraigslistList);\n\n    var _this = _possibleConstructorReturn(this, (CraigslistList.__proto__ || Object.getPrototypeOf(CraigslistList)).call(this, props));\n\n    _this.state = {\n      result: []\n    };\n\n    _this.getCraigslist = _this.getCraigslist.bind(_this);\n    return _this;\n  }\n\n  _createClass(CraigslistList, [{\n    key: 'getCraigslist',\n    value: function getCraigslist() {\n      var _this2 = this;\n\n      _axios2.default.get('/craigslist_scraper').then(function (result) {\n        console.log('craigslist =>', result.data);\n        _this2.setState({ result: result.data });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'button',\n          { onClick: this.getCraigslist },\n          'Fetch CraigsList'\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Grid,\n          { centered: true },\n          _react2.default.createElement(\n            _semanticUiReact.Grid.Row,\n            { columns: 3, divided: 'horizontally', stretched: true, textAlign: 'center' },\n            this.state.result.map(function (item, i) {\n              return _react2.default.createElement(\n                _semanticUiReact.Grid.Column,\n                null,\n                _react2.default.createElement(_CraigslistListItem2.default, { item: item, key: i })\n              );\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return CraigslistList;\n}(_react2.default.Component);\n\nexports.default = CraigslistList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdC5qc3g/NTY2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBHcmlkLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IENyYWlnc2xpc3RMaXN0SXRlbSBmcm9tICcuL0NyYWlnc2xpc3RMaXN0SXRlbS5qc3gnXG5cbmNsYXNzIENyYWlnc2xpc3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcykgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlc3VsdDogW11cbiAgICB9XG4gICAgXG4gICAgdGhpcy5nZXRDcmFpZ3NsaXN0ID0gdGhpcy5nZXRDcmFpZ3NsaXN0LmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRDcmFpZ3NsaXN0KCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KCcvY3JhaWdzbGlzdF9zY3JhcGVyJylcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyYWlnc2xpc3QgPT4nLCByZXN1bHQuZGF0YSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdDogcmVzdWx0LmRhdGEgfSlcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nZXRDcmFpZ3NsaXN0fT5GZXRjaCBDcmFpZ3NMaXN0PC9idXR0b24+XG4gICAgICAgIDxHcmlkIGNlbnRlcmVkPXt0cnVlfT5cbiAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17M30gZGl2aWRlZD17J2hvcml6b250YWxseSd9IHN0cmV0Y2hlZD17dHJ1ZX0gdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgIHt0aGlzLnN0YXRlLnJlc3VsdC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICA8Q3JhaWdzbGlzdExpc3RJdGVtIGl0ZW09e2l0ZW19IGtleT17aX0+PC9DcmFpZ3NsaXN0TGlzdEl0ZW0+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICApfVxuICAgICAgICApfVxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JhaWdzbGlzdExpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb21wb25lbnRzL0NyYWlnc2xpc3RMaXN0LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFEQTtBQUZBO0FBY0E7Ozs7QUFuQ0E7QUFDQTtBQXFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///891\n");

/***/ })

})