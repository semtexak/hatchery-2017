package cz.unicorn.tga.tractor.controller;

import cz.unicorn.tga.tractor.facade.VehicleFacade;
import cz.unicorn.tga.tractor.model.ClientBaseDTO;
import cz.unicorn.tga.tractor.model.LendingDetailDTO;
import cz.unicorn.tga.tractor.model.LendingListDTO;
import cz.unicorn.tga.tractor.model.form.LendingNewForm;
import cz.unicorn.tga.tractor.web.CommonConstants;
import cz.unicorn.tga.tractor.web.ControllerUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = ClientController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class ClientController {

    public static final String BASE_URL = CommonConstants.SLASH + "clients";
    public final static String FORM_ATTRIBUTE_NAME = "clientNewForm";

    @Autowired
    private VehicleFacade vehicleFacade;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ClientBaseDTO getClient(@PathVariable Long id) {
        return vehicleFacade.getClient(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void addNewClient(@RequestBody final LendingNewForm lendingNewForm) {
        vehicleFacade.createNewLending(lendingNewForm);
        return;

    }

    @RequestMapping(value = "/{id}/lendings", method = RequestMethod.GET)
    public Page<LendingListDTO> getLastestLendings(@PathVariable Long id, Pageable pageable) {
        return vehicleFacade.getLatestLendingsForClient(id, pageable);
    }

	/*
     * **********************************************************************
	 * PRIVATE METHODS
	 * **********************************************************************
	 */

    @InitBinder(ClientController.FORM_ATTRIBUTE_NAME)
    protected void initBinder(final WebDataBinder binder) {

        // BigDecimal custom binder
        ControllerUtils.setNumberCustomEditorToBinder(binder, CommonConstants.CZECH_LOCALE);

        // trim all string
        ControllerUtils.setStringTrimmerEditorToBinder(binder);
    }

}
