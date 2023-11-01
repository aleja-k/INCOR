import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Aspirante} from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  productoForm: FormGroup
  titulo=" Información Aspirante"
  id:string | null;
  esCreacion: boolean = true;
 
  
  constructor(private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService,
    private _productoService:ProductoService,
    private arouter: ActivatedRoute
    ){
      
    this.productoForm = this.fb.group({
      tpoidentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      segundonombre: [''],
      primerapellido: ['', Validators.required],
      segundoapellido: [''],
      genero: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      grupoSanguineo: ['', Validators.required],
      direccion: ['', Validators.required],
      archivoPDF:['' ],
      estado: ['', Validators.required],
     
    } )
    this.id = this.arouter.snapshot.paramMap.get('id');
  }
   
  @ViewChild('archivoPDFInput', { static: false }) archivoPDFInput!: ElementRef;


  ngOnInit(): void{
    this.esEditar();
  }
  
  mostrarRutaArchivo(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const archivo = input.files[0];
      // Puedes acceder a la ruta del archivo seleccionado
      const rutaArchivo = archivo.name;
      console.log('Ruta del archivo:', rutaArchivo);
    }
  }
  agregarAspirante(){
    const producto: Aspirante= {
      tpoidentificacion: this.productoForm.get('tpoidentificacion')?.value,
      identificacion:this.productoForm.get('identificacion')?.value,
      nombre: this.productoForm.get('nombre')?.value,
      segundonombre: this.productoForm.get('segundonombre')?.value,
      primerapellido: this.productoForm.get('primerapellido')?.value,
      segundoapellido: this.productoForm.get('segundoapellido')?.value,
      genero: this.productoForm.get('genero')?.value,
      telefono: this.productoForm.get('telefono')?.value,
      correo: this.productoForm.get('correo')?.value,
      grupoSanguineo: this.productoForm.get('grupoSanguineo')?.value,
      direccion: this.productoForm.get('direccion')?.value,
      archivoPDF: this.productoForm.get('archivoPDF')?.value,
      estado: this.productoForm.get('estado')?.value,
    }
    
    if(this.id !== null){
      //editar un producto
      this._productoService.editarProducto(this.id,producto).subscribe({
        next: data => {
          this.toastr.info('El aspirante fue actualizado con exito!', 'Aspirante Actualizado!');
          this.router.navigate(['/producto']);
          this.productoForm.reset();
        },
        error: error => {
          console.log(error);
          this.productoForm.reset();
        }
      });
    }else{
      //creamos el producto
      console.log(producto)
      this._productoService.guardarProducto(producto).subscribe({
        next: data => {
          this.toastr.success('El aspirante fue registrado con exito!', 'Aspirante Registrado!');
          this.router.navigate(['/producto']);
        },
        error: error => {
          console.log(error);
          this.productoForm.reset();
        }
      });
    }

    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Aspirante";
      this._productoService.obtenerProducto(this.id).subscribe({
        next: data => {
          console.log(data);
          this.productoForm.setValue({
         
          tpoidentificacion: data.tpoidentificacion,
          identificacion: data.identificacion,
          nombre: data.nombre,
          segundonombre: data.segundonombre,
          primerapellido: data.primerapellido,
          segundoapellido: data.segundoapellido,
          genero: data.genero,
          telefono: data.telefono,
          correo: data.correo,
          grupoSanguineo: data.grupoSanguineo,
          direccion: data.direccion,
          archivoPDF: data.archivoPDF,
          estado: data.estado,
          })
        },
        error: error => {
          console.log(error);
        }
      })
    }
  }
}
