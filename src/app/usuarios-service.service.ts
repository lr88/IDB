import { Injectable } from '@angular/core';
import { usuarioLogueado } from './dominio/Usuarios';

//  modificado

@Injectable()
export class UsuariosServiceService {
  
  constructor() {
  }

  login(unNombreDeUsuario : string, unaContrasena:string) {
    usuarioLogueado.nombreDeUsuario = unNombreDeUsuario
    usuarioLogueado.contrasena = unaContrasena
    return  usuarioLogueado
  }

  isLogged() {
    if (usuarioLogueado.nombreDeUsuario == undefined) {
      return false;
    } else {
      return true;
    }
  }

  deslogear(){
    usuarioLogueado.nombreDeUsuario = ""
    usuarioLogueado.contrasena = ""
  }

}

