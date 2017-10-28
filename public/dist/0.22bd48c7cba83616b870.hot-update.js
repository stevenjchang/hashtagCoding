webpackHotUpdate(0,{

/***/ 84:
/*!*************************************!*\
  !*** ./client/src/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getTweeterFeed = exports.getCraigslistFeed = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ 168);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getCraigslistFeed = exports.getCraigslistFeed = function getCraigslistFeed(dispatch) {\n  return function (dispatch) {\n    return _axios2.default.get('/craigslist_scraper').then(function (res) {\n      console.log('res2 =>', res);\n      return res;\n    }).then(function (data) {\n      return dispatch({ type: 'GET_CRAIGSLIST_FEED', data: data });\n    }, function (err) {\n      return dispatch({ type: 'GET_CRAIGSLIST_FEED_ERROR', err: err });\n    });\n  };\n};\n\nvar getTweeterFeed = exports.getTweeterFeed = function getTweeterFeed() {\n  return {\n    type: 'GET_TWITTER_FEED'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9hY3Rpb25zL2luZGV4LmpzP2M0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgZ2V0Q3JhaWdzbGlzdEZlZWQgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IGF4aW9zLmdldCgnL2NyYWlnc2xpc3Rfc2NyYXBlcicpXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXMyID0+JywgcmVzKSBcbiAgICAgIHJldHVybiByZXNcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgZGF0YSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdHRVRfQ1JBSUdTTElTVF9GRUVEJywgZGF0YX0pLFxuICAgICAgZXJyID0+IGRpc3BhdGNoKHsgdHlwZTogJ0dFVF9DUkFJR1NMSVNUX0ZFRURfRVJST1InLCBlcnIgfSlcbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUd2VldGVyRmVlZCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnR0VUX1RXSVRURVJfRkVFRCdcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvYWN0aW9ucy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///84\n");

/***/ })

})