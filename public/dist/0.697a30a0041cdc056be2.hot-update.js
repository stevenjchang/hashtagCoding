webpackHotUpdate(0,{

/***/ 590:
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Footer = __webpack_require__(/*! ./Footer.js */ 591);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _AddTodo = __webpack_require__(/*! ../containers/AddTodo.js */ 612);\n\nvar _AddTodo2 = _interopRequireDefault(_AddTodo);\n\nvar _VisibleTodoList = __webpack_require__(/*! ../containers/VisibleTodoList.js */ 613);\n\nvar _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);\n\nvar _CraigslistList = __webpack_require__(/*! ./redux_components/CraigslistList */ 170);\n\nvar _CraigslistList2 = _interopRequireDefault(_CraigslistList);\n\nvar _Links = __webpack_require__(/*! ./Links.jsx */ 934);\n\nvar _Links2 = _interopRequireDefault(_Links);\n\nvar _MenuBar = __webpack_require__(/*! ./MenuBar.jsx */ 939);\n\nvar _MenuBar2 = _interopRequireDefault(_MenuBar);\n\nvar _SubmitLink = __webpack_require__(/*! ./SubmitLink.jsx */ 940);\n\nvar _SubmitLink2 = _interopRequireDefault(_SubmitLink);\n\nvar _Craigslist = __webpack_require__(/*! ./../containers/Craigslist.jsx */ 941);\n\nvar _Craigslist2 = _interopRequireDefault(_Craigslist);\n\nvar _Twitter = __webpack_require__(/*! ./../containers/Twitter */ 942);\n\nvar _Twitter2 = _interopRequireDefault(_Twitter);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 69);\n\nvar _actions = __webpack_require__(/*! ../actions */ 84);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 103);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var onClickCraigslist = _ref.onClickCraigslist,\n      onClickTwitter = _ref.onClickTwitter;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_MenuBar2.default, null),\n    _react2.default.createElement(\n      _semanticUiReact.Button,\n      { onClick: onClickCraigslist },\n      'CL'\n    ),\n    _react2.default.createElement(\n      _semanticUiReact.Button,\n      { onClick: onClickTwitter },\n      'T'\n    ),\n    _react2.default.createElement(_Twitter2.default, null),\n    _react2.default.createElement(_Craigslist2.default, null),\n    _react2.default.createElement(_Links2.default, null),\n    _react2.default.createElement(_Craigslist2.default, null),\n    _react2.default.createElement(_AddTodo2.default, null),\n    _react2.default.createElement(_VisibleTodoList2.default, null),\n    _react2.default.createElement(_Footer2.default, null),\n    _react2.default.createElement(_SubmitLink2.default, null)\n  );\n};\n\n// import CraigslistList from './CraigslistList.jsx'\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onClickCraigslist: function onClickCraigslist() {\n      return dispatch((0, _actions.getCraigslistFeed)());\n    },\n    onClickTwitter: function onClickTwitter() {\n      return console.log('working');\n    }\n  };\n};\n\nvar AppConnected = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);\n\nexports.default = AppConnected;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTkwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2E4YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcydcbmltcG9ydCBBZGRUb2RvIGZyb20gJy4uL2NvbnRhaW5lcnMvQWRkVG9kby5qcydcbmltcG9ydCBWaXNpYmxlVG9kb0xpc3QgZnJvbSAnLi4vY29udGFpbmVycy9WaXNpYmxlVG9kb0xpc3QuanMnXG5cbi8vIGltcG9ydCBDcmFpZ3NsaXN0TGlzdCBmcm9tICcuL0NyYWlnc2xpc3RMaXN0LmpzeCdcbmltcG9ydCBDcmFpZ3NsaXN0TGlzdCBmcm9tICcuL3JlZHV4X2NvbXBvbmVudHMvQ3JhaWdzbGlzdExpc3QnXG5cbmltcG9ydCBMaW5rcyBmcm9tICcuL0xpbmtzLmpzeCdcbmltcG9ydCBNZW51YmFyIGZyb20gJy4vTWVudUJhci5qc3gnXG5pbXBvcnQgU3VibWl0TGluayBmcm9tICcuL1N1Ym1pdExpbmsuanN4J1xuXG5pbXBvcnQgQ3JhaWdzbGlzdCBmcm9tICcuLy4uL2NvbnRhaW5lcnMvQ3JhaWdzbGlzdC5qc3gnXG5pbXBvcnQgVHdpdHRlciBmcm9tICcuLy4uL2NvbnRhaW5lcnMvVHdpdHRlcidcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0Q3JhaWdzbGlzdEZlZWQsIGdldFR3aXR0ZXJGZWVkIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBBcHAgPSAoe29uQ2xpY2tDcmFpZ3NsaXN0LCBvbkNsaWNrVHdpdHRlcn0pID0+IChcbiAgPGRpdj5cbiAgICA8TWVudWJhciAvPlxuICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0NyYWlnc2xpc3R9PkNMPC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrVHdpdHRlcn0+VDwvQnV0dG9uPlxuICAgIDxUd2l0dGVyIC8+XG4gICAgPENyYWlnc2xpc3QgLz5cbiAgICA8TGlua3MgLz5cbiAgICA8Q3JhaWdzbGlzdCAvPiBcbiAgICA8QWRkVG9kbyAvPlxuICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPFN1Ym1pdExpbmsgLz5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcblxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNsaWNrQ3JhaWdzbGlzdDogKCkgPT4gZGlzcGF0Y2goZ2V0Q3JhaWdzbGlzdEZlZWQoKSksXG4gICAgb25DbGlja1R3aXR0ZXI6ICgpID0+IGNvbnNvbGUubG9nKCd3b3JraW5nJylcbiAgfVxufVxuXG5jb25zdCBBcHBDb25uZWN0ZWQgPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShBcHApXG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbm5lY3RlZFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFEQTtBQUNBO0FBZkE7QUFDQTtBQUNBO0FBNEJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///590\n");

/***/ })

})