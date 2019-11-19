import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueoComponent } from '../logueo/logueo.component';
import { HomeComponent } from '../home/home.component';
import { AlumnosComponent } from '../modulos/alumnos/alumnos.component';
import { BibliotecaComponent } from '../modulos/biblioteca/biblioteca.component';
import { CalendarioComponent } from '../modulos/calendario/calendario.component';
import { ComprasComponent } from '../modulos/compras/compras.component';
import { ContaduriaComponent } from '../modulos/contaduria/contaduria.component';
import { PatrimonioComponent } from '../modulos/patrimonio/patrimonio.component';
import { PerfilComponent } from '../modulos/perfil/perfil.component';
import { AdminComponent } from '../modulos/admin/admin.component';

const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogueoComponent },
  { path: 'home', component:  HomeComponent},
  { path: 'home/Alumnos', component:  AlumnosComponent},
  { path: 'home/Biblioteca', component:  BibliotecaComponent},
  { path: 'home/Calendario', component:  CalendarioComponent},
  { path: 'home/Compras', component:  ComprasComponent},
  { path: 'home/Contaduria', component:  ContaduriaComponent},
  { path: 'home/Patrimonio', component:  PatrimonioComponent},
  { path: 'home/Perfil', component:  PerfilComponent},
  { path: 'home/Admin', component:  AdminComponent},
  { path: '**', component: LogueoComponent },
];
   
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }