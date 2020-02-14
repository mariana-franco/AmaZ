import { Categoria } from './categoria';
export class Produto {
    constructor(
    public id : number,
    public titulo: string,
    public descricao: string,
    public linkFoto: string,
    public preco: number,
    public qtdEstoque: number,
    public visivel: number,
    public categoria: Categoria){}
}