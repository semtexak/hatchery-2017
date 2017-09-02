package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface VehicleDAO extends JpaRepository<Vehicle, Long> {

    @Query("SELECT v FROM Vehicle v JOIN v.lastTechnicalCheck m WHERE ((m.checkDate + (365) >= CURRENT_TIMESTAMP) AND (CURRENT_TIMESTAMP + (61) >= m.checkDate + (365)) OR (m.checkDate + (365) <= CURRENT_TIMESTAMP)) AND v.vehicleState NOT IN ('NEW','DISABLED')")
    public Page<Vehicle> findStkReady(Pageable pageable);


}
