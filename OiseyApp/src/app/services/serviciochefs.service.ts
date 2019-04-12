import { Injectable } from '@angular/core';
import { Chef } from '../Modelos/modeloChefs';

@Injectable({
  providedIn: 'root'
})
export class serviciochefs {

  private _chefs = [
    new Chef(1,
      'Josetxo',
      'https://bit.ly/2UfpgT9',
      'comida asiática',
      2.5,
      '"Amo de casa con ganas de cocinar. Me gusta mucho la cocina y por eso quiero compartir mis mejores platos con la gente. Sonno italiano pero la mia familia es portuguesa. Mis respetos para la gente"',
      ['https://bit.ly/2P3kF5x', 'https://bit.ly/2VHxHIu', 'https://bit.ly/2De2DsC', 'https://bit.ly/2VGrcp2'],
      {lat: 41.144, lng: 2.145},
      'Barcelona',
      [0, 1]),
    new Chef(2,
      'Marianico',
      'https://bit.ly/2UfpgT9',
      'comida loca',
      4,
      'Amo de casa con ganas de cocinar',
      ['https://bit.ly/2P3kF5x', 'https://bit.ly/2VHxHIu', 'https://bit.ly/2De2DsC', 'https://bit.ly/2VGrcp2'],
      {lat: 41.24, lng: 2.15},
      'Barcelona',
      [3, 4]),
    new Chef(3,
      'Casandra',
      'https://bit.ly/2UfpgT9',
      'comida ESPAÑOLA',
      3.5,
      'Amo de casa con ganas de cocinar',
      ['https://bit.ly/2P3kF5x', 'https://bit.ly/2VHxHIu', 'https://bit.ly/2De2DsC', 'https://bit.ly/2VGrcp2'],
      {lat: 41.244, lng: 2.1},
      'Barcelona',
      [5, 6])
  ];


  constructor() { };


  getChefs() {
    return this._chefs;
  };

}

