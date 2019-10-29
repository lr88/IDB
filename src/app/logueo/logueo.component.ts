import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosServiceService } from '../usuarios-service.service';
import { Usuario, USERS, usuarioLogueado } from '../dominio/Usuarios';
import { NgForm } from '@angular/forms';

// modificado

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {
  mensaje = null
  public isError = false
  unUsuario: Usuario = new Usuario()

  constructor(private router: Router, private usuariosServiceService: UsuariosServiceService) { }

  ngOnInit() {
    this.usuariosServiceService.deslogear()
  }

  onLogin(form: NgForm) {
    try {
      this.mensaje = ""
      this.login(form)
    }
    catch (errorValidation) {
      this.onIsError(errorValidation)
    }
  }

  login(form: NgForm) {
    if (form.valid && this.datosDelUsuario()) {
      this.usuariosServiceService.login(this.unUsuario.nombreDeUsuario, this.unUsuario.contrasena)
      this.router.navigate(['home'])
      this.isError = false
  }}

  datosDelUsuario(){
     let aux = USERS.find(usuario => 
      usuario.nombreDeUsuario == this.unUsuario.nombreDeUsuario &&
      usuario.contrasena == this.unUsuario.contrasena 
      )
      if(aux == undefined){
        this.onIsError("Usuario o Contraseña Invalida")
      }
      return aux !== undefined
  }

  onIsError(_mensaje: String): void {
    this.mensaje = _mensaje
    setTimeout(() => {
      this.mensaje = "";
    }, 4000)
  }
} 
