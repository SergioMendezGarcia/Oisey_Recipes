import { Component, OnInit } from '@angular/core';
import { serviciochefs } from '../services/serviciochefs.service';
import { ActivatedRoute } from '@angular/router';
import { Chef } from '../Modelos/modeloChefs';


@Component({
  selector: 'pantalla-chef',
  templateUrl: './pantalla-chef.component.html',
  styleUrls: ['./pantalla-chef.component.scss']
})
export class PantallaChefComponent implements OnInit {

  listaChefs = null;
  theChef: Chef = null;
  estrellas = null;
  media = null;
  
  constructor(private _route: ActivatedRoute, private _chefServ: serviciochefs) { }

  ngOnInit() {

    // this.listaComments = this._chefCommServ.getComments(this.listaChefs[this.chefId].comentarios);

    this._route.params.subscribe(parametros => {
      

        this.listaChefs = this._chefServ.getChefsFromAPI(parametros.chefId).subscribe(data=>{
        this.theChef = data;
        this.estrellas = this.theChef.estrellas;
        this.calcularMedia(this.estrellas);
      });
    });
    

  }
  calcularMedia(estrellas) {

    var total = 0;
    for (let estrella of estrellas) {
      total += estrella;
    };
    this.media = total / estrellas.length;
    return this.media;

  }

}
