import { Injectable } from '@angular/core';
import { Receta } from '../Modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class ServicioRecetasService {
                                      //Array con datos mock para testeo
  private  _recetas = [
    new Receta(1, 'Huevos con patatas', 'Huevos, aceite, patatas', 25, ['https://bit.ly/2P6IIAu', 'patatas.jpg'], 5),
    new Receta(2, 'Fabada asturiana', 'Fabes, Compango, Agua, Sal', 65, ['https://bit.ly/2v1he6f'], 5),
    new Receta(3, 'Kebab de Burgos', 'Carne falsa, lechuga, salsa rara, cebolla', 15, ['https://bit.ly/2G6RI4t', 'kebab.jpg'], 2),
    new Receta(4, 'Arroz tres delicias', 'Huevos, aceite de mala calidad, lechuga, zanahoria, dicen que es jamón cocido', 10, ['https://bit.ly/2UdUIB9', 'alozchino.jpg'], 2.5),
    new Receta(5, 'Huevos con patatas', 'Huevos, aceite, patatas', 25, ['https://bit.ly/2P6IIAu', 'patatas.jpg'], 5),
    new Receta(6, 'Fabada asturiana', 'Fabes, Compango, Agua, Sal', 65, ['https://bit.ly/2v1he6f'], 5),
    new Receta(7, 'Kebab de Burgos', 'Carne falsa, lechuga, salsa rara, cebolla', 15, ['https://bit.ly/2G6RI4t', 'kebab.jpg'], 2),
    new Receta(8, 'Arroz tres delicias', 'Huevos, aceite de mala calidad, lechuga, zanahoria, dicen que es jamón cocido', 10, ['https://bit.ly/2UdUIB9', 'alozchino.jpg'], 2.5)
    ];
                                    //Método para devolver el array mock _recetas
  getRecetas(){return this._recetas};

                                    //Método para filtar recetas
  
  // filterRecetas(nombre){ };

  constructor() { }
}
