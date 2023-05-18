import { Target } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Empleado} from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent {
  empleadoForm: FormGroup
  titulo=" Crear Pago Empleado"
  id:string | null;
  totalDescuentos:number = 0;;
  totalKilos: number = 0;
  valorKilo: number = 0;
  TotalPagar: number = 0;
  TotalPagarEnPesos: string | null;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService,
    private _empleadoService:EmpleadoService,
    private arouter: ActivatedRoute
    ){
    this.empleadoForm = this.fb.group({
      valorKilo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      kilos: [null, Validators.required],
      descuentos: ['', Validators.required],
      pago: ['', Validators.required]
    } )
    this.id = this.arouter.snapshot.paramMap.get('id');
    this.TotalPagarEnPesos = this.TotalPagar.toLocaleString();
  }

  ngOnInit(): void{
    this.esEditar();
  }
  array: any[] = [];
  arrayDescuentos: any [] =[];

  addValue(event: any) {       
    event.preventDefault();
    this.array.push(this.empleadoForm.get('kilos')?.value);
    this.empleadoForm.get('kilos')?.reset();
    const sum = this.array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    this.totalKilos = sum;
    return sum;
  }
  addDescuentos(event: any) {       
    event.preventDefault();
    this.arrayDescuentos.push(this.empleadoForm.get('descuentos')?.value);
    this.empleadoForm.get('descuentos')?.reset();
    const sum = this.arrayDescuentos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    this.totalDescuentos = sum;
    return sum;
  }
  addPago(event: any) {       
    event.preventDefault();
    this.valorKilo= (this.empleadoForm.get('valorKilo')?.value);
    this.TotalPagar = (this.totalKilos*this.valorKilo)-this.totalDescuentos;
  }
  
  agregarEmpleado(){
    const empleado: Empleado= {
      valorKilo: this.empleadoForm.get('valorKilo')?.value,
      nombre: this.empleadoForm.get('nombre')?.value,
      apellido: this.empleadoForm.get('apellido')?.value,
      kilos: this.empleadoForm.get('kilos')?.value || this.totalKilos,
      descuentos:this.empleadoForm.get('descuentos')?.value || this.totalDescuentos,
      pago:this.TotalPagar
    }
    
    if(this.id !== null){
      //editar un empleado
      this._empleadoService.editarEmpleado(this.id,empleado).subscribe({
        next: data => {
          this.toastr.info('El empleado fue actualizado con exito!', 'Empleado Actualizado!');
          this.router.navigate(['/ver-empleado']);
          this.empleadoForm.reset();
        },
        error: error => {
          console.log(error);
          this.empleadoForm.reset();
        }
      });
    }else{
      //creamos el empleado
      console.log(empleado)
      this._empleadoService.guardarEmpleado(empleado).subscribe({
        next: data => {
          this.toastr.success('El empleado fue registrado con exito!', 'Empleado Registrado!');
          this.router.navigate(['/ver-empleado']);
        },
        error: error => {
          console.log(error);
          this.empleadoForm.reset();
        }
      });
    }

    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Empleado";
      this._empleadoService.obtenerEmpleadoId(this.id).subscribe({
        next: data => {
          this.empleadoForm.setValue({
            valorKilo: data.valorKilo,
            nombre: data.nombre,
            apellido: data.apellido, 
            kilos: data.kilos, 
            descuentos: data.descuentos,
            pago: data.pago
            
          })
        },
        error: error => {
          console.log(error);
        }
      })
    }
  }
}
