import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url= 'http://localhost:4000/api/empleado/';
  constructor(private http: HttpClient) { }

  getEmpleado(): Observable<any>{
    return this.http.get(this.url);
  }

  obtenerEmpleadoId(id:string): Observable<any>{
    return this.http.get(this.url+ id);
  }
  editarEmpleado(id:string, empleado:Empleado): Observable<any>{
    return this.http.put(this.url+ id,empleado);
  } 
  guardarEmpleado(empleado: Empleado): Observable<any>{
    return this.http.post(this.url, empleado);
  }
  eliminarEmpleado(id:string): Observable<any>{
    return this.http.delete(this.url+ id);
  }
}
