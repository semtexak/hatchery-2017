webpackHotUpdate_name_(0,{

/***/ "./calls.js":
/* unknown exports provided */
/* all exports used */
/*!******************!*\
  !*** ./calls.js ***!
  \******************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Calls;

var _uu_appg01_core = __webpack_require__(/*! uu_appg01_core */ 5);

var _uu_appg = __webpack_require__(/*! uu_appg01 */ 4);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Server calls of application client.
                                                                                                                                                                                                                   */


var POST = "post";
var GET = "get";

var Calls = (_Calls = {

    call: function call(method, url, dtoIn) {
        _uu_appg.Client[method](url, dtoIn.data).then(function (response) {
            console.info(response.data);
            dtoIn.done(response.data);
        }, function (response) {
            console.info(response.error);
            dtoIn.fail(response);
        });
    },

    cars: function cars(dtoIn) {
        var commandUri = Calls.getCommandUri("vehicles");

        Calls.call(GET, commandUri, dtoIn);
    },

    findCars: function findCars(dtoIn) {
        var commandUri = Calls.getCommandUri("vehicles/search");
        Calls.call(GET, commandUri, dtoIn);
    },

    addCar: function addCar(dtoIn) {
        var commandUri = Calls.getCommandUri("vehicles/create");
        Calls.call(POST, commandUri, dtoIn);
    },

    // Vehicle detail
    findVehicle: function findVehicle(dtoIn) {
        var commandUri = Calls.getCommandUri("vehicles/" + dtoIn.data.vehicleID);
        dtoIn.data = undefined;
        Calls.call(GET, commandUri, dtoIn);
    },

    // Vehicle STK
    vehicleStk: function vehicleStk(dtoIn) {
        var commandUri = Calls.getCommandUri("vehicles/stk");
        Calls.call(GET, commandUri, dtoIn);
    },

    findVehicleStk: function findVehicleStk(dtoIn) {
        var commandUri = Calls.getCommandUri("vehicles/stk/search");
        Calls.call(GET, commandUri, dtoIn);
    },

    addStk: function addStk(dtoIn) {
        var commandUri = Calls.getCommandUri("vehicles/stk/create");
        Calls.call(POST, commandUri, dtoIn);
    }

}, _defineProperty(_Calls, "findVehicle", function findVehicle(dtoIn) {
    var commandUri = Calls.getCommandUri("vehicles/" + dtoIn.data.vehicleID);
    dtoIn.data = undefined;
    Calls.call(GET, commandUri, dtoIn);
}), _defineProperty(_Calls, "getCommandUri", function getCommandUri(aUseCase) {
    // useCase <=> "/getSomething" or "/sys/getSomething"
    var useCase = !aUseCase.match(/^\//) ? "/" + aUseCase : aUseCase;
    // let baseUri = location.protocol + "//" + location.host + location.pathname;
    var baseUri = "http://localhost:7070/vehicle-evidence";
    // console.info("######## INFO ####### " + baseUri + useCase);
    return baseUri + useCase;
}), _Calls);

exports.default = Calls;

/***/ })

})
//# sourceMappingURL=0.d35cf1e315eca90e530f.hot-update.js.map