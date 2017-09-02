/**
 *
 */
package cz.unicorn.tga.tractor.service;

import java.util.List;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.VehicleDTO;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import cz.unicorn.tga.tractor.model.VehicleNewForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author DZCJS9F
 */
public interface VehicleManagerService {

    void createNewVehicle(VehicleNewForm vehicleNewForm);

    List<VehicleDTO> getAllVehicles(Integer page);

    List<VehicleDTO> getVehiclesForStk(Integer page);

    List<VehicleDTO> findVehiclesByFilter(VehicleFilter filter);

    VehicleDTO getVehicle(Long id);

}
