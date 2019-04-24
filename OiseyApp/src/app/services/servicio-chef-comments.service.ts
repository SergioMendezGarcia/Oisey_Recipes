import { Injectable } from '@angular/core';
import { ComentarioChef } from '../Modelos/comentario-chef';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';


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
      return this._http.get<ComentarioChef[]>(`${environment.API_URL}/comments`).pipe(
        tap(data => {
          this._allChefComments = data;
        })
      );
    }
  };

  getComments(comentariosChefs) {

    return comentariosChefs;

  };
}
