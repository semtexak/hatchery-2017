package cz.unicorn.tga.tractor.model.form;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class RepairNewForm {

    private Date repairedAt;
    private String repairResolution;
    private BigDecimal price;
    private Long vehicleId;
}
