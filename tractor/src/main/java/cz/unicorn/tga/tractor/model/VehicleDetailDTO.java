/**
 *
 */
package cz.unicorn.tga.tractor.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

/**
 * @author Tomáš Bláha
 */
@Data
@ToString
public class VehicleDetailDTO implements Serializable {

    private Long id;
    private String type;
    private String vin;
    private String vehicleState;
    private Date dateOfAcquisition;
    private BigDecimal price;
    private Set<VehicleRepairDTO> vehicleRepairs;
    private Set<VehicleMotDTO> vehicleMots;
    private Set<LendingDetailDTO> lendings;

}
