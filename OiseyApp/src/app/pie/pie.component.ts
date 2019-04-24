import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  src='../assets/img/ORfooter.png';
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (location.href.indexOf('vegan') >= 0) {
      this.src='../assets/img/ORvegan.png';
    }else if (location.href.indexOf('postre') >= 0) {
      this.src= '../assets/img/ORpostre.png';
    }else{
      this.src= '../assets/img/ORfooter.png';
    }

}

}
