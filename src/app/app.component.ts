import { Component } from '@angular/core';
import { Usuario } from './dominio/Usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IDB';
  usuarioLogueado : Usuario = null
  
  login(unNombreDeUsuario : string, unaContrasena:string) {
    this.usuarioLogueado = new Usuario()
    this.usuarioLogueado.nombreDeUsuario = unNombreDeUsuario
    this.usuarioLogueado.contrasena = unaContrasena
    return  this.usuarioLogueado
  }

  deslogear(){
    this.usuarioLogueado = null
  }

}
