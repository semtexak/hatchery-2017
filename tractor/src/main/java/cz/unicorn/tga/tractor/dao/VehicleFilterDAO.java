package cz.unicorn.tga.tractor.dao;

import java.util.List;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.StkFilter;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface VehicleFilterDAO extends GenericDAO<Vehicle, Long> {

    /**
     * {@inheritDoc}
     */
    @SuppressWarnings("unchecked")
    Page<Vehicle> findByFilter(final VehicleFilter filter, Pageable pageable);

    /**
     * {@inheritDoc}
     */
    @SuppressWarnings("unchecked")
    Page<Vehicle> findByFilter(final StkFilter filter, Pageable pageable);
}
