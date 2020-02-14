package com.amaz.apiAmaz.service;

import java.util.List;

import com.amaz.apiAmaz.model.Pedido;

public interface PedidoService {
	
	List<Pedido> getAll();

	Pedido getById(int id);

}
