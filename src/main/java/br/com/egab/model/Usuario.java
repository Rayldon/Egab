package br.com.egab.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Usuario")
public class Usuario implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3291572230172564437L;

	@Id
	@Column(name="SEQ_USUARIO")
	@SequenceGenerator(name = "SEQ_USUARIO", sequenceName = "SEQ_USUARIO", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_USUARIO")
	private Long seqUsuario;
	
	@Column(name = "Nome", nullable = false)
	private String nome;
	
	@Column(name = "Sobrenome", nullable = false)
	private String sobrenome;
	
	@Column(name = "Situacao", nullable = false)
	private Boolean situacao;
	
	@Column(name = "Email", nullable = false)
	private String email;
	
	@Column(name = "Senha", nullable = false)
	private String senha;
	
	public Long getSeqUsuario() {
		return this.seqUsuario;
	}
	
	public void setId(Long seqUsuario) {
		this.seqUsuario = seqUsuario;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public Boolean getSituacao() {
		return situacao;
	}

	public void setSituacao(Boolean situacao) {
		this.situacao = situacao;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}
