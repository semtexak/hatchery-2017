/**
 *
 */
package cz.unicorn.tga.tractor.model.enumeration;

/**
 * Type of cars
 *
 * @author DZCJS9F
 */
public enum VehicleType {
    BULLDOZER, TRACTOR, DREDGING, EXCAVATOR, RECLAIMER, SKIDDER, LOADER, FORKLIFT, DUMP_TRUCK, ROAD_ROLLER, TRACKED_LOADER;

    public static VehicleType parseType(final String type) {
        for (final VehicleType t : VehicleType.values()) {
            if (t.name().equalsIgnoreCase(type)) {
                return t;
            }
        }

        return null;
    }

}
