/**
 * 
 */
package cz.unicorn.tga.tractor.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import cz.unicorn.tga.tractor.model.VehicleFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cz.unicorn.tga.tractor.model.VehicleDTO;
import cz.unicorn.tga.tractor.service.VehicleManagerService;
import cz.unicorn.tga.tractor.web.CommonConstants;

/**
 * @author DZCJS9F
 *
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = VehicleListController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class VehicleListController {

	public static final String BASE_URL = CommonConstants.SLASH + "vehicles";

	@Autowired
	private VehicleManagerService vehicleService;

	@RequestMapping(method = RequestMethod.GET)
	public VehicleDTO[] getAllVehicles() {
		final List<VehicleDTO> vehicles = vehicleService.getAllVehicles();

		return vehicles.toArray(new VehicleDTO[vehicles.size()]);
	}

	@RequestMapping(value = "/find", method = RequestMethod.GET)

	public VehicleDTO[] findByFilter(final VehicleFilter vehicleFilter) {

		// final VehicleFilter filter = new VehicleFilter(id, type, vin, state, priceFrom, priceTo, acquiredFrom, acquiredTo,
		// lastTechnicalCheckFrom, lastTechnicalCheckTo);
		final List<VehicleDTO> result = vehicleService.findVehiclesByFilter(vehicleFilter);

		return result.toArray(new VehicleDTO[result.size()]);
	}

	@InitBinder
	public void initBinder(final WebDataBinder binder) {
		final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
	}

}
