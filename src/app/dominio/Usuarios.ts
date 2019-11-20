import { Modulo, ModuloAlumnos, ModuloContaduria, ModuloPatrimonio,
   ModuloCompras, ModuloCalendario, ModuloBiblioteca, ModuloAdmin } from './modulos';


export class Usuario {
  nombreDeUsuario?: string;
  nombreCompleto?: string;
  contrasena?: string;
  modulosPermitidos: Modulo[] = [];

  constructor(unNombreDeUsuario?: string, unNombreCompleto?: string, unaContrasena?: string, losMODULOS?: Modulo[]) {
    this.nombreCompleto = unNombreCompleto;
    this.nombreDeUsuario = unNombreDeUsuario;
    this.contrasena = unaContrasena;
    this.modulosPermitidos = losMODULOS;
  }

  getModulosPermitidos() {
    return this.modulosPermitidos;
  }
  agregarModulo(unModulo: Modulo) {
    this.modulosPermitidos.push(unModulo);
  }

  quitarModulo(unModulo: Modulo) {
    this.modulosPermitidos = this.modulosPermitidos.filter(modulo => unModulo.nombre !== modulo.nombre);
  }

}

export function NuevoUsuario(unUsuario: Usuario) {
  return UsuarioLogueado = unUsuario;
}
export function eliminarUsuario(): Usuario {
  return UsuarioLogueado;
}
export function getUsuarioLogueado(): Usuario {
  return UsuarioLogueado;
}
export function setUsuarioLogueado(unUsuario: Usuario) {
  return UsuarioLogueado = unUsuario;
}

export let UsuarioLogueado = new Usuario();

export let USERS: Usuario[] = [
  new Usuario('Ana', 'Ana Julia Liboreiro ', 'asdasdasd', [
    ModuloContaduria,
    ModuloPatrimonio,
    ModuloCompras,
    ModuloCalendario,
  ]),
  new Usuario('Adrian', 'Adrian DAOUD ', 'asdasdasd', [
    ModuloAlumnos,
    ModuloContaduria,
    ModuloPatrimonio,
    ModuloCompras,
    ModuloCalendario,
    ModuloBiblioteca
  ]),
  new Usuario('Adriel', 'Adriel LONGARELA ', 'asdasdasd', [
    ModuloAlumnos,
    ModuloCalendario,
    ModuloBiblioteca,
    ModuloAdmin
  ]),
  new Usuario('Javier', 'Javier BARRETO ', 'asdasdasd', [
    ModuloCalendario,
    ModuloBiblioteca,
  ]),
];


