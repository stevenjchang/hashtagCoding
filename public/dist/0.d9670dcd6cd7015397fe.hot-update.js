webpackHotUpdate(0,{

/***/ 941:
/*!*******************************************!*\
  !*** ./client/src/reducers/craigslist.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar craigslist = function craigslist() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_CRAIGSLIST_FEED':\n      return [action.data.data];\n    case 'TOGGLE_SHOW_HIDE':\n      return state.map(function (listing, index) {\n        console.log('listing =>', listing);\n        listing.map(function (item, i) {\n          if (item.id === action.id) {\n            console.log('item =>', item.id);\n            // return item;\n            return _extends({}, item, {\n              show: 'hello'\n            });\n          }\n          return item;\n        });\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = craigslist;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvY3JhaWdzbGlzdC5qcz8xOGYzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyYWlnc2xpc3QgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQ1JBSUdTTElTVF9GRUVEJzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGFjdGlvbi5kYXRhLmRhdGFcbiAgICAgIF1cbiAgICBjYXNlICdUT0dHTEVfU0hPV19ISURFJzpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGxpc3RpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsaXN0aW5nID0+JywgbGlzdGluZylcbiAgICAgICAgbGlzdGluZy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbSA9PicsIGl0ZW0uaWQpXG4gICAgICAgICAgICAvLyByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLml0ZW0sIFxuICAgICAgICAgICAgICBzaG93OiAnaGVsbG8nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICB9IFxuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KSAgICAgICAgXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6IFxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JhaWdzbGlzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvcmVkdWNlcnMvY3JhaWdzbGlzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEJBO0FBd0JBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///941\n");

/***/ })

})