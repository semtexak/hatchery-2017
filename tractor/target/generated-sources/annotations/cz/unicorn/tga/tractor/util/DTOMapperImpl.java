package cz.unicorn.tga.tractor.util;

import cz.unicorn.tga.tractor.entity.Client;
import cz.unicorn.tga.tractor.entity.Lending;
import cz.unicorn.tga.tractor.entity.Vehicle;
import cz.unicorn.tga.tractor.entity.VehicleMot;
import cz.unicorn.tga.tractor.entity.VehicleRepair;
import cz.unicorn.tga.tractor.model.ClientBaseDTO;
import cz.unicorn.tga.tractor.model.LendingBaseDTO;
import cz.unicorn.tga.tractor.model.LendingDetailDTO;
import cz.unicorn.tga.tractor.model.LendingListDTO;
import cz.unicorn.tga.tractor.model.VehicleBaseDTO;
import cz.unicorn.tga.tractor.model.VehicleDetailDTO;
import cz.unicorn.tga.tractor.model.VehicleListDTO;
import cz.unicorn.tga.tractor.model.VehicleMotDTO;
import cz.unicorn.tga.tractor.model.VehicleRepairDTO;
import cz.unicorn.tga.tractor.model.VehicleStkListDTO;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2017-09-02T20:49:10+0200",
    comments = "version: 1.2.0.Beta3, compiler: javac, environment: Java 1.8.0_144 (Oracle Corporation)"
)
@Component
public class DTOMapperImpl implements DTOMapper {

    @Override
    public List<VehicleListDTO> toVehicleList(List<Vehicle> vehicles) {
        if ( vehicles == null ) {
            return null;
        }

        List<VehicleListDTO> list = new ArrayList<VehicleListDTO>( vehicles.size() );
        for ( Vehicle vehicle : vehicles ) {
            list.add( vehicleToVehicleListDTO( vehicle ) );
        }

        return list;
    }

    @Override
    public List<VehicleStkListDTO> toVehicleStkList(List<Vehicle> vehicles) {
        if ( vehicles == null ) {
            return null;
        }

        List<VehicleStkListDTO> list = new ArrayList<VehicleStkListDTO>( vehicles.size() );
        for ( Vehicle vehicle : vehicles ) {
            list.add( vehicleToVehicleStkListDTO( vehicle ) );
        }

        return list;
    }

    @Override
    public VehicleRepairDTO toVehicleRepair(VehicleRepair vehicleRepair) {
        if ( vehicleRepair == null ) {
            return null;
        }

        VehicleRepairDTO vehicleRepairDTO = new VehicleRepairDTO();

        vehicleRepairDTO.setId( vehicleRepair.getId() );
        vehicleRepairDTO.setPrice( vehicleRepair.getPrice() );
        vehicleRepairDTO.setRepairedAt( vehicleRepair.getRepairedAt() );
        vehicleRepairDTO.setRepairResolution( vehicleRepair.getRepairResolution() );

        return vehicleRepairDTO;
    }

    @Override
    public VehicleMotDTO toVehicleMot(VehicleMot vehicleMot) {
        if ( vehicleMot == null ) {
            return null;
        }

        VehicleMotDTO vehicleMotDTO = new VehicleMotDTO();

        vehicleMotDTO.setId( vehicleMot.getId() );
        vehicleMotDTO.setCheckDate( vehicleMot.getCheckDate() );
        vehicleMotDTO.setComment( vehicleMot.getComment() );
        vehicleMotDTO.setPassed( vehicleMot.getPassed() );

        return vehicleMotDTO;
    }

    @Override
    public ClientBaseDTO toClientBaseDTO(Client client) {
        if ( client == null ) {
            return null;
        }

        ClientBaseDTO clientBaseDTO = new ClientBaseDTO();

        clientBaseDTO.setId( client.getId() );
        clientBaseDTO.setName( client.getName() );
        clientBaseDTO.setSurname( client.getSurname() );

        return clientBaseDTO;
    }

    @Override
    public VehicleDetailDTO toVehicleDetailDTO(Vehicle vehicle) {
        if ( vehicle == null ) {
            return null;
        }

        VehicleDetailDTO vehicleDetailDTO = new VehicleDetailDTO();

        vehicleDetailDTO.setId( vehicle.getId() );
        if ( vehicle.getType() != null ) {
            vehicleDetailDTO.setType( vehicle.getType().name() );
        }
        vehicleDetailDTO.setVin( vehicle.getVin() );
        if ( vehicle.getVehicleState() != null ) {
            vehicleDetailDTO.setVehicleState( vehicle.getVehicleState().name() );
        }
        vehicleDetailDTO.setDateOfAcquisition( vehicle.getDateOfAcquisition() );
        vehicleDetailDTO.setPrice( vehicle.getPrice() );
        vehicleDetailDTO.setVehicleRepairs( vehicleRepairListToVehicleRepairDTOSet( vehicle.getVehicleRepairs() ) );
        vehicleDetailDTO.setVehicleMots( vehicleMotListToVehicleMotDTOSet( vehicle.getVehicleMots() ) );
        vehicleDetailDTO.setLendings( lendingListToLendingDetailDTOSet( vehicle.getLendings() ) );

        return vehicleDetailDTO;
    }

    @Override
    public LendingDetailDTO toLendingDetailDTO(Lending lending) {
        if ( lending == null ) {
            return null;
        }

        LendingDetailDTO lendingDetailDTO = new LendingDetailDTO();

        lendingDetailDTO.setId( lending.getId() );
        lendingDetailDTO.setLendFrom( lending.getLendFrom() );
        lendingDetailDTO.setLendTo( lending.getLendTo() );
        lendingDetailDTO.setPrice( lending.getPrice() );
        lendingDetailDTO.setLatitude( lending.getLatitude() );
        lendingDetailDTO.setLongitude( lending.getLongitude() );
        lendingDetailDTO.setVehicle( vehicleToVehicleBaseDTO( lending.getVehicle() ) );
        lendingDetailDTO.setClient( toClientBaseDTO( lending.getClient() ) );

        return lendingDetailDTO;
    }

    @Override
    public List<LendingListDTO> toLendingList(List<Lending> content) {
        if ( content == null ) {
            return null;
        }

        List<LendingListDTO> list = new ArrayList<LendingListDTO>( content.size() );
        for ( Lending lending : content ) {
            list.add( lendingToLendingListDTO( lending ) );
        }

        return list;
    }

    protected LendingBaseDTO lendingToLendingBaseDTO(Lending lending) {
        if ( lending == null ) {
            return null;
        }

        LendingBaseDTO lendingBaseDTO = new LendingBaseDTO();

        lendingBaseDTO.setId( lending.getId() );
        lendingBaseDTO.setClient( toClientBaseDTO( lending.getClient() ) );

        return lendingBaseDTO;
    }

    protected VehicleListDTO vehicleToVehicleListDTO(Vehicle vehicle) {
        if ( vehicle == null ) {
            return null;
        }

        VehicleListDTO vehicleListDTO = new VehicleListDTO();

        vehicleListDTO.setId( vehicle.getId() );
        if ( vehicle.getType() != null ) {
            vehicleListDTO.setType( vehicle.getType().name() );
        }
        vehicleListDTO.setVin( vehicle.getVin() );
        if ( vehicle.getVehicleState() != null ) {
            vehicleListDTO.setVehicleState( vehicle.getVehicleState().name() );
        }
        vehicleListDTO.setDateOfAcquisition( vehicle.getDateOfAcquisition() );
        vehicleListDTO.setCurrentLending( lendingToLendingBaseDTO( vehicle.getCurrentLending() ) );

        return vehicleListDTO;
    }

    protected Set<LendingDetailDTO> lendingListToLendingDetailDTOSet(List<Lending> list) {
        if ( list == null ) {
            return null;
        }

        Set<LendingDetailDTO> set = new HashSet<LendingDetailDTO>( Math.max( (int) ( list.size() / .75f ) + 1, 16 ) );
        for ( Lending lending : list ) {
            set.add( toLendingDetailDTO( lending ) );
        }

        return set;
    }

    protected VehicleStkListDTO vehicleToVehicleStkListDTO(Vehicle vehicle) {
        if ( vehicle == null ) {
            return null;
        }

        VehicleStkListDTO vehicleStkListDTO = new VehicleStkListDTO();

        vehicleStkListDTO.setId( vehicle.getId() );
        if ( vehicle.getType() != null ) {
            vehicleStkListDTO.setType( vehicle.getType().name() );
        }
        vehicleStkListDTO.setVin( vehicle.getVin() );
        vehicleStkListDTO.setLendings( lendingListToLendingDetailDTOSet( vehicle.getLendings() ) );

        return vehicleStkListDTO;
    }

    protected Set<VehicleRepairDTO> vehicleRepairListToVehicleRepairDTOSet(List<VehicleRepair> list) {
        if ( list == null ) {
            return null;
        }

        Set<VehicleRepairDTO> set = new HashSet<VehicleRepairDTO>( Math.max( (int) ( list.size() / .75f ) + 1, 16 ) );
        for ( VehicleRepair vehicleRepair : list ) {
            set.add( toVehicleRepair( vehicleRepair ) );
        }

        return set;
    }

    protected Set<VehicleMotDTO> vehicleMotListToVehicleMotDTOSet(List<VehicleMot> list) {
        if ( list == null ) {
            return null;
        }

        Set<VehicleMotDTO> set = new HashSet<VehicleMotDTO>( Math.max( (int) ( list.size() / .75f ) + 1, 16 ) );
        for ( VehicleMot vehicleMot : list ) {
            set.add( toVehicleMot( vehicleMot ) );
        }

        return set;
    }

    protected VehicleBaseDTO vehicleToVehicleBaseDTO(Vehicle vehicle) {
        if ( vehicle == null ) {
            return null;
        }

        VehicleBaseDTO vehicleBaseDTO = new VehicleBaseDTO();

        vehicleBaseDTO.setId( vehicle.getId() );
        if ( vehicle.getType() != null ) {
            vehicleBaseDTO.setType( vehicle.getType().name() );
        }
        vehicleBaseDTO.setVin( vehicle.getVin() );

        return vehicleBaseDTO;
    }

    protected LendingListDTO lendingToLendingListDTO(Lending lending) {
        if ( lending == null ) {
            return null;
        }

        LendingListDTO lendingListDTO = new LendingListDTO();

        lendingListDTO.setId( lending.getId() );
        lendingListDTO.setLendFrom( lending.getLendFrom() );
        lendingListDTO.setLendTo( lending.getLendTo() );
        lendingListDTO.setPrice( lending.getPrice() );
        lendingListDTO.setLatitude( lending.getLatitude() );
        lendingListDTO.setLongitude( lending.getLongitude() );
        lendingListDTO.setClient( toClientBaseDTO( lending.getClient() ) );

        return lendingListDTO;
    }
}
