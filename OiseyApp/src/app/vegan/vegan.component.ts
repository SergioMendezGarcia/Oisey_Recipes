import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vegan',
  templateUrl: './vegan.component.html',
  styleUrls: ['./vegan.component.scss']
})
export class VeganComponent implements OnInit {
  getRecetas(): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
  }

}
