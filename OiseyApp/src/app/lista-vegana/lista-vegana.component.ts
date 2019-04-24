import { Component, OnInit } from '@angular/core';
import { VeganComponent } from '../vegan/vegan.component';
import { ServicioRecetasService } from 'src/app/services/servicio-recetas.service';

@Component({
  selector: 'lista-vegana',
  templateUrl: './lista-vegana.component.html',
  styleUrls: ['./lista-vegana.component.scss']
})
export class ListaVeganaComponent implements OnInit {

  constructor(private _recetas: VeganComponent) { }
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
