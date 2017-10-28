webpackHotUpdate(0,{

/***/ 84:
/*!*************************************!*\
  !*** ./client/src/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getCraigslistFeed = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ 168);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getCraigslistFeed = exports.getCraigslistFeed = function getCraigslistFeed(dispatch) {\n  return function (dispatch) {\n    return _axios2.default.get('/craigslist_scraper').then(function (res) {\n      console.log('res2 =>', res);\n      return res;\n    }).then(function (data) {\n      return dispatch({ type: 'GET_CRAIGSLIST_FEED', data: data });\n    }, function (err) {\n      return dispatch({ type: 'GET_CRAIGSLIST_FEED_ERROR', err: err });\n    });\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9hY3Rpb25zL2luZGV4LmpzP2M0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgZ2V0Q3JhaWdzbGlzdEZlZWQgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IGF4aW9zLmdldCgnL2NyYWlnc2xpc3Rfc2NyYXBlcicpXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXMyID0+JywgcmVzKSBcbiAgICAgIHJldHVybiByZXNcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgZGF0YSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdHRVRfQ1JBSUdTTElTVF9GRUVEJywgZGF0YX0pLFxuICAgICAgZXJyID0+IGRpc3BhdGNoKHsgdHlwZTogJ0dFVF9DUkFJR1NMSVNUX0ZFRURfRVJST1InLCBlcnIgfSlcbiAgICApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQVBBO0FBU0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///84\n");

/***/ })

})