package com.amaz.apiAmaz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.amaz.apiAmaz.model.Pedido;
import com.amaz.apiAmaz.service.PedidoService;

@RestController
@CrossOrigin("*")
public class PedidoController {
	
	@Autowired
	private PedidoService pedidoService;
	
	@GetMapping("/pedido")
	public ResponseEntity<List<Pedido>> getAll() {
		return ResponseEntity.ok(this.pedidoService.getAll());
	}
	
	@GetMapping("/pedido/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Pedido> getById(@PathVariable int id) {
		Pedido pedido = this.pedidoService.getById(id);

		if (pedido == null) {
			new ResponseStatusException(HttpStatus.NOT_FOUND, "Pedido não encontrado!");
		}
		return ResponseEntity.ok(pedido);
	}

}
