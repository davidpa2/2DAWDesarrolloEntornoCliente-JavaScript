import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { mecanicos, TokenJWT } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  usuarioAutenticado!: mecanicos; // Para almacenar el usuario autenticado
  @Output() cambiosEnMecanicosAutenticado = new EventEmitter<mecanicos>();
  @Output() mostrarMecanico: EventEmitter<any> = new EventEmitter();

  JWT: TokenJWT;

  private url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  /**
     * Método para autenticar al usuario, recibiendo su nombre y su contraseña.
     */
  autenticaUsuario(email: string, password: string): Observable<TokenJWT> {
    let mecanico = {
      email, password
    }

    var jsonObject = {
      email: mecanico.email,
      password: mecanico.password
    };
    // Envío la petición http y devuelvo el Observable, para que cualquiera pueda subscribirse.
    return this.http.post<TokenJWT>(this.url + '/autentica', jsonObject);
  }

  public getUsuarioAutenticado(): Observable<mecanicos> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.JWT}`);
    return this.http.get<mecanicos>(this.url + '/datosautenticado', { headers: headers });
  }

  emitirNuevoCambioEnUsuarioAutenticado() {
    this.getUsuarioAutenticado().subscribe(usuarioAutenticado => {
      this.usuarioAutenticado = usuarioAutenticado;
      this.cambiosEnMecanicosAutenticado.emit(usuarioAutenticado);
    });
  }







  listarMecanicos(): Observable<any> {
    //http.get() manda una solicitud http y devuelve un objeto Observable que emite los datos solicitados
    return this.http.get<any>(this.url + '/listarMecanicos');
  }

  buscarMecanicoId(id: number) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    let mecanico = {
      id
    }

    let jsonMecanicos = JSON.stringify({
      id: mecanico.id,
    })
    return this.http.post<any>(this.url + '/buscarMecanicoId', jsonMecanicos, { headers: headers })
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
