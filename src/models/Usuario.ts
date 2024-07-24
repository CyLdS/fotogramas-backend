import { Foto } from "./Foto"

export class Usuario{
    constructor(
        private nombreUsuario: string,
        private email: string,
        private password: string,
        private fechaRegistro: string,
        private fotoPerfil: string,
        private seguidores: Usuario[],
        private siguiendo: Usuario[],
        private fotosSubidas: Foto[]
    ){}
}