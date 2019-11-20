import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modulo } from 'src/app/dominio/modulos';
import { getUsuarioLogueado } from 'src/app/dominio/Usuarios';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  listaDeModulos() {
     return getUsuarioLogueado().getModulosPermitidos();
  }

  redirigir(unModulo: Modulo) {
    return this.router.navigate([unModulo.ruta]);
}
}
