/**
 *
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.dao.StkDAO;
import cz.unicorn.tga.tractor.dao.StkFilterDAO;
import cz.unicorn.tga.tractor.dao.VehicleDAO;
import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.entity.VehicleMot;
import cz.unicorn.tga.tractor.model.*;
import cz.unicorn.tga.tractor.model.enumeration.VehicleState;
import cz.unicorn.tga.tractor.model.form.StkNewForm;
import cz.unicorn.tga.tractor.util.DTOMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author DZCJS9F
 */
@Service
@Transactional
public class StkManagerServiceBean implements StkManagerService {

    private final StkDAO stkDAO;
    private final StkFilterDAO stkFilterDAO;
    private final VehicleDAO vehicleDAO;
    private final DTOMapper dtoMapper;

    @Autowired
    public StkManagerServiceBean(StkDAO stkDAO, StkFilterDAO stkFilterDAO, VehicleDAO vehicleDAO, DTOMapper dtoMapper) {
        this.stkDAO = stkDAO;
        this.stkFilterDAO = stkFilterDAO;
        this.vehicleDAO = vehicleDAO;
        this.dtoMapper = dtoMapper;
    }

    /**
     * Fills stk data to object & save it to database.
     *
     * @param stkNewForm Form data
     */
    @Override
    public void createNewStk(final StkNewForm stkNewForm) {

        final VehicleMot vehicleMot = new VehicleMot();

        // set parametrs from dto
        setFieldFromDto(stkNewForm, vehicleMot);

        save(vehicleMot);
    }

    private void save(VehicleMot vehicleMot) {
        stkDAO.save(vehicleMot);
    }

    /**
     * Set field from DTO object passed from form.
     *
     * @param stkNewForm
     * @param vehicleMot
     */
    private void setFieldFromDto(final StkNewForm stkNewForm, final VehicleMot vehicleMot) {
        Boolean passed = stkNewForm.getPassed() == 'Y' ? true : false;
        vehicleMot.setCheckDate(stkNewForm.getCheckDate());
        vehicleMot.setComment(stkNewForm.getComment());
        Vehicle vehicle = vehicleDAO.findOne(stkNewForm.getVehicleId());
        vehicleMot.setVehicle(vehicle);

        // TODO passed to boolean
        vehicleMot.setPassed(stkNewForm.getPassed());
        if(!passed) {
            vehicle.setVehicleState(VehicleState.BROKEN);
        }
//        vehicleMot.setPassed(VehicleType.valueOf(vehicleNewForm.getType()));

    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Page<VehicleStkDTO> findByFilter(final StkFilter filter, Pageable pageable) {
        Page<VehicleStkDTO> vehiclePage = stkDAO.findStkReadyForDates(filter.getCheckDateFrom(), filter.getCheckDateTo(), pageable);
        return new PageImpl<VehicleStkDTO>(vehiclePage.getContent(), pageable, vehiclePage.getTotalElements());
//        return null;
    }

    @Override
    public Page<VehicleStkDTO> getVehicles(Pageable pageable) {
        Page<VehicleStkDTO> stkPage = stkDAO.findStkReady(pageable);
        return new PageImpl<VehicleStkDTO>(stkPage.getContent(), pageable, stkPage.getTotalElements());
    }

    @Override
    public Page<StkListDTO> findAllStksForVehicle(Long id, Pageable pageable) {
        PageRequest pageRequest = new PageRequest(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.DESC, "checkDate");
        Page<VehicleMot> stkPage = stkDAO.findByVehicle(id, pageRequest);
        return new PageImpl<StkListDTO>(dtoMapper.toStkList(stkPage.getContent()), pageRequest, stkPage.getTotalElements());
    }

}
