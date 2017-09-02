webpackHotUpdate_name_(0,{

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

__webpack_require__(/*! ./header.less */ "./core/header.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      },
      stk: {
        cs: "STK",
        en: "STK"
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
          { href: "/stk", onClick: this._handleLinkClick },
          this.getLSIValue("stk")
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

/***/ })

})
//# sourceMappingURL=0.a523e727008c5887f55e.hot-update.js.map