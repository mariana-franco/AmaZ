package com.amaz.apiAmaz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amaz.apiAmaz.model.Venda;
import com.amaz.apiAmaz.repository.VendaRepository;
import com.amaz.apiAmaz.service.VendaService;

@Service
public class VendaServiceImpl implements VendaService {

	@Autowired
	private VendaRepository vendaRepository;
	
	@Override
	public List<Venda> getAll() {
		return (List<Venda>) this.vendaRepository.findAll();
	}

	@Override
	public Venda getById(int id) {
		return this.vendaRepository.findById(id).orElse(null);
	}

	@Override
	public List<Venda> getAllByDataVenda(String dataVenda) {
		return (List<Venda>) this.vendaRepository.findAllByDataVenda(dataVenda);
	}

}
