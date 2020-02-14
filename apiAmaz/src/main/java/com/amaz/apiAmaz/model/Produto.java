package com.amaz.apiAmaz.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "produto")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(length = 255)
	@Size(max = 255, message = "Numero de caracteres não permitido")
	@NotEmpty(message = "O campo deve ser preenchido")
	private String titulo;
	
	@Column(length = 5119)
	@Size(max = 5119, message = "Numero de caracteres não permitido")
	@NotEmpty(message = "O campo deve ser preenchido")
	private String descricao;
	
	@Column(length = 1024)
	@Size(max = 1024, message = "Numero de caracteres não permitido")
	@NotEmpty(message = "O campo deve ser preenchido")
	private String linkFoto;
	
	private float preco;
	private int qtdEstoque;
	
	@ManyToOne
	@JsonIgnoreProperties("produto")
	private Categoria categoria;

	private int visivel;
	
	public int getVisivel() {
		return visivel;
	}

	public void setVisivel(int visivel) {
		this.visivel = visivel;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getLinkFoto() {
		return linkFoto;
	}

	public void setLinkFoto(String linkFoto) {
		this.linkFoto = linkFoto;
	}

	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	public int getQtdEstoque() {
		return qtdEstoque;
	}

	public void setQtdEstoque(int qtdEstoque) {
		this.qtdEstoque = qtdEstoque;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	
}
