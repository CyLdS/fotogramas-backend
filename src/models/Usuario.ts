import { Foto } from "./Foto"

export class Usuario{
    constructor(
        public nombreUsuario: string,
        public email: string,
        public password: string,
        public fechaRegistro: string,
        public fotoPerfil: string,
        public seguidores: Usuario[],
        public siguiendo: Usuario[],
        public fotosSubidas: Foto[]
    ){}
}