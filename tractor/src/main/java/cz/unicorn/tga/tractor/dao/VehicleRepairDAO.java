package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.VehicleRepair;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface VehicleRepairDAO extends JpaRepository<VehicleRepair,Long> {


    @Query("SELECT r FROM VehicleRepair r WHERE r.vehicle.id = :id")
    Page<VehicleRepair> findByVehicle(@Param("id") Long id, Pageable pageable);

}
