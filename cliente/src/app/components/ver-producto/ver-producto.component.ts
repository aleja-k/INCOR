import { Component, OnInit } from '@angular/core';
import { Aspirante } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
  listProductos: Aspirante[] =[];
  constructor(
    private _productoService: ProductoService,
    private toastr:ToastrService,
    ){}
  
  ngOnInit(): void{
    this.obtenerProductos();
  }
  obtenerProductos() {
    this._productoService.getProductos().subscribe({
      next: data => {
        console.log(data);
        this.listProductos = data.map((producto: any) => {
          const nombreCompleto = `${producto.nombre} ${producto.segundonombre} ${producto.primerapellido} ${producto.segundoapellido}`;
          return {
            ...producto,
            nombreCompleto // Agregar el campo nombreCompleto al objeto
          };
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }
  
  eliminarProducto(id: any){
    this._productoService.eliminarProducto(id).subscribe({
      next: data => {
        this.toastr.error('El aspirante fue eliminado con exito','Aspirante eliminado')
        this.obtenerProductos();
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
