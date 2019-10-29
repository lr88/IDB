import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from '../usuarios-service.service';
import { Router } from '@angular/router';
import { usuarioLogueado } from '../dominio/Usuarios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private usuariosServiceService: UsuariosServiceService) { }

  ngOnInit() {
    if(!this.usuariosServiceService.isLogged()){
      this.usuariosServiceService.deslogear()
      this.router.navigate(['login'])
    }
  }

}
