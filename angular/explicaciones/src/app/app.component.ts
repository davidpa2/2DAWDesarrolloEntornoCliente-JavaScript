//Controlador del componente que va a ser su parte funcional. Es una clase typescript
import { Component } from '@angular/core';

//decorador del componente que recibe un objeto con sus elementos: selector, vista y hoja css
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//clase para la lógica (programación del componente)
export class AppComponent {
  title = 'explicaciones';
  //variable para comunicarse con el componente hijo primer-componente
  comunicacionPadreaHijo='Mensaje de componente padre app-component  a componente hijo primer-componente';
  // variable para recoger el evento enviado por el hijo al padre para comunicarse 
  mensajeHijoaPadre="";

}
