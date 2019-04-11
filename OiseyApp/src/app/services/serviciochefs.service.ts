import { Injectable } from '@angular/core';
import { Chef } from '../Modelos/modeloChefs';

@Injectable({
  providedIn: 'root'
})
export class serviciochefs {
  private _chefs = [
    new Chef(1, 'Josetxo', 'https://www.barullo.com/22722-large/sombrero-cocinero-corto.jpg', 'comida asiática', 3.5, 'Amo de casa con ganas de cocinar', ['http://perushimpo.com/imagenes/produc/mini/5326.jpg', 'http://tienda.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/SIU-MAI-COMIDA-ASIATICA-GOURMET-100x100.jpg', 'http://tiendamadrid.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/Siu-mai-de-trufa-con-pollo-300x209-100x100.png', 'http://tiendamadrid.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/Siu-mai-de-trufa-con-pollo-300x209-100x100.png'], [385, 192.3], 'Barcelona', ['comentario']),
    new Chef(2, 'Marianico', 'https://www.barullo.com/22722-large/sombrero-cocinero-corto.jpg', 'comida loca', 4, 'Amo de casa con ganas de cocinar', ['http://perushimpo.com/imagenes/produc/mini/5326.jpg', 'http://tienda.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/SIU-MAI-COMIDA-ASIATICA-GOURMET-100x100.jpg', 'http://tiendamadrid.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/Siu-mai-de-trufa-con-pollo-300x209-100x100.png', 'http://tiendamadrid.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/Siu-mai-de-trufa-con-pollo-300x209-100x100.png'], [385, 192.3], 'Barcelona', ['comentario']),
    new Chef(3, 'Casandra', 'https://www.barullo.com/22722-large/sombrero-cocinero-corto.jpg', 'comida ESPAÑOLA', 3.5, 'Amo de casa con ganas de cocinar', ['http://perushimpo.com/imagenes/produc/mini/5326.jpg', 'http://tienda.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/SIU-MAI-COMIDA-ASIATICA-GOURMET-100x100.jpg', 'http://tiendamadrid.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/Siu-mai-de-trufa-con-pollo-300x209-100x100.png', 'http://tiendamadrid.comida-asiatica-gourmet.com/wp-content/uploads/2018/03/Siu-mai-de-trufa-con-pollo-300x209-100x100.png'], [385, 192.3], 'Barcelona', ['comentario'])
  ];
  constructor() { }


  getChefs() {
    return this._chefs;
  }

}

