package cz.unicorn.tga.tractor.configuration.parser;

public interface ConfigurationItemParser<T> {

	public T encode(String value);

}
