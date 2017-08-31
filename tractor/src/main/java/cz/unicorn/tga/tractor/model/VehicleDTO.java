/**
 * 
 */
package cz.unicorn.tga.tractor.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import lombok.*;

/**
 * @author User
 *
 */
@Data
@ToString
public class VehicleDTO implements Serializable {

	private Long id;
	private String type;
	private String vin;
	private String vehicleState;
	private Date dateOfAcquisition;
	private Date dateOfLastTechnicalCheck;
	private BigDecimal price;

}
