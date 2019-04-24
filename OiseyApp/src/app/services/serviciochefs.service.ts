import { Injectable } from '@angular/core';
import { Chef } from '../Modelos/modeloChefs';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class serviciochefs {

  private _chefs = null;
 
  constructor(private _http: HttpClient) { };


  getChefsFromAPI(parametros): Observable<Chef[]> {
    if (this._chefs) {
      return of(this._chefs);
    } else {
      return this._http.get<Chef[]>(`${environment.API_URL}/chefs`).pipe(
        tap(data => {
          let theChef = data.filter(aChefObj => aChefObj._id == parametros.chefId);
        console.log('theChef: ', theChef);
          this._chefs = data;
        })
      );
    }
  };

}

