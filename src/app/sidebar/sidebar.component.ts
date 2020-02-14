import { Component, OnInit } from '@angular/core';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { ConsultaUsuarioService } from '../service/consulta-usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [Globals]
})
export class SidebarComponent implements OnInit {


  usuario: Usuario = new Usuario(0, "", "", "", "", 1);
  alterar: boolean = false;
  email: string;
  telefone: string;

  constructor(private router: Router, private ConsultaUsuarioService: ConsultaUsuarioService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("token")) {
      this.ConsultaUsuarioService.valida(localStorage.getItem("token")).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        Globals.USUARIO = usuario;
        this.telefone = usuario.telefone;
        this.email = usuario.email;
        localStorage.setItem("login", "");
      });
    } else {
      this.router.navigate(['login']);
    }
  }

  alterarDados() {
    this.alterar = true;
    this.ConsultaUsuarioService.getById(this.usuario.id).subscribe((usuarioPorId: Usuario) => {
      this.usuario = usuarioPorId;
    });
  }


  alterarOk() {
    this.usuario.telefone = this.telefone;
    this.usuario.email = this.email;

    this.ConsultaUsuarioService.update(this.usuario).subscribe((usuarioOut: Usuario) => {
      alert("Usuário Atualizado com Sucesso!");
      alert("É necessário fazer o login novamente");
        this.usuario.id = 0;
        this.usuario.email = "";
        this.usuario.nome = "";
        this.usuario.senha = "";
        this.usuario.telefone = "";
        localStorage.clear();
        window.location.reload();
    }, err => {
      alert("Erro ao atualizar!");
    });
  }
}
