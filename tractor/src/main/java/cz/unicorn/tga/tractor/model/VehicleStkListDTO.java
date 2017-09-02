/**
 *
 */
package cz.unicorn.tga.tractor.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

/**
 * @author Tomáš Bláha
 */
@Data
@ToString
public class VehicleStkListDTO implements Serializable {

    private Long id;
    private String type;
    private String vin;
    private Date checkDate;
    private Set<LendingDetailDTO> lendings;

}
