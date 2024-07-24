import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/models/Usuario';

@Injectable()
export class UsuariosService {


    private usuarios: Usuario[] = [];

    // Registrar un nuevo usuario
    crearUsuario(user: Usuario): void {  
        this.usuarios.push(user);
    }

    // Obtener un usuario según su nombreUsuario
    obtenerUsuarioPorNombre(nombre: string): Usuario{
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].nombreUsuario == nombre) {
                return this.usuarios[i];
            }
        }
        return null;
    }

    // Obtener todos los usuarios
    obtenerUsuararios():Usuario[]{
        return this.usuarios;
    }

    // Eliminar un usuario según su nombreUsuario
    eliminarUsuario(nombre:string):void{
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].nombreUsuario == nombre) {
                this.usuarios.splice(i, 1);

            }
        }
    }

      // Editar foto de perfil 
    editarFotoPerfil(foto: string):void{
    }
       
}
