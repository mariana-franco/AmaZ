package com.amaz.apiAmaz.controller;

import java.util.Optional;

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

import com.amaz.apiAmaz.model.Usuario;
import com.amaz.apiAmaz.model.security.Auth;
import com.amaz.apiAmaz.model.security.Token;
import com.amaz.apiAmaz.service.UsuarioService;

@RestController
@CrossOrigin("*")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;

	@PostMapping("/usuario")
	public ResponseEntity<Usuario> post(@RequestBody Usuario entity) {
		try {
			Usuario usuarioSalvo = this.usuarioService.insertOrUpdate(entity);
			usuarioSalvo.setAtivo(1);
			return ResponseEntity.ok(usuarioSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@PutMapping("/usuario")
	public ResponseEntity<Usuario> put(@RequestBody Usuario entity) {
		try {
			Usuario usuarioSalvo = this.usuarioService.insertOrUpdate(entity);
			usuarioSalvo.setAtivo(1);
			return ResponseEntity.ok(usuarioSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}


	@GetMapping("/usuario/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Usuario> getById(@PathVariable int id) {
		Usuario usuario = this.usuarioService.getById(id);

		if (usuario == null) {
			new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado!");
		}
		return ResponseEntity.ok(usuario);
	}

	
	@PostMapping("/usuario/login")
    public ResponseEntity<Token> loginUser(@RequestBody Usuario usuario){
		Optional<Usuario> usuarioExistente = this.usuarioService.getByEmailAndSenha(usuario.getEmail(),
				usuario.getSenha());
		
		if (!usuarioExistente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não encontrado!");
		} else {
			Token token = Auth.generateToken(usuarioExistente.get());
			return ResponseEntity.ok(token);
		}
    }
	
	
	@GetMapping("/usuario/logado/{token}")
	public ResponseEntity<Usuario> loginValid(@PathVariable String token){
		if(Auth.isValid(token)) {
			Usuario usuario = Auth.extractUser(token);
			return ResponseEntity.ok(usuario);
		}
		return ResponseEntity.notFound().build();
	}
	

	@PostMapping("/usuario/valido")
	@ResponseStatus(HttpStatus.OK)
	public Usuario getByEmailAndSenha(@RequestBody Usuario usuario) {
		Optional<Usuario> usuarioExistente = this.usuarioService.getByEmailAndSenha(usuario.getEmail(), usuario.getSenha());
		
		if (!usuarioExistente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não encontrado!");
		}
		return usuarioExistente.get();
	}

}
