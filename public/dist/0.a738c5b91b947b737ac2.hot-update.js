webpackHotUpdate(0,{

/***/ 885:
/*!**********************************************!*\
  !*** ./client/src/components/SubmitLink.jsx ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SubmitLink = function (_React$Component) {\n  _inherits(SubmitLink, _React$Component);\n\n  function SubmitLink(props) {\n    _classCallCheck(this, SubmitLink);\n\n    var _this = _possibleConstructorReturn(this, (SubmitLink.__proto__ || Object.getPrototypeOf(SubmitLink)).call(this, props));\n\n    _this.state = {\n      input: {\n        name: 'name',\n        title: '',\n        url: ''\n      } };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    return _this;\n  }\n\n  // handleChange(event) {\n  //   this.setState({input: event.target.value});\n  // }\n\n  _createClass(SubmitLink, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      var name = event.target.name;\n      console.log('name =>', event.target.name, 'value =>', event.target.value);\n      console.log('value =>', event.target.value);\n      this.setState({\n        input: _defineProperty({}, name, event.target.value)\n      });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      console.log('hellooo');\n      // alert('A name was submitted: ' + this.state.input);\n      event.preventDefault();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'form',\n        { onSubmit: this.handleSubmit },\n        _react2.default.createElement(\n          'label',\n          null,\n          'Name:',\n          _react2.default.createElement('input', { name: 'name', type: 'text', value: this.state.input.name, onChange: this.handleChange })\n        ),\n        _react2.default.createElement(\n          'label',\n          null,\n          'Name:',\n          _react2.default.createElement('input', { name: 'title', type: 'text', value: this.state.input.title, onChange: this.handleChange })\n        ),\n        _react2.default.createElement('input', { type: 'submit', value: 'Submit' })\n      );\n    }\n  }]);\n\n  return SubmitLink;\n}(_react2.default.Component);\n\nexports.default = SubmitLink;\n\n// handleInputChange(event) {\n//   const target = event.target;\n//   const value = target.type === 'checkbox' ? target.checked : target.value;\n//   const name = target.name;\n\n//   this.setState({\n//     [name]: value\n//   });\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdWJtaXRMaW5rLmpzeD8wNTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgU3VibWl0TGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgfX07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAvLyB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnNvbGUubG9nKCduYW1lID0+JywgZXZlbnQudGFyZ2V0Lm5hbWUsICd2YWx1ZSA9PicsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlID0+JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIFtuYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsb29vJylcbiAgICAvLyBhbGVydCgnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLmlucHV0KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTmFtZTpcbiAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0Lm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXQudGl0bGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgIHsvKiA8cD57dGhpcy5zdGF0ZS5pbnB1dH08L3A+ICovfVxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0TGlua1xuXG5cbiAgLy8gaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgLy8gICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIC8vICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xuICAvLyAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcblxuICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgW25hbWVdOiB2YWx1ZVxuICAvLyAgIH0pO1xuICAvLyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9TdWJtaXRMaW5rLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFWQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQVRBO0FBYUE7Ozs7QUFsREE7QUFDQTtBQW9EQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///885\n");

/***/ })

})