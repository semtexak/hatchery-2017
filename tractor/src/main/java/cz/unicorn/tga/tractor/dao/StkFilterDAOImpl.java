package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.entity.VehicleMot;
import cz.unicorn.tga.tractor.model.StkFilter;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import cz.unicorn.tga.tractor.model.VehicleStkDTO;
import cz.unicorn.tga.tractor.model.enumeration.VehicleType;
import cz.unicorn.tga.tractor.util.QueryBuilder;
import org.hibernate.Query;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StkFilterDAOImpl extends GenericHibernateDAO<VehicleMot, Long> implements StkFilterDAO {

    /**
     * {@inheritDoc}
     */
    @SuppressWarnings("unchecked")
    public Page<VehicleStkDTO> findByFilter(final StkFilter filter, Pageable pageable) {
        final Query query = createQueryFromStkFilter(filter);
        List<VehicleStkDTO> stks = query.list();
        int start = pageable.getOffset();
        int end = (start + pageable.getPageSize()) > stks.size() ? stks.size() : (start + pageable.getPageSize());
//        PageRequest pageRequest = new PageRequest(pageable.getPageNumber(), pageable.getPageSize(), Sort.Direction.DESC, "checkDate");

        return new PageImpl<VehicleStkDTO>(stks.subList(start, end), pageable,stks.size());
    }


    private Query createQueryFromStkFilter(final StkFilter filter) {
        final QueryBuilder builder = new QueryBuilder(getSession(), "SELECT ve.id as id, ve.vin as vin, ve.type as type, MAX(v.checkDate) as checkDate FROM VehicleMot v JOIN v.vehicle ve WHERE ve.vehicleState NOT IN ('NEW','DISABLED') AND DATEADD('MONTH', '+12', v.checkDate) <= DATEADD('MONTH', '+2',CURRENT_TIMESTAMP)");

        builder.appendIfNotNull("AND v.checkDate >= :checkDateFrom", "checkDateFrom", filter.getCheckDateFrom());
        builder.appendIfNotNull("AND v.checkDate <= :checkDateTo GROUP BY ve ORDER BY MAX(v.checkDate) ASC", "checkDateTo", filter.getCheckDateTo());

        return builder.build();
    }

}
