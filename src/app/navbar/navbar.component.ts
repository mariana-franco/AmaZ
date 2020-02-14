import { Produto } from './../model/produto';
import { ConsultaProdutosService } from './../service/consulta-produtos.service';
import { Component, OnInit } from '@angular/core';
import { ConsultaUsuarioService } from '../service/consulta-usuario.service';
import { Globals } from '../model/Globals';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Token } from '../model/token';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Globals]

})
export class NavbarComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", 1);
  produto: Produto = new Produto(0, "", "", "", null, null, 1, null);

  tituloNav: string;

  emailOk: boolean = false;
  filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  num: any = /^[0-9]+$/;
  _msgErroN: string = null;
  _msgErroE: string = null;
  _msgErroT: string = null;

  constructor(private router: Router, private ConsultaUsuarioService: ConsultaUsuarioService, private ConsultaProdutosService: ConsultaProdutosService) { }

  log: boolean; // recebe o valor do log do login service,  sendo utilizado pelo button do menu component

  ngOnInit() {
    if (localStorage.getItem("login")) {
      this.router.navigate(['/admin']);
    }
    if (localStorage.getItem("token")) {
      this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        Globals.USUARIO = usuario;
      });
    } else {
      console.log("Você não está logado!!")
    }
  }


  validarEmail() {
    if (this.usuario.email.indexOf("@") == -1 || this.usuario.email.indexOf(".") == -1) {
      this._msgErroE = "Email inválido!";
      this.emailOk = false;
    }
    else {
      this._msgErroE = "";
      this.emailOk = true;
    }
  }

  enviar() {
    localStorage.clear();

    if (this.emailOk != true) {
      alert("Favor preencher todos os campos corretamente!");
    } else {
      this.ConsultaUsuarioService.consulta(this.usuario).subscribe((res: Token) => {
        localStorage.setItem("token", res.token);
        this.validar();
      }, err => {
        console.log(`Erro cod: ${err.status}`);
        alert("Usuário ou senha incorreta!");
        this.router.navigate(['/login']);
      });
    }
  }

  validar() {
    this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      Globals.USUARIO = usuario;
      localStorage.setItem("login", "click");
      window.location.reload();
    });
  }

  capturar() {
    if (this.router.isActive('/produtos', true)) {
      localStorage.setItem("busca",  this.tituloNav);
      window.location.reload();
    } else {
      Globals.titulo = this.tituloNav;
      this.router.navigate(['/produtos']);
    }
  }

  logout() {
    this.usuario.id = 0;
    this.usuario.email = "";
    this.usuario.nome = "";
    this.usuario.senha = "";
    this.usuario.telefone = "";
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
