webpackHotUpdate_name_(0,{

/***/ "./core/page.js":
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./core/page.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ./_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _tractorList = __webpack_require__(/*! ../vuc/tractor-list.js */ "./vuc/tractor-list.js");

var _tractorList2 = _interopRequireDefault(_tractorList);

var _tractorDetail = __webpack_require__(/*! ../vuc/tractor-detail.js */ "./vuc/tractor-detail.js");

var _tractorDetail2 = _interopRequireDefault(_tractorDetail);

var _vehicleStkList = __webpack_require__(/*! ../vuc/vehicle-stk-list.js */ "./vuc/vehicle-stk-list.js");

var _vehicleStkList2 = _interopRequireDefault(_vehicleStkList);

var _about = __webpack_require__(/*! ../vuc/about.js */ "./vuc/about.js");

var _about2 = _interopRequireDefault(_about);

var _header = __webpack_require__(/*! ../core/header.js */ "./core/header.js");

var _header2 = _interopRequireDefault(_header);

__webpack_require__(/*! ./page.less */ "./core/page.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "page",


  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: _config2.default.APP + ".Page",
    classNames: {
      main: _config2.default.CSS + "-page"
    }
  },
  //@@viewOff:statics

  //@@viewOn:standardComponentLifeCycle
  componentWillMount: function componentWillMount() {
    this._changeTitle();
    UU5.Environment.EventListener.registerLsi(this.getId(), this._changeTitle);
  },
  componentWillUnmount: function componentWillUnmount() {
    UU5.Environment.EventListener.unregisterLsi(this.getId());
  },

  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:componentSpecificHelpers
  _changeTitle: function _changeTitle() {
    document.title = this.getLSIItem(_config2.default.titleLsi);
  },

  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render: function render() {
    var routerBasePath = location.pathname.replace(/(\/.*?\/.*?)\/.*/, "$1");

    return _react2.default.createElement(
      UU5.Bricks.Page,
      _extends({
        top: _react2.default.createElement(_header2.default, null)
      }, this.getMainPropsToPass()),
      _react2.default.createElement(UU5.Common.Router, {
        route: "/",
        routes: {
          "/": { component: _react2.default.createElement(_tractorList2.default, null) },
          "/about": { component: _react2.default.createElement(_about2.default, null) },
          "/vehicles": { component: _react2.default.createElement(_tractorDetail2.default, null) },
          "/stk": { component: _react2.default.createElement(_vehicleStkList2.default, null) }
        },
        basePath: routerBasePath
      })
    );
  }
  //@@viewOff:render

});

/***/ })

})
//# sourceMappingURL=0.e4459d341013d686afdc.hot-update.js.map