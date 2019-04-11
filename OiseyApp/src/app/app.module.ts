import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { PieComponent } from './pie/pie.component';
>>>>>>> e1d62e74f9ff1ae9f2a8b836ce4d4f3e7783378b
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    PieComponent,
>>>>>>> e1d62e74f9ff1ae9f2a8b836ce4d4f3e7783378b
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
