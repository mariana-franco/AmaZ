package com.amaz.apiAmaz.service;

import java.util.List;

import com.amaz.apiAmaz.model.Venda;

public interface VendaService {
	
	List<Venda> getAll();

	Venda getById(int id);
	
	List<Venda> getAllByDataVenda (String dataVenda);

}
