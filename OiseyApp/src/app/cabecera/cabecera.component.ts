import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {


  ruta = false;
  filtrarTexto:string = "";

  filtrado = function(texto) {

  }
  constructor() { }

  ngOnInit() {
    if (location.href.indexOf('pedir') >= 0) {
      this.ruta = true;
    }
  }

}
