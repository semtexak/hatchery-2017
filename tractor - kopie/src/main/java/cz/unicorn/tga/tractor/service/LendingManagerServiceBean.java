package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.dao.ClientDAO;
import cz.unicorn.tga.tractor.dao.LendingDAO;
import cz.unicorn.tga.tractor.dao.VehicleDAO;
import cz.unicorn.tga.tractor.entity.Client;
import cz.unicorn.tga.tractor.entity.Lending;
import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.LendingDetailDTO;
import cz.unicorn.tga.tractor.model.form.LendingNewForm;
import cz.unicorn.tga.tractor.util.DTOMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LendingManagerServiceBean implements LendingManagerService {

    private final LendingDAO lendingDAO;
    private final VehicleDAO vehicleDAO;
    private final ClientDAO clientDAO;
    private final DTOMapper dtoMapper;

    @Autowired
    public LendingManagerServiceBean(LendingDAO lendingDAO, VehicleDAO vehicleDAO, ClientDAO clientDAO, DTOMapper dtoMapper) {
        this.lendingDAO = lendingDAO;
        this.vehicleDAO = vehicleDAO;
        this.clientDAO = clientDAO;
        this.dtoMapper = dtoMapper;
    }

    @Override
    public void createNewLending(LendingNewForm lendingNewForm) {
        final Lending lending= new Lending();

        // set parametrs from dto
        setFieldFromDto(lendingNewForm, lending);

        save(lending);
    }

    @Override
    public LendingDetailDTO getLending(Long id) {
        return dtoMapper.toLendingDetail(lendingDAO.findOne(id));
    }

    private void save(Lending lending) {
        lendingDAO.save(lending);
    }

    private void setFieldFromDto(LendingNewForm lendingNewForm, Lending lending) {
        lending.setLendFrom(lendingNewForm.getLendFrom());
        lending.setLendTo(lendingNewForm.getLendTo());
        lending.setPrice(lendingNewForm.getPrice());
        lending.setLatitude(lendingNewForm.getLatitude());
        lending.setLongitude(lendingNewForm.getLongitude());

        Vehicle vehicle = vehicleDAO.findOne(lendingNewForm.getVehicleId());
        Client client = clientDAO.findOne(lendingNewForm.getClientId());

        lending.setVehicle(vehicle);
        lending.setClient(client);
    }

}
