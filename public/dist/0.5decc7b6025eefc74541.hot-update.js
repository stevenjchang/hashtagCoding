webpackHotUpdate(0,{

/***/ 955:
/*!*************************************************!*\
  !*** ./client/src/components/ContentfulList.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 168);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 49);\n\nvar _Link = __webpack_require__(/*! ./Link.jsx */ 938);\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nvar _contentfulConfig = __webpack_require__(/*! ../../../contentful.config.js */ 939);\n\nvar _contentfulConfig2 = _interopRequireDefault(_contentfulConfig);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Contentful_old = function (_React$Component) {\n  _inherits(Contentful_old, _React$Component);\n\n  function Contentful_old(props) {\n    _classCallCheck(this, Contentful_old);\n\n    var _this = _possibleConstructorReturn(this, (Contentful_old.__proto__ || Object.getPrototypeOf(Contentful_old)).call(this, props));\n\n    _this.state = {\n      links: []\n    };\n\n    _this.getLinks = _this.getLinks.bind(_this);\n    return _this;\n  }\n\n  _createClass(Contentful_old, [{\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this2 = this;\n\n      _contentfulConfig2.default.getEntries({ content_type: 'links' }).then(function (entry) {\n        return _this2.setState({ links: entry.items });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        this.state.links.map(function (item, i) {\n          return _react2.default.createElement(_Link2.default, { item: item.fields, key: i });\n        })\n      );\n    }\n  }]);\n\n  return Contentful_old;\n}(_react2.default.Component);\n\nvar Contentful = function Contentful(_ref) {\n  var links = _ref.links;\n\n  var renderedList = links[0] ? links[0] : [];\n  console.log('links[0] =>', links[0]);\n  return _react2.default.createElement(\n    'div',\n    null,\n    renderedList.map(function (item, i) {\n      return _react2.default.createElement(\n        'h2',\n        { key: i },\n        'item: ',\n        item.fields.name\n      );\n    })\n  );\n};\n\nexports.default = Contentful;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9Db250ZW50ZnVsTGlzdC5qcz8xMmU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rLmpzeCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vLi4vY29udGVudGZ1bC5jb25maWcuanMnXG5cbmNsYXNzIENvbnRlbnRmdWxfb2xkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlua3M6IFtdXG4gICAgfVxuICAgIFxuICAgIHRoaXMuZ2V0TGlua3MgPSB0aGlzLmdldExpbmtzLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRMaW5rcygpIHtcbiAgICBjbGllbnQuZ2V0RW50cmllcyh7Y29udGVudF90eXBlOiAnbGlua3MnfSlcbiAgICAudGhlbigoZW50cnkpID0+IHRoaXMuc2V0U3RhdGUoe2xpbmtzOiBlbnRyeS5pdGVtc30pKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5saW5rcy5tYXAoKGl0ZW0sIGkpID0+IFxuICAgICAgICAgIDxMaW5rIGl0ZW09e2l0ZW0uZmllbGRzfSBrZXk9e2l9PjwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBDb250ZW50ZnVsID0gKHsgbGlua3MgfSkgPT4ge1xuICBsZXQgcmVuZGVyZWRMaXN0ID0gbGlua3NbMF0gPyBsaW5rc1swXSA6IFtdO1xuICBjb25zb2xlLmxvZygnbGlua3NbMF0gPT4nLCBsaW5rc1swXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj4gXG4gICAgICB7cmVuZGVyZWRMaXN0Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxoMiBrZXk9e2l9Pml0ZW06IHtpdGVtLmZpZWxkcy5uYW1lfTwvaDI+XG4gICAgICAgICAgXG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudGZ1bDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvQ29udGVudGZ1bExpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQU1BOzs7O0FBdkJBO0FBQ0E7QUF5QkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFOQTtBQVNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///955\n");

/***/ })

})