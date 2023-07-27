import { Component } from '@angular/core';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

  constructor(public pacientesService: PacientesService) {
    console.log(pacientesService.menu);
  }

}
