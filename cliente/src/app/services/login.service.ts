import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url= 'http://localhost:4000/api/login/';
  constructor(private http: HttpClient) { }

  getLogin(): Observable<any>{
    return this.http.get(this.url);
  }

  obtenerUsuario(usuario:string): Observable<any>{
    return this.http.post(this.url,usuario);
  }
  editarUsuario(): Observable<any>{
    return this.http.get(this.url);
  } 
}
