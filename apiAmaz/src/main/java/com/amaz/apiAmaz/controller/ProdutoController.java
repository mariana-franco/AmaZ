package com.amaz.apiAmaz.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.amaz.apiAmaz.model.Produto;
import com.amaz.apiAmaz.service.ProdutoService;

@RestController
@CrossOrigin("*")
public class ProdutoController {

	@Autowired
	private ProdutoService produtoService;

	@PostMapping("/produto")
	public ResponseEntity<Produto> post(@RequestBody Produto entity) {
		try {
			Produto produtoSalvo = this.produtoService.insertOrUpdate(entity);
			produtoSalvo.setVisivel(1);
			return ResponseEntity.ok(produtoSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@PutMapping("/produto")
	public ResponseEntity<Produto> put(@RequestBody Produto entity) {
		try {
			Produto produtoSalvo = this.produtoService.insertOrUpdate(entity);
			produtoSalvo.setVisivel(1);
			return ResponseEntity.ok(produtoSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@PutMapping("/produto/delete/{id}")
	public ResponseEntity<Produto> desativarProduto(@PathVariable int id) {
		Produto produtoExist = this.produtoService.getById(id);
		produtoExist.setVisivel(0);
		return ResponseEntity.ok(this.produtoService.insertOrUpdate(produtoExist));
	}

	@GetMapping("/produto")
	public ResponseEntity<List<Produto>> getAll() {

		List<Produto> produtos = new ArrayList<Produto>();

		for (Produto produto : this.produtoService.getAll()) {
			if (produto.getVisivel() == 1 )
				produtos.add(produto);
			}

		return ResponseEntity.ok(produtos);
	}

	@GetMapping("/produto/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Produto> getById(@PathVariable int id) {
		Produto produto = this.produtoService.getById(id);

		if (produto == null) {
			new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrada!");
		}
		return ResponseEntity.ok(produto);
	}

	@GetMapping("/produto/todos/{titulo}")
	public ResponseEntity<List<Produto>> getAllByTitulo(@PathVariable String titulo) {
		return ResponseEntity.ok(this.produtoService.getAllByTitulo(titulo));
	}

}
