import { Component, OnInit } from '@angular/core';
import { ServicioChefCommentsService } from 'src/app/services/servicio-chef-comments.service';
import { serviciochefs } from 'src/app/services/serviciochefs.service';

@Component({
  selector: 'valorarcomentar',
  templateUrl: './valorarcomentar.component.html',
  styleUrls: ['./valorarcomentar.component.scss']
})
export class ValorarcomentarComponent implements OnInit {
  comentarios=null;

  constructor(private _chefCommServ:ServicioChefCommentsService, private _chefServ:serviciochefs) { };

  ngOnInit() {
   
    this._chefCommServ.getComments();

  }

}
