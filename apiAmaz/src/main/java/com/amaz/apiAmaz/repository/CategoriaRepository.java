package com.amaz.apiAmaz.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.amaz.apiAmaz.model.Categoria;

public interface CategoriaRepository extends CrudRepository<Categoria, Integer> {
	
	List<Categoria> findAllByCategoria (String categoria);

}
