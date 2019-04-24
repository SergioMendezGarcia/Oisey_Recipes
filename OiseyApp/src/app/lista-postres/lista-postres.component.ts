import { Component, OnInit } from '@angular/core';
import { PostreComponent } from '../postre/postre.component';
import { ServicioRecetasService } from 'src/app/services/servicio-recetas.service';

@Component({
  selector: 'lista-postres',
  templateUrl: './lista-postres.component.html',
  styleUrls: ['./lista-postres.component.scss']
})
export class ListaPostresComponent implements OnInit {

  constructor(private _recetas: PostreComponent) { }
  filtro = "rating";
  recetas = null;
  fc = null;

  filtrarRecetas = function (str) {
    this.fc = str;
    if (this.fc == "nombre") {
      return this.recetas.sort(function(recA,recB){
        if(recA.nombre>recB.nombre) return 1;
        else return -1;
      });
    }
    if (this.fc == "rating") {
      return this.recetas.sort(function(recA,recB){
        if(recA.rating<recB.rating) return 1;
        else return -1;
      });
    }
    if (this.fc == "tiempo") {
      return this.recetas.sort(function(recA,recB){
        if(recA.tiempo>recB.tiempo) return 1;
        else return -1;
      });
    }
  }

 ngOnInit() {
    this.recetas = this._recetas.getRecetas();
  }

}


