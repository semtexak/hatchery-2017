webpackHotUpdate_name_(0,{

/***/ "./vuc/tractor-detail.js":
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./vuc/tractor-detail.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ../core/_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _calls = __webpack_require__(/*! calls */ "./calls.js");

var _calls2 = _interopRequireDefault(_calls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "tractor-detail",


    //@@viewOn:mixins
    mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.LoadMixin, UU5.Common.CcrReaderMixin],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: _config2.default.APP + ".TractorList",
        classNames: {
            main: _config2.default.CSS + "-tractor-list"
        },
        calls: {
            find: "findVehicle"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getInitialState: function getInitialState() {
        return {
            vehicleID: 0
        };
    },
    componentWillMount: function componentWillMount() {
        this.setCalls(_calls2.default);
    },

    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers


    _handleLinkClick: function _handleLinkClick(link) {
        this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href);
    },
    _handleLoadedTractors: function _handleLoadedTractors(tractors) {
        var _this = this;

        if (!tractors || tractors.length === 0) {
            return _react2.default.createElement(
                UU5.Bricks.P,
                null,
                "Nen\xED tu \u017E\xE1dn\xFD traktor"
            );
        }

        var lines = tractors.map(function (tractor) {
            return _react2.default.createElement(
                UU5.Bricks.Table.Tr,
                { key: tractor.id },
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    _react2.default.createElement(UU5.Bricks.Link, { content: tractor.vin, href: "/vehicles/3", onClick: _this._handleLinkClick })
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    tractor.type
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    tractor.dateOfAcquisition
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    tractor.vehicleState
                ),
                _react2.default.createElement(UU5.Bricks.Table.Td, null),
                _react2.default.createElement(UU5.Bricks.Table.Td, null)
            );
        });

        return _react2.default.createElement(
            UU5.Bricks.Div,
            null,
            _react2.default.createElement(
                UU5.Bricks.Table,
                { striped: true },
                _react2.default.createElement(
                    UU5.Bricks.Table.THead,
                    null,
                    _react2.default.createElement(
                        UU5.Bricks.Table.Tr,
                        null,
                        _react2.default.createElement(
                            UU5.Bricks.Table.Th,
                            null,
                            "VIN"
                        ),
                        _react2.default.createElement(
                            UU5.Bricks.Table.Th,
                            null,
                            "Typ"
                        ),
                        _react2.default.createElement(
                            UU5.Bricks.Table.Th,
                            null,
                            "St\xE1\u0159\xED"
                        ),
                        _react2.default.createElement(
                            UU5.Bricks.Table.Th,
                            null,
                            "Stav"
                        ),
                        _react2.default.createElement(
                            UU5.Bricks.Table.Th,
                            null,
                            "Klient"
                        ),
                        _react2.default.createElement(
                            UU5.Bricks.Table.Th,
                            null,
                            "Akce"
                        )
                    )
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.TBody,
                    null,
                    lines
                )
            ),
            _react2.default.createElement(UU5.Bricks.Pagination, {
                ref_: function ref_(r) {
                    return _this._pagination = r;
                },
                colorSchema: "success",
                items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                firstGlyphicon: "glyphicon-backward",
                lastGlyphicon: "glyphicon-forward",
                onChanged: function onChanged(comp, index) {
                    return _this._handlePaginationClick(index);
                }
            })
        );
    },

    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render: function render() {
        return _react2.default.createElement(
            UU5.Bricks.Div,
            null,
            _react2.default.createElement(
                UU5.Bricks.Header,
                { level: 2 },
                "Seznam traktor\u016F (vozidel)"
            ),
            this._getNewForm(),
            _react2.default.createElement(
                UU5.Bricks.Panel,
                { header: this._getPanelHeader(), alwaysExpanded: true, disableHeaderClick: true },
                this._getFilterForm(),
                this.getLoadFeedbackChildren(this._handleLoadedTractors)
            )
        );
    }
    //@@viewOff:render

});

/***/ })

})
//# sourceMappingURL=0.a4383a161dbca6228072.hot-update.js.map