import { Component, OnInit } from '@angular/core';
import { serviciochefs } from 'src/app/services/serviciochefs.service';
import { ServicioChefCommentsService } from 'src/app/services/servicio-chef-comments.service';
import { ComentarioChef } from 'src/app/Modelos/comentario-chef';



@Component({
  selector: 'comentarios-chef',
  templateUrl: './comentarios-chef.component.html',
  styleUrls: ['./comentarios-chef.component.scss']
})
export class ComentariosChefComponent implements OnInit {

  constructor(private _chefServ:serviciochefs, private _chefCommServ:ServicioChefCommentsService) { }
  
  listaChefs = null;
  listaComments = null;
  chefId = 0;
 

  ngOnInit() {

    this.listaChefs = this._chefServ.getChefs();
    this.listaComments = this._chefCommServ.getComments(this.listaChefs[this.chefId].comentarios);
  
  };

}
