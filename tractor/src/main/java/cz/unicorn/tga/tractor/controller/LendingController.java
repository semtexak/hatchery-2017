package cz.unicorn.tga.tractor.controller;

import cz.unicorn.tga.tractor.facade.VehicleFacade;
import cz.unicorn.tga.tractor.model.LendingDetailDTO;
import cz.unicorn.tga.tractor.model.LendingListDTO;
import cz.unicorn.tga.tractor.model.form.LendingNewForm;
import cz.unicorn.tga.tractor.web.CommonConstants;
import cz.unicorn.tga.tractor.web.ControllerUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = LendingController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class LendingController {

    public static final String BASE_URL = CommonConstants.SLASH + "lendings";
    public final static String FORM_ATTRIBUTE_NAME = "lendingNewForm";

    @Autowired
    private VehicleFacade vehicleFacade;

    @Autowired
    private MessageSource messageSource;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public LendingDetailDTO getLending(@PathVariable Long id) {
        return vehicleFacade.getLending(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void addNewLending(@RequestBody final LendingNewForm lendingNewForm) {
        vehicleFacade.createNewLending(lendingNewForm);
        return;

    }

	/*
     * **********************************************************************
	 * PRIVATE METHODS
	 * **********************************************************************
	 */

    @InitBinder(LendingController.FORM_ATTRIBUTE_NAME)
    protected void initBinder(final WebDataBinder binder) {

        // BigDecimal custom binder
        ControllerUtils.setNumberCustomEditorToBinder(binder, CommonConstants.CZECH_LOCALE);

        // trim all string
        ControllerUtils.setStringTrimmerEditorToBinder(binder);
    }

}
