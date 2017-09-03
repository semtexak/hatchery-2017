package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.entity.VehicleMot;
import cz.unicorn.tga.tractor.model.VehicleStkListDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;


public interface StkDAO extends JpaRepository<VehicleMot, Long> {

    @Query("SELECT s FROM VehicleMot s WHERE s.vehicle.id = :id")
    Page<VehicleMot> findByVehicle(@Param("id") Long id, Pageable pageable);


    @Query("SELECT ve, MAX(v.checkDate) FROM VehicleMot v JOIN v.vehicle ve WHERE ve.vehicleState NOT IN ('NEW','DISABLED') AND DATEADD('MONTH', '+12', v.checkDate) <= DATEADD('MONTH', '+2',CURRENT_TIMESTAMP) GROUP BY ve ORDER BY MAX(v.checkDate) ASC")
    Page<Vehicle> findStkReady(Pageable pageable);

}
