import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Login} from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup
  titulo=" Login"
  id:string | null

  listUsuarios: Login[] =[];
  constructor(private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService,
    private _loginService:LoginService,
    private arouter: ActivatedRoute
    ){
      
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    } )
    this.id = this.arouter.snapshot.paramMap.get('id');
  }
  
  agregarUsuario(){
    const login: Login= {
      usuario: this.loginForm.get('usuario')?.value,
      contrasena: this.loginForm.get('contrasena')?.value
    }

    this._loginService.getLogin().subscribe({
      next: data => {
        
        this.listUsuarios =data;
        const user = this.listUsuarios.find(u => u.usuario === login.usuario && u.contrasena === login.contrasena);
        if (user) {
          this.toastr.success('Ingreso correcto!');
          // Iniciar sesión exitosa, navegar a la página de productos
          this.router.navigate(['/inicio']);
        } else {
          this.toastr.error('El nombre de usuario o la contraseña son incorrectos!');
        }
      },
      error: error => {
        console.log(error);
      }
    });
    
   
    
    }
}
