import { Injectable } from '@angular/core';
import { Receta } from '../Modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class ServicioRecetaService {

  private  _recetas = [
    new Receta(1, 'Project a'),
    new Receta(2, 'Project b'),
    new Receta(3, 'Project c'),
    new Receta(4, 'Project d')
    ];
  constructor() { }
}
