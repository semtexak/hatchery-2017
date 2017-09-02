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

var _uu_appg01_core = __webpack_require__(/*! uu_appg01_core */ 5);

var _uu_appg = __webpack_require__(/*! uu_appg01 */ 4);

/**
 * Server calls of application client.
 */
var POST = "post";
var GET = "get";

var Calls = {

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
        var commandUri = Calls.getCommandUri("vehicles/");

        Calls.call(GET, commandUri, dtoIn);
    },

    getCommandUri: function getCommandUri(aUseCase) {
        // useCase <=> "/getSomething" or "/sys/getSomething"
        var useCase = !aUseCase.match(/^\//) ? "/" + aUseCase : aUseCase;
        // let baseUri = location.protocol + "//" + location.host + location.pathname;
        var baseUri = "http://localhost:7070/vehicle-evidence";
        // console.info("######## INFO ####### " + baseUri + useCase);
        return baseUri + useCase;
    }

};

exports.default = Calls;

/***/ })

})
//# sourceMappingURL=0.445d9f91de1255124995.hot-update.js.map