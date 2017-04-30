import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { MascotasComponent } from './componentes/mascotas/mascotas.component';

//IMPORTO LAS RUTAS
import {routing} from './app.routes';
import { PersonasComponent } from './componentes/personas/personas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    MascotasComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
