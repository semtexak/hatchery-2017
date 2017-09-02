package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Lending;
import cz.unicorn.tga.tractor.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface LendingDAO extends JpaRepository<Lending, Long> {



}
