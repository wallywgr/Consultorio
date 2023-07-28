import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiServer } from '../apiServer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  url=apiServer.url;

  public menu: any = [
    {
      titulo: 'Doctores',
      icono: 'mdi mdi-face',
      submenu: [
        { titulo: 'Datos del doctor', url: '/dashboard/datos-doctor' }
      ]
    },
    {
      titulo: 'Pacientes',
      icono: 'mdi mdi-clipboard-account',
      submenu: [
        { titulo: 'Registrar Paciente', url: '/dashboard/crear-paciente' },
        { titulo: 'Datos del Paciente', url: '/dashboard/datos-paciente' }
      ]
    },
    {
      titulo: 'Historial Clínico',
      icono: 'mdi mdi-folder-multiple',
      submenu: [
        { titulo: 'Nuevo Historial', url: '/dashboard/nuevo-historial' },
        { titulo: 'Historial', url: '/dashboard/historial-paciente' }
      ]
    }

  ];

  constructor(private http: HttpClient) { }

  postMethod(url: any, body: any): Observable<any> {
    return this.http.post(`${this.url}${url}`,body);
  }

  getMethod(url: any): Observable<any> {
    return this.http.get(`${this.url}${url}`);
  }
}
