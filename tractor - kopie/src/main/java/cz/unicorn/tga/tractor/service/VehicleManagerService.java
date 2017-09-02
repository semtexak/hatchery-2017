/**
 *
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.model.*;
import cz.unicorn.tga.tractor.model.form.VehicleChangeStateForm;
import cz.unicorn.tga.tractor.model.form.VehicleNewForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author DZCJS9F
 */
public interface VehicleManagerService {

    void createNewVehicle(VehicleNewForm vehicleNewForm);

    Page<VehicleListDTO> findByFilter(VehicleFilter filter, Pageable pageable);

    VehicleDetailDTO getVehicle(Long id);

    Page<VehicleListDTO> getVehicles(Pageable pageable);

    void changeVehicleState(Long id, VehicleChangeStateForm vehicleChangeStateForm);
}
