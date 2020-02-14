package com.amaz.apiAmaz.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.amaz.apiAmaz.model.Categoria;
import com.amaz.apiAmaz.service.CategoriaService;

@RestController
@CrossOrigin("*")
public class CategoriaController {
	
	@Autowired
	private CategoriaService categoriaService;
	
	@PostMapping("/categoria")
	public ResponseEntity<Categoria> post(@RequestBody Categoria entity) {
		try {
			Categoria categoriaSalva = this.categoriaService.insertOrUpdate(entity);
			return ResponseEntity.ok(categoriaSalva);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@PutMapping("/categoria")
	public ResponseEntity<Categoria> put(@RequestBody Categoria entity) {
		try {
			Categoria categoriaSalva = this.categoriaService.insertOrUpdate(entity);
			return ResponseEntity.ok(categoriaSalva);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@DeleteMapping("/categoria/{id}")
	public ResponseEntity<String> delete(@PathVariable int id) {
		if (this.categoriaService.getById(id) == null) {
			return ResponseEntity.notFound().build();
		}

		try {
			this.categoriaService.delete(id);
			return ResponseEntity.ok("Removido com sucesso.");
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("/categoria")
	public ResponseEntity<List<Categoria>> getAll() {
		return ResponseEntity.ok(this.categoriaService.getAll());
	}
	
	@GetMapping("/categoria/todos/{categoria}")
	public ResponseEntity<List<Categoria>> getAllByCategoria(@PathVariable String categoria) {
		return ResponseEntity.ok(this.categoriaService.getAllByCategoria(categoria));
	}

	@GetMapping("/categoria/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Categoria> getById(@PathVariable int id) {
		Categoria categoria = this.categoriaService.getById(id);

		if (categoria == null) {
			new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada!");
		}
		return ResponseEntity.ok(categoria);
	}

}
