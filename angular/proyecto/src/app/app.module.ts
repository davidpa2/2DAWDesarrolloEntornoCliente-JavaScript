import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TallerComponent } from './components/taller/taller.component';
//import { TallerJs } from '../ts/taller';

//Importar a mano
import { RouterModule, Routes } from '@angular/router';


import { FooterComponent } from './components/footer/footer.component';
import { RegistroCocheComponent } from './components/registro-coche/registro-coche.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

//Definir un array con las rutas que se usarán en la parte dinámica (router-outlet)
const appRoutes: Routes = [
  { path: 'PerfilUsuario', component:PerfilUsuarioComponent },
  { path: 'RegistrarCoche', component:RegistroCocheComponent },
  { path: 'Taller', component:TallerComponent },
  { path: '', redirectTo: '/Taller', pathMatch: 'full' },
  { path: '**', component: TallerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TallerComponent,
    FooterComponent,
    RegistroCocheComponent,
    PerfilUsuarioComponent,
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