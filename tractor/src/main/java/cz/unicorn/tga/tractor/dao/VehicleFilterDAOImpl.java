package cz.unicorn.tga.tractor.dao;

import java.util.List;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import cz.unicorn.tga.tractor.util.QueryBuilder;

@Repository
public class VehicleFilterDAOImpl extends GenericHibernateDAO<Vehicle,Long> implements VehicleFilterDAO {

	/** {@inheritDoc} */
	@SuppressWarnings("unchecked")
	public List<Vehicle> findByFilter(final VehicleFilter filter) {
		final Query query = createQueryFromVehicleFilter(filter);

		return query.list();
	}

	private Query createQueryFromVehicleFilter(final VehicleFilter filter) {
		final QueryBuilder builder = new QueryBuilder(getSession(), "SELECT c FROM Vehicle c WHERE 1 = 1");

		builder.appendIfNotNull("AND c.id = :id", "id", filter.getId());
		builder.appendIfNotNull("AND c.vin = :vin", "vin", filter.getVin());
		builder.appendIfNotNull("AND c.type = :type", "type", filter.getType());
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

}
