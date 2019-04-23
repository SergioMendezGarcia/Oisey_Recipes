import { Component, OnInit, Input } from '@angular/core';
import { ServicioChefCommentsService } from 'src/app/services/servicio-chef-comments.service';
import { serviciochefs } from 'src/app/services/serviciochefs.service';
import { Chef } from 'src/app/Modelos/modeloChefs';

@Component({
  selector: 'valorarcomentar',
  templateUrl: './valorarcomentar.component.html',
  styleUrls: ['./valorarcomentar.component.scss']
})
export class ValorarcomentarComponent implements OnInit {

  @Input() chef: Chef;
  comentarios=null;
 
  
  constructor(private _chefCommServ:ServicioChefCommentsService, private _chefServ:serviciochefs) { };

  ngOnInit() {
  
    this._chefCommServ.getComments(this.chef.comentarios);
 

  }
 
}
