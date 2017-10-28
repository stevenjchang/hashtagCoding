webpackHotUpdate(0,{

/***/ 885:
/*!**********************************************!*\
  !*** ./client/src/components/SubmitLink.jsx ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 265);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SubmitLink = function (_React$Component) {\n  _inherits(SubmitLink, _React$Component);\n\n  function SubmitLink(props) {\n    _classCallCheck(this, SubmitLink);\n\n    var _this = _possibleConstructorReturn(this, (SubmitLink.__proto__ || Object.getPrototypeOf(SubmitLink)).call(this, props));\n\n    _this.state = {\n      name: '',\n      title: '',\n      url: '',\n      image: '',\n      type: ''\n    };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    return _this;\n  }\n\n  _createClass(SubmitLink, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      var name = event.target.name;\n      console.log('name =>', event.target.name, 'value =>', event.target.value);\n      this.setState(_defineProperty({}, name, event.target.value));\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      // alert('A name was submitted: ' + this.state.input);\n      event.preventDefault();\n      _axios2.default.post('/db/post', this.state).then(function (result) {\n\n        console.dir('link successfully submitted dir:' + result);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'form',\n        { onSubmit: this.handleSubmit },\n        _react2.default.createElement(\n          'label',\n          null,\n          'Name:',\n          _react2.default.createElement('input', { name: 'name', type: 'text', value: this.state.name, onChange: this.handleChange })\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'label',\n          null,\n          'Title:',\n          _react2.default.createElement('input', { name: 'title', type: 'text', value: this.state.title, onChange: this.handleChange })\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'label',\n          null,\n          'Url:',\n          _react2.default.createElement('input', { name: 'url', type: 'text', value: this.state.url, onChange: this.handleChange })\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'label',\n          null,\n          'Image:',\n          _react2.default.createElement('input', { name: 'image', type: 'text', value: this.state.image, onChange: this.handleChange })\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'label',\n          null,\n          'Type:',\n          _react2.default.createElement('input', { name: 'type', type: 'text', value: this.state.type, onChange: this.handleChange })\n        ),\n        _react2.default.createElement('input', { type: 'submit', value: 'Submit' }),\n        _react2.default.createElement(\n          'p',\n          null,\n          this.state.name\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          this.state.title\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          this.state.url\n        )\n      );\n    }\n  }]);\n\n  return SubmitLink;\n}(_react2.default.Component);\n\nexports.default = SubmitLink;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdWJtaXRMaW5rLmpzeD8wNTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY2xhc3MgU3VibWl0TGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBpbWFnZTogJycsXG4gICAgICB0eXBlOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnNvbGUubG9nKCduYW1lID0+JywgZXZlbnQudGFyZ2V0Lm5hbWUsICd2YWx1ZSA9PicsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAvLyBhbGVydCgnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLmlucHV0KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF4aW9zLnBvc3QoJy9kYi9wb3N0JywgdGhpcy5zdGF0ZSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICBjb25zb2xlLmRpcignbGluayBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIGRpcjonICsgcmVzdWx0ICk7XG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTmFtZTpcbiAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBUaXRsZTpcbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFVybDpcbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInVybFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXJsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgSW1hZ2U6XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJpbWFnZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2V9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBUeXBlOlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwidHlwZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudHlwZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPHA+e3RoaXMuc3RhdGUubmFtZX08L3A+XG4gICAgICAgIDxwPnt0aGlzLnN0YXRlLnRpdGxlfTwvcD5cbiAgICAgICAgPHA+e3RoaXMuc3RhdGUudXJsfTwvcD5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdExpbmtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvU3VibWl0TGluay5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFYQTtBQVlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTVCQTtBQStCQTs7OztBQWxFQTtBQUNBO0FBb0VBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///885\n");

/***/ })

})