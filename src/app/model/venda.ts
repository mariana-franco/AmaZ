import { Usuario } from './usuario';

export class Venda {
    constructor(
    public id : number,
    public dataVenda: string,
    public usuario: Usuario){}
}