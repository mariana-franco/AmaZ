import { Categoria } from './../model/categoria';
import { ConsultaUsuarioService } from './../service/consulta-usuario.service';
import { ConsultaProdutosService } from './../service/consulta-produtos.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.css']
})
export class InserirProdutoComponent implements OnInit {
  
  categoria: Categoria = new Categoria(0, "", "");

  usuario: Usuario = new Usuario(0, "", "", "", "", 1);

  produto: Produto = new Produto(0, "", "", "", null, null, 1, this.categoria);


  produtos: Array<Produto> = new Array<Produto>();
  categorias: Array<Categoria> = new Array<Categoria>();
  idProduto: number;
  idCat: number;

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
        Globals.USUARIO = usuario;
        this.ConsultaProdutosService.getAll().subscribe((produtosOut: Produto[]) => {
          this.produtos = produtosOut;
        });
          this.ConsultaProdutosService.getAllCategoria().subscribe((categoriasOut: Categoria[]) => {
            this.categorias = categoriasOut;
          });
        });
    } else {
      this.router.navigate(['login']);
    }
  }


  insert() {
    this.produto.categoria.id = this.categoria.id;
    this.ConsultaProdutosService.insert(this.produto).subscribe((produtoOut: Produto) => {
      this.produto = produtoOut;
      alert("Produto inserido com sucesso!")
      this.router.navigate(['/produtos']);
      location.reload();
    });
  }

  getAllCategoria() {
    this.ConsultaProdutosService.getAllCategoria().subscribe((categoriasOut: Categoria[]) => {
      this.categorias = categoriasOut;
    })
  }

  getIdCategoria() {
    this.ConsultaProdutosService.getIdCategoria(this.idCat).subscribe((categoriaOut: Categoria) => {
      this.categoria = categoriaOut;
    });
  }

}
