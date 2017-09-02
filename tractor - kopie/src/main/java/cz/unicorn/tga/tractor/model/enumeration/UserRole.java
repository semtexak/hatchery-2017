package cz.unicorn.tga.tractor.model.enumeration;

/**
 * User roles enumeration.
 *
 * @author Tomáš Bláha
 */
public enum UserRole {
    ADMIN, EMPLOYEE;

    public static UserRole defaultState() {
        return EMPLOYEE;
    }
}
