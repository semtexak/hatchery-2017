package cz.unicorn.tga.tractor.util;

import cz.unicorn.tga.tractor.access.ApplicationUser;
import cz.unicorn.tga.tractor.web.CommonConstants;

public class UserUtil {

	private UserUtil() {
	}

	public static String getFullName(final ApplicationUser user) {

		if (user == null) {
			return CommonConstants.EMPTY_STRING;
		}

		return getFullName(user.getName(), user.getSurname());

	}

	/*
	 * **********************************************************************
	 * PRIVATE METHODS
	 * **********************************************************************
	 */

	private static String getFullName(final String firstName, final String surname) {

		final StringBuilder sb = new StringBuilder();
		sb.append(surname == null ? CommonConstants.EMPTY_STRING : surname);
		sb.append(CommonConstants.WHITESPACE);
		sb.append(firstName == null ? CommonConstants.EMPTY_STRING : firstName);

		return sb.toString();

	}

}
