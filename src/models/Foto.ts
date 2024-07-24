import { Comentario } from "./Comentario"
import { Usuario } from "./Usuario"

export class Foto{
    constructor(
    private id: number,
    private ruta: string,
    private descripcion: string,
    private hashtags: string[],
    private fechaSubida: string,
    private usuario: Usuario,
    private meGusta: Usuario[],
    private comentarios: Comentario[]
    ){}
}