import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaChefComponent } from './pantalla-chef/pantalla-chef.component';
import { PedirRecetasComponent } from './pedir-recetas/pedir-recetas.component';
import { LoginComponent } from './login/login.component';
import { VeganComponent } from './vegan/vegan.component';
import { PostreComponent } from './postre/postre.component';
import { SoporteComponent } from './soporte/soporte.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'chefs', component: PantallaChefComponent, pathMatch: 'full'},
  {path: 'chefs/:chefId', component: PantallaChefComponent, pathMatch: 'full'},
  // {path: 'chefs/5cbf2170b81f9a0cb8fb310d', component: PantallaChefComponent, pathMatch: 'full'},
  {path: 'pedir', component: PedirRecetasComponent, pathMatch: 'full'},
  {path: 'vegan', component: VeganComponent, pathMatch: 'full'},
  {path: 'postre', component: PostreComponent, pathMatch: 'full'},
  {path: 'soporte', component: SoporteComponent, pathMatch: 'full'},
  // {path: '**', redirectTo: 'chefs/5cbf2170b81f9a0cb8fb310d', pathMatch:'full'},
  {path: '', redirectTo: 'pedir', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
