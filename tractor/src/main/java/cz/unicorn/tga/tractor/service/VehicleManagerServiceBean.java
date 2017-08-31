/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import java.util.List;

import cz.unicorn.tga.tractor.entity.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cz.unicorn.tga.tractor.dao.*;
import cz.unicorn.tga.tractor.model.*;
import cz.unicorn.tga.tractor.model.enumeration.*;
import cz.unicorn.tga.tractor.util.*;

/**
 * @author DZCJS9F
 *
 */
@Service
@Transactional
public class VehicleManagerServiceBean implements VehicleManagerService {

	private final VehicleDAO vehicleDAO;
	private final VehicleFilterDAO vehicleFilterDAO;
	private final DTOMapper dtoMapper;

	@Autowired public VehicleManagerServiceBean(VehicleDAO vehicleDAO, VehicleFilterDAO vehicleFilterDAO, DTOMapper dtoMapper) {
		this.vehicleDAO = vehicleDAO;
		this.vehicleFilterDAO = vehicleFilterDAO;
		this.dtoMapper = dtoMapper;
	}

	@Override
	public void createNewVehicle(final VehicleNewForm vehicleNewForm) {

		final Vehicle vehicle = createGeneralVehicle();

		// set parametrs from dto
		setFieldFromDto(vehicleNewForm, vehicle);

		save(vehicle);
	}

	/**
	 * @param vehicleNewForm
	 * @param vehicle
	 */
	private void setFieldFromDto(final VehicleNewForm vehicleNewForm, final Vehicle vehicle) {
		vehicle.setPrice(vehicleNewForm.getPrice());
		vehicle.setType(VehicleType.valueOf(vehicleNewForm.getType()));
		vehicle.setVin(vehicleNewForm.getVin());
	}

	/**
	 * @param vehicle
	 */
	private void save(final Vehicle vehicle) {
		vehicleDAO.save(vehicle);
	}

	/**
	 * 
	 */
	private Vehicle createGeneralVehicle() {
		final Vehicle vehicle = new Vehicle();
		vehicle.setVehicleState(VehicleState.defaultState());
		vehicle.setDateOfAcquisition(CoreDateUtil.getNow());

		return vehicle;
	}

	/** {@inheritDoc} */
	@Override
	public List<VehicleDTO> getAllVehicles() {

		return dtoMapper.convert(vehicleDAO.findAll());
	}

	/** {@inheritDoc} */
	@Override
	public List<VehicleDTO> findVehiclesByFilter(final VehicleFilter filter) {

		return dtoMapper.convert(vehicleFilterDAO.findByFilter(filter));
	}

}
