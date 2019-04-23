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

  ngDoCheck() {
    // if (location.href.indexOf('pedir') >= 0) {
    //   this.ruta = true;
    //   document.getElementById('logo').src = '../assets/img/ORfooter.png';
    // }
    if (location.href.indexOf('vegan') >= 0) {
      document.getElementById('logo').src = '../assets/img/ORvegan.png';
    }else if (location.href.indexOf('postre') >= 0) {
      document.getElementById('logo').src = '../assets/img/ORpostre.png';
    }else{
      document.getElementById('logo').src = '../assets/img/ORfooter.png';
    }
  }

}
