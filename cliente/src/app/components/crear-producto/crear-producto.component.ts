import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Producto} from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  productoForm: FormGroup
  titulo=" Crear Producto"
  id:string | null;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService,
    private _productoService:ProductoService,
    private arouter: ActivatedRoute
    ){
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    } )
    this.id = this.arouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.esEditar();
  }

  agregarProducto(){
    const producto: Producto= {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio:this.productoForm.get('precio')?.value
    }
    
    if(this.id !== null){
      //editar un producto
      this._productoService.editarProducto(this.id,producto).subscribe({
        next: data => {
          this.toastr.info('El producto fue actualizado con exito!', 'Producto Actualizado!');
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
          this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
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
      this.titulo = "Editar Producto";
      this._productoService.obtenerProducto(this.id).subscribe({
        next: data => {
          this.productoForm.setValue({
            producto: data.nombre,
            categoria: data.categoria, 
            ubicacion: data.ubicacion, 
            precio: data.precio
          })
        },
        error: error => {
          console.log(error);
        }
      })
    }
  }
}
