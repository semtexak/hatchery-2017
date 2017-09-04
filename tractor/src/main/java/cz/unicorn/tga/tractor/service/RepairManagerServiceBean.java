/**
 *
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.dao.StkDAO;
import cz.unicorn.tga.tractor.dao.VehicleDAO;
import cz.unicorn.tga.tractor.dao.VehicleRepairDAO;
import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.entity.VehicleMot;
import cz.unicorn.tga.tractor.entity.VehicleRepair;
import cz.unicorn.tga.tractor.model.StkFilter;
import cz.unicorn.tga.tractor.model.StkListDTO;
import cz.unicorn.tga.tractor.model.VehicleRepairDTO;
import cz.unicorn.tga.tractor.model.VehicleStkListDTO;
import cz.unicorn.tga.tractor.model.enumeration.VehicleState;
import cz.unicorn.tga.tractor.model.form.RepairNewForm;
import cz.unicorn.tga.tractor.model.form.StkNewForm;
import cz.unicorn.tga.tractor.util.DTOMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Tomáš Bláha
 */
@Service
@Transactional
public class RepairManagerServiceBean implements RepairManagerService {

    private final VehicleRepairDAO vehicleRepairDAO;
    private final VehicleDAO vehicleDAO;
    private final DTOMapper dtoMapper;

    @Autowired
    public RepairManagerServiceBean(VehicleRepairDAO vehicleRepairDAO, VehicleDAO vehicleDAO, DTOMapper dtoMapper) {
        this.vehicleRepairDAO = vehicleRepairDAO;
        this.vehicleDAO = vehicleDAO;
        this.dtoMapper = dtoMapper;
    }

    /**
     * Fills stk data to object & save it to database.
     *
     * @param repairNewForm Form data
     */
    @Override
    public void createNewRepair(final RepairNewForm repairNewForm) {

        final VehicleRepair vehicleRepair= new VehicleRepair();

        // set parametrs from dto
        setFieldFromDto(repairNewForm, vehicleRepair);

        save(vehicleRepair);
    }

    private void save(VehicleRepair vehicleRepair) {
        vehicleRepairDAO.save(vehicleRepair);
    }

    /**
     * Set field from DTO object passed from form.
     *
     * @param repairNewForm
     * @param vehicleRepair
     */
    private void setFieldFromDto(final RepairNewForm repairNewForm, final VehicleRepair vehicleRepair) {
        vehicleRepair.setRepairedAt(repairNewForm.getRepairedAt());
        vehicleRepair.setPrice(repairNewForm.getPrice());
        vehicleRepair.setRepairResolution(repairNewForm.getRepairResolution());
        Vehicle vehicle = vehicleDAO.findOne(repairNewForm.getVehicleId());
        vehicleRepair.setVehicle(vehicle);

        if(vehicle.getVehicleState() == VehicleState.BROKEN) {
            vehicle.setVehicleState(VehicleState.IN_GARAGE);
        }

    }

    @Override
    public Page<VehicleRepairDTO> findAllRepairsForVehicle(Long id, Pageable pageable) {
        PageRequest pageRequest = new PageRequest(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.DESC, "repairedAt");
        Page<VehicleRepair> repairPage = vehicleRepairDAO.findByVehicle(id, pageRequest);
        return new PageImpl<VehicleRepairDTO>(dtoMapper.toVehicleRepairList(repairPage.getContent()), pageRequest, repairPage.getTotalElements());
    }

}
