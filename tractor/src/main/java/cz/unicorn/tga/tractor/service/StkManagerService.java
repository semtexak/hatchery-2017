/**
 *
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.model.*;
import cz.unicorn.tga.tractor.model.form.StkNewForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Tomáš Bláha
 */
public interface StkManagerService {

    void createNewStk(StkNewForm stkNewForm);

    Page<VehicleStkListDTO> findByFilter(StkFilter filter, Pageable pageable);

    Page<VehicleListDTO> getVehicles(Pageable pageable);

    Page<StkListDTO> findAllStksForVehicle(Long id, Pageable pageable);
}
