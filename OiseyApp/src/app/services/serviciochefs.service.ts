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
      3.5,
      'Amo de casa con ganas de cocinar',
<<<<<<< HEAD
      ['https://bit.ly/2P3kF5x', 'https://bit.ly/2VHxHIu', 'https://bit.ly/2De2DsC', 'https://bit.ly/2VGrcp2'],
=======
      ['https://bit.ly/2P3kF5x', 'https://d1bvpoagx8hqbg.cloudfront.net/originals/dia-comida-asiatica-695df695b57836ba4d9dc4b19b1e4fef.jpg', 'https://c.pxhere.com/photos/35/ff/chicken_rice_food_asian_chicken_cuisine_sauce_chilli-816233.jpg!d', 'https://c.pxhere.com/photos/3c/ce/korean_food_korean_dish_dish_food_meal_vegetables_vegetable_meal_fried_vegetables-483166.jpg!d'],
>>>>>>> 24026ced22d30456f57fa584aef5a48ac17d41ab
      [385, 192.3],
      'Barcelona',
      [0, 1]),
    new Chef(2,
      'Marianico',
      'https://bit.ly/2UfpgT9',
      'comida loca',
      4,
      'Amo de casa con ganas de cocinar',
      ['https://bit.ly/2P3kF5x', 'https://bit.ly/2VHxHIu', 'https://bit.ly/2De2DsC', 'https://bit.ly/2VGrcp2'],
      [385, 192.3],
      'Barcelona',
      [3, 4]),
    new Chef(3,
      'Casandra',
      'https://bit.ly/2UfpgT9',
      'comida ESPAÑOLA',
      3.5,
      'Amo de casa con ganas de cocinar',
      ['https://bit.ly/2P3kF5x', 'https://bit.ly/2VHxHIu', 'https://bit.ly/2De2DsC', 'https://bit.ly/2VGrcp2'],
      [385, 192.3],
      'Barcelona',
      [5, 6])
  ];


  constructor() { };


  getChefs() {
    return this._chefs;
  };

}

