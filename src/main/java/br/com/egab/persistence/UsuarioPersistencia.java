package br.com.egab.persistence;

import java.util.List;

import javax.ejb.Local;

import br.com.egab.model.Usuario;

@Local
public interface UsuarioPersistencia extends Persistencia<Usuario, Long>{

	List<Usuario> listarUsuarios();

}
