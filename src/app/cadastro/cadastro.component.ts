import { ConsultaUsuarioService } from './../service/consulta-usuario.service';
import { Usuario } from '../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "",1);

   nome: string = "";
   nomeOk: boolean;
   email: string = "";
   emailOk: boolean;
   tel: string = "";
   telOk: boolean;
   senha: any = "";
   senhaOk: boolean;
   csenha: any = "";
   csenhaOk: boolean;
   filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
   num: any = /^[0-9]+$/;
   _msgErroN: string = null;
   _msgErroS: string = null;
   _msgErroSF: string = null;
   _msgErroCS: string = null;
   _msgErroE: string = null;
   _msgErroT: string = null;


  constructor(private router: Router, private ConsultaUsuarioService: ConsultaUsuarioService) { }

  ngOnInit() {
    console.clear();
    console.log( "  _________ __        ___ ________ ________");
    console.log( " |         |   |_   _|   |        |___    / ");
    console.log( " |   (_)   |     |_|     |  (_)   |  /   /  ");
    console.log( " |    _    |             |   _    | /   /   ");
    console.log( " |     |   |   |    /|   |    |   |/   /___ "); 
    console.log( " |__   |___|___|  _/ |___|__  |___|________|");
    console.log( "\n        SEJA BEM VINDO A LOJA AMAZ.\n\n");
    window.scrollTo(0, 0);
    if (localStorage.getItem("token")) {
      this.router.navigate(['admin']);
    } else {
      console.log("Cadastre-se e tenha acesso a página de Administrador");
    }
  }

  validarNome() {

    if (!this.filtro.test(this.nome)) {
      this.nome = "";
      this._msgErroN = "Nome inválido!";
      this.nomeOk = false;
    }
    else {
      this._msgErroN = "";
      this.nomeOk = true;
      this.usuario.nome = this.nome;
    }
  }

  validarEmail() {
    if (this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1) {
      this._msgErroE = "Email inválido!";
      this.emailOk = false;
    }
    else {
      this._msgErroE = "";
      this.emailOk = true;
      this.usuario.email = this.email;
    }
  }

  validarTel() {

    if (!this.num.test(this.tel)) {
      this.tel = "";
      this.telOk = false;
    } else if (this.tel.length < 11) {
      this._msgErroT = "Digite 11 digitos!";
      this.telOk = false;
    } else {
      this._msgErroT = null;
      this.telOk = true;
      this.usuario.telefone = this.tel;
    }

  }

  validarSenha() {
    if (this.senha.length < 10) {
      this._msgErroS = "A";
      this.senhaOk = false;
    } else if (this.senha.indexOf("@") == -1) {
      this._msgErroSF = "Senha fraca";
      this.senhaOk = true;
    } else {
      this._msgErroSF = null;
      this._msgErroS = null;
      this.senhaOk = true;
    }
  }

  validarCsenha() {
    if (this.senha != this.csenha) {
      this._msgErroCS = "Senhas não são iguais!";
      this.csenhaOk = false;
    } else {
      this._msgErroCS = null;
      this.csenhaOk = true;
      this.usuario.senha = this.senha;
    }
  }

  enviar() {
    if (this.nomeOk != true && this.emailOk != true && this.telOk != true && this.senhaOk != true && this.csenhaOk != true) {
      alert("Favor preencher todos os campos corretamente!");
    } else {
      this.ConsultaUsuarioService.insert(this.usuario).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        this.nome = "";
        this.email = "";
        this.tel = "";
        this.senha = "";
        this.csenha = "";
        this._msgErroS = "";
        this.nomeOk = false;
        this.emailOk = false;
        this.telOk = false;
        this.senhaOk = false;
        this.csenhaOk = false;
        alert("Dados enviados com sucesso!");
        this.router.navigate(['login']);
      }, err => {
        this._msgErroE = "Email inválido!";
        alert(`Usuário já cadastrado!`);
      });
    }
  }
}


