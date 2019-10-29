import { Component, OnInit } from '@angular/core';
import { Usuario, usuarioLogueado } from 'src/app/dominio/Usuarios';
import { Router } from '@angular/router';
import { UsuariosServiceService } from 'src/app/usuarios-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombre:string = ""

  constructor(private router: Router, private usuariosServiceService: UsuariosServiceService) { }

  ngOnInit() {
    this.nombre = usuarioLogueado.nombreDeUsuario
  }

  onLogout(){
    this.usuariosServiceService.deslogear()
    this.router.navigate(['login'])
  }
}
