package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.model.LendingDetailDTO;
import cz.unicorn.tga.tractor.model.LendingListDTO;
import cz.unicorn.tga.tractor.model.form.LendingNewForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface LendingManagerService {

    void createNewLending(LendingNewForm lendingNewForm);

    LendingDetailDTO getLending(Long id);

    Page<LendingListDTO> findAllLendingsForVehicle(Long id, Pageable pageable);
}
