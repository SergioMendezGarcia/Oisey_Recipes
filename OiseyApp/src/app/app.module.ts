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
import { LoginComponent } from './login/login.component';
import { VeganComponent } from './vegan/vegan.component';
import { PostreComponent } from './postre/postre.component';
import { SoporteComponent } from './soporte/soporte.component';
import { Cabecera2Component } from './cabecera2/cabecera2.component';
import { CabeceraPostresComponent } from './cabecera-postres/cabecera-postres.component';
import { HttpClientModule } from '@angular/common/http';

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
    ValorarcomentarComponent,
    LoginComponent,
    VeganComponent,
    PostreComponent,
    SoporteComponent,
    Cabecera2Component,
    CabeceraPostresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
