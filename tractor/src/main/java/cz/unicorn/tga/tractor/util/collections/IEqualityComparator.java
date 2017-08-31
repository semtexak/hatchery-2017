/**
 * 
 */
package cz.unicorn.tga.tractor.util.collections;

/**
 * @author Marek Lobotka
 */
public interface IEqualityComparator<TFirst, TSecond> {

	boolean equalsTo(TFirst firstItem, TSecond secondItem);
}
