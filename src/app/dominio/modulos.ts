import { Router } from '@angular/router';

export class Modulo {
    nombre?: string;
    descripcion?: string;
    ruta?: string;
    constructor(unNombre?: string, unaDescripcion?: string, unRouterLink?: string) {
        this.nombre = unNombre
        this.descripcion = unaDescripcion
        this.ruta = unRouterLink
    }
}

export let MODULOS: Modulo[] = [
    new Modulo("Alumnos", "Gestion Academica", "home/Alumnos"),
    new Modulo("Contaduria", "Contabilidad y Recursos", "home/Contaduria"),
    new Modulo("Patrimonio", "Administracion de Bienes ", "home/Patrimonio"),
    new Modulo("Compras", "Sistema de Compras", "home/Compras"),
    new Modulo("Calendario", "Administracion de Cronograma", "home/Calendario"),
    new Modulo("Biblioteca", "Administracion Bibliografica", "home/Biblioteca"),
]

// EncuestasIDB
// NotasIDB
// Sistemas dedicados
// Sistema de Inasistencias