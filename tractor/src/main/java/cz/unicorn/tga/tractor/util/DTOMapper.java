/**
 * 
 */
package cz.unicorn.tga.tractor.util;

import java.util.List;

import cz.unicorn.tga.tractor.entity.Vehicle;
import org.mapstruct.Mapper;

import cz.unicorn.tga.tractor.model.VehicleDTO;

@Mapper
public interface DTOMapper {

	VehicleDTO convert(final Vehicle vehicle);

	List<VehicleDTO> convert(final List<Vehicle> vehicles);
}
