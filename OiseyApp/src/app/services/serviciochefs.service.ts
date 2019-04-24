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


  getChefsFromAPI(cid): Observable<Chef[]> {
    if (this._chefs) {
      return of(this._chefs);
    } else {
      return this._http.get<Chef[]>(`${environment.API_URL}/chefs/${cid}`);
    }
  };
  putValoracion(idchef, val): Observable<Chef> {
    return this._http.put<Chef>('http://172.27.96.221:8080/api/chefs/' + idchef, { valoracion: val }
    );
  }
  pushComentario(idchef,com):Observable<Chef>{
    return this._http.put<Chef>('http://172.27.96.221:8080/api/chefs/' + idchef, {comentario: com});
  }
  putCommentRating(idchef,com,val):Observable<Chef>{
    return this._http.put<Chef>('http://172.27.96.221:8080/api/chefs/' + idchef,{comentario:com,valoracion:val} );
  }

}

