import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
<<<<<<< HEAD
import { PantallaChefComponent } from './pantalla-chef/pantalla-chef.component';
=======
import { CabeceraComponent } from './cabecera/cabecera.component';
>>>>>>> e1d62e74f9ff1ae9f2a8b836ce4d4f3e7783378b

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
<<<<<<< HEAD
    PantallaChefComponent
=======
    CabeceraComponent
>>>>>>> e1d62e74f9ff1ae9f2a8b836ce4d4f3e7783378b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
