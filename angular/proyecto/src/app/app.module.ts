import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './components/principal/principal.component';
import { CrearUsuariosComponent } from './components/crear-usuarios/crear-usuarios.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TallerComponent } from './components/taller/taller.component';
//import { TallerJs } from '../ts/taller';

//Importar a mano
import { RouterModule, Routes } from '@angular/router';


import { FooterComponent } from './components/footer/footer.component';
import { RegistroCocheComponent } from './components/registro-coche/registro-coche.component';

//Definir un array con las rutas que se usarán en la parte dinámica (router-outlet)
const appRoutes: Routes = [
  { path: 'Listarusuarios', component:ListarUsuariosComponent },
  { path: 'Crearusuarios', component:CrearUsuariosComponent },
  { path: '', redirectTo: '/Listarusuarios', pathMatch: 'full' },
  { path: '**', component: PrincipalComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CrearUsuariosComponent,
    ListarUsuariosComponent,
    NavbarComponent,
    TallerComponent,
    FooterComponent,
    RegistroCocheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Importar el módulo de rutas
    RouterModule,
    RouterModule.forRoot(appRoutes),

    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }