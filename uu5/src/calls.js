/**
 * Server calls of application client.
 */
import {Uri} from "uu_appg01_core"
import {Client} from "uu_appg01"

const POST = "post";
const GET = "get";

let Calls = {

  call:function(method, url, dtoIn){
    Client[method](url, dtoIn.data).then(
      function(response){
          console.info(response.data);
        dtoIn.done(response.data);
      }, function(response){
          console.info(response.error);
        dtoIn.fail(response);
      }
    );
  },

  cars:function(dtoIn){
    let commandUri = Calls.getCommandUri("cars");
    Calls.call(GET, commandUri, dtoIn);
  },

  findCars:function(dtoIn){
    let commandUri = Calls.getCommandUri("cars/find");
    Calls.call(GET, commandUri, dtoIn);
  },

  addCar:function(dtoIn){
    let commandUri = Calls.getCommandUri("cars/new");
    Calls.call(POST, commandUri, dtoIn);
  },

  getCommandUri:function(aUseCase) { // useCase <=> "/getSomething" or "/sys/getSomething"
    let useCase = (!aUseCase.match(/^\//) ? "/" + aUseCase : aUseCase);
    // let baseUri = location.protocol + "//" + location.host + location.pathname;
    let baseUri = "http://localhost:7070/car-evidence";
    console.info("######## INFO ####### " + baseUri + useCase);
    return baseUri + useCase;
  }

};

export default Calls;