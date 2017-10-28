webpackHotUpdate(0,{

/***/ 941:
/*!*******************************************!*\
  !*** ./client/src/reducers/craigslist.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar craigslist = function craigslist() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'GET_CRAIGSLIST_FEED':\n      return [action.data.data];\n    case 'TOGGLE_SHOW_HIDE':\n      state.map(function (item, i) {\n        if (item.id !== action.id) {\n          console.log('hi', item.id);\n          return item;\n        } else {\n          return _extends({}, item, {\n            show: !item.show\n          });\n        }\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = craigslist;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvY3JhaWdzbGlzdC5qcz8xOGYzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyYWlnc2xpc3QgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQ1JBSUdTTElTVF9GRUVEJzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGFjdGlvbi5kYXRhLmRhdGFcbiAgICAgIF1cbiAgICBjYXNlICdUT0dHTEVfU0hPV19ISURFJzpcbiAgICAgIHN0YXRlLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2hpJywgaXRlbS5pZClcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIHNob3c6ICFpdGVtLnNob3dcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgZGVmYXVsdDogXG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmFpZ3NsaXN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9yZWR1Y2Vycy9jcmFpZ3NsaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///941\n");

/***/ })

})