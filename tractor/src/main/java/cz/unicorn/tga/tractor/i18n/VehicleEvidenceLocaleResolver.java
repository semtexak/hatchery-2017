package cz.unicorn.tga.tractor.i18n;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.LocaleResolver;

@Component(value = "localeResolver")
public class VehicleEvidenceLocaleResolver implements LocaleResolver {

	public static final String ATTR_LOCALE = "locale";
	public static final String PARAM_LANG = "lang";

	private static final Logger LOGGER = LoggerFactory.getLogger(VehicleEvidenceLocaleResolver.class);

	public VehicleEvidenceLocaleResolver() throws IOException {
		VehicleEvidenceLocaleProvider.load();
	}

	public Locale resolveLocale(final HttpServletRequest request) {
		return new Locale(VehicleEvidenceLocaleProvider.getDefault());
	}

	public void setLocale(final HttpServletRequest request, final HttpServletResponse response, final Locale locale) {
		setLocaleToUserSession(locale);
	}

	public void setLocaleFromRequestParameter(final ServletRequest request) {

		final String language = request.getParameter(PARAM_LANG);
		final Locale newLocale = VehicleEvidenceLocaleProvider.getSupportedLocale(language);

		setLocaleToUserSession(newLocale);

		LOGGER.debug("locale has been changed to {}", newLocale);

	}

	private void setLocaleToUserSession(final Locale locale) {

		final boolean supported = VehicleEvidenceLocaleProvider.isSupported(locale);
		final Locale newLocale = supported ? locale : new Locale(VehicleEvidenceLocaleProvider.getDefault(locale));

		LOGGER.debug("locale has been changed to {}", newLocale);
	}

}
