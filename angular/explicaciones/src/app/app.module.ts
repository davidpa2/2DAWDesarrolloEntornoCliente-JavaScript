//un módulo es una clase tipescript que se puede exportar para utilizar en cualquier lugar que se importe


//importaciones necesarias para el funcionamiento del módulo
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importamos RouterModule para poder utilizar rutas en nuestra aplicación y realizamos la importación
// en la zona de imports del decorador. Igualmente tendremos que importar MatToolBar de Angular Material
// y también tendremos que incluirlo en la sección imports del decorador
import { RouterModule,Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//esta importación se ha hecho automáticamente al crear el primer componente
import { PrimerComponenteComponent } from './componentes/primer-componente/primer-componente.component';

//importación del módulo necesario (FormsModule) para que funcion ngModel en data binding
// que habrá que indicarlo en imports del decorador
import { FormsModule } from '@angular/forms';

//importación del servicio para luego declararlo en providers y poder inyectarlo
import { PrimerServicioService } from './servicios/primer-servicio.service';

//ahora vamos a probar el cliente HTTPCLIENT que trae angular para peticiones asíncronas a BD
// y tenemos que declrar el cliente en el imports
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteCabeceraComponent } from './componentes/componente-cabecera/componente-cabecera.component';
import { CrearlistaComponent } from './componentes/crearlista/crearlista.component';
import { ListarlistaComponent } from './componentes/listarlista/listarlista.component';

//importar el botón raised de angular material y declararlo en el decorador
import {MatButtonModule} from '@angular/material/button';


// declaracion de array de tipo Routes para definir todas las rutas que queramos para nuestra aplicación
// e indicarlo en el import
const appRoutes:Routes=[
  {path:'Listar',component:ListarlistaComponent},
  {path:'Crear',component:CrearlistaComponent},
  {path:'',redirectTo:'/Listar', pathMatch:'full'}
]

//decorador del módulo, que no es más que la configuración del mismo:
//importaciones que necesita el módulo
//declaraciones del componente que se va a utilizar
@NgModule({
  declarations: [
    AppComponent,
    //esta declaración también se ha hecho automáticamente al crear el primer componente
    PrimerComponenteComponent,
    ComponenteCabeceraComponent,
    CrearlistaComponent,
    ListarlistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //estas declaraciones es para poder usar rutas
    RouterModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    //botón raised de angular material
    MatButtonModule
  ],
  // en providers habrá que configurar el inyector de dependencias del servicio
  providers: [PrimerServicioService],
  bootstrap: [AppComponent]
})

//clase en la que iría la lógica del módulo
export class AppModule { }
