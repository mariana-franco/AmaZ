package com.amaz.apiAmaz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amaz.apiAmaz.model.Categoria;
import com.amaz.apiAmaz.repository.CategoriaRepository;
import com.amaz.apiAmaz.service.CategoriaService;

@Service
public class CategoriaServiceImpl implements CategoriaService {

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Override
	public Categoria insertOrUpdate(Categoria entity) {
		Categoria categoriaSalva = this.categoriaRepository.save(entity);
		return categoriaSalva;
	}

	@Override
	public void delete(int id) {
		categoriaRepository.deleteById(id);
	}

	@Override
	public List<Categoria> getAll() {
		return (List<Categoria>) this.categoriaRepository.findAll();
	}

	@Override
	public Categoria getById(int id) {
		return this.categoriaRepository.findById(id).orElse(null);
	}

	@Override
	public List<Categoria> getAllByCategoria(String categoria) {
		return (List<Categoria>) this.categoriaRepository.findAllByCategoria(categoria);
	}

}
