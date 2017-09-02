webpackHotUpdate_name_(0,{

/***/ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/header.less":
false,

/***/ "./core/header.js":
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./core/header.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ./_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./header.less"

exports.default = _react2.default.createClass({
  displayName: "header",


  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.CcrReaderMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: _config2.default.APP + ".Header",
    classNames: {
      main: _config2.default.CSS + "-header"
    },
    lsi: {
      list: {
        cs: "Seznam traktorů",
        en: "Tractor list"
      },
      about: {
        cs: "O půjčovně",
        en: "About"
      }
    }
  },
  //@@viewOff:statics

  //@@viewOn:componentSpecificHelpers
  _handleLinkClick: function _handleLinkClick(link) {
    this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href);
  },

  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render: function render() {
    return _react2.default.createElement(
      UU5.Bricks.Div,
      this.getMainPropsToPass(),
      _react2.default.createElement(
        "nav",
        null,
        _react2.default.createElement(
          UU5.Bricks.Link,
          { href: "/", onClick: this._handleLinkClick },
          this.getLSIValue("list")
        ),
        _react2.default.createElement(
          UU5.Bricks.Link,
          { href: "/about", onClick: this._handleLinkClick },
          this.getLSIValue("about")
        )
      )
    );
  }
  //@@viewOff:render

});

/***/ }),

/***/ "./core/header.less":
false

})
//# sourceMappingURL=0.8c75f89d2d554dd20b9b.hot-update.js.map