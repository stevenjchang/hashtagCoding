webpackHotUpdate(0,{

/***/ 886:
/*!*****************************************!*\
  !*** ./client/src/components/Links.jsx ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 158);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Link = __webpack_require__(/*! ./Link.jsx */ 887);\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nvar _contentful = __webpack_require__(/*! contentful */ 888);\n\nvar _apikey = __webpack_require__(/*! ../../../apikey.json */ 889);\n\nvar _apikey2 = _interopRequireDefault(_apikey);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Links = function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      links: []\n    };\n\n    _this.getLinks = _this.getLinks.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this2 = this;\n\n      _axios2.default.get('/links').then(function (result) {\n        return _this2.setState({ links: result.data });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Links',\n        _react2.default.createElement(\n          'button',\n          { onClick: this.getLinks },\n          'Get Links'\n        ),\n        this.state.links.map(function (item, i) {\n          return _react2.default.createElement(_Link2.default, { item: item, key: i });\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react2.default.Component);\n\nvar Links_with_Contentful = function (_React$Component2) {\n  _inherits(Links_with_Contentful, _React$Component2);\n\n  function Links_with_Contentful(props) {\n    _classCallCheck(this, Links_with_Contentful);\n\n    var _this3 = _possibleConstructorReturn(this, (Links_with_Contentful.__proto__ || Object.getPrototypeOf(Links_with_Contentful)).call(this, props));\n\n    _this3.state = {\n      links: []\n    };\n    return _this3;\n  }\n\n  _createClass(Links_with_Contentful, [{\n    key: 'getLinks',\n    value: function getLinks() {\n      var client = (0, _contentful.createClient)({\n        space: _apikey2.default.CONTENTFUL_SPACE_ID,\n        accessToken: _apikey2.default.CONTENTFUL_DELIVERY_API\n      });\n      client.getEntries({ content_type: 'links' }).then(function (entry) {\n        return console.log('this is entry =>', entry);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Links',\n        _react2.default.createElement(\n          'button',\n          { onClick: this.getLinks },\n          'Get Links'\n        ),\n        this.state.links.map(function (item, i) {\n          return _react2.default.createElement(_Link2.default, { item: item, key: i });\n        })\n      );\n    }\n  }]);\n\n  return Links_with_Contentful;\n}(_react2.default.Component);\n\nexports.default = Links_with_Contentful;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9MaW5rcy5qc3g/ZTI0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsuanN4J1xuaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gJ2NvbnRlbnRmdWwnXG5pbXBvcnQgRU5WIGZyb20gJy4uLy4uLy4uL2FwaWtleS5qc29uJ1xuXG5jbGFzcyBMaW5rcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbmtzOiBbXVxuICAgIH07XG5cbiAgICB0aGlzLmdldExpbmtzID0gdGhpcy5nZXRMaW5rcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0TGlua3MoKSB7XG4gICAgYXhpb3MuZ2V0KCcvbGlua3MnKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gdGhpcy5zZXRTdGF0ZSh7bGlua3M6IHJlc3VsdC5kYXRhfSkgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PkxpbmtzXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nZXRMaW5rc30+R2V0IExpbmtzPC9idXR0b24+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxpbmtzLm1hcCgoaXRlbSwgaSkgPT4gXG4gICAgICAgICAgPExpbmsgaXRlbT17aXRlbX0ga2V5PXtpfT48L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgTGlua3Nfd2l0aF9Db250ZW50ZnVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlua3M6IFtdXG4gICAgfVxuICB9XG5cbiAgZ2V0TGlua3MoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiBFTlYuQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgICAgIGFjY2Vzc1Rva2VuOiBFTlYuQ09OVEVOVEZVTF9ERUxJVkVSWV9BUElcbiAgICB9KVxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHtjb250ZW50X3R5cGU6ICdsaW5rcyd9KVxuICAgIC50aGVuKChlbnRyeSkgPT4gY29uc29sZS5sb2coJ3RoaXMgaXMgZW50cnkgPT4nLCBlbnRyeSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+TGlua3NcbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nZXRMaW5rc30+R2V0IExpbmtzPC9idXR0b24+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxpbmtzLm1hcCgoaXRlbSwgaSkgPT4gXG4gICAgICAgICAgPExpbmsgaXRlbT17aXRlbX0ga2V5PXtpfT48L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua3Nfd2l0aF9Db250ZW50ZnVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9MaW5rcy5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BOzs7O0FBeEJBO0FBQ0E7QUEwQkE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BOzs7O0FBMUJBO0FBQ0E7QUE0QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///886\n");

/***/ })

})