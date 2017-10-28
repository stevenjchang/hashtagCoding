webpackHotUpdate(0,{

/***/ 940:
/*!**********************************************!*\
  !*** ./client/src/containers/Craigslist.jsx ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 100);\n\nvar _actions = __webpack_require__(/*! ../actions */ 169);\n\nvar _CraigslistList = __webpack_require__(/*! ../components/redux_components/CraigslistList */ 941);\n\nvar _CraigslistList2 = _interopRequireDefault(_CraigslistList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import { toggleTodo } from '../actions'\nvar getVisibleTodos = function getVisibleTodos(todos, filter) {\n  switch (filter) {\n    case 'SHOW_ALL':\n      return todos;\n    case 'SHOW_COMPLETED':\n      return todos.filter(function (t) {\n        return t.completed;\n      });\n    case 'SHOW_ACTIVE':\n      return todos.filter(function (t) {\n        return !t.completed;\n      });\n  }\n};\n// import TodoList from '../components/TodoList'\n// import { connect } from 'react-redux'\n\n// const Craigslsit = connect(\n//   mapStateToProps,\n//   mapDispatchToProps\n// )(TodoList)\n\n// export default Craigslsit\n\n\n/* This is a Container Componenet\nWhere are you making the api calls?\n\n*/\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    todos: getVisibleTodos(state.todos, state.visibilityFilter)\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onTodoClick: function onTodoClick(id) {\n      dispatch(toggleTodo(id));\n    },\n    onButtonClick: function onButtonClick() {\n      dispatch((0, _actions.getCraigslistFeed)());\n    },\n    list: [1, 2, 3]\n  };\n};\n\nvar VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CraigslistList2.default);\n\nexports.default = VisibleTodoList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9DcmFpZ3NsaXN0LmpzeD82MWM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuLy8gY29uc3QgQ3JhaWdzbHNpdCA9IGNvbm5lY3QoXG4vLyAgIG1hcFN0YXRlVG9Qcm9wcyxcbi8vICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4vLyApKFRvZG9MaXN0KVxuXG4vLyBleHBvcnQgZGVmYXVsdCBDcmFpZ3Nsc2l0XG5cblxuLyogVGhpcyBpcyBhIENvbnRhaW5lciBDb21wb25lbmV0XG5XaGVyZSBhcmUgeW91IG1ha2luZyB0aGUgYXBpIGNhbGxzP1xuXG4qL1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBpbXBvcnQgeyB0b2dnbGVUb2RvIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7IGdldENyYWlnc2xpc3RGZWVkIH0gZnJvbSAnLi4vYWN0aW9ucydcbi8vIGltcG9ydCBUb2RvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9MaXN0J1xuaW1wb3J0IENyYWlnc2xpc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVkdXhfY29tcG9uZW50cy9DcmFpZ3NsaXN0TGlzdCdcblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCBmaWx0ZXIpID0+IHtcbiAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICBjYXNlICdTSE9XX0FMTCc6XG4gICAgICByZXR1cm4gdG9kb3NcbiAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKHQgPT4gdC5jb21wbGV0ZWQpXG4gICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0ID0+ICF0LmNvbXBsZXRlZClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9kb3M6IGdldFZpc2libGVUb2RvcyhzdGF0ZS50b2Rvcywgc3RhdGUudmlzaWJpbGl0eUZpbHRlcilcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Ub2RvQ2xpY2s6IGlkID0+IHtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZVRvZG8oaWQpKVxuICAgIH0sXG4gICAgb25CdXR0b25DbGljazogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0Q3JhaWdzbGlzdEZlZWQoKSlcbiAgICB9LFxuICAgIGxpc3Q6IFsxLDIsM11cbiAgfVxufVxuXG5jb25zdCBWaXNpYmxlVG9kb0xpc3QgPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShDcmFpZ3NsaXN0TGlzdClcblxuZXhwb3J0IGRlZmF1bHQgVmlzaWJsZVRvZG9MaXN0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvY29udGFpbmVycy9DcmFpZ3NsaXN0LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQVpBO0FBbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///940\n");

/***/ })

})