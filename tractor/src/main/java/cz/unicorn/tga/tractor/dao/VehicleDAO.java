package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VehicleDAO extends JpaRepository<Vehicle,Long> {

}
