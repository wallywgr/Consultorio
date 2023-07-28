import { Component } from '@angular/core';
import { PacientesService } from '../services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

  constructor(public pacientesService: PacientesService, public router: Router) {
    console.log(pacientesService.menu);
  }

  logout() {
    this.router.navigateByUrl('/login');
  }
}
