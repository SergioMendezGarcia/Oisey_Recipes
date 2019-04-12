import { Component, OnInit } from '@angular/core';
import { serviciochefs } from 'src/app/services/serviciochefs.service';
import { ServicioChefCommentsService } from 'src/app/services/servicio-chef-comments.service';
import { ComentarioChef } from 'src/app/Modelos/comentario-chef';
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

    // this.listaChefs = this._chefServ.getChefs();
    // this.listaComments = this._chefCommServ.getComments(this.listaChefs[this.chefId].comentarios);
    this._route.params.subscribe(parametros=>{
      console.log('Parámetros: ', parametros.tid);
      const tid=parametros.tid;
      const theTask = this._chefServ.getChefs();
      console.log('The task: ',theTask);
    })
  
  };

}
