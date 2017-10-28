webpackHotUpdate(0,{

/***/ 941:
/*!*******************************************!*\
  !*** ./client/src/reducers/craigslist.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar craigslist = function craigslist() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_CRAIGSLIST_FEED':\n      return [action.data.data];\n    case 'TOGGLE_SHOW_HIDE':\n      return state.map(function (listing, index) {\n        console.log('listing =>', listing);\n        return listing.map(function (item, i) {\n          if (item.id === action.id) {\n            console.log('item =>', item.id);\n            // return item;\n            return Object.assign({}, item, {\n              show: !item.show\n            });\n          }\n          return item;\n        });\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = craigslist;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvY3JhaWdzbGlzdC5qcz8xOGYzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyYWlnc2xpc3QgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQ1JBSUdTTElTVF9GRUVEJzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGFjdGlvbi5kYXRhLmRhdGFcbiAgICAgIF1cbiAgICBjYXNlICdUT0dHTEVfU0hPV19ISURFJzpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGxpc3RpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsaXN0aW5nID0+JywgbGlzdGluZylcbiAgICAgICAgcmV0dXJuIGxpc3RpbmcubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gPT4nLCBpdGVtLmlkKVxuICAgICAgICAgICAgLy8gcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xuICAgICAgICAgICAgICBzaG93OiAhaXRlbS5zaG93XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pICAgICAgICBcbiAgICAgIH0pXG4gICAgZGVmYXVsdDogXG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmFpZ3NsaXN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9yZWR1Y2Vycy9jcmFpZ3NsaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///941\n");

/***/ })

})