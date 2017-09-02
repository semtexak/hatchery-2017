/**
 *
 */
package cz.unicorn.tga.tractor.service;

import java.util.List;

import cz.unicorn.tga.tractor.controller.ControllerConstants;
import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.entity.VehicleRepair;
import cz.unicorn.tga.tractor.web.ControllerUtils;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
    private final VehicleFilterDAO vehicleFilterDAO;
    private final DTOMapper dtoMapper;

    @Autowired
    public VehicleManagerServiceBean(VehicleDAO vehicleDAO, VehicleFilterDAO vehicleFilterDAO, DTOMapper dtoMapper) {
        this.vehicleDAO = vehicleDAO;
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

    /**
     * {@inheritDoc}
     */
    @Override
    public List<VehicleDTO> getAllVehicles(Integer page) {
        PageRequest request = new PageRequest(page - 1, ControllerConstants.ITEMS_PER_PAGE, Sort.Direction.ASC, "id");

        return dtoMapper.convert(vehicleDAO.findAll(request).getContent());
    }

    @Override
    public List<VehicleDTO> getVehiclesForStk(Integer page) {
        PageRequest request = new PageRequest(page - 1, ControllerConstants.ITEMS_PER_PAGE, Sort.Direction.ASC, "id");

        List<Vehicle> ff = vehicleDAO.findStkReady();
        List<VehicleDTO> ok = dtoMapper.convert(vehicleDAO.findStkReady());
        return dtoMapper.convert(vehicleDAO.findStkReady());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<VehicleDTO> findVehiclesByFilter(final VehicleFilter filter) {

        return dtoMapper.convert(vehicleFilterDAO.findByFilter(filter));
    }

    @Override
    public VehicleDTO getVehicle(Long id) {
        return dtoMapper.convert(vehicleDAO.findOne(id));
    }

}
