import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pedir-recetas',
  templateUrl: './pedir-recetas.component.html',
  styleUrls: ['./pedir-recetas.component.scss']
})
export class PedirRecetasComponent implements OnInit {

  constructor() { }
  chefId:number = 0;
  ngOnInit() {
  }

}
