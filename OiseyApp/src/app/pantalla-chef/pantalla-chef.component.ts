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
  constructor(private _route: ActivatedRoute, private _chefServ: serviciochefs) { }

  ngOnInit() {

    // this.listaComments = this._chefCommServ.getComments(this.listaChefs[this.chefId].comentarios);

    this._route.params.subscribe(parametros => {
      
      parametros.chefId = '5cbf2170b81f9a0cb8fb310d';
      this.listaChefs = this._chefServ.getChefs();

      this.theChef = this.listaChefs.filter(aChefObj => aChefObj.chefId == parametros.chefId);

      console.log(this.theChef);

      // const comentarios=this.listaChefs[parametros.chefId].comentarios;

    })
  }


}
