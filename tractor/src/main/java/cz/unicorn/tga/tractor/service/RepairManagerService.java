/**
 *
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.model.VehicleDetailDTO;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import cz.unicorn.tga.tractor.model.VehicleListDTO;
import cz.unicorn.tga.tractor.model.VehicleRepairDTO;
import cz.unicorn.tga.tractor.model.form.RepairNewForm;
import cz.unicorn.tga.tractor.model.form.VehicleChangeStateForm;
import cz.unicorn.tga.tractor.model.form.VehicleNewForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author DZCJS9F
 */
public interface RepairManagerService {

    void createNewRepair(RepairNewForm repairNewForm);

    Page<VehicleRepairDTO> findAllRepairsForVehicle(Long id, Pageable pageable);
}
