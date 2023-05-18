import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import {LoginComponent} from './components/login/login.component'
import {CrearUsuarioComponent} from './components/crear-usuario/crear-usuario.component'
import {VerProductoComponent} from './components/ver-producto/ver-producto.component'
import {CrearProductoComponent} from './components/crear-producto/crear-producto.component'
import {CrearEmpleadoComponent} from './components/crear-empleado/crear-empleado.component'
import {VerEmpleadoComponent} from './components/ver-empleado/ver-empleado.component'


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'crear-empleado', component: CrearEmpleadoComponent
  },
  {
    path: 'ver-empleado', component: VerEmpleadoComponent
  },
  {
    path: 'editar-empleado/:id', component: CrearEmpleadoComponent
  },
  {
    path: 'crear-usuario', component: CrearUsuarioComponent
  },
  {
    path: 'producto', component: VerProductoComponent
  },
  {
    path: 'crear-producto', component: CrearProductoComponent
  },
  {
    path: 'editar-producto/:id', component: CrearProductoComponent
  },
  {
    path: '**', redirectTo:'' , pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
