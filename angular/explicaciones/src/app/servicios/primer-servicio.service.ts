import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IModulo} from '../modulos';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
//para el error se ha importado HttpErrorResponse,  CatchError y trhowError (para lanzar excepción)

@Injectable({
  providedIn: 'root'
})


export class PrimerServicioService {
  //ahora vamos a usar el cliente HttpClientModule, para eso vamos a crear en la clase del servicio
  // las sigientes variables:
// una que hemos llamado url para dar la dirección del endpoint
// otra que hemos llamado http que va en el constructor para manejar la petición

  url: string="../assets/data/modulos.json";
  //url:string="http://localhost:5555/primero";

  constructor(private http:HttpClient) { }

  //función del servicio para obtener los módulos de un array de objetos de módulos
  //y que luego mostrará los datos en la vista de primer-componente
  // pero antes habrá que configurar el inyector el servicio en app.module.ts

  getModulos(){
    return [
      {"id":1,"módulo":"DWEC","profesor":"Miguel Angel"},
      {"id":2,"módulo":"DWES","profesor":"Antonio de la Rosa"},
      {"id":3,"módulo":"EIE","profesor":"María Dolores"},
      {"id":4,"módulo":"DIW","profesor":"Alberto Alarcón"},
      {"id":5,"módulo":"DAW","profesor":"Alejandro Paniego"}
    ]
  }

  // función para probar las peticiones por Http que será de tipo observable y el observer que estará en primer-componente.ts

  getModulosHttp():Observable<IModulo[]>{
    //devuelve con el método get de http los datos que hay en el endpoint a través de un observable,
    // que es lo que devuelve el método get. ¿qué es un observable? es aquello que queremos observar 
    // y que será implementado mediante una serie de eventos.
    // Todo observable viene con sus observers que son los que se suscriben al servicio observable
    // para que cada vez que se produzca un cambio en los datos se le comunica a todos los que
    // están suscritos al observable.
    // Por tanto, el observable emitirá datos que serán consumidos por los observadores.
    // Ahora bien, como hay que decir el tipo de datos que emitirá el observable, lo mejor es 
    // crearse una interface en app que llamaremos modulos.ts para la estructura de los datos,
    // a los que llamaremos IModulo, del que además tendremos que hacer la importación correspondiente.
    // utilizamos el método pipe() para gestionar el error, es un método  o función que puede ser 
    // llamado desde cualquier parte de la aplicación
    return this.http
                .get<IModulo[]>(this.url)
                .pipe(
                    catchError(this.errorHandler)
                );
  }
// función para gestionar el error
errorHandler(error: HttpErrorResponse){
  return observableThrowError(error.message);
}

}
