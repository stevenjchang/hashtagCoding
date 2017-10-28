webpackHotUpdate(0,{

/***/ 931:
/*!*****************************************************!*\
  !*** ./client/src/components/CraigslistListItem.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 47);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CraigslistListItem = function CraigslistListItem(_ref) {\n  var item = _ref.item,\n      toggleShowHide = _ref.toggleShowHide;\n\n  return _react2.default.createElement(\n    _semanticUiReact.Card.Group,\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Card,\n      { fluid: true },\n      _react2.default.createElement(\n        _semanticUiReact.Card.Content,\n        null,\n        _react2.default.createElement(\n          'h3',\n          null,\n          item.title\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          item.neighborhood,\n          ' ~ ',\n          _react2.default.createElement(\n            'span',\n            { style: { color: \"red\" } },\n            item.price\n          )\n        ),\n        item.images ? _react2.default.createElement(_semanticUiReact.Image, { src: 'https://images.craigslist.org/' + item.images.split(',')[0].substring(2) + '_300x300.jpg' }) : _react2.default.createElement(\n          'p',\n          null,\n          'No image'\n        ),\n        _react2.default.createElement(\n          'a',\n          { href: item.href },\n          _react2.default.createElement(\n            'p',\n            null,\n            'link'\n          )\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'id: ',\n          item.id,\n          ' '\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'showStatus: ',\n          item.show.toString()\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              return toggleShowHide(item.id);\n            } },\n          'Hide Post'\n        ),\n        _react2.default.createElement('br', null)\n      )\n    )\n  );\n};\n\nexports.default = CraigslistListItem;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdEl0ZW0uanM/NDI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkLCBJY29uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBDcmFpZ3NsaXN0TGlzdEl0ZW0gPSAoeyBpdGVtLCB0b2dnbGVTaG93SGlkZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZC5Hcm91cD5cbiAgICAgIDxDYXJkIGZsdWlkPXt0cnVlfT5cbiAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICA8cD57aXRlbS5uZWlnaGJvcmhvb2R9IH4gPHNwYW4gc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19PntpdGVtLnByaWNlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgeyhpdGVtLmltYWdlcykgPyA8SW1hZ2Ugc3JjPXsnaHR0cHM6Ly9pbWFnZXMuY3JhaWdzbGlzdC5vcmcvJyArIGl0ZW0uaW1hZ2VzLnNwbGl0KCcsJylbMF0uc3Vic3RyaW5nKDIpICsgJ18zMDB4MzAwLmpwZyd9PjwvSW1hZ2U+IDogPHA+Tm8gaW1hZ2U8L3A+fVxuICAgICAgICAgIDxhIGhyZWY9e2l0ZW0uaHJlZn0+PHA+bGluazwvcD48L2E+XG4gICAgICAgICAgPHA+aWQ6IHtpdGVtLmlkfSA8L3A+XG4gICAgICAgICAgPHA+c2hvd1N0YXR1czoge2l0ZW0uc2hvdy50b1N0cmluZygpfTwvcD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVNob3dIaWRlKGl0ZW0uaWQpfT5IaWRlIFBvc3Q8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9DYXJkLkdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyYWlnc2xpc3RMaXN0SXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvQ3JhaWdzbGlzdExpc3RJdGVtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQVRBO0FBREE7QUFEQTtBQWdCQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///931\n");

/***/ })

})