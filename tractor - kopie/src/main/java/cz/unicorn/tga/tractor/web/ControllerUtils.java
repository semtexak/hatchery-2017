package cz.unicorn.tga.tractor.web;

import java.math.BigDecimal;
import java.text.*;
import java.util.*;

import org.springframework.beans.propertyeditors.*;
import org.springframework.web.bind.WebDataBinder;

public class ControllerUtils {

	public static void setNumberCustomEditorToBinder(final WebDataBinder binder, final Locale locale) {
		setNumberCustomEditorToBinder(binder, 2, 2, locale);
	}

	public static void setNumberCustomEditorToBinder(final WebDataBinder binder, final Integer maximumFractionDigits,
			final Integer minimumFractionDigits, final Locale locale) {
		final CustomNumberEditor editor = makeCustomNumberEditor(maximumFractionDigits, minimumFractionDigits, locale);
		binder.registerCustomEditor(BigDecimal.class, editor);
	}


	private static CustomNumberEditor makeCustomNumberEditor(final Integer maximumFractionDigits,
			final Integer minimumFractionDigits, final Locale locale) {
		final DecimalFormat decimalFormat = new DecimalFormat();
		final DecimalFormatSymbols symbols = new DecimalFormatSymbols(locale);
		decimalFormat.setDecimalFormatSymbols(symbols);
		decimalFormat.setMinimumFractionDigits(minimumFractionDigits);
		decimalFormat.setMaximumFractionDigits(maximumFractionDigits);

		final CustomNumberEditor res = new CustomNumberEditor(BigDecimal.class, decimalFormat, true);
		return res;
	}

	public static void setStringTrimmerEditorToBinder(final WebDataBinder binder) {
		// trim all string
		final StringTrimmerEditor stringtrimmer = new StringTrimmerEditor(true);
		binder.registerCustomEditor(String.class, stringtrimmer);

	}



}
