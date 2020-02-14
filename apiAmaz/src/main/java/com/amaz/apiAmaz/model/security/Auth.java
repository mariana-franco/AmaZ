package com.amaz.apiAmaz.model.security;

import javax.xml.bind.DatatypeConverter;

import com.amaz.apiAmaz.model.Usuario;

public class Auth {
	
	private static final String PREFIXO="*Am@Z";
	public static Token generateToken(Usuario usuario) {
		Token token = new Token();
		String str = PREFIXO+"|"+usuario.getId()+"|"+usuario.getEmail()+"|"+usuario.getNome()+"|"+usuario.getTelefone();
		System.out.println("Token decode:"+str);
		String strToken = DatatypeConverter.printHexBinary(str.getBytes());
		System.out.println(strToken);
		token.setToken(strToken);
		token.setId(usuario.getId());
		System.out.println(usuario.getNome());
		token.setNome(usuario.getNome());
		System.out.println(usuario.getEmail());
		token.setEmail(usuario.getEmail());
		System.out.println(usuario.getTelefone());
		token.setTelefone(usuario.getTelefone());
		System.out.println(token);
		return token;
	}
			
	
	public static boolean isValid(String token) {
		String str = new String(DatatypeConverter.parseHexBinary(token));
		System.out.println("Token decode:"+str);
		String parts[] = str.split("\\|");
		System.out.println(parts.length);
		System.out.println(parts[0].equals(PREFIXO));
		return (parts.length == 5 && parts[0].equals(PREFIXO));
	}
	
	public static Usuario extractUser(String token) {
		String str = new String(DatatypeConverter.parseHexBinary(token));
		String parts[] = str.split("\\|");
		Usuario usuario = new Usuario();
		usuario.setId(Integer.parseInt(parts[1]));
		usuario.setEmail(parts[2]);
		usuario.setNome(parts[3]);
		usuario.setTelefone(parts[4]);
		return usuario;
	}
}
	
