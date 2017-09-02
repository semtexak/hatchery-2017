/**
 * 
 */
package cz.unicorn.tga.tractor.util;

import java.util.List;

import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.entity.VehicleRepair;
import cz.unicorn.tga.tractor.model.VehicleRepairDTO;
import org.mapstruct.Mapper;

import cz.unicorn.tga.tractor.model.VehicleDTO;
import org.springframework.data.domain.Page;

@Mapper
public interface DTOMapper {

	VehicleDTO convert(final Vehicle vehicle);

	List<VehicleDTO> convert(final List<Vehicle> vehicles);

	VehicleRepairDTO toVehicleRepair(VehicleRepair vehicleRepair);

}
