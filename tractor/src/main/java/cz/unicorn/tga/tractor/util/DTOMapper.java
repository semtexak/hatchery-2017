/**
 *
 */
package cz.unicorn.tga.tractor.util;

import java.util.List;

import cz.unicorn.tga.tractor.entity.*;
import cz.unicorn.tga.tractor.model.*;
import org.mapstruct.Mapper;

@Mapper
public interface DTOMapper {

    List<VehicleListDTO> toVehicleList(final List<Vehicle> vehicles);

    List<VehicleStkListDTO> toVehicleStkList(final List<Vehicle> vehicles);

    VehicleRepairDTO toVehicleRepair(VehicleRepair vehicleRepair);

    VehicleMotDTO toVehicleMot(VehicleMot vehicleMot);

    ClientBaseDTO toClientBaseDTO(final Client client);

    VehicleDetailDTO toVehicleDetailDTO(final Vehicle vehicle);

    LendingDetailDTO toLendingDetailDTO(final Lending lending);

    List<LendingListDTO> toLendingList(List<Lending> content);

    List<VehicleRepairDTO> toVehicleRepairList(List<VehicleRepair> content);

    List<ClientBaseDTO> toClientBase(List<Client> content);

    List<StkListDTO> toStkList(List<VehicleMot> content);
}
