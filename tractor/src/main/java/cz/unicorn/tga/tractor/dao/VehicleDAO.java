package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface VehicleDAO extends JpaRepository<Vehicle,Long> {

        @Query("SELECT v FROM Vehicle v JOIN v.lastTechnicalCheck m WHERE v.vehicleState NOT IN ('NEW','DISABLED')")
        public List<Vehicle> findStkReady();
}
