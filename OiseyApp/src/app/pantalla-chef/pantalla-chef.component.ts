import { Component, OnInit } from '@angular/core';
import { serviciochefs } from '../services/serviciochefs.service';
import { ActivatedRoute } from '@angular/router';
import { ServicioChefCommentsService } from '../services/servicio-chef-comments.service';
import { Chef } from '../Modelos/modeloChefs';


@Component({
  selector: 'pantalla-chef',
  templateUrl: './pantalla-chef.component.html',
  styleUrls: ['./pantalla-chef.component.scss']
})
export class PantallaChefComponent implements OnInit {

  listaChefs = null;
  theChef:Chef = null;
  constructor(private _route:ActivatedRoute, private _chefServ:serviciochefs, private _chefCommServ:ServicioChefCommentsService) { }

  ngOnInit() {

       // this.listaComments = this._chefCommServ.getComments(this.listaChefs[this.chefId].comentarios);
       
      this._route.params.subscribe(parametros=>{

      this.listaChefs = this._chefServ.getChefs();
  
      this.theChef = this.listaChefs.filter(aChefObj => aChefObj.chefId == parametros);

          // const comentarios=this.listaChefs[parametros.chefId].comentarios;

      })
  }


}
