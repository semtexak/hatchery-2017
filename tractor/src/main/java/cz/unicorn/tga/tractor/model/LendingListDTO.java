package cz.unicorn.tga.tractor.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @author Tomáš Bláha
 */
@Data
public class LendingListDTO {

    private Long id;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date lendFrom;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date lendTo;
    private BigDecimal price;
    private Float latitude;
    private Float longitude;
    private ClientBaseDTO client;

}
