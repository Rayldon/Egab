package br.com.egab.converter;

import br.com.egab.dto.UsuarioDTO;
import br.com.egab.model.Usuario;

public class UsuarioConverter{	
	
	public Usuario converterToModel(UsuarioDTO usuarioDto) {
        Usuario usuario = new Usuario();
        usuario.setNome(usuarioDto.getNome());
        usuario.setSobrenome(usuarioDto.getSobrenome());
        usuario.setEmail(usuarioDto.getEmail());
        usuario.setSenha(usuarioDto.getSenha());
        usuario.setSituacao(usuarioDto.getSituacao());
        //usuario.setusuarioDto.getUf());
        //usuario.put("municipio", usuarioDto.getMunicipio());
        return usuario;
    }

    public UsuarioDTO converterToDto(Usuario usuario) {
        UsuarioDTO usuarioDTO = new UsuarioDTO();
        usuarioDTO.setId(usuario.getSeqUsuario());
        usuarioDTO.setNome(usuario.getNome());
        usuarioDTO.setSobrenome(usuario.getSobrenome());
        usuarioDTO.setEmail(usuario.getEmail());
        usuarioDTO.setSenha(usuario.getSenha());
        usuarioDTO.setSituacao(usuario.getSituacao());
        //usuarioDTO.setUf((String) dbo.get("uf"));
        //usuarioDTO.setMunicipio((String) dbo.get("municipio"));
        return usuarioDTO;
    }
}