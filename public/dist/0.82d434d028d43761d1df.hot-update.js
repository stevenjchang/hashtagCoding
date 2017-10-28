webpackHotUpdate(0,{

/***/ 590:
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Footer = __webpack_require__(/*! ./Footer.js */ 591);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _AddTodo = __webpack_require__(/*! ../containers/AddTodo.js */ 612);\n\nvar _AddTodo2 = _interopRequireDefault(_AddTodo);\n\nvar _VisibleTodoList = __webpack_require__(/*! ../containers/VisibleTodoList.js */ 613);\n\nvar _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);\n\nvar _CraigslistList = __webpack_require__(/*! ./redux_components/CraigslistList */ 170);\n\nvar _CraigslistList2 = _interopRequireDefault(_CraigslistList);\n\nvar _Links = __webpack_require__(/*! ./Links.jsx */ 934);\n\nvar _Links2 = _interopRequireDefault(_Links);\n\nvar _MenuBar = __webpack_require__(/*! ./MenuBar.jsx */ 939);\n\nvar _MenuBar2 = _interopRequireDefault(_MenuBar);\n\nvar _SubmitLink = __webpack_require__(/*! ./SubmitLink.jsx */ 940);\n\nvar _SubmitLink2 = _interopRequireDefault(_SubmitLink);\n\nvar _Craigslist = __webpack_require__(/*! ./../containers/Craigslist.jsx */ 941);\n\nvar _Craigslist2 = _interopRequireDefault(_Craigslist);\n\nvar _Twitter = __webpack_require__(/*! ./../containers/Twitter */ 942);\n\nvar _Twitter2 = _interopRequireDefault(_Twitter);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 69);\n\nvar _actions = __webpack_require__(/*! ../actions */ 84);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 103);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var onClickCraigslist = _ref.onClickCraigslist,\n      onClickTwitter = _ref.onClickTwitter;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_MenuBar2.default, null),\n    _react2.default.createElement(\n      _semanticUiReact.Button,\n      { onClick: onClickCraigslist },\n      'btn'\n    ),\n    _react2.default.createElement(_Twitter2.default, null),\n    _react2.default.createElement(_Craigslist2.default, null),\n    _react2.default.createElement(_Links2.default, null),\n    _react2.default.createElement(_Craigslist2.default, null),\n    _react2.default.createElement(_AddTodo2.default, null),\n    _react2.default.createElement(_VisibleTodoList2.default, null),\n    _react2.default.createElement(_Footer2.default, null),\n    _react2.default.createElement(_SubmitLink2.default, null)\n  );\n};\n\n// import CraigslistList from './CraigslistList.jsx'\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onClickCraigslist: function onClickCraigslist() {\n      return dispatch((0, _actions.getCraigslistFeed)());\n    },\n    onClickTwitter: function onClickTwitter() {\n      return console.log('working');\n    }\n  };\n};\n\nvar AppConnected = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);\n\nexports.default = AppConnected;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTkwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2E4YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcydcbmltcG9ydCBBZGRUb2RvIGZyb20gJy4uL2NvbnRhaW5lcnMvQWRkVG9kby5qcydcbmltcG9ydCBWaXNpYmxlVG9kb0xpc3QgZnJvbSAnLi4vY29udGFpbmVycy9WaXNpYmxlVG9kb0xpc3QuanMnXG5cbi8vIGltcG9ydCBDcmFpZ3NsaXN0TGlzdCBmcm9tICcuL0NyYWlnc2xpc3RMaXN0LmpzeCdcbmltcG9ydCBDcmFpZ3NsaXN0TGlzdCBmcm9tICcuL3JlZHV4X2NvbXBvbmVudHMvQ3JhaWdzbGlzdExpc3QnXG5cbmltcG9ydCBMaW5rcyBmcm9tICcuL0xpbmtzLmpzeCdcbmltcG9ydCBNZW51YmFyIGZyb20gJy4vTWVudUJhci5qc3gnXG5pbXBvcnQgU3VibWl0TGluayBmcm9tICcuL1N1Ym1pdExpbmsuanN4J1xuXG5pbXBvcnQgQ3JhaWdzbGlzdCBmcm9tICcuLy4uL2NvbnRhaW5lcnMvQ3JhaWdzbGlzdC5qc3gnXG5pbXBvcnQgVHdpdHRlciBmcm9tICcuLy4uL2NvbnRhaW5lcnMvVHdpdHRlcidcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0Q3JhaWdzbGlzdEZlZWQsIGdldFR3aXR0ZXJGZWVkIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBBcHAgPSAoe29uQ2xpY2tDcmFpZ3NsaXN0LCBvbkNsaWNrVHdpdHRlcn0pID0+IChcbiAgPGRpdj5cbiAgICA8TWVudWJhciAvPlxuICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0NyYWlnc2xpc3R9ID5idG48L0J1dHRvbj5cbiAgICA8VHdpdHRlciAvPlxuICAgIDxDcmFpZ3NsaXN0IC8+XG4gICAgPExpbmtzIC8+XG4gICAgPENyYWlnc2xpc3QgLz4gXG4gICAgPEFkZFRvZG8gLz5cbiAgICA8VmlzaWJsZVRvZG9MaXN0IC8+XG4gICAgPEZvb3RlciAvPlxuICAgIDxTdWJtaXRMaW5rIC8+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG5cbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25DbGlja0NyYWlnc2xpc3Q6ICgpID0+IGRpc3BhdGNoKGdldENyYWlnc2xpc3RGZWVkKCkpLFxuICAgIG9uQ2xpY2tUd2l0dGVyOiAoKSA9PiBjb25zb2xlLmxvZygnd29ya2luZycpXG4gIH1cbn1cblxuY29uc3QgQXBwQ29ubmVjdGVkID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQXBwKVxuXG5leHBvcnQgZGVmYXVsdCBBcHBDb25uZWN0ZWRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFEQTtBQUNBO0FBZkE7QUFDQTtBQUNBO0FBMkJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///590\n");

/***/ })

})