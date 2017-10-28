webpackHotUpdate(0,{

/***/ 941:
/*!*******************************************!*\
  !*** ./client/src/reducers/craigslist.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar craigslist = function craigslist() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_CRAIGSLIST_FEED':\n      return [action.data.data];\n    case 'TOGGLE_SHOW_HIDE':\n      return state.map(function (listing, index) {\n        listing.map(function (item, i) {\n          if (item.id === action.id) {\n            console.log('hi', item);\n            // return item;\n            return Object.assign({}, item, {\n              show: !item.show\n            });\n          }\n          return item;\n        });\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = craigslist;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvY3JhaWdzbGlzdC5qcz8xOGYzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyYWlnc2xpc3QgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQ1JBSUdTTElTVF9GRUVEJzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGFjdGlvbi5kYXRhLmRhdGFcbiAgICAgIF1cbiAgICBjYXNlICdUT0dHTEVfU0hPV19ISURFJzpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGxpc3RpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGxpc3RpbmcubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpJywgaXRlbSlcbiAgICAgICAgICAgIC8vIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcbiAgICAgICAgICAgICAgc2hvdzogIWl0ZW0uc2hvd1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IFxuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KSAgICAgICAgXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6IFxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JhaWdzbGlzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvcmVkdWNlcnMvY3JhaWdzbGlzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXFCQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///941\n");

/***/ })

})