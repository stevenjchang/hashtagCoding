webpackHotUpdate(0,{

/***/ 942:
/*!******************************************!*\
  !*** ./client/src/containers/Twitter.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 69);\n\nvar _CraigslistList = __webpack_require__(/*! ../components/redux_components/CraigslistList */ 170);\n\nvar _CraigslistList2 = _interopRequireDefault(_CraigslistList);\n\nvar _actions = __webpack_require__(/*! ../actions */ 84);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const mapStateToProps = state => {\n//   return {\n//     images: {}\n//   }\n// }\n\n// const mapDispatchToProps = dispatch => {\n//   return {\n//     click: () => {\n//       dispatch()\n//     }\n//   }\n// }\n\n// const Twitter = connect(\n//   mapStateToProps, \n//   mapDispatchToProps\n// )(CraigslistList)\n\n// import { getTwitterFeed } from '../actions'\n// import { TweetList } from '../components/TweetList_semantic.jsx'\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.apiCall\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onButtonClick: function onButtonClick() {\n      dispatch((0, _actions.getCraigslistFeed)());\n    }\n  };\n};\n\nvar Twitter = (0, _reactRedux.connect)()(_CraigslistList2.default);\n\nexports.default = Twitter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzPzc4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gaW1wb3J0IHsgZ2V0VHdpdHRlckZlZWQgfSBmcm9tICcuLi9hY3Rpb25zJ1xuLy8gaW1wb3J0IHsgVHdlZXRMaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ud2VldExpc3Rfc2VtYW50aWMuanN4J1xuaW1wb3J0IENyYWlnc2xpc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVkdXhfY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdCdcblxuaW1wb3J0IHsgZ2V0Q3JhaWdzbGlzdEZlZWQgfSBmcm9tICcuLi9hY3Rpb25zJ1xuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgaW1hZ2VzOiB7fVxuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBjbGljazogKCkgPT4ge1xuLy8gICAgICAgZGlzcGF0Y2goKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBjb25zdCBUd2l0dGVyID0gY29ubmVjdChcbi8vICAgbWFwU3RhdGVUb1Byb3BzLCBcbi8vICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4vLyApKENyYWlnc2xpc3RMaXN0KVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGlzdDogc3RhdGUuYXBpQ2FsbFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkJ1dHRvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRDcmFpZ3NsaXN0RmVlZCgpKVxuICAgIH1cbiAgfVxufVxuXG5cblxuY29uc3QgVHdpdHRlciA9IGNvbm5lY3QoKShDcmFpZ3NsaXN0TGlzdClcblxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///942\n");

/***/ })

})