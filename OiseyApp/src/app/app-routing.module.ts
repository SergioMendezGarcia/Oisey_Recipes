import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaChefComponent } from './pantalla-chef/pantalla-chef.component';

const routes: Routes = [

  {path: 'chefs/:cnombre', component: PantallaChefComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
