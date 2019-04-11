import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { PantallaChefComponent } from './pantalla-chef/pantalla-chef.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
<<<<<<< HEAD
=======
import { ComentariosChefComponent } from './pantalla-chef/comentarios-chef/comentarios-chef.component';

>>>>>>> be9f41efe398225b1fa92a774f296a1bc7c9293f

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    PantallaChefComponent,
<<<<<<< HEAD
    CabeceraComponent
=======
    CabeceraComponent,
    ComentariosChefComponent
    
>>>>>>> be9f41efe398225b1fa92a774f296a1bc7c9293f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
