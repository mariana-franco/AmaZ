package com.amaz.apiAmaz.service;

import java.util.List;

import com.amaz.apiAmaz.model.Produto;

public interface ProdutoService {
	
	Produto insertOrUpdate (Produto entity);
	
	List<Produto> getAll();

	Produto getById(int id);
	
	List<Produto> getAllByTitulo (String titulo);
	

}
