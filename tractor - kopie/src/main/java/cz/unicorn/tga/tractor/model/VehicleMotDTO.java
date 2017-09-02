package cz.unicorn.tga.tractor.model;

import cz.unicorn.tga.tractor.entity.Vehicle;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;

/**
 * @author Tomáš Bláha
 */
@Data
@ToString
public class VehicleMotDTO implements Serializable {

    private Long id;
    private Date checkDate;
    private String comment;
    private char passed;

}
