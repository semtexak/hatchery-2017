package cz.unicorn.tga.tractor.model.form;

import lombok.Data;

import java.util.Date;

@Data
public class AvailabilityCheckForm {

    private String type;
    private Date lendFrom;
    private Date lendTo;

}
