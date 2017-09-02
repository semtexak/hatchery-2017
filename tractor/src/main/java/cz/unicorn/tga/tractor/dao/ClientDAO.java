package cz.unicorn.tga.tractor.dao;

import cz.unicorn.tga.tractor.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientDAO extends JpaRepository<Client, Long>{

}
