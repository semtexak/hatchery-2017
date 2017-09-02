package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.model.LendingDetailDTO;
import cz.unicorn.tga.tractor.model.form.LendingNewForm;

public interface LendingManagerService {

    void createNewLending(LendingNewForm lendingNewForm);

    LendingDetailDTO getLending(Long id);
}
