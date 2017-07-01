package br.com.egab.negocio;

import java.util.List;

import javax.ejb.Local;

import br.com.egab.model.Usuario;

@Local
public interface UsuarioNegocio {

	Usuario buscarPorId(Long id);
	
	void excluir(Long id);
	
	List<Usuario> listarUsuarios();
	
	Usuario salvar(Usuario usuario);

}
