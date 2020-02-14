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

import com.amaz.apiAmaz.model.Venda;
import com.amaz.apiAmaz.service.VendaService;

@RestController
@CrossOrigin("*")
public class VendaController {

	@Autowired
	private VendaService vendaService;
	
	@GetMapping("/venda")
	public ResponseEntity<List<Venda>> getAll() {
		return ResponseEntity.ok(this.vendaService.getAll());
	}

	@GetMapping("/venda/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Venda> getById(@PathVariable int id) {
		Venda venda = this.vendaService.getById(id);

		if (venda == null) {
			new ResponseStatusException(HttpStatus.NOT_FOUND, "Venda não encontrada!");
		}
		return ResponseEntity.ok(venda);
	}
	
	@GetMapping("/venda/{dataVenda}")
	public ResponseEntity<List<Venda>> getAllByDataVenda(@PathVariable String dataVenda) {
		return ResponseEntity.ok(this.vendaService.getAllByDataVenda(dataVenda));
	}
	
	
}
