package cz.unicorn.tga.tractor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import cz.unicorn.tga.tractor.model.form.VehicleNewForm;
import cz.unicorn.tga.tractor.service.VehicleManagerService;
import cz.unicorn.tga.tractor.web.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = CreateVehicleController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class CreateVehicleController {

	public static final String BASE_URL = CommonConstants.SLASH + "vehicles/new";
	public final static String FORM_ATTRIBUTE_NAME = "vehicleNewForm";

	@Autowired
	private VehicleManagerService vehicleManagerService;

	@Autowired
	private MessageSource messageSource;

	/*
	 * Provede ulozeni vozidla URI: /vehicles/new Method: POST
	 */
	@RequestMapping(method = RequestMethod.POST)
	public void addNewVehicle(@RequestBody final VehicleNewForm vehicleNewForm) {

		// TODO Validate model
		vehicleManagerService.createNewVehicle(vehicleNewForm);

		return;

	}

	/*
	 * **********************************************************************
	 * PRIVATE METHODS
	 * **********************************************************************
	 */

	@InitBinder(CreateVehicleController.FORM_ATTRIBUTE_NAME)
	protected void initBinder(final WebDataBinder binder) {

		// BigDecimal custom binder
		ControllerUtils.setNumberCustomEditorToBinder(binder, CommonConstants.CZECH_LOCALE);

		// trim all string
		ControllerUtils.setStringTrimmerEditorToBinder(binder);
	}

}
