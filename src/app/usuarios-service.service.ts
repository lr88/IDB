import { Injectable } from '@angular/core';
import {Usuario, setUsuarioLogueado, getUsuarioLogueado }  from './dominio/Usuarios';

@Injectable()
export class UsuariosServiceService {

  constructor() {
  }

  login(unUsuario : Usuario) {
    setUsuarioLogueado(unUsuario)
  }

  update(usuarioViejo : Usuario, usuarioNuevo : Usuario) {
    usuarioViejo.nombreDeUsuario = usuarioNuevo.nombreDeUsuario 
    usuarioViejo.contrasena = usuarioNuevo.contrasena 
  
  }


  isLogged() {
    if (getUsuarioLogueado().nombreDeUsuario == undefined) {
      return false;
    } else {
      return true;
    }
  }

  deslogear(){
    var aux : Usuario = new Usuario()
    aux.nombreDeUsuario = ""
    aux.contrasena=""
    setUsuarioLogueado(aux)
    
  }

}

