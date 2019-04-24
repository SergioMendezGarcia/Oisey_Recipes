import { Component, OnInit } from '@angular/core';
import { ServicioRecetasService } from 'src/app/services/servicio-recetas.service';

@Component({
  selector: 'lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.scss']
})
export class ListaRecetasComponent implements OnInit {

  constructor(private _recetas: ServicioRecetasService) { }
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
    this.recetas = this._recetas.getRecetasFromApi().subscribe(recetas=>{
      this.recetas = recetas;
    });
    console.log(this.recetas);
  }

}
