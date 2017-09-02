package cz.unicorn.tga.tractor.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * @author Tomáš Bláha
 */
@Data
@ToString
public class VehicleRepairDTO implements Serializable {

    private Long id;
    private BigDecimal price;

}
