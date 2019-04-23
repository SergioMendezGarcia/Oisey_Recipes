import { Component, OnInit } from '@angular/core';
import { serviciochefs } from '../services/serviciochefs.service';


@Component({
  selector: 'pantalla-chef',
  templateUrl: './pantalla-chef.component.html',
  styleUrls: ['./pantalla-chef.component.scss']
})
export class PantallaChefComponent implements OnInit {
  chefs = null;
  constructor(private _chefServ: serviciochefs) { }

  ngOnInit() {
    this.chefs = this._chefServ.getChefs();
    console.log(this.chefs);
  }


}
