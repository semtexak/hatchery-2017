package cz.unicorn.tga.tractor.access;

import java.io.Serializable;

public interface ApplicationUser extends Serializable {

	String getLogin();

	String getName();

	String getSurname();

	String getEmail();

}
