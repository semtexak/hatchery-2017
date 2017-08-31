/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import java.util.List;

import cz.unicorn.tga.tractor.model.VehicleDTO;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import cz.unicorn.tga.tractor.model.VehicleNewForm;

/**
 * @author DZCJS9F
 *
 */
public interface VehicleManagerService {

	void createNewVehicle(VehicleNewForm vehicleNewForm);

	List<VehicleDTO> getAllVehicles();

	List<VehicleDTO> findVehiclesByFilter(VehicleFilter filter);

}
