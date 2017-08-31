/**
 * 
 */
package cz.unicorn.tga.tractor.model;

import java.math.BigDecimal;
import java.util.Date;

import lombok.Data;

/**
 * @author DZCJS9F
 *
 */

@Data
public class VehicleNewForm {

	private String type;
	private String vin;
	private BigDecimal price;

	private Date testDatum;

}
