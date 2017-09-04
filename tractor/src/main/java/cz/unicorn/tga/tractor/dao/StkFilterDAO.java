package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.entity.VehicleMot;
import cz.unicorn.tga.tractor.model.StkFilter;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import cz.unicorn.tga.tractor.model.VehicleStkDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface StkFilterDAO extends GenericDAO<VehicleMot, Long> {

    /**
     * {@inheritDoc}
     */
    @SuppressWarnings("unchecked")
    Page<VehicleStkDTO> findByFilter(final StkFilter filter, Pageable pageable);
}
