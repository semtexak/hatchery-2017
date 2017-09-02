/**
 * 
 */
package cz.unicorn.tga.tractor.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @author User
 *
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StkFilter {

	private Long id;
	private Date checkDateFrom;
	private Date checkDateTo;

}
