package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Lending;
import cz.unicorn.tga.tractor.entity.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface LendingDAO extends JpaRepository<Lending, Long> {

    @Query("SELECT l FROM Lending l WHERE l.vehicle.id = :id")
    Page<Lending> findByVehicle(@Param("id") Long id, Pageable pageable);

}
