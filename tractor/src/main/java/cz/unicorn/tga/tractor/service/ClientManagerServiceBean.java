/**
 *
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.controller.ControllerConstants;
import cz.unicorn.tga.tractor.dao.ClientDAO;
import cz.unicorn.tga.tractor.dao.LendingDAO;
import cz.unicorn.tga.tractor.dao.VehicleDAO;
import cz.unicorn.tga.tractor.dao.VehicleFilterDAO;
import cz.unicorn.tga.tractor.entity.Client;
import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.model.ClientBaseDTO;
import cz.unicorn.tga.tractor.model.VehicleDetailDTO;
import cz.unicorn.tga.tractor.model.VehicleFilter;
import cz.unicorn.tga.tractor.model.VehicleListDTO;
import cz.unicorn.tga.tractor.model.enumeration.VehicleState;
import cz.unicorn.tga.tractor.model.enumeration.VehicleType;
import cz.unicorn.tga.tractor.model.form.ClientNewForm;
import cz.unicorn.tga.tractor.model.form.VehicleChangeStateForm;
import cz.unicorn.tga.tractor.model.form.VehicleNewForm;
import cz.unicorn.tga.tractor.util.CoreDateUtil;
import cz.unicorn.tga.tractor.util.DTOMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author DZCJS9F
 */
@Service
@Transactional
public class ClientManagerServiceBean implements ClientManagerService {

    private final ClientDAO clientDAO;
    private final DTOMapper dtoMapper;

    @Autowired
    public ClientManagerServiceBean(ClientDAO clientDAO, DTOMapper dtoMapper) {
        this.clientDAO = clientDAO;
        this.dtoMapper = dtoMapper;
    }

    /**
     * Fills vehicle data to object & save it to database.
     *
     * @param clientNewForm Form data
     */
    @Override
    public void createNewClient(final ClientNewForm clientNewForm) {

        final Client client = new Client();

        // set parametrs from dto
        setFieldFromDto(clientNewForm, client);

        save(client);
    }

    /**
     * Set field from DTO object passed from form.
     *
     * @param clientNewForm
     * @param client
     */
    private void setFieldFromDto(final ClientNewForm clientNewForm, final Client client) {
        client.setName(clientNewForm.getName());
        client.setSurname(clientNewForm.getSurname());
    }

    /**
     * Save vehicle to databasae through repository
     *
     * @param client Vehicle for persisting
     */
    private void save(final Client client) {
        clientDAO.save(client);
    }

    @Override
    public ClientBaseDTO getClient(Long id) {
        return dtoMapper.toClientBaseDTO(clientDAO.findOne(id));
    }

    @Override
    public Page<ClientBaseDTO> getClients(Pageable pageable) {
        PageRequest pageRequest = new PageRequest(pageable.getPageNumber(), ControllerConstants.ITEMS_PER_PAGE, Sort.Direction.ASC, "surname", "name");
        Page<Client> clientPage = clientDAO.findAll(pageRequest);
        return new PageImpl<ClientBaseDTO>(dtoMapper.toClientBase(clientPage.getContent()), pageable, clientPage.getTotalElements());
    }


}
