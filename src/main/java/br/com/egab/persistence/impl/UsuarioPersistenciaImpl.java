package br.com.egab.persistence.impl;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.Query;

import br.com.egab.converter.UsuarioConverter;
import br.com.egab.dto.UsuarioDTO;
import br.com.egab.model.Usuario;
import br.com.egab.persistence.UsuarioPersistencia;

@Stateless
public class UsuarioPersistenciaImpl extends PersistenciaImpl<Usuario, Long> implements UsuarioPersistencia {

	@Override
	public List<UsuarioDTO> listarUsuarios(){
		StringBuilder hql = new StringBuilder()
				.append(" SELECT u FROM Usuario u")
				.append(" inner join u.telefones ")
				.append(" WHERE u.telefones.id = :id ");
			
		Query query = getEntityManager().createQuery(hql.toString());
		query.setParameter("id", 1);
		List<Usuario> lista = query.getResultList();
		List<UsuarioDTO> listaUsuario = new ArrayList<>();
		for(Usuario u:lista){
			listaUsuario.add(new UsuarioConverter().converterToDto(u));
		}
		return listaUsuario;
	}
}
