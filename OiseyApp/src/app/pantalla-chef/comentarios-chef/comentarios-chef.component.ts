import { Component, OnInit, Input } from '@angular/core';
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
  
  @Input() chef: Chef;

  constructor(private _chefCommServ:ServicioChefCommentsService) { }
  
  listaComments = null;
 
  ngOnInit() {

    this.listaComments = this._chefCommServ.getComments(this.chef.comentarios);
  
  };

}
