import { Injectable } from '@angular/core';
import { ComentarioChef } from '../Modelos/comentario-chef';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicioChefCommentsService {

  private _allChefComments = null;
  private $commentsObserver = new BehaviorSubject(this._allChefComments);
  private _commentObservable;

  // [
  //   new ComentarioChef(
  //     0,
  //     'The best meal ever',
  //     'Paquita Pérez',
  //     'paquitaperez.jpg',
  //     5,
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium ipsam dolore, totam suscipit nam commodi eos aut officia id, iusto accusamus quos ab ullam labore, debitis et pariatur quidem!',
  //     '1 julio 2018'
  //   ),
  //   new ComentarioChef(
  //     1,
  //     'The worst meal ever',
  //     'Francisco Soler',
  //     'fsoler.jpg',
  //     1,
  //     'Lorem ipsum dolor, dolor el que se siente tras comer  sit amet consectetur adipisicing elit. Cumque praesentium ipsam dolore, totam suscipit nam commodi eos aut officia id, iusto accusamus quos ab ullam labore, debitis et pariatur quidem!',
  //     '1 julio 2018'
  //   ),

  // ];

  constructor(private _http: HttpClient) { };


  getCommentsFromAPI(): Observable<ComentarioChef[]> {
    if (this._allChefComments) {
      return of(this._allChefComments);
    } else {
      return this._http.get<ComentarioChef[]>('http://172.27.96.221:8080/api/comments').pipe(
        tap(data => {
          this._allChefComments = data;
        })
      );
    }
  }
                                    //Método para recuperar los comentarios filtrando por id
                                    //del comentario.
                                    //El método recibe como párametro el array con la lista
                                    //completa de comentarios del chef.
  getComments(comentariosChefs) {
                                    //Declaración variable en la que se almacenarán los comentarios
                                    //ya filtrados.

    var comentarios: ComentarioChef[] = [];

                                    //Bucle doble for con filtrar los comentarios del chef deseado
                                    //usando el id asignado a cada comentario, presente tanto en
                                    //el objeto comentario como en el objeto chef.


    for (let unComChef of comentariosChefs) {

                                    //Almacenamos el resultado filtrado en una variable para su posterior uso
                                    //con el método concatenar.
                                    
      const losComentarios = this._allChefComments.filter(unComentObj => unComChef == unComentObj.commentId);

                                    //Imprescindible guardar la concatenación con los comentarios en la variable
                                    //comentarios, sino el último resultado sobrescribirá al resto.

      comentarios=comentarios.concat(losComentarios);
    }

    return comentarios;

  };
}
