package cz.unicorn.tga.tractor.model.form;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @author Tomáš Bláha
 */
@Data
public class LendingNewForm {

    private Date lendFrom;
    private Date lendTo;
    private String type;
    private Long clientId;
    private BigDecimal price;
    private Float latitude;
    private Float longitude;
    private Long vehicleId;

}
