package com.amaz.apiAmaz.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.amaz.apiAmaz.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
	
	List<Usuario> findAllByNome (String nome);
	Usuario findUsuarioByNome (String nome);
	
	Optional<Usuario> findByEmailAndSenha (String email, String senha);
	
	
}
