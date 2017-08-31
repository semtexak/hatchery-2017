package cz.unicorn.tga.tractor.dao;

import java.util.List;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.VehicleFilter;

public interface VehicleFilterDAO extends GenericDAO<Vehicle,Long> {

	/** {@inheritDoc} */
	@SuppressWarnings("unchecked")
	List<Vehicle> findByFilter(final VehicleFilter filter);
}
