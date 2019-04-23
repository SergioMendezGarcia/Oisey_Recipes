import { Component, OnInit } from '@angular/core';
import { serviciochefs } from 'src/app/services/serviciochefs.service';
import { ServicioChefCommentsService } from 'src/app/services/servicio-chef-comments.service';
import { ActivatedRoute } from '@angular/router';
import { Chef } from 'src/app/Modelos/modeloChefs';



@Component({
  selector: 'comentarios-chef',
  templateUrl: './comentarios-chef.component.html',
  styleUrls: ['./comentarios-chef.component.scss']
})
export class ComentariosChefComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private _chefServ:serviciochefs, private _chefCommServ:ServicioChefCommentsService) { }
  
  listaChefs = null;
  listaComments = null;
 

  ngOnInit() {

    // this.listaComments = this._chefCommServ.getComments(this.listaChefs[this.chefId].comentarios);
    this._route.params.subscribe(parametros=>{

      var theChef:Chef = null;
      this.listaChefs = this._chefServ.getChefs();
    
      theChef = this.listaChefs.filter(aChefObj => aChefObj.chefId == parametros);
        // const comentarios=this.listaChefs[parametros.chefId].comentarios;
      
      
      this.listaComments = this._chefCommServ.getComments(theChef.comentarios);

    })
  
  };

}
