webpackHotUpdate_name_(0,{

/***/ "./vuc/vehicle-detail.js":
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./vuc/vehicle-detail.js ***!
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
    displayName: "vehicle-detail",


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
            onLoad: "findVehicle",
            create: "addStk",
            load: "loadLendingsForVehicle"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getInitialState: function getInitialState() {
        return {
            showForm: false,
            vehicleID: 0
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
            { header: "P\u0159id\xE1n\xED STK", alwaysExpanded: true, disableHeaderClick: true },
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
    _getPanelHeader: function _getPanelHeader(vehicle) {
        var button = !this.state.showForm && _react2.default.createElement(
            UU5.Bricks.Button,
            { size: "xs", onClick: this._handleShowFormClick,
                className: "pull-right" },
            "P\u0159idat STK"
        );

        return _react2.default.createElement(
            UU5.Bricks.Div,
            null,
            vehicle.vin + (vehicle.nickname ? "(" + vehicle.nickname + ")" : ""),
            " ",
            button
        );
    },
    _handleShowFormClick: function _handleShowFormClick() {
        this.setState({ showForm: true });
    },
    _handleCancelClick: function _handleCancelClick() {
        this.setState({ showForm: false });
    },
    _handleNewFormReference: function _handleNewFormReference(form) {
        this._addForm = form;
    },
    getOnLoadData_: function getOnLoadData_() {
        return {
            vehicleID: this.props.vehicleID
        };
    },
    _handleLinkClick: function _handleLinkClick(link) {
        this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href);
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
    _handleLoadLendingData: function _handleLoadLendingData() {
        var _this2 = this;

        this.getCall("load")({
            data: { vehicleID: this.props.vehicleID },
            done: function done() {
                _this2.reload();
            },
            fail: function fail(response) {
                return console.error(response);
            }
        });
    },
    _handleCancelFilter: function _handleCancelFilter() {
        var _this3 = this;

        this.setState({
            loadFeedback: "loading",
            filtered: false
        }, function () {
            return _this3.reload();
        });
    },
    _handleLoadedVehicle: function _handleLoadedVehicle(vehicle) {
        var stk = vehicle.vehicleMots.map(function (mot) {
            return _react2.default.createElement(
                UU5.Bricks.Table.Tr,
                { key: mot.id },
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    mot.checkDate
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    mot.passed
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    mot.comment
                )
            );
        });

        var lends = vehicle.lendings.map(function (lending) {
            return _react2.default.createElement(
                UU5.Bricks.Table.Tr,
                { key: lending.id },
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    lending.lendFrom
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    lending.lendTo
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    lending.client.name
                )
            );
        });

        var repairs = vehicle.vehicleRepairs.map(function (repair) {
            return _react2.default.createElement(
                UU5.Bricks.Table.Tr,
                { key: repair.id },
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    repair.repairedAt
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    repair.price
                ),
                _react2.default.createElement(
                    UU5.Bricks.Table.Td,
                    null,
                    repair.repairResolution
                )
            );
        });

        return _react2.default.createElement(
            UU5.Bricks.Div,
            null,
            _react2.default.createElement(
                UU5.Bricks.Row,
                null,
                _react2.default.createElement(
                    UU5.Bricks.Column,
                    { colWidth: "xs-12 sm-12 md-12 lg-12" },
                    _react2.default.createElement(
                        UU5.Bricks.Panel,
                        { header: this._getPanelHeader(vehicle), alwaysExpanded: true,
                            disableHeaderClick: true },
                        _react2.default.createElement(
                            UU5.Bricks.Table,
                            { striped: true },
                            _react2.default.createElement(
                                UU5.Bricks.Table.THead,
                                null,
                                _react2.default.createElement(UU5.Bricks.Table.Tr, null)
                            ),
                            _react2.default.createElement(
                                UU5.Bricks.Table.TBody,
                                null,
                                _react2.default.createElement(
                                    UU5.Bricks.Table.Tr,
                                    null,
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        _react2.default.createElement(
                                            "strong",
                                            null,
                                            "Typ:"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        vehicle.type
                                    )
                                ),
                                _react2.default.createElement(
                                    UU5.Bricks.Table.Tr,
                                    null,
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        _react2.default.createElement(
                                            "strong",
                                            null,
                                            "VIN:"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        vehicle.vin
                                    )
                                ),
                                _react2.default.createElement(
                                    UU5.Bricks.Table.Tr,
                                    null,
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        _react2.default.createElement(
                                            "strong",
                                            null,
                                            "Stav:"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        vehicle.vehicleState
                                    )
                                ),
                                _react2.default.createElement(
                                    UU5.Bricks.Table.Tr,
                                    null,
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        _react2.default.createElement(
                                            "strong",
                                            null,
                                            "Datum po\u0159\xEDzen\xED:"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        vehicle.dateOfAcquisition
                                    )
                                ),
                                _react2.default.createElement(
                                    UU5.Bricks.Table.Tr,
                                    null,
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        _react2.default.createElement(
                                            "strong",
                                            null,
                                            "Cena:"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Td,
                                        null,
                                        vehicle.price
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                UU5.Bricks.Row,
                null,
                _react2.default.createElement(
                    UU5.Bricks.Column,
                    { colWidth: "xs-12 sm-6 md-12 lg-12" },
                    _react2.default.createElement(
                        UU5.Bricks.Panel,
                        { header: "Z\xE1p\u016Fj\u010Dky", alwaysExpanded: true,
                            disableHeaderClick: true },
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
                                        "Zap\u016Fj\u010Deno od"
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Th,
                                        null,
                                        "Zap\u016Fj\u010Deno do"
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Th,
                                        null,
                                        "Klient"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                UU5.Bricks.Table.TBody,
                                null,
                                lends
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    UU5.Bricks.Column,
                    { colWidth: "xs-12 sm-6 md-6 lg-6" },
                    _react2.default.createElement(
                        UU5.Bricks.Panel,
                        { header: "Seznam STK", alwaysExpanded: true,
                            disableHeaderClick: true },
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
                                        "Datum"
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Th,
                                        null,
                                        "V\xFDsledek"
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Th,
                                        null,
                                        "Koment\xE1\u0159"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                UU5.Bricks.Table.TBody,
                                null,
                                this._handleLoadLendingData()
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    UU5.Bricks.Column,
                    { colWidth: "xs-12 sm-6 md-6 lg-6" },
                    _react2.default.createElement(
                        UU5.Bricks.Panel,
                        { header: "Seznam oprav", alwaysExpanded: true,
                            disableHeaderClick: true },
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
                                        "Datum"
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Th,
                                        null,
                                        "Cena"
                                    ),
                                    _react2.default.createElement(
                                        UU5.Bricks.Table.Th,
                                        null,
                                        "Opravy"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                UU5.Bricks.Table.TBody,
                                null,
                                repairs
                            )
                        )
                    )
                )
            )
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
                "Detail vozidla"
            ),
            this._getNewForm(),
            this.getLoadFeedbackChildren(this._handleLoadedVehicle)
        );
    }
    //@@viewOff:render

});

/***/ })

})
//# sourceMappingURL=0.e11c23ef254f0a372654.hot-update.js.map