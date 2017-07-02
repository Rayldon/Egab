package br.com.egab.persistence.impl;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.Query;

import br.com.egab.model.Usuario;
import br.com.egab.persistence.UsuarioPersistencia;

@Stateless
public class UsuarioPersistenciaImpl extends PersistenciaImpl<Usuario, Long> implements UsuarioPersistencia {

	@Override
	public List<Usuario> listarUsuarios(){
		StringBuilder hql = new StringBuilder()
				.append(" SELECT u FROM Usuario u")
				.append(" left join fetch u.telefones t");
			
		Query query = getEntityManager().createQuery(hql.toString());
		return query.getResultList();
	}
}
