import { Usuario } from 'src/app/model/usuario';
import { ConsultaUsuarioService } from './../service/consulta-usuario.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../model/Globals';
import { Token } from '../model/token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Globals]
})

export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario(0,"","","","",0);

  emailOk: boolean = false;
   filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
   num: any = /^[0-9]+$/;
   _msgErroN: string = null;
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
    
    if (localStorage.getItem("token")) {
      this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        Globals.USUARIO = usuario;
      });
      this.router.navigate(['admin']);
    } else {
      console.log("Aguardando Login!")
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
        this.router.navigate(['']);
      });
    }
  }

  validar() {
    this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      Globals.USUARIO = usuario;
      this.router.navigate(['admin']);
      location.reload();
    });
  }

}