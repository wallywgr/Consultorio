import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  public menu:any=[
    {
      titulo:'Doctores',
      icono:'mdi mdi-face',
      submenu:[
        { titulo:'Datos del doctor',url:'/dashboard/datos-doctor'}
      ]
    },
    {
      titulo:'Pacientes',
      icono:'mdi mdi-clipboard-account',
      submenu:[
        { titulo:'Registrar Paciente',url:'/dashboard/crear-paciente'},
        { titulo:'Datos del Paciente',url:'/dashboard/datos-paciente'}
      ]
    },
    {
      titulo:'Historial Clínico',
      icono:'mdi mdi-folder-multiple',
      submenu:[
        { titulo:'Nuevo Historial',url:'/dashboard/nuevo-historial'},
        { titulo:'Historial',url:'/dashboard/historial-paciente'}
      ]
    }
    
  ];

  constructor() { }
}
