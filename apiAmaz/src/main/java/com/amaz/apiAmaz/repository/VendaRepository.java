package com.amaz.apiAmaz.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.amaz.apiAmaz.model.Venda;

public interface VendaRepository extends CrudRepository<Venda, Integer> {
	
	List<Venda> findAllByDataVenda (String dataVenda);

}
