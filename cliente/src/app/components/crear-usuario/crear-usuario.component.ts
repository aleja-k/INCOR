import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Usuario} from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
 
    loginForm: FormGroup
    titulo=" Login"
    id:string | null;
  
    constructor(private fb: FormBuilder, 
      private router: Router,
      private toastr: ToastrService,
      private _usuarioService:UsuarioService,
      private arouter: ActivatedRoute
      ){
      this.loginForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        usuario: ['', Validators.required],
        contrasena: ['', Validators.required]
      } )
      this.id = this.arouter.snapshot.paramMap.get('id');
    }
  
    ngOnInit(): void{
      
    }
  
    agregarUsuario(){
      const login: Usuario= {
        nombre: this.loginForm.get('nombre')?.value,
        apellido: this.loginForm.get('apellido')?.value,
        usuario: this.loginForm.get('usuario')?.value,
        contrasena: this.loginForm.get('contrasena')?.value
      }
     
        //creamos el login
        console.log(login)
        this._usuarioService.obtenerUsuario(login).subscribe({
          next: data => {
            this.toastr.success('Ingreso exitosamente', 'Ingreso correcto!');
            this.router.navigate(['/']);
          },
          error: error => {
            console.log(error);
            this.loginForm.reset();
          }
        });
    }

}
