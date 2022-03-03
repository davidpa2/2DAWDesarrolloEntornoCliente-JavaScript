import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  private url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get<any>(this.url + '/listartodos');
  }
}
