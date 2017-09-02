package cz.unicorn.tga.tractor.entity;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * @author Tomáš Bláha
 */
@Entity
@Table(name = "LENDING")
@Data
public class Lending {

    @Id
    @SequenceGenerator(name = "LENDING_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "LENDING_ID_GENERATOR")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vehicle")
    private Vehicle vehicle;

    @Column(name = "lend_from")
    private Date lendFrom;

    @Column(name = "lend_to")
    private Date lendTo;

    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "client")
    private Client client;

    private Float latitude;

    private Float longitude;
}
