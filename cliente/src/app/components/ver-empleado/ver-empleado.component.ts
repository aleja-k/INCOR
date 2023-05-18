import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-empleado',
  templateUrl: './ver-empleado.component.html',
  styleUrls: ['./ver-empleado.component.css']
})
export class VerEmpleadoComponent {
  listEmpleados: Empleado[] =[];
  constructor(
    private _empleadoService: EmpleadoService,
    private toastr:ToastrService,
    ){}
  
  ngOnInit(): void{
    this.obtenerEmpleado();
  }
  obtenerEmpleado() {
    this._empleadoService.getEmpleado().subscribe({
      next: data => {
        console.log(data);
        this.listEmpleados =data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  eliminarEmpleado(id: any){
    this._empleadoService.eliminarEmpleado(id).subscribe({
      next: data => {
        this.toastr.error('El empleado fue eliminado con exito','Empleado eliminado')
        this.obtenerEmpleado();
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
