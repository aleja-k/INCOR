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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav'; // Importa el módulo de MatSidenav
import { MatListModule } from '@angular/material/list';
import { InicioComponent } from './components/inicio/inicio.component'; // Importa el módulo de MatList
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { VerPdfComponent } from './components/ver-pdf/ver-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    VerProductoComponent,
    CrearProductoComponent,
    LoginComponent,
    CrearUsuarioComponent,
    SidebarComponent,
    InicioComponent,
    VerPdfComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
