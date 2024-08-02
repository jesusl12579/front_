import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { DocentesComponent } from './docentes/docentes.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { VerificacionComponent } from './verificacion/verificacion.component';
import { ControlUsuariosComponent } from './control-usuarios/control-usuarios.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocentesComponent,
    AdministradorComponent,
    UsuarioComponent,
    LoginComponent,
    VerificacionComponent,
    ControlUsuariosComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
