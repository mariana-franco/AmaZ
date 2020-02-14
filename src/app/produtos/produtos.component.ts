import { ConsultaUsuarioService } from './../service/consulta-usuario.service';
import { ConsultaProdutosService } from './../service/consulta-produtos.service';
import { Produto } from '../model/produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/usuario';
import { ok } from 'assert';
import { timer } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [Globals]
})

export class ProdutosComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", 1);

  id: number;
  titulo: string;
  tituloProd: string;
  tituloNav: string;
  descricao: string;
  linkFoto: string;
  preco: number;
  qtdEstoque: number;
  produto: Produto = new Produto(0, "", "", "", null, null, 1, null);
  produtos: Array<Produto> = new Array<Produto>();
  showId: boolean;
  showAll: boolean;
  produtoNao: boolean;
  ativarAlterar: boolean;

  constructor(public ConsultaProdutosService: ConsultaProdutosService, public router: Router, public ConsultaUsuarioService: ConsultaUsuarioService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (Globals.titulo) {
      this.ConsultaProdutosService.busca(Globals.titulo).subscribe((produtosOut: Produto[]) => {
        this.produtos = produtosOut;
      });
      if (this.produtos.length == 0) {
        this.showAll = true;
        this.showId = false;
        this.produtoNao = false;
      } else {
        this.showAll = false;
        this.showId = false;
        this.produtoNao = true;
      }
      Globals.titulo = "";
    } else if (localStorage.getItem("busca")) {
      this.tituloNav = localStorage.getItem("busca");

      this.ConsultaProdutosService.busca(this.tituloNav).subscribe((produtosOut: Produto[]) => {
        this.produtos = produtosOut;
      });
      if (this.produtos.length == 0) {
        this.showAll = true;
        this.showId = false;
        this.produtoNao = false;
      } else {
        this.showAll = false;
        this.showId = false;
        this.produtoNao = true;
      }
      Globals.titulo = "";
      localStorage.setItem("busca", "");
    } else if (Globals.id) {
      this.ConsultaProdutosService.getById(Globals.id).subscribe((produtoOut: Produto) => {
        this.produto = produtoOut;
        this.showAll = false;
        this.showId = true;
        this.produtoNao = false;
        Globals.id = null;
      });
    } else {
      this.findAllProduto();
    }

    if (localStorage.getItem("token")) {
      this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        Globals.USUARIO = usuario;
      });
    } else {
      this.usuario.id = 0;
      this.usuario.email = "";
      this.usuario.nome = "";
      this.usuario.senha = "";
      this.usuario.telefone = "";
    }
  }

  buscar() {
    if (this.tituloProd != null) {
      this.ConsultaProdutosService.busca(this.tituloProd).subscribe((produtosOut: Produto[]) => {
        this.produtos = produtosOut;
      });
      if (this.produtos.length == 0) {
        this.showAll = true;
        this.showId = false;
        this.produtoNao = false;
      } else {
        this.showAll = false;
        this.showId = false;
        this.produtoNao = true;
      }
    }
  }


  mostrar(produto: Produto) {
    this.id = produto.id;
    this.findIdProduto();
  }


  insert() {
    this.ConsultaProdutosService.insert(this.produto).subscribe((produtoOut: Produto) => {
      this.produto = produtoOut;
    }, err => {
      this.produtoNao = false;
    });
  }

  ativarUpdateProduto() {
    this.ativarAlterar = true;
  }

  findAllProduto() {
    this.ConsultaProdutosService.getAll().subscribe((produtosOut: Produto[]) => {
      this.produtos = produtosOut;
      this.showAll = true;
      this.showId = false;
      this.produtoNao = false;
    });
  }

  findIdProduto() {
    this.ConsultaProdutosService.getById(this.id).subscribe((produtoOut: Produto) => {
      if (this.id <= 0) {
        this.showAll = false;
        this.showId = false;
        this.produtoNao = true;
      } else {
        this.produto = produtoOut;
        this.showAll = false;
        this.showId = true;
        this.produtoNao = false;
        window.scrollTo(0, 0);
      }
    });
  }

}

