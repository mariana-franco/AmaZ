package com.amaz.apiAmaz.service;

import java.util.List;
import java.util.Optional;

import com.amaz.apiAmaz.model.Usuario;


public interface UsuarioService {
	
	Usuario insertOrUpdate(Usuario entity);

	void delete(int id);

	List<Usuario> getAll();

	Usuario getById(int id);

	List<Usuario> getAllByNome (String nome);
	
	Usuario getUsuarioByNome (String nome);
	
	Optional<Usuario> getByEmailAndSenha (String email, String senha);
	

}
