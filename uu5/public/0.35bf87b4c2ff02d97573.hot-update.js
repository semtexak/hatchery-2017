webpackHotUpdate_name_(0,{

/***/ "./vuc/vehicle-list.js":
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./vuc/vehicle-list.js ***!
  \*****************************/
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

var _vehicleDetail = __webpack_require__(/*! ./vehicle-detail */ "./vuc/vehicle-detail.js");

var _vehicleDetail2 = _interopRequireDefault(_vehicleDetail);

var _lendingDetail = __webpack_require__(/*! ./lending-detail */ "./vuc/lending-detail.js");

var _lendingDetail2 = _interopRequireDefault(_lendingDetail);

var _calls = __webpack_require__(/*! calls */ "./calls.js");

var _calls2 = _interopRequireDefault(_calls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "vehicle-list",


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
            onLoad: "cars",
            create: "addCar",
            find: "findCars"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getInitialState: function getInitialState() {
        return {
            showForm: false,
            filtered: false,
            actual: 0
        };
    },
    componentWillMount: function componentWillMount() {
        this.setCalls(_calls2.default);
    },

    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers
    _getNewForm: function _getNewForm() {
        if (!this.state.showForm) {
            return null;
        }

        return _react2.default.createElement(
            UU5.Bricks.Panel,
            { header: "P\u0159id\xE1n\xED nov\xE9ho vozidla", alwaysExpanded: true, disableHeaderClick: true },
            _react2.default.createElement(
                UU5.Forms.BasicForm,
                { ref_: this._handleNewFormReference },
                _react2.default.createElement(UU5.Forms.Text, { name: "type", value: "RECLAIMER", label: "Typ" }),
                _react2.default.createElement(UU5.Forms.Text, { name: "vin", value: "AHTBB3QD001726541", label: "VIN" }),
                _react2.default.createElement(UU5.Forms.Text, { name: "date", value: "1487812893", label: "Datum" }),
                _react2.default.createElement(UU5.Forms.Text, { name: "price", value: "1100000", label: "Cena" })
            ),
            _react2.default.createElement(
                UU5.Bricks.Button,
                { colorSchema: "warning", onClick: this._handleCancelClick },
                "Zav\u0159\xEDt"
            ),
            _react2.default.createElement(
                UU5.Bricks.Button,
                { colorSchema: "primary", onClick: this._handleCreateNewCar },
                "Ulo\u017Eit"
            )
        );
    },
    _getFilterForm: function _getFilterForm() {
        return _react2.default.createElement(
            UU5.Forms.BasicForm,
            { ref_: this._handleFilterFormReference },
            _react2.default.createElement(
                UU5.Bricks.Row,
                null,
                _react2.default.createElement(
                    UU5.Bricks.Column,
                    { colWidth: "lg-3" },
                    _react2.default.createElement(
                        UU5.Forms.Select,
                        { name: "type", label: "Chose football club of your hearth:" },
                        _react2.default.createElement(UU5.Forms.Select.Option, { value: "Sparta" }),
                        _react2.default.createElement(UU5.Forms.Select.Option, { value: "Slavia" }),
                        _react2.default.createElement(UU5.Forms.Select.Option, { value: "Ban\xEDk" }),
                        _react2.default.createElement(UU5.Forms.Select.Option, { value: "Klokani" }),
                        _react2.default.createElement(UU5.Forms.Select.Option, { value: "slavoj Houslice" })
                    )
                ),
                _react2.default.createElement(
                    UU5.Bricks.Column,
                    { colWidth: "lg-3" },
                    _react2.default.createElement(UU5.Forms.Text, { name: "acquiredTo", label: "Do", controlled: false, value: "2007-08-23" })
                ),
                _react2.default.createElement(
                    UU5.Bricks.Column,
                    { colWidth: "lg-6" },
                    _react2.default.createElement(UU5.Bricks.Button, { content: "Filtruj", onClick: this._handleFilterClick }),
                    _react2.default.createElement(UU5.Bricks.Button, {
                        colorSchema: "warning",
                        disabled: !this.state.filtered,
                        content: "Zru\u0161 filtr",
                        onClick: this._handleCancelFilter
                    })
                )
            )
        );
    },
    _getPanelHeader: function _getPanelHeader() {
        var button = !this.state.showForm && _react2.default.createElement(
            UU5.Bricks.Button,
            { size: "xs", onClick: this._handleShowFormClick,
                className: "pull-right" },
            "P\u0159idat"
        );

        return _react2.default.createElement(
            UU5.Bricks.Div,
            null,
            "Seznam vozidel ",
            button
        );
    },
    _handleNewFormReference: function _handleNewFormReference(form) {
        this._addForm = form;
    },
    _handleFilterFormReference: function _handleFilterFormReference(form) {
        this._filterForm = form;
    },
    _handleCreateNewCar: function _handleCreateNewCar() {
        var _this = this;

        var formData = this._addForm.getValues();

        // hide form and show loading
        this.setState({
            loadFeedback: "loading",
            showForm: false
        }, function () {
            _this.getCall("create")({
                data: formData,
                done: function done() {
                    _this.reload();
                },
                fail: function fail(response) {
                    return console.error(response);
                }
            });
        });

        // clear up reference
        this._addForm = undefined;
    },
    _handleCancelFilter: function _handleCancelFilter() {
        var _this2 = this;

        this.setState({
            loadFeedback: "loading",
            filtered: false
        }, function () {
            return _this2.reload();
        });
    },
    _handleShowFormClick: function _handleShowFormClick() {
        this.setState({ showForm: true });
    },
    _handleCancelClick: function _handleCancelClick() {
        this.setState({ showForm: false });
    },
    _handleFilterClick: function _handleFilterClick() {
        var _this3 = this;

        this.setState({
            loadFeedback: "loading"
        }, function () {
            _this3.getCall("find")({
                data: _this3._filterForm.getValues(),
                done: function done(data) {
                    _this3.setState({
                        dtoOut: data,
                        loadFeedback: "ready",
                        filtered: true
                    });
                },
                fail: function fail(response) {
                    return console.error(response);
                }
            });
        });
    },
    _handlePaginationClick: function _handlePaginationClick(index) {
        var _this4 = this;

        this.setState({
            actual: index,
            loadFeedback: "loading"
        }, function () {
            _this4.getCall("onLoad")({
                data: { page: ++index },
                done: function done(data) {
                    _this4.setState({
                        dtoOut: data,
                        loadFeedback: "ready",
                        filtered: true
                    });
                },
                fail: function fail(response) {
                    return console.error(response);
                }
            });
        });
    },
    _handleLinkClick: function _handleLinkClick(link) {
        this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href);
    },
    _formatClientName: function _formatClientName(lending) {
        return lending ? lending.client.name + " " + (!lending.client.surname ? "" : lending.client.surname) : "--";
    },
    _handleLoadedTractors: function _handleLoadedTractors(tractors) {
        var _this5 = this;

        if (!tractors || tractors.totalElements === 0) {
            return _react2.default.createElement(
                UU5.Bricks.P,
                null,
                "Nen\xED tu \u017E\xE1dn\xFD traktor"
            );
        }
        var vehicles = tractors.content;

        var lines = vehicles.map(function (vehicle) {
            return _react2.default.createElement(
                UU5.Bricks.Table.Tr,
                { key: vehicle.id },
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    _react2.default.createElement(UU5.Bricks.Link, { content: vehicle.vin, onClick: function onClick() {
                            UU5.Environment.setRoute(_react2.default.createElement(_vehicleDetail2.default, { vehicleID: vehicle.id }));
                        } })
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    vehicle.type
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    vehicle.dateOfAcquisition
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    vehicle.vehicleState
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    _react2.default.createElement(UU5.Bricks.Link, { content: _this5._formatClientName(vehicle.currentLending), onClick: function onClick() {
                            UU5.Environment.setRoute(_react2.default.createElement(_lendingDetail2.default, { lendingID: vehicle.currentLending.id }));
                        } })
                ),
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
                    return _this5._pagination = r;
                },
                colorSchema: "success",
                items: Array.from(new Array(tractors.totalPages), function (val, index) {
                    return index + 1;
                }),
                firstGlyphicon: "glyphicon-backward",
                lastGlyphicon: "glyphicon-forward",
                onChanged: function onChanged(comp, index) {
                    return _this5._handlePaginationClick(index);
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
                "Seznam vozidel"
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
//# sourceMappingURL=0.35bf87b4c2ff02d97573.hot-update.js.map