import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent {

  src='../assets/img/ORfooter.png';
  ruta = false;
  filtrarTexto:string = "";

  filtrado = function(texto) {

  }
  constructor() { }

  ngOnInit(){
    if (location.href.indexOf('pedir') >= 0) {
       this.ruta = true;
    } 
  }

  ngDoCheck() {
    if (location.href.indexOf('vegan') >= 0) {
      this.src='../assets/img/ORvegan.png';
    }else if (location.href.indexOf('postre') >= 0) {
      this.src= '../assets/img/ORpostre.png';
    }else{
      this.src= '../assets/img/ORfooter.png';
    }
  }

}
