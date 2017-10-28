webpackHotUpdate(0,{

/***/ 886:
/*!*****************************************!*\
  !*** ./client/src/components/Links.jsx ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 265);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Link = __webpack_require__(/*! ./Link.jsx */ 887);\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Links = function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      links: []\n    };\n\n    _this.getLinks = _this.getLinks.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this2 = this;\n\n      _axios2.default.get('/links').then(function (result) {\n        return _this2.setState({ links: result.data });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Links',\n        _react2.default.createElement(\n          'button',\n          { onClick: this.getLinks },\n          'Get Links'\n        ),\n        this.state.links.map(function (item, i) {\n          return _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(_Link2.default, { key: i })\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react2.default.Component);\n\nexports.default = Links;\n\nvar TweetList = function (_React$Component2) {\n  _inherits(TweetList, _React$Component2);\n\n  function TweetList(props) {\n    _classCallCheck(this, TweetList);\n\n    return _possibleConstructorReturn(this, (TweetList.__proto__ || Object.getPrototypeOf(TweetList)).call(this, props));\n  }\n\n  _createClass(TweetList, [{\n    key: 'render',\n    value: function render() {\n      var tweetArray = ['hashtag', 'coding', 'willbesuccessful'];\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        this.props.images.map(function (item, i) {\n          return _react2.default.createElement(Tweet, { image: item.image, key: i, text: item.text });\n        })\n      );\n    }\n  }]);\n\n  return TweetList;\n}(_react2.default.Component);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9MaW5rcy5qc3g/ZTI0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsuanN4J1xuXG5jbGFzcyBMaW5rcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbmtzOiBbXVxuICAgIH07XG5cbiAgICB0aGlzLmdldExpbmtzID0gdGhpcy5nZXRMaW5rcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0TGlua3MoKSB7XG4gICAgYXhpb3MuZ2V0KCcvbGlua3MnKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gdGhpcy5zZXRTdGF0ZSh7bGlua3M6IHJlc3VsdC5kYXRhfSkgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PkxpbmtzXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nZXRMaW5rc30+R2V0IExpbmtzPC9idXR0b24+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxpbmtzLm1hcCgoaXRlbSwgaSkgPT4gXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBrZXk9e2l9PjwvTGluaz5cbiAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rcztcblxuY2xhc3MgVHdlZXRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHR3ZWV0QXJyYXkgPSBbJ2hhc2h0YWcnLCAnY29kaW5nJywgJ3dpbGxiZXN1Y2Nlc3NmdWwnXTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucHJvcHMuaW1hZ2VzLm1hcCgoaXRlbSwgaSkgPT4gXG4gICAgICAgICAgPFR3ZWV0IGltYWdlPXtpdGVtLmltYWdlfSBrZXk9e2l9IHRleHQ9e2l0ZW0udGV4dH0gLz4gXG4gICAgICAgICl9ICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9jb21wb25lbnRzL0xpbmtzLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFGQTtBQVVBOzs7O0FBM0JBO0FBQ0E7QUE2QkE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBTUE7Ozs7QUFmQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///886\n");

/***/ })

})