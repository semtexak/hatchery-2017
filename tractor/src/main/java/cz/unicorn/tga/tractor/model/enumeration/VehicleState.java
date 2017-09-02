package cz.unicorn.tga.tractor.model.enumeration;

/**
 * State of concrete car
 * 
 * @author DZCJS9F
 *
 */
public enum VehicleState {
	NEW, REGISTRED, LENDED, BROKEN, IN_GARAGE, DISABLED;

	public static VehicleState defaultState() {
		return NEW;
	}
}
