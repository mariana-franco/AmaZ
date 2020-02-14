import { Component, OnInit } from '@angular/core';
import { ConsultaProdutosService } from '../service/consulta-produtos.service';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { ConsultaUsuarioService } from '../service/consulta-usuario.service';
import { Venda } from '../model/venda';

@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-vendas.component.html',
  styleUrls: ['./listar-vendas.component.css']
})
export class ListarVendasComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", 1);
  venda: Venda = new Venda(0, "", this.usuario);

  vendas: Array<Venda> = new Array<Venda>();

  constructor(public ConsultaProdutosService: ConsultaProdutosService, public router: Router, public ConsultaUsuarioService: ConsultaUsuarioService) { }

  ngOnInit() {
    console.clear();
    console.log("  _________ __        ___ ________ ________");
    console.log(" |         |   |_   _|   |        |___    / ");
    console.log(" |   (_)   |     |_|     |  (_)   |  /   /  ");
    console.log(" |    _    |             |   _    | /   /   ");
    console.log(" |     |   |   |    /|   |    |   |/   /___ ");
    console.log(" |__   |___|___|  _/ |___|__  |___|________|");
    console.log("\n        SEJA BEM VINDO A LOJA AMAZ.\n\n");
    window.scrollTo(0, 0);
    if (localStorage.getItem("token")) {
      this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        this.ConsultaProdutosService.getAllVendas().subscribe((vendasOut: Venda[]) => {
          this.vendas = vendasOut;
        });
      });
    } else {
      this.router.navigate(['login']);
    }
  }

}
