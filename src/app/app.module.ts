import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentesComunes/boton/boton.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './componentesComunes/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LogueoComponent } from './logueo/logueo.component';
import { UsuariosServiceService } from './usuarios-service.service';
import { ModulosComponent } from './componentesComunes/modulos/modulos.component';
import { AlumnosComponent } from './modulos/alumnos/alumnos.component';
import { ContaduriaComponent } from './modulos/contaduria/contaduria.component';
import { PatrimonioComponent } from './modulos/patrimonio/patrimonio.component';
import { ComprasComponent } from './modulos/compras/compras.component';
import { CalendarioComponent } from './modulos/calendario/calendario.component';
import { BibliotecaComponent } from './modulos/biblioteca/biblioteca.component';


@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    NavbarComponent,
    HomeComponent,
    LogueoComponent,
    ModulosComponent,
    AlumnosComponent,
    ContaduriaComponent,
    PatrimonioComponent,
    ComprasComponent,
    CalendarioComponent,
    BibliotecaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [UsuariosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
