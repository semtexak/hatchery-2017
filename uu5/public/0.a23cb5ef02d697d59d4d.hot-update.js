webpackHotUpdate_name_(0,{

/***/ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/header.less":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ../~/css-loader!../~/less-loader/dist!./core/header.less ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".uu-demoapp-header nav {\n  font-size: 140%;\n}\n.uu-demoapp-header nav a {\n  margin: 0.5em;\n}\n", ""]);

// exports


/***/ }),

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
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./core/header.less ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader!../../~/less-loader/dist!./header.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/header.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../~/css-loader!../../~/less-loader/dist!./header.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/header.less", function() {
			var newContent = __webpack_require__(/*! !../../~/css-loader!../../~/less-loader/dist!./header.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./core/header.less");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=0.a23cb5ef02d697d59d4d.hot-update.js.map