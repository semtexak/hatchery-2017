/**
 *
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.model.ClientBaseDTO;
import cz.unicorn.tga.tractor.model.VehicleDetailDTO;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import cz.unicorn.tga.tractor.model.VehicleListDTO;
import cz.unicorn.tga.tractor.model.form.ClientNewForm;
import cz.unicorn.tga.tractor.model.form.VehicleChangeStateForm;
import cz.unicorn.tga.tractor.model.form.VehicleNewForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Tomas Blaha
 */
public interface ClientManagerService {

    void createNewClient(ClientNewForm clientNewForm);

//    Page<ClientBaseDTO> findByFilter(VehicleFilter filter, Pageable pageable);

    ClientBaseDTO getClient(Long id);

    Page<ClientBaseDTO> getClients(Pageable pageable);
}
