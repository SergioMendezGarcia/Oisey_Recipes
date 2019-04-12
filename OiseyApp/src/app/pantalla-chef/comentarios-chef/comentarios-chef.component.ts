import { Component, OnInit } from '@angular/core';
import { serviciochefs } from 'src/app/services/serviciochefs.service';
import { ServicioChefCommentsService } from 'src/app/services/servicio-chef-comments.service';
import { ActivatedRoute } from '@angular/router';



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
      this.listaChefs = this._chefServ.getChefs();
      console.log('Parámetros: ', parametros.chefId);
      this.listaComments = this._chefCommServ.getComments(this.listaChefs[parametros.chefId].comentarios);
      console.log('Lista de comentarios : ', this.listaComments);
    })
  
  };

}
