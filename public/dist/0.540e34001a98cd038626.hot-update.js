webpackHotUpdate(0,{

/***/ 891:
/*!**************************************************!*\
  !*** ./client/src/components/CraigslistList.jsx ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 99);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _CraigslistListItem = __webpack_require__(/*! ./CraigslistListItem.jsx */ 892);\n\nvar _CraigslistListItem2 = _interopRequireDefault(_CraigslistListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CraigslistList = function (_React$Component) {\n  _inherits(CraigslistList, _React$Component);\n\n  function CraigslistList(props) {\n    _classCallCheck(this, CraigslistList);\n\n    var _this = _possibleConstructorReturn(this, (CraigslistList.__proto__ || Object.getPrototypeOf(CraigslistList)).call(this, props));\n\n    _this.state = {\n      result: []\n    };\n\n    _this.getCraigslist = _this.getCraigslist.bind(_this);\n    return _this;\n  }\n\n  _createClass(CraigslistList, [{\n    key: 'getCraigslist',\n    value: function getCraigslist() {\n      var _this2 = this;\n\n      _axios2.default.get('/craigslist_scraper').then(function (result) {\n        console.log('craigslist =>', result.data);\n        _this2.setState({ result: result.data });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'button',\n          { onClick: this.getCraigslist },\n          'Fetch CraigsList'\n        ),\n        this.state.result.map(function (item, i) {\n          return _react2.default.createElement(_CraigslistListItem2.default, { item: item, key: i });\n        })\n      );\n    }\n  }]);\n\n  return CraigslistList;\n}(_react2.default.Component);\n\nexports.default = CraigslistList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdC5qc3g/NTY2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgQ3JhaWdzbGlzdExpc3RJdGVtIGZyb20gJy4vQ3JhaWdzbGlzdExpc3RJdGVtLmpzeCdcblxuY2xhc3MgQ3JhaWdzbGlzdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKSBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVzdWx0OiBbXVxuICAgIH1cbiAgICBcbiAgICB0aGlzLmdldENyYWlnc2xpc3QgPSB0aGlzLmdldENyYWlnc2xpc3QuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldENyYWlnc2xpc3QoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJy9jcmFpZ3NsaXN0X3NjcmFwZXInKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY3JhaWdzbGlzdCA9PicsIHJlc3VsdC5kYXRhKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVzdWx0OiByZXN1bHQuZGF0YSB9KVxuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdldENyYWlnc2xpc3R9PkZldGNoIENyYWlnc0xpc3Q8L2J1dHRvbj5cbiAgICAgICAge3RoaXMuc3RhdGUucmVzdWx0Lm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICA8Q3JhaWdzbGlzdExpc3RJdGVtIGl0ZW09e2l0ZW19IGtleT17aX0+PC9DcmFpZ3NsaXN0TGlzdEl0ZW0+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JhaWdzbGlzdExpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb21wb25lbnRzL0NyYWlnc2xpc3RMaXN0LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTs7OztBQTVCQTtBQUNBO0FBOEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///891\n");

/***/ })

})