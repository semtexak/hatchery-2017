package cz.unicorn.tga.tractor.dao;

import java.io.Serializable;
import java.util.List;

import org.hibernate.*;
import org.hibernate.criterion.*;
import org.springframework.stereotype.Repository;

@Repository
public abstract class GenericHibernateDAO<T, ID extends Serializable> extends AbstractDAO<T, ID>
		implements GenericDAO<T, ID> {


	@Override
	@SuppressWarnings("unchecked")
	public List<T> findAll() {
		return getSession().createCriteria(getPersistentClass()).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public T findById(final ID id) {
		return (T) getSession().get(getPersistentClass(), id);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<T> findByProperty(final String propertyName, final Object value, final String... fetchedAssociations) {
		final Criteria criteria = getSession().createCriteria(getPersistentClass());
		criteria.add(Restrictions.eq(propertyName, value));
		for (final String fetchedAssociation : fetchedAssociations) {
			criteria.createAlias(fetchedAssociation, fetchedAssociation);
			criteria.setFetchMode(fetchedAssociation, FetchMode.JOIN);
		}
		return criteria.list();
	}

	@Override
	@SuppressWarnings("unchecked")
	public T findUniqueByProperty(final String propertyName, final Object value, final String... fetchedAssociations) {
		final Criteria criteria = getSession().createCriteria(getPersistentClass());
		criteria.add(Restrictions.eq(propertyName, value));
		for (final String fetchedAssociation : fetchedAssociations) {
			criteria.createAlias(fetchedAssociation, fetchedAssociation);
			criteria.setFetchMode(fetchedAssociation, FetchMode.JOIN);
		}
		return (T) criteria.uniqueResult();
	}

	@Override
	public List<T> findNotRemovedOrderedByCreationDate() {
		return findByCriteria();
	}

	/**
	 * Use this inside subclasses as a convenience method.
	 */
	@SuppressWarnings("unchecked")
	protected List<T> findByCriteria(final Criterion... criterion) {
		final Criteria crit = getSession().createCriteria(getPersistentClass());
		for (final Criterion c : criterion) {
			crit.add(c);
		}
		return crit.list();
	}

	@Override
	public Long countAll() {

		final Criteria query = createCriteria();
		query.setProjection(Projections.rowCount());

		return (Long) query.uniqueResult();

	}




	/** {@inheritDoc} */
	@Override
	public void saveAllInBatch(final List<T> entityList) {
		final Session session = getSession();

		for (int i = 0; i < entityList.size(); i++) {
			session.save(entityList.get(i));
			if (i + 1 % 50 == 0) { // 50, same as the JDBC batch size
				// flush a batch of inserts and release memory:
				session.flush();
				session.clear();
			}
		}
	}
}
