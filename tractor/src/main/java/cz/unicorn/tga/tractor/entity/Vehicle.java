/**
 *
 */
package cz.unicorn.tga.tractor.entity;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Set;



import cz.unicorn.tga.tractor.model.enumeration.VehicleState;
import cz.unicorn.tga.tractor.model.enumeration.VehicleType;
import lombok.Data;

import javax.persistence.*;

/**
 * @author DZCJS9F
 */
@Entity
@Table(name = "VEHICLE")
@Data
public class Vehicle {

    @Id
    @SequenceGenerator(name = "VEHICLE_ID_GENERATOR", sequenceName = "SEQ_VEHICLE_ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "VEHICLE_ID_GENERATOR")
    private Long id;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private VehicleType type;

    private String vin;

    @Column(name = "state_type")
    @Enumerated(EnumType.STRING)
    private VehicleState vehicleState;

    @Column(name = "date_of_acquisition")
    private Date dateOfAcquisition;

    @ManyToOne
    @JoinColumn(name="last_technical_check", nullable=true)
    private Vehicle lastTechnicalCheck;

    private BigDecimal price;

    private String nickname;

    @OneToMany(mappedBy = "vehicle")
    private List<VehicleRepair> vehicleRepairs;

    @OneToMany(mappedBy = "vehicle")
    private List<VehicleMot> vehicleMots;

}
