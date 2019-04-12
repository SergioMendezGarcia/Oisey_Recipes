import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaChefComponent } from './pantalla-chef/pantalla-chef.component';
import { PedirRecetasComponent } from './pedir-recetas/pedir-recetas.component';

const routes: Routes = [

  {path: 'chefs', component: PantallaChefComponent, pathMatch: 'full'},
  {path: 'chefs/:chefId', component: PantallaChefComponent, pathMatch: 'full'},
  {path: 'pedir', component: PedirRecetasComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'chefs/0', pathMatch:'full'},
  {path: '', redirectTo: 'pedir', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
