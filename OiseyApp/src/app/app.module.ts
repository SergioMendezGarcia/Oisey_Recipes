import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { PantallaChefComponent } from './pantalla-chef/pantalla-chef.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

import { PedirRecetasComponent } from './pedir-recetas/pedir-recetas.component';
import { ListaRecetasComponent } from './pedir-recetas/lista-recetas/lista-recetas.component';
import { MapaComponent } from './pedir-recetas/mapa/mapa.component';
import { ComentariosChefComponent } from './pantalla-chef/comentarios-chef/comentarios-chef.component';
import { RatingComponent } from './pantalla-chef/rating/rating.component';
import { ValorarcomentarComponent } from './pantalla-chef/valorarcomentar/valorarcomentar.component';

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
    ComentariosChefComponent,
    RatingComponent,
    ValorarcomentarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
