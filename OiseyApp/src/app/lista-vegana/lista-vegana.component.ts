import { Component, OnInit } from '@angular/core';
import { VeganComponent } from '../vegan/vegan.component';

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

  ngOnInit() {
  }

}
