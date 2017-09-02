/**
 *
 */
package cz.unicorn.tga.tractor.model.form;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @author DZCJS9F
 */
@Data
public class StkNewForm {

    private Long vehicleId;
    private Date checkDate;
    private String comment;
    private char passed;

}
