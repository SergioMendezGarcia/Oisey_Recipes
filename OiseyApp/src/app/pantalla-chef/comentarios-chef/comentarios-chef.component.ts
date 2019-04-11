import { Component, OnInit } from '@angular/core';
import { serviciochefs } from 'src/app/services/serviciochefs.service';

@Component({
  selector: 'comentarios-chef',
  templateUrl: './comentarios-chef.component.html',
  styleUrls: ['./comentarios-chef.component.scss']
})
export class ComentariosChefComponent implements OnInit {

  constructor(private _chefServ:serviciochefs) { }
  
  listaChefs = null;

  ngOnInit() {

    this.listaChefs = this._chefServ.getChef();
   
  }

}
