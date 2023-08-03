import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent {
  pacientes: any = {};

  constructor(public pacientesService: PacientesService, public router: Router) { }

  altaPaciente() {

    Swal.fire({
      title: 'Desea registrar al paciente?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No Guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        let formData = new FormData();
        formData.append('apepaciente', this.pacientes.apepaciente);
        formData.append('nompaciente', this.pacientes.nompaciente);
        formData.append('edadpaciente', this.pacientes.edadpaciente);
        formData.append('telpaciente', this.pacientes.telpaciente);
        formData.append('dirpaciente', this.pacientes.dirpaciente);

        this.pacientesService.postMethod('AltaPaciente.php', formData).subscribe((event: any) => {
          console.log(event);
          
          Swal.fire('Registrado!', '', 'success');

          if (event.status == 'success') {
            this.router.navigate(['/dashboard/nuevo-historial']);
          }
        })

      } else if (result.isDenied) {
        Swal.fire('No registrado', '', 'info')
      }
    })


  }
}
