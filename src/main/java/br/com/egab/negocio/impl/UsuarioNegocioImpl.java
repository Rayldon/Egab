package br.com.egab.negocio.impl;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import br.com.egab.model.Usuario;
import br.com.egab.negocio.UsuarioNegocio;
import br.com.egab.persistence.UsuarioPersistencia;

@Stateless
public class UsuarioNegocioImpl implements UsuarioNegocio{
	
	@Inject
	UsuarioPersistencia usuarioPersistencia;	
	
	@Override
	public List<Usuario> listarUsuarios(){		
		return usuarioPersistencia.listarUsuarios();
	}
	
	@Override
	public Usuario buscarPorId(Long id){		
		return usuarioPersistencia.getEntityManager().find(Usuario.class, id);
	}
	
	@Override
	public void excluir(Long id){		
		usuarioPersistencia.getEntityManager().remove(buscarPorId(id));
	}
	
	@Override
	public Usuario salvar(Usuario usuario){		
		return usuarioPersistencia.getEntityManager().merge(usuario);
	}
}
