import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { LoginComponent } from './components/login/login.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { VerEmpleadoComponent } from './components/ver-empleado/ver-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    VerProductoComponent,
    CrearProductoComponent,
    LoginComponent,
    CrearUsuarioComponent,
    CrearEmpleadoComponent,
    VerEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
