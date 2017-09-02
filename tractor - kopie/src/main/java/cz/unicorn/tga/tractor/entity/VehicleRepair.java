package cz.unicorn.tga.tractor.entity;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * @author Tomáš Bláha
 */
@Entity
@Table(name = "VEHICLE_REPAIR")
@Data
public class VehicleRepair {

    @Id
    @SequenceGenerator(name = "VEHICLE_REPAIR_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "VEHICLE_REPAIR_ID_GENERATOR")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @Column(name = "repaired_at")
    private Date repairedAt;

    private BigDecimal price;

    @Column(name = "repair_resolution")
    private String repairResolution;

}
