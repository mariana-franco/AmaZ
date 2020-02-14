import { Token } from './../model/token';
import { Usuario } from 'src/app/model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaUsuarioService {


  constructor(private http:HttpClient) { }

  getById(id: number){
    return this.http.get(`http://93.188.162.193:8080/usuario/${id}`);
  }

  insert(usuario: Usuario){
    return this.http.post(`http://93.188.162.193:8080/usuario`, usuario);
  }

  update(usuario: Usuario){
    return this.http.put(`http://93.188.162.193:8080/usuario`, usuario);
  }

  consulta(usuario: Usuario){
    return this.http.post(`http://93.188.162.193:8080/usuario/login`, usuario);
  }

  valida(token: String){
    return this.http.get(`http://93.188.162.193:8080/usuario/logado/${token}`);
  }

}
