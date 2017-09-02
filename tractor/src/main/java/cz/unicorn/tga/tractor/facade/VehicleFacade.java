package cz.unicorn.tga.tractor.facade;

import cz.unicorn.tga.tractor.model.*;
import cz.unicorn.tga.tractor.model.form.LendingNewForm;
import cz.unicorn.tga.tractor.model.form.StkNewForm;
import cz.unicorn.tga.tractor.model.form.VehicleChangeStateForm;
import cz.unicorn.tga.tractor.model.form.VehicleNewForm;
import cz.unicorn.tga.tractor.service.LendingManagerService;
import cz.unicorn.tga.tractor.service.StkManagerService;
import cz.unicorn.tga.tractor.service.VehicleManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class VehicleFacade {

    @Autowired
    private VehicleManagerService vehicleService;

    @Autowired
    private StkManagerService stkService;

    @Autowired
    private LendingManagerService lendingService;

    public Page<VehicleStkListDTO> getVehiclesWhereStkIsNeeded(Pageable pageable) {
        return stkService.getVehicles(pageable);
    }

    public Page<VehicleListDTO> getAllVehicles(Pageable pageable) {
        return vehicleService.getVehicles(pageable);
    }

    public Page<VehicleStkListDTO> findByFilter(StkFilter stkFilter, Pageable pageable) {
        return stkService.findByFilter(stkFilter, pageable);
    }

    public Page<VehicleListDTO> findByFilter(VehicleFilter vehicleFilter, Pageable pageable) {
        return vehicleService.findByFilter(vehicleFilter, pageable);
    }

    public void createNewStk(StkNewForm stkNewForm) {
        stkService.createNewStk(stkNewForm);
    }

    public void createNewVehicle(VehicleNewForm vehicleNewForm) {
        vehicleService.createNewVehicle(vehicleNewForm);
    }

    public void changeVehicleState(Long id, VehicleChangeStateForm vehicleChangeStateForm) {
        vehicleService.changeVehicleState(id, vehicleChangeStateForm);
    }

    public void createNewLending(LendingNewForm lendingNewForm) {
        lendingService.createNewLending(lendingNewForm);
    }

    public LendingDetailDTO getLending(Long id) {
        return lendingService.getLending(id);
    }

    public Page<LendingListDTO> getAllLendingsForVehicle(Long id, Pageable pageable) {
        return lendingService.findAllLendingsForVehicle(id, pageable);
    }
}
