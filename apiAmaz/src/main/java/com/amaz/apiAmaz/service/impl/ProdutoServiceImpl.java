package com.amaz.apiAmaz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amaz.apiAmaz.model.Produto;
import com.amaz.apiAmaz.repository.ProdutoRepository;
import com.amaz.apiAmaz.service.ProdutoService;

@Service
public class ProdutoServiceImpl implements ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Override
	public Produto insertOrUpdate(Produto entity) {
		Produto produtoSalvo = this.produtoRepository.save(entity);
		return produtoSalvo;
	}

	@Override
	public List<Produto> getAll() {
		return (List<Produto>) this.produtoRepository.findAll();
	}

	@Override
	public Produto getById(int id) {
		return this.produtoRepository.findById(id).orElse(null);
	}

	
	@Override
	public List<Produto> getAllByTitulo(String titulo) {
		return (List<Produto>) this.produtoRepository.findAllByTituloContainingIgnoreCase(titulo);
	}


}
