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
export const ModuloAlumnos =  new Modulo("Alumnos", "Gestion Academica", "home/Alumnos")
export const ModuloContaduria =  new Modulo("Contaduria", "Contabilidad y Recursos", "home/Contaduria")
export const ModuloPatrimonio =  new Modulo("Patrimonio", "Administracion de Bienes ", "home/Patrimonio")
export const ModuloCompras =  new Modulo("Compras", "Sistema de Compras", "home/Compras")
export const ModuloCalendario =  new Modulo("Calendario", "Administracion de Cronograma", "home/Calendario")
export const ModuloBiblioteca =  new Modulo("Biblioteca", "Administracion Bibliografica", "home/Biblioteca")
export const ModuloAdmin =  new Modulo("ADMIN", "Administracion del Sistema", "home/Admin")
 
export let TodosLosModulos: Modulo[] = [
    ModuloAlumnos,
    ModuloContaduria,
    ModuloPatrimonio,
    ModuloCompras,
    ModuloCalendario,
    ModuloBiblioteca
]



// EncuestasIDB
// NotasIDB
// Sistemas dedicados
// Sistema de Inasistencias