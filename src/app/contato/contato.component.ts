import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

   nome: string = "";
   nomeOk: boolean;
   email: string = "";
   emailOk: boolean;
   tel: string = "";
   telOk: boolean;
   msg: any = "";
   msgOk: boolean;
   filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
   num: any = /^[0-9]+$/;
   _msgErroN: string = null;
   _msgErroM: string = null;
   _msgErroE: string = null;
   _msgErroT: string = null;

  constructor() { }

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
    }

  }

  validarMsg() {
    if (this.filtro.test(this.msg) || this.num.test(this.msg)) {
      this._msgErroM = "";
      this.msgOk = true;
    } else if (this.msg == "") {
      this._msgErroM = "Favor preencher este campo!";
      this.msgOk = false;
    }
  }

  enviar() {
    if (this.nomeOk == true && this.emailOk == true && this.telOk == true && this.msgOk == true) {
      alert("Dados enviados com sucesso!");
      this.nome = "";
      this.email = "";
      this.tel = "";
      this.msg = "";
      this.nomeOk = false;
      this.emailOk = false;
      this.telOk = false;
      this.msgOk = false;
    } else {
      alert("Favor preencher todos os campos corretamente!");
    }

  }
}