/**
 *
 */
package cz.unicorn.tga.tractor.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import cz.unicorn.tga.tractor.model.VehicleListDTO;
import cz.unicorn.tga.tractor.model.VehicleNewForm;
import cz.unicorn.tga.tractor.web.ControllerUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import cz.unicorn.tga.tractor.model.VehicleDTO;
import cz.unicorn.tga.tractor.service.VehicleManagerService;
import cz.unicorn.tga.tractor.web.CommonConstants;

/**
 * @author DZCJS9F
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = VehicleController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class VehicleController {

    public static final String BASE_URL = CommonConstants.SLASH + "vehicles";
    public final static String FORM_CREATE_ATTRIBUTE_NAME = "vehicleNewForm";

    @Autowired
    private VehicleManagerService vehicleService;


//    @RequestMapping(method = RequestMethod.GET)
//    public VehicleDTO[] getAllVehicles(@RequestParam(name = "page", defaultValue = "1") int pageNumber) {
//        final List<VehicleListDTO> vehicles = vehicleService.getAllVehicles(pageNumber);
//
//        return vehicles.toArray(new VehicleDTO[vehicles.size()]);
//    }

//    @RequestMapping(method = RequestMethod.GET)
//    public

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public VehicleDTO getVehicle(@PathVariable Long id) {
        return vehicleService.getVehicle(id);
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public VehicleDTO[] findByFilter(final VehicleFilter vehicleFilter) {

        // final VehicleFilter filter = new VehicleFilter(id, type, vin, state, priceFrom, priceTo, acquiredFrom, acquiredTo,
        // lastTechnicalCheckFrom, lastTechnicalCheckTo);
        final List<VehicleDTO> result = vehicleService.findVehiclesByFilter(vehicleFilter);

        return result.toArray(new VehicleDTO[result.size()]);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void addNewVehicle(@RequestBody final VehicleNewForm vehicleNewForm) {

        // TODO Validate model
        vehicleService.createNewVehicle(vehicleNewForm);

        return;

    }

    @RequestMapping(value = "/stk", method = RequestMethod.GET)
    public VehicleDTO[] getAllVehiclesForStk(@RequestParam(name = "page", defaultValue = "1") int pageNumber) {
        final List<VehicleDTO> vehicles = vehicleService.getVehiclesForStk(pageNumber);

        return vehicles.toArray(new VehicleDTO[vehicles.size()]);
    }

    /*
	 * **********************************************************************
	 * PRIVATE METHODS
	 * **********************************************************************
	 */

    @InitBinder
    public void initBinder(final WebDataBinder binder) {
        final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

    @InitBinder(VehicleController.FORM_CREATE_ATTRIBUTE_NAME)
    protected void initBinder2(final WebDataBinder binder) {

        // BigDecimal custom binder
        ControllerUtils.setNumberCustomEditorToBinder(binder, CommonConstants.CZECH_LOCALE);

        // trim all string
        ControllerUtils.setStringTrimmerEditorToBinder(binder);
    }
}
