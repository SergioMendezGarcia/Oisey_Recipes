import { Injectable } from '@angular/core';
import { ComentarioChef } from '../Modelos/comentario-chef';

@Injectable({
  providedIn: 'root'
})
export class ServicioChefCommentsService {

  private _chefComments = [
    new ComentarioChef(
      0,
      'The best meal ever',
      'Paquita Pérez',
      'paquitaperez.jpg',
      5,
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium ipsam dolore, totam suscipit nam commodi eos aut officia id, iusto accusamus quos ab ullam labore, debitis et pariatur quidem!',
      '1 julio 2018'
    ),
    new ComentarioChef(
      1,
      'The worst meal ever',
      'Francisco Soler',
      'fsoler.jpg',
      1,
      'Lorem ipsum dolor, dolor el que se siente tras comer  sit amet consectetur adipisicing elit. Cumque praesentium ipsam dolore, totam suscipit nam commodi eos aut officia id, iusto accusamus quos ab ullam labore, debitis et pariatur quidem!',
      '1 julio 2018'
    ),

  ];

  constructor() { };
                                  //Método para recuperar los comentarios filtrando por id
                                  //del comentario.
                                  //El método recibe como párametro el array con la lista
                                   //completa de comentarios del chef.
  getComments(comentariosChefs){
                                  //Declaración variable en la que se almacenarán los comentarios
                                  //ya filtrados.
    let comentarios:ComentarioChef[];
                                  //Bucle for para filtrar los comentarios del chef deseado
                                  //usando el id asignado a cada comentario, presente tanto en
                                  //el objeto comentario como en el objeto chef.

    for(let i in this._chefComments){

     comentarios = this._chefComments.filter( comentario => comentario[i] == comentariosChefs[i].commentId);

    }
    return comentarios;

  };
}
