package cz.unicorn.tga.tractor.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public interface VehicleStkDTO {

    Long getId();

    String getType();

    String getVin();

    @JsonFormat(pattern="yyyy-MM-dd")
    Date getCheckDate();

}
