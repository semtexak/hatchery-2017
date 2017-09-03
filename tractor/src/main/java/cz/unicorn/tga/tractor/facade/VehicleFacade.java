package cz.unicorn.tga.tractor.facade;

import cz.unicorn.tga.tractor.model.*;
import cz.unicorn.tga.tractor.model.form.*;
import cz.unicorn.tga.tractor.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleFacade {

    @Autowired
    private VehicleManagerService vehicleService;

    @Autowired
    private StkManagerService stkService;

    @Autowired
    private LendingManagerService lendingService;

    @Autowired
    private RepairManagerService repairService;

    @Autowired
    private ClientManagerService clientService;

    public Page<VehicleListDTO> getVehiclesWhereStkIsNeeded(Pageable pageable) {
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

    public Page<VehicleRepairDTO> getAllRepairsForVehicle(Long id, Pageable pageable) {
        return repairService.findAllRepairsForVehicle(id, pageable);
    }

    public Page<StkListDTO> getAllStksForVehicle(Long id, Pageable pageable) {
        return stkService.findAllStksForVehicle(id, pageable);
    }

    public ClientBaseDTO getClient(Long id) {
        return clientService.getClient(id);
    }

    public Page<LendingListDTO> getLatestLendingsForVehicle(Long id, Pageable pageable) {
        return lendingService.findLatestLendingsForVehicle(id, pageable);
    }

    public Page<LendingListDTO> getLatestLendingsForClient(Long id, Pageable pageable) {
        return lendingService.findLatestLendingsForVehicle(id, pageable);
    }

    public List<VehicleListDTO> getAvailableCarsForLending(AvailabilityCheckForm availabilityCheckForm) {
        return lendingService.findAvailableCarsForLending(availabilityCheckForm);
    }
}
