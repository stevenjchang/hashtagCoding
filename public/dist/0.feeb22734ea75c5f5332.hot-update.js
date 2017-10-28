webpackHotUpdate(0,{

/***/ 885:
/*!**********************************************!*\
  !*** ./client/src/components/SubmitLink.jsx ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SubmitLink = function (_React$Component) {\n  _inherits(SubmitLink, _React$Component);\n\n  function SubmitLink(props) {\n    _classCallCheck(this, SubmitLink);\n\n    var _this = _possibleConstructorReturn(this, (SubmitLink.__proto__ || Object.getPrototypeOf(SubmitLink)).call(this, props));\n\n    _this.state = {\n      input: {\n        name: 'name',\n        title: '',\n        url: ''\n      } };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    return _this;\n  }\n\n  // handleChange(event) {\n  //   this.setState({input: event.target.value});\n  // }\n\n  _createClass(SubmitLink, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      var name = event.target.name;\n      console.log('name t =>', event.target.name, 'v =>', target.value);\n      console.log('value =>', target.value);\n      this.setState({\n        input: _defineProperty({}, name, target.value)\n      });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      console.log('hellooo');\n      // alert('A name was submitted: ' + this.state.input);\n      event.preventDefault();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'form',\n        { onSubmit: this.handleSubmit },\n        _react2.default.createElement(\n          'label',\n          null,\n          'Name:',\n          _react2.default.createElement('input', { name: 'name', type: 'text', value: this.state.input.name, onChange: this.handleChange })\n        ),\n        _react2.default.createElement(\n          'label',\n          null,\n          'Name:',\n          _react2.default.createElement('input', { name: 'title', type: 'text', value: this.state.input.title, onChange: this.handleChange })\n        ),\n        _react2.default.createElement('input', { type: 'submit', value: 'Submit' })\n      );\n    }\n  }]);\n\n  return SubmitLink;\n}(_react2.default.Component);\n\nexports.default = SubmitLink;\n\n// handleInputChange(event) {\n//   const target = event.target;\n//   const value = target.type === 'checkbox' ? target.checked : target.value;\n//   const name = target.name;\n\n//   this.setState({\n//     [name]: value\n//   });\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdWJtaXRMaW5rLmpzeD8wNTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgU3VibWl0TGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgfX07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAvLyB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnNvbGUubG9nKCduYW1lIHQgPT4nLCBldmVudC50YXJnZXQubmFtZSwgJ3YgPT4nLCB0YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKCd2YWx1ZSA9PicsIHRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBbbmFtZV06IHRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG9vbycpXG4gICAgLy8gYWxlcnQoJ0EgbmFtZSB3YXMgc3VibWl0dGVkOiAnICsgdGhpcy5zdGF0ZS5pbnB1dCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dC5uYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOYW1lOlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0LnRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICB7LyogPHA+e3RoaXMuc3RhdGUuaW5wdXR9PC9wPiAqL31cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdExpbmtcblxuXG4gIC8vIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gIC8vICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAvLyAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcbiAgLy8gICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG5cbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgIFtuYW1lXTogdmFsdWVcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvU3VibWl0TGluay5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBVkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBSUE7QUFUQTtBQWFBOzs7O0FBbERBO0FBQ0E7QUFvREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///885\n");

/***/ })

})