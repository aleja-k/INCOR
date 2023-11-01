import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Aspirante} from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ver-pdf',
  templateUrl: './ver-pdf.component.html',
  styleUrls: ['./ver-pdf.component.css']
})
export class VerPdfComponent {
    productoForm: FormGroup
    titulo=" Adjunto" 
     id: string | null;
     archivoPDF!: string ;

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
    this.archivoPDF = 'C:\Users\Administrador\Downloads\validación matemática discreta.pdf';
  }
  


  esEditar() {
    if (this.id !== null) {
      this.titulo = "Adjunto";
      this._productoService.obtenerProducto(this.id).subscribe({
        next: data => {
          console.log(data);
  
          // Comprobar si 'data' contiene la propiedad 'archivoPDF'
          if (data.hasOwnProperty('archivoPDF')) {
            
            console.log('archivoPDF:', data.archivoPDF);
          } else {
            console.log('La propiedad archivoPDF no existe en el objeto.');
          }
  
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
            archivoPDF: data.archivoPDF, // Asignar el valor de archivoPDF
            estado: data.estado,
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  

}
