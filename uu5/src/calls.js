/**
 * Server calls of application client.
 */
import {Uri} from "uu_appg01_core"
import {Client} from "uu_appg01"

const POST = "post";
const GET = "get";

let Calls = {

    call: function (method, url, dtoIn) {
        Client[method](url, dtoIn.data).then(
            function (response) {
                console.info(response.data);
                dtoIn.done(response.data);
            }, function (response) {
                console.info(response.error);
                dtoIn.fail(response);
            }
        );
    },

    cars: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles");

        Calls.call(GET, commandUri, dtoIn);
    },

    findCars: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/search");
        Calls.call(GET, commandUri, dtoIn);
    },

    addCar: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/create");
        Calls.call(POST, commandUri, dtoIn);
    },

    // Vehicle detail
    findVehicle: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/" + dtoIn.data.vehicleID);
        dtoIn.data = undefined;
        Calls.call(GET, commandUri, dtoIn);
    },

    // Vehicle STK
    vehicleStk: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/stk");
        Calls.call(GET, commandUri, dtoIn);
    },

    findVehicleStk: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/stk/search");
        Calls.call(GET, commandUri, dtoIn);
    },

    addStk: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/stk/create");
        Calls.call(POST, commandUri, dtoIn);
    },

    addRepair: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/repair/create");
        Calls.call(POST, commandUri, dtoIn);
    },

    // Lending detail
    findLending: function (dtoIn) {
        let commandUri = Calls.getCommandUri("lendings/" + dtoIn.data.lendingID);
        dtoIn.data = undefined;
        Calls.call(GET, commandUri, dtoIn);
    },

    loadLendingsForVehicle: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/" + dtoIn.data.vehicleID +"/lendings?page=" +dtoIn.data.page);
        dtoIn.data = undefined;
        Calls.call(GET, commandUri, dtoIn);
    },

    loadLendingsForClient: function (dtoIn) {
        let commandUri = Calls.getCommandUri("clients/" + dtoIn.data.clientID +"/lendings?page=" +dtoIn.data.page);
        dtoIn.data = undefined;
        Calls.call(GET, commandUri, dtoIn);
    },

    loadStksForVehicle: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/" + dtoIn.data.vehicleID +"/stks");
        dtoIn.data = undefined;
        Calls.call(GET, commandUri, dtoIn);
    },

    loadRepairsForVehicle: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/" + dtoIn.data.vehicleID +"/repairs");
        dtoIn.data = undefined;
        Calls.call(GET, commandUri, dtoIn);
    },

    // Lending detail
    findClient: function (dtoIn) {
        let commandUri = Calls.getCommandUri("clients/" + dtoIn.data.clientID);
        dtoIn.data = undefined;
        Calls.call(GET, commandUri, dtoIn);
    },

    addLending: function (dtoIn) {
        let commandUri = Calls.getCommandUri("lendings/create");
        Calls.call(POST, commandUri, dtoIn);
    },

    findAvailableVehicles: function (dtoIn) {
        let commandUri = Calls.getCommandUri("vehicles/availability");
        Calls.call(POST, commandUri, dtoIn);
    },

    getCommandUri: function (aUseCase) { // useCase <=> "/getSomething" or "/sys/getSomething"
        let useCase = (!aUseCase.match(/^\//) ? "/" + aUseCase : aUseCase);
        // let baseUri = location.protocol + "//" + location.host + location.pathname;
        let baseUri = "http://localhost:7070/vehicle-evidence";
        // console.info("######## INFO ####### " + baseUri + useCase);
        return baseUri + useCase;
    }

};

export default Calls;
