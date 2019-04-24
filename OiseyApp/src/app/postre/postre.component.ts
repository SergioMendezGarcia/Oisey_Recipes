import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'postre',
  templateUrl: './postre.component.html',
  styleUrls: ['./postre.component.scss']
})
export class PostreComponent implements OnInit {
  getRecetas(): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
  }

}
