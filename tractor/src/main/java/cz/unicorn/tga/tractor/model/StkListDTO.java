package cz.unicorn.tga.tractor.model;

import lombok.Data;

import java.util.Date;

@Data
public class StkListDTO {

    private Long id;
    private Date checkDate;
    private String comment;
    private char passed;

}
