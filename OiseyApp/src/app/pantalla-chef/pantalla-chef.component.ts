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
      
      console.log('Parámetros: ', parametros.chefId);
      this.listaChefs = this._chefServ.getChefsFromAPI(parametros).subscribe(data=>{
        console.log('Chefs from API: ', this.listaChefs);
        this.theChef = data[0];
      });
    })
  }


}
