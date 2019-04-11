import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { PantallaChefComponent } from './pantalla-chef/pantalla-chef.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ComentariosChefComponent } from './pantallaChef/comentarios-chef/comentarios-chef.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    PantallaChefComponent,
    CabeceraComponent,
    ComentariosChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
