import { Usuario } from "./Usuario"



export class Comentario{
    constructor(
        private id: number,
        private texto: string,
        private fecha: string,
        private usuario: Usuario
    ){}
}