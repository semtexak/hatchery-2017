/**
 * 
 */
package cz.unicorn.tga.tractor.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import cz.unicorn.tga.tractor.model.enumeration.VehicleState;
import cz.unicorn.tga.tractor.model.enumeration.VehicleType;
import lombok.Data;

/**
 * @author DZCJS9F
 *
 */
@Entity
@Data
public class Vehicle {

	@Id
	@SequenceGenerator(name = "VEHICLE_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "VEHICLE_ID_GENERATOR")
	private Long id;

	@Column(name = "vehicle_type")
	@Enumerated(EnumType.STRING)
	private VehicleType type;

	private String vin;

	@Column(name = "state_type")
	@Enumerated(EnumType.STRING)
	private VehicleState vehicleState;

	@Column(name = "date_of_acquisition")
	private Date dateOfAcquisition;

	@Column(name = "last_control")
	private Date dateOfLastTechnicalCheck;

	private BigDecimal price;


}
