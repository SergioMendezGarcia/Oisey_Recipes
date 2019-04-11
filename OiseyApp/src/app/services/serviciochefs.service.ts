import { Injectable } from '@angular/core';
import { Chef } from '../Modelos/modeloChefs';

@Injectable({
  providedIn: 'root'
})
export class chef {
 addChef(nuevoChef: Chef) {

 }
  constructor() { }

  getChefs(){
    new Chef(1, 'nombre', 'https://www.barullo.com/22722-large/sombrero-cocinero-corto.jpg', 'comida asiática', 3.5,'Amo de casa con ganas de cocinar', []
  }
}
