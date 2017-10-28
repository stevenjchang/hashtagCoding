webpackHotUpdate(0,{

/***/ 955:
/*!*************************************************!*\
  !*** ./client/src/components/ContentfulList.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 168);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _contentfulConfig = __webpack_require__(/*! ../../../contentful.config.js */ 939);\n\nvar _contentfulConfig2 = _interopRequireDefault(_contentfulConfig);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 49);\n\nvar _ContentfulListItem = __webpack_require__(/*! ./ContentfulListItem */ 956);\n\nvar _ContentfulListItem2 = _interopRequireDefault(_ContentfulListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ContentfulList = function ContentfulList(_ref) {\n  var links = _ref.links;\n\n  var renderedList = links[0] ? links[0] : [];\n  return _react2.default.createElement(\n    'div',\n    null,\n    renderedList.map(function (item, i) {\n      return _react2.default.createElement(_ContentfulListItem2.default, { link: item.fields, key: i });\n    })\n  );\n};\n\nexports.default = ContentfulList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9Db250ZW50ZnVsTGlzdC5qcz8xMmU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vLi4vY29udGVudGZ1bC5jb25maWcuanMnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBDb250ZW50ZnVsTGlzdEl0ZW0gZnJvbSAnLi9Db250ZW50ZnVsTGlzdEl0ZW0nXG5cbmNvbnN0IENvbnRlbnRmdWxMaXN0ID0gKHsgbGlua3MgfSkgPT4ge1xuICBsZXQgcmVuZGVyZWRMaXN0ID0gbGlua3NbMF0gPyBsaW5rc1swXSA6IFtdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+IFxuICAgICAge3JlbmRlcmVkTGlzdC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q29udGVudGZ1bExpc3RJdGVtIGxpbms9e2l0ZW0uZmllbGRzfSBrZXk9e2l9IC8+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRmdWxMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9Db250ZW50ZnVsTGlzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQVFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///955\n");

/***/ })

})