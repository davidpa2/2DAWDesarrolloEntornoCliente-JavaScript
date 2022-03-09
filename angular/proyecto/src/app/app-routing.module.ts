import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TallerComponent } from './components/taller/taller.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroCocheComponent } from './components/registro-coche/registro-coche.component';
import { FacturaComponent } from './components/factura/factura.component';
import { MecanicosComponent } from './components/mecanicos/mecanicos.component';
import { RegistroMecanicosComponent } from './components/registro-mecanicos/registro-mecanicos.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';


const routes: Routes = [ 
  { path: '', redirectTo:'/taller', pathMatch:'full'},
  /*{ path: '**', component: TallerComponent },*/
  { path: 'taller', component:TallerComponent },
  { path: 'inicio', component:BienvenidaComponent },
  { path: 'registro', component:RegistroComponent },
  { path: 'registrarCoche', component:RegistroCocheComponent },
  { path: 'factura', component:FacturaComponent },
  { path: 'listaMecanicos', component:MecanicosComponent },
  { path: 'perfilUsuario', component:PerfilUsuarioComponent },
  { path: 'registrarMecanico', component:RegistroMecanicosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
