webpackHotUpdate(0,{

/***/ 942:
/*!******************************************!*\
  !*** ./client/src/containers/Twitter.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 69);\n\nvar _actions = __webpack_require__(/*! ../actions */ 84);\n\nvar _CraigslistList = __webpack_require__(/*! ../components/redux_components/CraigslistList */ 170);\n\n// const mapStateToProps = state => {\n//   return {\n//     images: {}\n//   }\n// }\n\n// const mapDispatchToProps = dispatch => {\n//   return {\n//     click: () => {\n//       dispatch()\n//     }\n//   }\n// }\n\n// const Twitter = connect(\n//   mapStateToProps, \n//   mapDispatchToProps\n// )(CraigslistList)\n\n// import { TweetList } from '../components/TweetList_semantic.jsx'\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.apiCall\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onButtonClick: function onButtonClick() {\n      dispatch((0, _actions.getCraigslistFeed)());\n    }\n  };\n};\n\nvar Twitter = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CraigslistList.CraigslistList);\n\nexports.default = Twitter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzPzc4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0VHdpdHRlckZlZWQgfSBmcm9tICcuLi9hY3Rpb25zJ1xuLy8gaW1wb3J0IHsgVHdlZXRMaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ud2VldExpc3Rfc2VtYW50aWMuanN4J1xuaW1wb3J0IHsgQ3JhaWdzbGlzdExpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL3JlZHV4X2NvbXBvbmVudHMvQ3JhaWdzbGlzdExpc3QnXG5cbmltcG9ydCB7IGdldENyYWlnc2xpc3RGZWVkIH0gZnJvbSAnLi4vYWN0aW9ucydcblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGltYWdlczoge31cbi8vICAgfVxuLy8gfVxuXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgY2xpY2s6ICgpID0+IHtcbi8vICAgICAgIGRpc3BhdGNoKClcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgVHdpdHRlciA9IGNvbm5lY3QoXG4vLyAgIG1hcFN0YXRlVG9Qcm9wcywgXG4vLyAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuLy8gKShDcmFpZ3NsaXN0TGlzdClcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGxpc3Q6IHN0YXRlLmFwaUNhbGxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25CdXR0b25DbGljazogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0Q3JhaWdzbGlzdEZlZWQoKSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgVHdpdHRlciA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKENyYWlnc2xpc3RMaXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29udGFpbmVycy9Ud2l0dGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQXdCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///942\n");

/***/ })

})