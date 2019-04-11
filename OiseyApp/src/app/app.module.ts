import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { PantallaChefComponent } from './pantalla-chef/pantalla-chef.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
<<<<<<< HEAD
import { ComentariosChefComponent } from './pantalla-chef/comentarios-chef/comentarios-chef.component';

=======

import { PedirRecetasComponent } from './pedir-recetas/pedir-recetas.component';
import { ListaRecetasComponent } from './pedir-recetas/lista-recetas/lista-recetas.component';
import { MapaComponent } from './pedir-recetas/mapa/mapa.component';
import { ComentariosChefComponent } from './pantalla-chef/comentarios-chef/comentarios-chef.component';
>>>>>>> deb89e53a70c5169bcf958f2a675a3cfc29cb193

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    PantallaChefComponent,
    CabeceraComponent,
    PedirRecetasComponent,
    ListaRecetasComponent,
    MapaComponent,
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
