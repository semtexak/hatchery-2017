package cz.unicorn.tga.tractor.dao;

import java.util.List;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.StkFilter;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import cz.unicorn.tga.tractor.model.enumeration.VehicleType;
import org.hibernate.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import cz.unicorn.tga.tractor.util.QueryBuilder;

@Repository
public class VehicleFilterDAOImpl extends GenericHibernateDAO<Vehicle, Long> implements VehicleFilterDAO {

    /**
     * {@inheritDoc}
     */
    @SuppressWarnings("unchecked")
    public Page<Vehicle> findByFilter(final VehicleFilter filter, Pageable pageable) {
        final Query query = createQueryFromVehicleFilter(filter);

        return new PageImpl<Vehicle>(query.list(), pageable, query.list().size());
    }

    /**
     * {@inheritDoc}
     */
    @SuppressWarnings("unchecked")
    public Page<Vehicle> findByFilter(final StkFilter filter, Pageable pageable) {
        final Query query = createQueryFromStkFilter(filter);

        return new PageImpl<Vehicle>(query.list(), pageable, query.list().size());
    }

    private Query createQueryFromVehicleFilter(final VehicleFilter filter) {
        final QueryBuilder builder = new QueryBuilder(getSession(), "SELECT c FROM Vehicle c WHERE 1 = 1");

        builder.appendIfNotNull("AND c.id = :id", "id", filter.getId());

        if(filter.getVin().equals("")) builder.appendIfNotNull("AND c.vin = :vin", "vin", filter.getVin());
        builder.appendIfNotNull("AND c.type = :type", "type", VehicleType.valueOf(filter.getType()));
        builder.appendIfNotNull("AND c.state = :state", "state", filter.getState());
        builder.appendIfNotNull("AND c.dateOfAcquisition >= :acquiredFrom", "acquiredFrom", filter.getAcquiredFrom());
        builder.appendIfNotNull("AND c.dateOfAcquisition <= :acquiredTo", "acquiredTo", filter.getAcquiredTo());
//		builder.appendIfNotNull("AND c.dateOfLastTechnicalCheck >= :checkFrom", "checkFrom",
//				filter.getLastTechnicalCheckFrom());
//		builder.appendIfNotNull("AND c.dateOfLastTechnicalCheck <= :checkTo", "checkTo",
//				filter.getLastTechnicalCheckTo());
        builder.appendIfNotNull("AND c.price >= :priceFrom", "priceFrom", filter.getPriceFrom());
        builder.appendIfNotNull("AND c.price <= :priceTo", "priceTo", filter.getPriceTo());

        return builder.build();
    }

    private Query createQueryFromStkFilter(final StkFilter filter) {
        final QueryBuilder builder = new QueryBuilder(getSession(), "SELECT v FROM Vehicle v JOIN v.lastTechnicalCheck m WHERE ((m.checkDate + (365) >= CURRENT_TIMESTAMP) AND (CURRENT_TIMESTAMP + (61) >= m.checkDate + (365)) OR (m.checkDate + (365) <= CURRENT_TIMESTAMP)) AND v.vehicleState NOT IN ('NEW','DISABLED')");

        builder.appendIfNotNull("AND c.id = :id", "id", filter.getId());
        builder.appendIfNotNull("AND m.checkDate + (365) >= :checkDateFrom", "checkDateFrom", filter.getCheckDateFrom());
        builder.appendIfNotNull("AND m.checkDate + (365) <= :checkDateTo", "checkDateTo", filter.getCheckDateTo());

        return builder.build();
    }

}
