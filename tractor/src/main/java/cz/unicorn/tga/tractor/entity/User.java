package cz.unicorn.tga.tractor.entity;

import cz.unicorn.tga.tractor.model.enumeration.UserRole;
import lombok.Data;

import javax.persistence.*;

/**
 * @author Tomáš Bláha
 */
@Entity
@Table(name = "USER")
@Data
public class User {

    @Id
    @SequenceGenerator(name = "USER_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USER_ID_GENERATOR")
    private Long id;

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;
}
