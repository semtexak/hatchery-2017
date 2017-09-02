package cz.unicorn.tga.tractor.entity;

import lombok.Data;
import javax.persistence.*;
import java.util.Date;

/**
 * @author Tomáš Bláha
 */
@Entity
@Table(name = "VEHICLE_MOT")
@Data
public class VehicleMot {

    @Id
    @SequenceGenerator(name = "VEHICLE_MOT_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "VEHICLE_MOT_ID_GENERATOR")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @Column(name = "check_date")
    private Date checkDate;

    private String comment;

    private char passed;

}
