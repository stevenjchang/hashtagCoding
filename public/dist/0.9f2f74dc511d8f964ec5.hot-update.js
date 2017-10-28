webpackHotUpdate(0,{

/***/ 590:
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Footer = __webpack_require__(/*! ./Footer.js */ 591);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _AddTodo = __webpack_require__(/*! ../containers/AddTodo.js */ 612);\n\nvar _AddTodo2 = _interopRequireDefault(_AddTodo);\n\nvar _VisibleTodoList = __webpack_require__(/*! ../containers/VisibleTodoList.js */ 613);\n\nvar _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);\n\nvar _CraigslistList = __webpack_require__(/*! ./redux_components/CraigslistList */ 170);\n\nvar _CraigslistList2 = _interopRequireDefault(_CraigslistList);\n\nvar _Links = __webpack_require__(/*! ./Links.jsx */ 934);\n\nvar _Links2 = _interopRequireDefault(_Links);\n\nvar _MenuBar = __webpack_require__(/*! ./MenuBar.jsx */ 939);\n\nvar _MenuBar2 = _interopRequireDefault(_MenuBar);\n\nvar _SubmitLink = __webpack_require__(/*! ./SubmitLink.jsx */ 940);\n\nvar _SubmitLink2 = _interopRequireDefault(_SubmitLink);\n\nvar _Craigslist = __webpack_require__(/*! ./../containers/Craigslist.jsx */ 941);\n\nvar _Craigslist2 = _interopRequireDefault(_Craigslist);\n\nvar _Twitter = __webpack_require__(/*! ./../containers/Twitter */ 942);\n\nvar _Twitter2 = _interopRequireDefault(_Twitter);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 69);\n\nvar _actions = __webpack_require__(/*! ../actions */ 84);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import CraigslistList from './CraigslistList.jsx'\nvar App = function App(getCraigslistFeed, getTwitterFeed) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_MenuBar2.default, null),\n    _react2.default.createElement(\n      'button',\n      { onClick: getTwitterFeed },\n      'btn'\n    ),\n    _react2.default.createElement(_Twitter2.default, null),\n    _react2.default.createElement(_Craigslist2.default, null),\n    _react2.default.createElement(_Links2.default, null),\n    _react2.default.createElement(_Craigslist2.default, null),\n    _react2.default.createElement(_AddTodo2.default, null),\n    _react2.default.createElement(_VisibleTodoList2.default, null),\n    _react2.default.createElement(_Footer2.default, null),\n    _react2.default.createElement(_SubmitLink2.default, null)\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getCraigslistFeed: function getCraigslistFeed() {\n      return dispatch((0, _actions.getCraigslistFeed)());\n    },\n    getTwitterFeed: function getTwitterFeed() {\n      return dispatch((0, _actions.getTwitterFeed)());\n    }\n  };\n};\n\nvar AppConnected = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTkwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2E4YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcydcbmltcG9ydCBBZGRUb2RvIGZyb20gJy4uL2NvbnRhaW5lcnMvQWRkVG9kby5qcydcbmltcG9ydCBWaXNpYmxlVG9kb0xpc3QgZnJvbSAnLi4vY29udGFpbmVycy9WaXNpYmxlVG9kb0xpc3QuanMnXG5cbi8vIGltcG9ydCBDcmFpZ3NsaXN0TGlzdCBmcm9tICcuL0NyYWlnc2xpc3RMaXN0LmpzeCdcbmltcG9ydCBDcmFpZ3NsaXN0TGlzdCBmcm9tICcuL3JlZHV4X2NvbXBvbmVudHMvQ3JhaWdzbGlzdExpc3QnXG5cbmltcG9ydCBMaW5rcyBmcm9tICcuL0xpbmtzLmpzeCdcbmltcG9ydCBNZW51YmFyIGZyb20gJy4vTWVudUJhci5qc3gnXG5pbXBvcnQgU3VibWl0TGluayBmcm9tICcuL1N1Ym1pdExpbmsuanN4J1xuXG5pbXBvcnQgQ3JhaWdzbGlzdCBmcm9tICcuLy4uL2NvbnRhaW5lcnMvQ3JhaWdzbGlzdC5qc3gnXG5pbXBvcnQgVHdpdHRlciBmcm9tICcuLy4uL2NvbnRhaW5lcnMvVHdpdHRlcidcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0Q3JhaWdzbGlzdEZlZWQsIGdldFR3aXR0ZXJGZWVkIH0gZnJvbSAnLi4vYWN0aW9ucydcblxuY29uc3QgQXBwID0gKGdldENyYWlnc2xpc3RGZWVkLCBnZXRUd2l0dGVyRmVlZCkgPT4gKFxuICA8ZGl2PlxuICAgIDxNZW51YmFyIC8+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRUd2l0dGVyRmVlZH0gPmJ0bjwvYnV0dG9uPlxuICAgIDxUd2l0dGVyIC8+XG4gICAgPENyYWlnc2xpc3QgLz5cbiAgICA8TGlua3MgLz5cbiAgICA8Q3JhaWdzbGlzdCAvPiBcbiAgICA8QWRkVG9kbyAvPlxuICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPFN1Ym1pdExpbmsgLz5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcblxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBnZXRDcmFpZ3NsaXN0RmVlZDogKCkgPT4gZGlzcGF0Y2goZ2V0Q3JhaWdzbGlzdEZlZWQoKSksXG4gICAgZ2V0VHdpdHRlckZlZWQ6ICgpID0+IGRpc3BhdGNoKGdldFR3aXR0ZXJGZWVkKCkpXG4gIH1cbn1cblxuY29uc3QgQXBwQ29ubmVjdGVkID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQXBwKVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQVpBO0FBYUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFEQTtBQUNBO0FBY0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///590\n");

/***/ })

})