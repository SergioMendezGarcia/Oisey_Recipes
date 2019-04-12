import { Injectable } from '@angular/core';
import { Chef } from '../Modelos/modeloChefs';

@Injectable({
  providedIn: 'root'
})
export class serviciochefs {
 

  private _chefs = [
    new Chef(1, 'Josetxo', 'https://www.barullo.com/22722-large/sombrero-cocinero-corto.jpg', 'comida asiática', 3.5, 'Amo de casa con ganas de cocinar', ['https://eateverywhereinwashmo.files.wordpress.com/2014/11/img_0588.jpg', 'https://images1.dallasobserver.com/imager/u/745xauto/10439926/gungho_courtesy.jpg', 'https://i.ytimg.com/vi/zYpdFouBVk8/maxresdefault.jpg'], [385, 192.3], 'Barcelona', ['comentario']),
    new Chef(2, 'Marianico', 'https://www.barullo.com/22722-large/sombrero-cocinero-corto.jpg', 'comida loca', 4, 'Amo de casa con ganas de cocinar', ['http://perushimpo.com/imagenes/produc/mini/5326.jpg', 'http://tienda.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/SIU-MAI-COMIDA-ASIATICA-GOURMET-100x100.jpg', 'http://tiendamadrid.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/Siu-mai-de-trufa-con-pollo-300x209-100x100.png', 'https://i.ytimg.com/vi/zYpdFouBVk8/maxresdefault.jpg'], [385, 192.3], 'Barcelona', ['comentario']),
    new Chef(3, 'Casandra', 'https://www.barullo.com/22722-large/sombrero-cocinero-corto.jpg', 'comida ESPAÑOLA', 3.5, 'Ame de case con genes de cociner', ['http://perushimpo.com/imagenes/produc/mini/5326.jpg', 'http://tienda.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/SIU-MAI-COMIDA-ASIATICA-GOURMET-100x100.jpg', 'http://tiendamadrid.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/Siu-mai-de-trufa-con-pollo-300x209-100x100.png', 'https://i.ytimg.com/vi/zYpdFouBVk8/maxresdefault.jpg'], [385, 192.3], 'Barcelona', ['comentario'])
  ];

  constructor() { }


  getChefs() {
    return this._chefs;
  }

}

