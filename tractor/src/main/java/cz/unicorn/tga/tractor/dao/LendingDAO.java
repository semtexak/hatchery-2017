package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Lending;
import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.VehicleListDTO;
import cz.unicorn.tga.tractor.model.enumeration.VehicleType;
import cz.unicorn.tga.tractor.model.form.AvailabilityCheckForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;


public interface LendingDAO extends JpaRepository<Lending, Long> {

    @Query("SELECT l FROM Lending l WHERE l.vehicle.id = :id")
    Page<Lending> findByVehicle(@Param("id") Long id, Pageable pageable);

    @Query("SELECT l FROM Lending l WHERE l.vehicle.id = :id AND l.lendFrom >= :minusYear")
    Page<Lending> findLatestByVehicle(@Param("id") Long id, @Param("minusYear") Date minusYear, Pageable pageable);

    @Query("SELECT l FROM Lending l WHERE l.client.id = :id AND l.lendFrom >= :minusYearAndHalf")
    Page<Lending> findLatestByClient(@Param("id") Long id, @Param("minusYear") Date minusYearAndHalf, Pageable pageable);

    @Query("SELECT v FROM Vehicle v WHERE v.id IN (SELECT l.id FROM Lending l WHERE (l.lendFrom BETWEEN  :lendFrom AND :lendTo) OR (l.lendTo BETWEEN  :lendFrom AND :lendTo))")
    List<Vehicle> findAvailableVehicles(@Param("lendFrom") Date lendFrom, @Param("lendTo") Date lendTo);
}
