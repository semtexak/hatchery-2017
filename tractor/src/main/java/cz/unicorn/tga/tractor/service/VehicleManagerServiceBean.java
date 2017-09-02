/**
 *
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.form.VehicleChangeStateForm;
import cz.unicorn.tga.tractor.model.form.VehicleNewForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cz.unicorn.tga.tractor.dao.*;
import cz.unicorn.tga.tractor.model.*;
import cz.unicorn.tga.tractor.model.enumeration.*;
import cz.unicorn.tga.tractor.util.*;

/**
 * @author DZCJS9F
 */
@Service
@Transactional
public class VehicleManagerServiceBean implements VehicleManagerService {

    private final VehicleDAO vehicleDAO;
    private final LendingDAO lendingDAO;
    private final VehicleFilterDAO vehicleFilterDAO;
    private final DTOMapper dtoMapper;

    @Autowired
    public VehicleManagerServiceBean(VehicleDAO vehicleDAO, LendingDAO lendingDAO, VehicleFilterDAO vehicleFilterDAO, DTOMapper dtoMapper) {
        this.vehicleDAO = vehicleDAO;
        this.lendingDAO = lendingDAO;
        this.vehicleFilterDAO = vehicleFilterDAO;
        this.dtoMapper = dtoMapper;
    }

    /**
     * Fills vehicle data to object & save it to database.
     *
     * @param vehicleNewForm Form data
     */
    @Override
    public void createNewVehicle(final VehicleNewForm vehicleNewForm) {

        final Vehicle vehicle = createBaseVehicle();

        // set parametrs from dto
        setFieldFromDto(vehicleNewForm, vehicle);

        save(vehicle);
    }

    /**
     * Set field from DTO object passed from form.
     *
     * @param vehicleNewForm
     * @param vehicle
     */
    private void setFieldFromDto(final VehicleNewForm vehicleNewForm, final Vehicle vehicle) {
        vehicle.setPrice(vehicleNewForm.getPrice());
        vehicle.setType(VehicleType.valueOf(vehicleNewForm.getType()));
        vehicle.setVin(vehicleNewForm.getVin());
    }

    /**
     * Save vehicle to databasae through repository
     *
     * @param vehicle Vehicle for persisting
     */
    private void save(final Vehicle vehicle) {
        vehicleDAO.save(vehicle);
    }

    /**
     * Prepare base data for vehicle.
     *
     * @return vehicle
     */
    private Vehicle createBaseVehicle() {
        final Vehicle vehicle = new Vehicle();
        vehicle.setVehicleState(VehicleState.defaultState());
        vehicle.setDateOfAcquisition(CoreDateUtil.getNow());

        return vehicle;
    }



    @Override
    public Page<VehicleListDTO> findByFilter(VehicleFilter filter, Pageable pageable) {
        Page<Vehicle> vehiclePage = vehicleFilterDAO.findByFilter(filter, pageable);
        return new PageImpl<VehicleListDTO>(dtoMapper.toVehicleList(vehiclePage.getContent()), pageable, vehiclePage.getTotalElements());
    }

    @Override
    public VehicleDetailDTO getVehicle(Long id) {
        Vehicle vehicle = vehicleDAO.findOne(id);
        VehicleDetailDTO vehicleDetailDTO = dtoMapper.toVehicleDetailDTO(vehicle);
        return dtoMapper.toVehicleDetailDTO(vehicleDAO.findOne(id));
    }

    @Override
    public Page<VehicleListDTO> getVehicles(Pageable pageable) {
        PageRequest pageRequest = new PageRequest(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.ASC, "type", "vehicleState");
        Page<Vehicle> vehiclePage = vehicleDAO.findAll(pageRequest);
        return new PageImpl<VehicleListDTO>(dtoMapper.toVehicleList(vehiclePage.getContent()), pageable, vehiclePage.getTotalElements());
    }

    @Override
    public void changeVehicleState(Long id, VehicleChangeStateForm vehicleChangeStateForm) {
        Vehicle vehicle = vehicleDAO.findOne(id);
        VehicleState state = VehicleState.valueOf(vehicleChangeStateForm.getVehicleState());
        if(state != VehicleState.IN_GARAGE && state != VehicleState.DISABLED) {
            throw new IllegalArgumentException("Wrong type for VehicleState!");
        }
        vehicle.setVehicleState(state);

    }

}
