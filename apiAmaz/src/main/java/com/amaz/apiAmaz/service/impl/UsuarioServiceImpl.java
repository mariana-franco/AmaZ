package com.amaz.apiAmaz.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amaz.apiAmaz.model.Usuario;
import com.amaz.apiAmaz.repository.UsuarioRepository;
import com.amaz.apiAmaz.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	public Usuario insertOrUpdate(Usuario entity) {
		Usuario usuarioSalvo = this.usuarioRepository.save(entity);
		return usuarioSalvo;
	}

	@Override
	public void delete(int id) {
		usuarioRepository.deleteById(id);
		
	}

	@Override
	public List<Usuario> getAll() {
		return (List<Usuario>) this.usuarioRepository.findAll();
	}

	@Override
	public Usuario getById(int id) {
		return this.usuarioRepository.findById(id).orElse(null);
	}

	@Override
	public List<Usuario> getAllByNome(String nome) {
		return (List<Usuario>) this.usuarioRepository.findAllByNome(nome);
	}

	@Override
	public Usuario getUsuarioByNome(String nome) {
		return this.usuarioRepository.findUsuarioByNome(nome);
	}

	@Override
	public Optional<Usuario> getByEmailAndSenha(String email, String senha) {
		return this.usuarioRepository.findByEmailAndSenha(email, senha);
	}
	


}
