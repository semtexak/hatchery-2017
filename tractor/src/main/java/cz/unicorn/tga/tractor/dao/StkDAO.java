package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.VehicleMot;
import cz.unicorn.tga.tractor.model.VehicleStkDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;


public interface StkDAO extends JpaRepository<VehicleMot, Long> {

    @Query("SELECT s FROM VehicleMot s WHERE s.vehicle.id = :id")
    Page<VehicleMot> findByVehicle(@Param("id") Long id, Pageable pageable);


    @Query("SELECT ve.id as id, ve.vin as vin, ve.type as type, MAX(v.checkDate) as checkDate FROM VehicleMot v JOIN v.vehicle ve WHERE ve.vehicleState NOT IN ('NEW','DISABLED') AND DATEADD('MONTH', '+12', v.checkDate) <= DATEADD('MONTH', '+2',CURRENT_TIMESTAMP) GROUP BY ve ORDER BY MAX(v.checkDate) ASC")
    Page<VehicleStkDTO> findStkReady(Pageable pageable);

    @Query("SELECT ve.id as id, ve.vin as vin, ve.type as type, MAX(v.checkDate) as checkDate FROM VehicleMot v JOIN v.vehicle ve WHERE v.checkDate >= :dateFrom AND v.checkDate <= :dateTo AND ve.vehicleState NOT IN ('NEW','DISABLED') AND DATEADD('MONTH', '+12', v.checkDate) <= DATEADD('MONTH', '+2',CURRENT_TIMESTAMP) GROUP BY ve ORDER BY MAX(v.checkDate) ASC")
    Page<VehicleStkDTO> findStkReadyForDates(@Param("dateFrom") Date dateFrom, @Param("dateTo") Date dateTo, Pageable pageable);

}
