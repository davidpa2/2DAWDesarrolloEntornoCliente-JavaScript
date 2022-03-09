import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  private url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  listarMecanicos(): Observable<any> {
    //http.get() manda una solicitud http y devuelve un objeto Observable que emite los datos solicitados
    return this.http.get<any>(this.url + '/listarMecanicos');
  }

  addMecanico(nombre: string, apellidos: string, dni: string, tlf: string, rol: string, email: string, password: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    let mecanico = {
      nombre, apellidos, dni, tlf, rol, email, password
    }

    let jsonMecanicos = JSON.stringify({
      nombre: mecanico.nombre,
      apellidos: mecanico.apellidos,
      dni: mecanico.dni,
      tlf: mecanico.tlf,
      rol: mecanico.rol,
      gmail: mecanico.email,
      password: mecanico.password
    })
    return this.http.post<any>(this.url + '/registroMecanico', jsonMecanicos, { headers: headers })
  }
}
