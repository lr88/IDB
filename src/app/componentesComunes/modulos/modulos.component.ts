import { Component, OnInit } from '@angular/core';
import { usuarioLogueado } from 'src/app/dominio/Usuarios';
import { Router } from '@angular/router';
import { Modulo } from 'src/app/dominio/modulos';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  listaDeModulos(){
    return usuarioLogueado.modulosPermitidos
  }

  routerLink(unModulo: Modulo) {
    return this.router.navigate([unModulo.ruta])
}
}
