package br.com.egab.persistence;

import java.io.Serializable;
import java.util.List;

import javax.persistence.EntityManager;

public interface Persistencia<T, K extends Serializable> {
	
	public EntityManager getEntityManager();
    
	public List<T> obterTodos(Class<T> classe);
}