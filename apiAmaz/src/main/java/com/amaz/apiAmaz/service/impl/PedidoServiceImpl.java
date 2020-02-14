package com.amaz.apiAmaz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amaz.apiAmaz.model.Pedido;
import com.amaz.apiAmaz.repository.PedidoRepository;
import com.amaz.apiAmaz.service.PedidoService;

@Service
public class PedidoServiceImpl implements PedidoService{

	@Autowired
	private PedidoRepository pedidoRepository;

	@Override
	public List<Pedido> getAll() {
		return (List<Pedido>) this.pedidoRepository.findAll() ;
	}

	@Override
	public Pedido getById(int id) {
		return this.pedidoRepository.findById(id).orElse(null);
	}

}
