package br.com.egab.persistence.impl;

import static java.util.Arrays.asList;

import java.io.Serializable;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import br.com.egab.persistence.Persistencia;

@Stateless
public class PersistenciaImpl<T, K extends Serializable> implements Persistencia<T, K> {

    @PersistenceContext(unitName = "conexao-pu")
    private EntityManager entityManager;

    @Override
    public List<T> obterTodos(Class<T> classe) {
        CriteriaQuery<T> criteriaQuery = getEntityManager().getCriteriaBuilder().createQuery(classe);
        Root<T> root = criteriaQuery.from(classe);
        criteriaQuery.select(root);
        return getEntityManager().createQuery(criteriaQuery).getResultList();
    }

    @Override
    public EntityManager getEntityManager(){
        return entityManager;
    }

    @SuppressWarnings("rawtypes")
    protected List obter(StringBuilder jpql, Integer... ids) {
        return getEntityManager().createQuery(jpql.toString()).setParameter("ids", asList(ids)).getResultList();
    }
}