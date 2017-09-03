package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.model.LendingDetailDTO;
import cz.unicorn.tga.tractor.model.LendingListDTO;
import cz.unicorn.tga.tractor.model.VehicleListDTO;
import cz.unicorn.tga.tractor.model.form.AvailabilityCheckForm;
import cz.unicorn.tga.tractor.model.form.LendingNewForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface LendingManagerService {

    void createNewLending(LendingNewForm lendingNewForm);

    LendingDetailDTO getLending(Long id);

    Page<LendingListDTO> findAllLendingsForVehicle(Long id, Pageable pageable);

    Page<LendingListDTO> findLatestLendingsForVehicle(Long id, Pageable pageable);

    List<VehicleListDTO> findAvailableCarsForLending(AvailabilityCheckForm availabilityCheckForm);
}
