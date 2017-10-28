webpackHotUpdate(0,{

/***/ 103:
/*!*************************************!*\
  !*** ./client/src/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getTweeterFeed = exports.getCraigslistFeed = exports.getCraigslistFeed_old = exports.submitLink = exports.getAPIFeed = exports.toggleTodo = exports.setVisibilityFilter = exports.addTodo = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ 102);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar nextTodoId = 0;\nvar addTodo = exports.addTodo = function addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    id: nextTodoId++,\n    text: text\n  };\n};\n\nvar setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {\n  return {\n    type: 'SET_VISIBILITY_FILTER',\n    filter: filter\n  };\n};\n\nvar toggleTodo = exports.toggleTodo = function toggleTodo(id) {\n  return {\n    type: 'TOGGLE_TODO',\n    id: id\n  };\n};\n\nvar getAPIFeed = exports.getAPIFeed = function getAPIFeed(service) {\n  return {\n    type: 'GET_API_FEED',\n    service: service\n  };\n};\nvar submitLink = exports.submitLink = function submitLink(input) {\n  return {\n    type: 'SUBMIT_LINK',\n    input: input\n  };\n};\n\nvar getCraigslistFeed_old = exports.getCraigslistFeed_old = function getCraigslistFeed_old() {\n  return {\n    type: 'GET_CRAIGSLIST_FEED'\n  };\n};\n\nvar getCraigslistFeed = exports.getCraigslistFeed = function getCraigslistFeed(dispatch) {\n  return function (dispatch) {\n    return _axios2.default.get('/craigslist_scraper').then(function (res) {\n      return console.log('res2 =>', res);\n    }).then(function (data) {\n      return dispatch({ type: 'GET_CRAIGSLIST_FEED', data: data });\n    });\n  };\n};\n\nvar getTweeterFeed = exports.getTweeterFeed = function getTweeterFeed() {\n  return {\n    type: 'GET_TWITTER_FEED'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvYWN0aW9ucy9pbmRleC5qcz9jNGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxubGV0IG5leHRUb2RvSWQgPSAwXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9IHRleHQgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgaWQ6IG5leHRUb2RvSWQrKyxcbiAgICB0ZXh0XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuICAgIGZpbHRlclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVUb2RvID0gaWQgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdUT0dHTEVfVE9ETycsXG4gICAgaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QVBJRmVlZCA9IChzZXJ2aWNlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0dFVF9BUElfRkVFRCcsXG4gICAgc2VydmljZVxuICB9XG59XG5leHBvcnQgY29uc3Qgc3VibWl0TGluayA9IChpbnB1dCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTVUJNSVRfTElOSycsXG4gICAgaW5wdXRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3JhaWdzbGlzdEZlZWRfb2xkID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdHRVRfQ1JBSUdTTElTVF9GRUVEJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDcmFpZ3NsaXN0RmVlZCA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4gYXhpb3MuZ2V0KCcvY3JhaWdzbGlzdF9zY3JhcGVyJylcbiAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2coJ3JlczIgPT4nLCByZXMpKVxuICAgIC50aGVuKFxuICAgICAgZGF0YSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdHRVRfQ1JBSUdTTElTVF9GRUVEJywgZGF0YX0pLFxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR3ZWV0ZXJGZWVkID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdHRVRfVFdJVFRFUl9GRUVEJ1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///103\n");

/***/ })

})