package com.amaz.apiAmaz.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.amaz.apiAmaz.model.Produto;

public interface ProdutoRepository extends CrudRepository<Produto, Integer>{

	List<Produto> findAllByTituloContainingIgnoreCase (String titulo);
	

}
