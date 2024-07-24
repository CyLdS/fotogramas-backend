import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from 'src/models/Usuario';

@Controller('usuarios')
export class UsuariosController {



constructor(private readonly servicio:UsuariosService){}

// Registrar un nuevo usuario
@Post()
crearUsuario( @Body() user:Usuario ):void{
  this.servicio.crearUsuario;
  
}

// Obtener un usuario según su nombreUsuario
 @Get(':nombreUsuario')
 obtenerUsuarioPorNombre( @Param('nombreUsuario') nombre:string ): Usuario{
     return this.servicio.obtenerUsuarioPorNombre(nombre);
 }

   // Obtener todos los usuarios
   @Get()
   obtenerUsuarios():Usuario[] {
       return this.servicio.obtenerUsuararios();
   }

  // Eliminar un usuario según su nombreUsuario
  @Delete(':nombreUsuario')
  eliminarUsuario(@Param('nombreUsuario') nombre: string):void{
      this.servicio.eliminarUsuario(nombre);
  }


  // Editar foto de perfil 
  @Put(':fotoPerfil')
  editarFotoPerfil(@Param(':fotoPerfil') foto: string):void{
    
  }
  // Seguir a un usuario
  


}