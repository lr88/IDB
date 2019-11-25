import { Component, OnInit } from '@angular/core';
import { Usuario, getUsuarioLogueado, USERS } from 'src/app/dominio/Usuarios';
import { NgForm } from '@angular/forms';
import { UsuariosServiceService } from 'src/app/usuarios-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  mensaje = null;
  public isError = false;
  
  NombreDelModulo = 'PerfilComponent';
  usuario: Usuario = new Usuario()
  usuario2: Usuario = new Usuario()
  contrasenaAux : string = ""

  
  constructor(private router: Router,private usuariosServiceService: UsuariosServiceService) { 
    this.usuario = getUsuarioLogueado()
  }

  ngOnInit() {
    // if(!this.usuariosServiceService.isLogged()){
    //   this.usuariosServiceService.deslogear()
    //   this.router.navigate(['login'])
    // }
  }

  onLogin(form: NgForm) {
    try {
      this.mensaje = '';
      this.update(form);
    } catch (errorValidation) {
      this.onIsError(errorValidation);
    }
  }

  update(form: NgForm) {
    if (form.valid && this.datosDelformulario()) {
      this.usuariosServiceService.update(this.encontrarUsuario(),this.usuario2);
      this.router.navigate(['home']);
      this.isError = false;
  }}

  datosDelformulario() {
    var asd = true
    if(this.usuario2.nombreDeUsuario === undefined || this.usuario2.nombreDeUsuario === ""){
      console.log("Nombre de Usuario invalido")
      this.onIsError('Nombre de Usuario invalido');
      asd = false
    }
    if (this.contrasenaAux === undefined || this.contrasenaAux === "") {
      console.log("Contraseña Invalida")
      this.onIsError('Contraseña Invalida');
      asd = false
    }
    if (this.usuario2.contrasena === undefined  || this.usuario2.contrasena === "") {
      console.log("Reingreso de contraseña invalida")
      this.onIsError('Reingreso de contraseña invalida');
      asd = false
    }
    if (this.usuario2.contrasena !== this.contrasenaAux) {
      console.log("Las Contraseñas son distintas")
      this.onIsError('Las Contraseñas son distintas');
      asd = false
    }
    return asd;
}

  encontrarUsuario() {
    const aux = USERS.find(usuario =>
      usuario.nombreDeUsuario === this.usuario.nombreDeUsuario &&
      usuario.contrasena === this.usuario.contrasena
      );
    return aux;
  }

  onIsError(unMensaje: string): void {
    this.mensaje = unMensaje;
    setTimeout(() => {
      this.mensaje = '';
    }, 4000);
  }
}
