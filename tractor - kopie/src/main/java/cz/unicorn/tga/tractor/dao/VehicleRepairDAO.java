package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.entity.VehicleRepair;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VehicleRepairDAO extends JpaRepository<VehicleRepair,Long> {

}
