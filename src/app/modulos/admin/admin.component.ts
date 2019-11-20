import { Component, OnInit } from '@angular/core';
import { TodosLosModulos, Modulo } from 'src/app/dominio/modulos';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  NombreDelModulo = 'AdminComponent';
  constructor() { }

  ngOnInit() {
  }



  listaDeModulos(): Modulo [] {
    return TodosLosModulos();
 }
}
