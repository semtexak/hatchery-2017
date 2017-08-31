/**
 * 
 */
package cz.unicorn.tga.tractor.model;

import java.math.BigDecimal;
import java.util.Date;

import lombok.*;

/**
 * @author User
 *
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VehicleFilter {

	private Long id;
	private String type;
	private String vin;
	private String state;
	private BigDecimal priceFrom;
	private BigDecimal priceTo;
	private Date acquiredFrom;
	private Date acquiredTo;
	private Date lastTechnicalCheckFrom;
	private Date lastTechnicalCheckTo;

}
