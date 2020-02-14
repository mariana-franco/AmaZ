import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaProdutosService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get("http://93.188.162.193:8080/produto");
  }
  
  getById(id:number){
    return this.http.get(`http://93.188.162.193:8080/produto/${id}`);
  }

   insert(produto:Produto){
    return this.http.post(`http://93.188.162.193:8080/produto`, produto);
  }

  update(produto:Produto){
     return this.http.put(`http://93.188.162.193:8080/produto`, produto);
   }

   delete(id:number){
    return this.http.put(`http://93.188.162.193:8080/produto/delete/${id}`, null);
   }

   busca(titulo: string){
     return this.http.get(`http://93.188.162.193:8080/produto/todos/${titulo}`);
   }
   
   getAllCategoria(){
    return this.http.get(`http://93.188.162.193:8080/categoria`);
   }

   getIdCategoria(id:number){
    return this.http.get(`http://93.188.162.193:8080/categoria/${id}`);
   }

   getAllVendas(){
    return this.http.get(`http://93.188.162.193:8080/venda`);
   }

}
