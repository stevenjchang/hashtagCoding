webpackHotUpdate(0,{

/***/ 947:
/*!**********************************************************!*\
  !*** ./client/src/components/CraigslistJobs_ListItem.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 47);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CraigslistJobs_ListItem = function CraigslistJobs_ListItem(_ref) {\n  var item = _ref.item,\n      toggleShowHide = _ref.toggleShowHide;\n\n  return _react2.default.createElement(\n    _semanticUiReact.Card.Group,\n    null,\n    _react2.default.createElement(\n      _semanticUiReact.Card,\n      { fluid: true },\n      _react2.default.createElement(\n        _semanticUiReact.Card.Content,\n        null,\n        _react2.default.createElement(\n          'h3',\n          null,\n          item.title\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          item.neighborhood,\n          ' ~ ',\n          _react2.default.createElement(\n            'span',\n            { style: { color: \"red\" } },\n            item.price\n          )\n        ),\n        item.images ? _react2.default.createElement(_semanticUiReact.Image, { src: 'https://images.craigslist.org/' + item.images.split(',')[0].substring(2) + '_300x300.jpg' }) : _react2.default.createElement(\n          'p',\n          null,\n          'No image'\n        ),\n        _react2.default.createElement(\n          'a',\n          { href: item.href },\n          _react2.default.createElement(\n            'p',\n            null,\n            'link'\n          )\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'id: ',\n          item.id,\n          ' '\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'showStatus: ',\n          item.show.toString()\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              return toggleShowHide(item.id, item.show);\n            } },\n          'Hide Post'\n        ),\n        _react2.default.createElement('br', null)\n      )\n    )\n  );\n};\n\nexports.default = CraigslistJobs_ListItem;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0Sm9ic19MaXN0SXRlbS5qcz83MzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIEljb24sIEltYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IENyYWlnc2xpc3RKb2JzX0xpc3RJdGVtID0gKHsgaXRlbSwgdG9nZ2xlU2hvd0hpZGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkLkdyb3VwPlxuICAgICAgPENhcmQgZmx1aWQ9e3RydWV9PlxuICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgIDxwPntpdGVtLm5laWdoYm9yaG9vZH0gfiA8c3BhbiBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e2l0ZW0ucHJpY2V9PC9zcGFuPjwvcD5cbiAgICAgICAgICB7KGl0ZW0uaW1hZ2VzKSA/IDxJbWFnZSBzcmM9eydodHRwczovL2ltYWdlcy5jcmFpZ3NsaXN0Lm9yZy8nICsgaXRlbS5pbWFnZXMuc3BsaXQoJywnKVswXS5zdWJzdHJpbmcoMikgKyAnXzMwMHgzMDAuanBnJ30+PC9JbWFnZT4gOiA8cD5ObyBpbWFnZTwvcD59XG4gICAgICAgICAgPGEgaHJlZj17aXRlbS5ocmVmfT48cD5saW5rPC9wPjwvYT5cbiAgICAgICAgICA8cD5pZDoge2l0ZW0uaWR9IDwvcD5cbiAgICAgICAgICA8cD5zaG93U3RhdHVzOiB7aXRlbS5zaG93LnRvU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlU2hvd0hpZGUoaXRlbS5pZCwgaXRlbS5zaG93KX0+SGlkZSBQb3N0PC9idXR0b24+XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ2FyZC5Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmFpZ3NsaXN0Sm9ic19MaXN0SXRlbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9DcmFpZ3NsaXN0Sm9ic19MaXN0SXRlbS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQURBO0FBREE7QUFlQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///947\n");

/***/ })

})