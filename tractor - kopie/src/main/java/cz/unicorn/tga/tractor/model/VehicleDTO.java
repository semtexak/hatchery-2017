/**
 *
 */
package cz.unicorn.tga.tractor.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

import cz.unicorn.tga.tractor.entity.VehicleMot;
import lombok.*;

/**
 * @author Tomáš Bláha
 */
@Data
@ToString
public class VehicleDTO implements Serializable {

    private Long id;
    private String type;
    private String vin;
    private String vehicleState;
    private Date dateOfAcquisition;
    private VehicleMot lastTechnicalCheck;
    private BigDecimal price;
    private Set<VehicleRepairDTO> vehicleRepairs;
    private Set<VehicleMotDTO> vehicleMots  ;

}
