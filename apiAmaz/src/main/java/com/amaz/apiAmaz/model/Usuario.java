package com.amaz.apiAmaz.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(length = 255)
	@Size(max = 255, message = "Numero de caracteres não permitido")
	@NotEmpty(message = "O campo deve ser preenchido")
	private String nome;
	
	@Column(length = 255)
	@Size(max = 255, message = "Numero de caracteres não permitido")
	@NotEmpty(message = "O campo deve ser preenchido")
	private String telefone;
	
	@Column(length = 255)
	@Size(max = 255, message = "Numero de caracteres não permitido")
	@NotEmpty(message = "O campo deve ser preenchido")
	private String email;
	
	@Column(length = 25)
	@Size(max = 25, message = "Numero de caracteres não permitido")
	@NotEmpty(message = "O campo deve ser preenchido")
	private String senha;

	private int ativo;
	

	public int getAtivo() {
		return ativo;
	}

	public void setAtivo(int ativo) {
		this.ativo = ativo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
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
