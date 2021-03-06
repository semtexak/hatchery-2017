/**
 *
 */
package cz.unicorn.tga.tractor.model;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

/**
 * @author Tomáš Bláha
 */
@Data
@ToString
public class ClientBaseDTO implements Serializable {

    private Long id;
    private String name;
    private String surname;
    private String ico;
    private Date registrationDate;
    private String email;
    private String address;
    private String phone;

}
