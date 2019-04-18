import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'valorarcomentar',
  templateUrl: './valorarcomentar.component.html',
  styleUrls: ['./valorarcomentar.component.scss']
})
export class ValorarcomentarComponent implements OnInit {
  comentarios=null;
  constructor() { };

  ngOnInit() {
    this.comentarios;
  }

}
