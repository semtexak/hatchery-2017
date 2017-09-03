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
//        Boolean passed = stkNewForm.getPassed() == 'Y' ? true : false;
//        vehicleMot.setCheckDate(stkNewForm.getCheckDate());
//        vehicleMot.setComment(stkNewForm.getComment());
//        Vehicle vehicle = vehicleDAO.findOne(stkNewForm.getVehicleId());
//        vehicleMot.setVehicle(vehicle);
//
//        // TODO passed to boolean
//        vehicleMot.setPassed(stkNewForm.getPassed());
//        if(!passed) {
//            vehicle.setVehicleState(VehicleState.BROKEN);
//        }
//        vehicleMot.setPassed(VehicleType.valueOf(vehicleNewForm.getType()));

    }

    @Override
    public Page<VehicleRepairDTO> findAllRepairsForVehicle(Long id, Pageable pageable) {
        PageRequest pageRequest = new PageRequest(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.DESC, "repairedAt");
        Page<VehicleRepair> repairPage = vehicleRepairDAO.findByVehicle(id, pageRequest);
        return new PageImpl<VehicleRepairDTO>(dtoMapper.toVehicleRepairList(repairPage.getContent()), pageRequest, repairPage.getTotalElements());
    }

}
