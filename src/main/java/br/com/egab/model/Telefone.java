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
@Table(name = "Telefone")
public class Telefone implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5976286634300538319L;
	
	@Id
	@Column(name="SEQ_TELEFONE")
	@SequenceGenerator(name = "SEQ_TELEFONE", sequenceName = "SEQ_TELEFONE", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TELEFONE")
	private Long seqTelefone;
	
	@Column(name = "DDD")
	private Integer ddd;
	
	@Column(name = "TELEFONE")
	private Long telefone;

	public Long getSeqTelefone() {
		return seqTelefone;
	}

	public void setSeqTelefone(Long seqTelefone) {
		this.seqTelefone = seqTelefone;
	}

	public Integer getDdd() {
		return ddd;
	}

	public void setDdd(Integer ddd) {
		this.ddd = ddd;
	}

	public Long getTelefone() {
		return telefone;
	}

	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}
}
