webpackHotUpdate(0,{

/***/ 891:
/*!**************************************************!*\
  !*** ./client/src/components/CraigslistList.jsx ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 158);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CraigslistList = function (_React$Component) {\n  _inherits(CraigslistList, _React$Component);\n\n  function CraigslistList(props) {\n    _classCallCheck(this, CraigslistList);\n\n    var _this = _possibleConstructorReturn(this, (CraigslistList.__proto__ || Object.getPrototypeOf(CraigslistList)).call(this, props));\n\n    _this.state = {\n      result: []\n    };\n\n    _this.getCraigslist = _this.getCraigslist.bind(_this);\n    return _this;\n  }\n\n  _createClass(CraigslistList, [{\n    key: 'getCraigslist',\n    value: function getCraigslist() {\n      var _this2 = this;\n\n      _axios2.default.get('/craigslist').then(function (result) {\n        console.log('craigslist =>', result.data);\n        _this2.setState({\n          result: result.data\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'button',\n          { onClick: this.getCraigslist },\n          'Craigslist'\n        )\n      );\n    }\n  }]);\n\n  return CraigslistList;\n}(_react2.default.Component);\n\nexports.default = CraigslistList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdC5qc3g/NTY2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNsYXNzIENyYWlnc2xpc3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcykgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlc3VsdDogW11cbiAgICB9XG5cbiAgICB0aGlzLmdldENyYWlnc2xpc3QgPSB0aGlzLmdldENyYWlnc2xpc3QuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldENyYWlnc2xpc3QoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJy9jcmFpZ3NsaXN0JylcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyYWlnc2xpc3QgPT4nLCByZXN1bHQuZGF0YSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcmVzdWx0OiByZXN1bHQuZGF0YVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIFxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdldENyYWlnc2xpc3R9PkNyYWlnc2xpc3Q8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmFpZ3NsaXN0TGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvQ3JhaWdzbGlzdExpc3QuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTs7OztBQTNCQTtBQUNBO0FBNkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///891\n");

/***/ })

})