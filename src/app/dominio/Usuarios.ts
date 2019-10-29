import { Modulo, MODULOS } from './modulos';

export class Usuario {
  nombreDeUsuario?: string;
  contrasena?: string;
  modulosPermitidos: Modulo[] = []

  constructor(unNombreDeUsuario?: string, unaContrasena?: string) {
    this.nombreDeUsuario = unNombreDeUsuario
    this.contrasena = unaContrasena
    this.modulosPermitidos = MODULOS
  }

  agregarModulo(unModulo: Modulo) {
    this.modulosPermitidos.push(unModulo)
  }

  quitarModulo(unModulo: Modulo) {
    this.modulosPermitidos = this.modulosPermitidos.filter(modulo => unModulo.nombre != modulo.nombre)
  }
}

export let usuarioLogueado: Usuario = new Usuario()

export let USERS: Usuario[] = [
  new Usuario("Pintos", "asdasdasd"),
  new Usuario("Longarela", "asdasdasd"),
  new Usuario("Rosales", "asdasdasd")
]