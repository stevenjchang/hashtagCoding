webpackHotUpdate(0,{

/***/ 886:
/*!*****************************************!*\
  !*** ./client/src/components/Links.jsx ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 99);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 271);\n\nvar _Link = __webpack_require__(/*! ./Link.jsx */ 887);\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nvar _contentfulConfig = __webpack_require__(/*! ../../../contentful.config.js */ 888);\n\nvar _contentfulConfig2 = _interopRequireDefault(_contentfulConfig);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// class Links extends React.Component {\n//   constructor(props) {\n//     super(props)\n//     this.state = {\n//       links: []\n//     };\n\n//     this.getLinks = this.getLinks.bind(this);\n//   }\n\n//   getLinks() {\n//     axios.get('/links')\n//       .then((result) => this.setState({links: result.data}) )\n//   }\n\n//   render() {\n//     return (\n//       <div>Links\n//         <button onClick={this.getLinks}>Get Links</button>\n//         {this.state.links.map((item, i) => \n//           <Link item={item} key={i}></Link>\n//         )}\n//       </div>\n//     )\n//   }\n// }\n\nvar Links_with_Contentful = function (_React$Component) {\n  _inherits(Links_with_Contentful, _React$Component);\n\n  function Links_with_Contentful(props) {\n    _classCallCheck(this, Links_with_Contentful);\n\n    var _this = _possibleConstructorReturn(this, (Links_with_Contentful.__proto__ || Object.getPrototypeOf(Links_with_Contentful)).call(this, props));\n\n    _this.state = {\n      links: []\n    };\n\n    _this.getLinks = _this.getLinks.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links_with_Contentful, [{\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this2 = this;\n\n      _contentfulConfig2.default.getEntries({ content_type: 'links' }).then(function (entry) {\n        return _this2.setState({ links: entry.items });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _semanticUiReact.Button,\n          { onClick: this.getLinks },\n          'Get Links'\n        ),\n        this.state.links.map(function (item, i) {\n          return _react2.default.createElement(_Link2.default, { item: item.fields, key: i });\n        })\n      );\n    }\n  }]);\n\n  return Links_with_Contentful;\n}(_react2.default.Component);\n\nexports.default = Links_with_Contentful;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9MaW5rcy5qc3g/ZTI0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluay5qc3gnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uLy4uL2NvbnRlbnRmdWwuY29uZmlnLmpzJ1xuXG4vLyBjbGFzcyBMaW5rcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpXG4vLyAgICAgdGhpcy5zdGF0ZSA9IHtcbi8vICAgICAgIGxpbmtzOiBbXVxuLy8gICAgIH07XG5cbi8vICAgICB0aGlzLmdldExpbmtzID0gdGhpcy5nZXRMaW5rcy5iaW5kKHRoaXMpO1xuLy8gICB9XG5cbi8vICAgZ2V0TGlua3MoKSB7XG4vLyAgICAgYXhpb3MuZ2V0KCcvbGlua3MnKVxuLy8gICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gdGhpcy5zZXRTdGF0ZSh7bGlua3M6IHJlc3VsdC5kYXRhfSkgKVxuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PkxpbmtzXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nZXRMaW5rc30+R2V0IExpbmtzPC9idXR0b24+XG4vLyAgICAgICAgIHt0aGlzLnN0YXRlLmxpbmtzLm1hcCgoaXRlbSwgaSkgPT4gXG4vLyAgICAgICAgICAgPExpbmsgaXRlbT17aXRlbX0ga2V5PXtpfT48L0xpbms+XG4vLyAgICAgICAgICl9XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyAgIH1cbi8vIH1cblxuY2xhc3MgTGlua3Nfd2l0aF9Db250ZW50ZnVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlua3M6IFtdXG4gICAgfVxuICAgIFxuICAgIHRoaXMuZ2V0TGlua3MgPSB0aGlzLmdldExpbmtzLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRMaW5rcygpIHtcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7Y29udGVudF90eXBlOiAnbGlua3MnfSlcbiAgICAudGhlbigoZW50cnkpID0+IHRoaXMuc2V0U3RhdGUoe2xpbmtzOiBlbnRyeS5pdGVtc30pKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdldExpbmtzfT5HZXQgTGlua3M8L0J1dHRvbj5cbiAgICAgIHt0aGlzLnN0YXRlLmxpbmtzLm1hcCgoaXRlbSwgaSkgPT4gXG4gICAgICAgIDxMaW5rIGl0ZW09e2l0ZW0uZmllbGRzfSBrZXk9e2l9PjwvTGluaz5cbiAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua3Nfd2l0aF9Db250ZW50ZnVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9MaW5rcy5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTs7OztBQXhCQTtBQUNBO0FBMEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///886\n");

/***/ })

})