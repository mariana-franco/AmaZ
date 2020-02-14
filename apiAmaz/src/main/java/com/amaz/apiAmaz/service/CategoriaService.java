package com.amaz.apiAmaz.service;

import java.util.List;

import com.amaz.apiAmaz.model.Categoria;


public interface CategoriaService {
	
	Categoria insertOrUpdate(Categoria entity);

	void delete(int id);

	List<Categoria> getAll();

	Categoria getById(int id);
	
	List<Categoria> getAllByCategoria(String categoria);

}
