package cz.unicorn.tga.tractor.configuration.parser;

public class StringValueParser implements ConfigurationItemParser<String> {

	@Override
	public String encode(final String value) {
		return value;
	}

}
