package cz.unicorn.tga.tractor.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * @author Tomáš Bláha
 */
@Entity
@Table(name = "CLIENT")
@Data
public class Client {

    @Id
    @SequenceGenerator(name = "CLIENT_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CLIENT_ID_GENERATOR")
    private Long id;

    private String name;

    private String surname;

    private String ico;

    @Column(name = "registration_date")
    private Date registrationDate;

    private String email;

    private String address;

    @Column(name = "ceil_Phone")
    private String phone;

    @OneToMany(mappedBy = "client")
    private List<Lending> lendings;

}
