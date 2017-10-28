webpackHotUpdate(0,{

/***/ 941:
/*!*******************************************!*\
  !*** ./client/src/reducers/craigslist.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar craigslist = function craigslist() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_CRAIGSLIST_FEED':\n      return [action.data.data];\n    case 'TOGGLE_SHOW_HIDE':\n      return state.map(function (listing, index) {\n        return listing.map(function (item, i) {\n          if (item.id === action.id) {\n            return Object.assign({}, item, {\n              show: !item.show\n            });\n          }\n          return item;\n        });\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = craigslist;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvY3JhaWdzbGlzdC5qcz8xOGYzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyYWlnc2xpc3QgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQ1JBSUdTTElTVF9GRUVEJzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGFjdGlvbi5kYXRhLmRhdGFcbiAgICAgIF1cbiAgICBjYXNlICdUT0dHTEVfU0hPV19ISURFJzpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGxpc3RpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBsaXN0aW5nLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgIHNob3c6ICFpdGVtLnNob3dcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSkgICAgICAgIFxuICAgICAgfSlcbiAgICBkZWZhdWx0OiBcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyYWlnc2xpc3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL3JlZHVjZXJzL2NyYWlnc2xpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///941\n");

/***/ })

})