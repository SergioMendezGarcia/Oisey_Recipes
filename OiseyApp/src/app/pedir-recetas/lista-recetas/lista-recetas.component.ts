import { Component, OnInit } from '@angular/core';
import { ServicioRecetasService } from 'src/app/services/servicio-recetas.service';

@Component({
  selector: 'lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.scss']
})
export class ListaRecetasComponent implements OnInit {

  constructor(private _recetas:ServicioRecetasService) { }
  recetas = null;
  ngOnInit() {
    this.recetas = this._recetas.getRecetas();
    console.log(this.recetas);
  }

}
