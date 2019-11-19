import { Component, OnInit } from '@angular/core';
import { Usuario, getUsuarioLogueado,  } from 'src/app/dominio/Usuarios';
import { Router } from '@angular/router';
import { UsuariosServiceService } from 'src/app/usuarios-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombreCompleto:string = ""

  constructor(private router: Router, private usuariosServiceService: UsuariosServiceService) { }

  ngOnInit() {
    this.nombreCompleto = getUsuarioLogueado().nombreCompleto
  }

  onLogout(){
    this.usuariosServiceService.deslogear()
    this.router.navigate(['login'])
  }
}
