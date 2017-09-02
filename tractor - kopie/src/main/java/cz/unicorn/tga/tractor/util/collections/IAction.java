package cz.unicorn.tga.tractor.util.collections;

/**
 * @author Filip Buchta
 */
public interface IAction<T> {
	void call(T object);
}
