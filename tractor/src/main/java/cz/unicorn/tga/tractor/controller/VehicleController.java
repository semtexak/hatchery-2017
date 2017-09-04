/**
 *
 */
package cz.unicorn.tga.tractor.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import cz.unicorn.tga.tractor.facade.VehicleFacade;
import cz.unicorn.tga.tractor.model.*;
import cz.unicorn.tga.tractor.model.form.*;
import cz.unicorn.tga.tractor.web.ControllerUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import cz.unicorn.tga.tractor.service.VehicleManagerService;
import cz.unicorn.tga.tractor.web.CommonConstants;

/**
 * @author DZCJS9F
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = VehicleController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class VehicleController {

    static final String BASE_URL = CommonConstants.SLASH + "vehicles";
    static final String FORM_CREATE_ATTRIBUTE_NAME = "vehicleNewForm";
    static final String FORM_AVAILABLE_ATTRIBUTE_NAME = "availabilityCheckForm";

    @Autowired
    private VehicleManagerService vehicleService;

    @Autowired
    private VehicleFacade vehicleFacade;


    @RequestMapping(method = RequestMethod.GET)
    public Page<VehicleListDTO> getAllVehicles(Pageable pageable) {
        return vehicleFacade.getAllVehicles(pageable);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public VehicleDetailDTO getVehicle(@PathVariable Long id) {
        return vehicleService.getVehicle(id);
    }

    @RequestMapping(value = "/{id}/lendings", method = RequestMethod.GET)
    public Page<LendingListDTO> getAllLendings(@PathVariable Long id, Pageable pageable) {
        return vehicleFacade.getLatestLendingsForVehicle(id, pageable);
    }

    @RequestMapping(value = "/availability", method = RequestMethod.POST)
    public List<VehicleListDTO> getAvailableCarsForLending(@RequestBody final AvailabilityCheckForm availabilityCheckForm) {
        return vehicleFacade.getAvailableCarsForLending(availabilityCheckForm);
    }

    @RequestMapping(value = "/{id}/stks", method = RequestMethod.GET)
    public Page<StkListDTO> getAllStks(@PathVariable Long id, Pageable pageable) {
        return vehicleFacade.getAllStksForVehicle(id, pageable);
    }

    @RequestMapping(value = "/{id}/repairs", method = RequestMethod.GET)
    public Page<VehicleRepairDTO> getAllRepairs(@PathVariable Long id, Pageable pageable) {
        return vehicleFacade.getAllRepairsForVehicle(id, pageable);
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public Page<VehicleListDTO> findByFilter(final VehicleFilter vehicleFilter, Pageable pageable) {
        return vehicleFacade.findByFilter(vehicleFilter, pageable);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void addNewVehicle(@RequestBody final VehicleNewForm vehicleNewForm) {
        vehicleFacade.createNewVehicle(vehicleNewForm);
        return;

    }

    @RequestMapping(value = "/{id}/change-state", method = RequestMethod.PUT)
    public void changeVehicleState(@PathVariable Long id, @RequestBody final VehicleChangeStateForm vehicleChangeStateForm) {
        vehicleFacade.changeVehicleState(id, vehicleChangeStateForm);
        return;
    }



    @RequestMapping(value = "/stk", method = RequestMethod.GET)
    public Page<VehicleStkDTO> getAllVehiclesForStk(Pageable pageable) {
        return vehicleFacade.getVehiclesWhereStkIsNeeded(pageable);
    }

    @RequestMapping(value = "/stk/search", method = RequestMethod.GET)
    public Page<VehicleStkDTO> findByFilter(final StkFilter stkFilter, Pageable pageable) {
        return vehicleFacade.findByFilter(stkFilter, pageable);
    }

    @RequestMapping(value = "/stk/create", method = RequestMethod.POST)
    public void addNewStk(@RequestBody final StkNewForm stkNewForm) {
        vehicleFacade.createNewStk(stkNewForm);
        return ;

    }

    @RequestMapping(value = "/repair/create", method = RequestMethod.POST)
    public void addNewRepair(@RequestBody final RepairNewForm repairNewForm) {
        vehicleFacade.createNewRepair(repairNewForm);
        return ;

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

    @InitBinder(VehicleController.FORM_AVAILABLE_ATTRIBUTE_NAME)
    protected void initBinder3(final WebDataBinder binder) {

        // BigDecimal custom binder
        ControllerUtils.setNumberCustomEditorToBinder(binder, CommonConstants.CZECH_LOCALE);

        // trim all string
        ControllerUtils.setStringTrimmerEditorToBinder(binder);
    }
}
