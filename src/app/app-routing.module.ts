import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { DocentesComponent } from './docentes/docentes.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { VerificacionComponent } from './verificacion/verificacion.component';
import { ControlUsuariosComponent } from './control-usuarios/control-usuarios.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdministradorComponent},
  {path:'doce',component:DocentesComponent},
  {path:'usu',component:UsuarioComponent},
  {path:'login',component:LoginComponent},
  {path: 'veri', component:VerificacionComponent},
  {path: 'control', component:ControlUsuariosComponent},
  {path: 'comen', component:ComentariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
