import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import {LoginComponent} from './components/login/login.component'
import {CrearUsuarioComponent} from './components/crear-usuario/crear-usuario.component'
import {VerProductoComponent} from './components/ver-producto/ver-producto.component'
import {CrearProductoComponent} from './components/crear-producto/crear-producto.component'
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VerPdfComponent } from './components/ver-pdf/ver-pdf.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
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
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'menu', component: SidebarComponent
  },
  {
    path: 'ver-pdf/:id', component: VerPdfComponent
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
