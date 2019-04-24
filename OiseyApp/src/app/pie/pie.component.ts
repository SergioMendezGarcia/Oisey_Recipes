import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (location.href.indexOf('vegan') >= 0) {
      document.getElementById('footer').src = '../assets/img/ORvegan.png';
     }else if (location.href.indexOf('postre') >= 0) {
      document.getElementById('footer').src = '../assets/img/ORpostre.png';
  }else{
      document.getElementById('footer').src = '../assets/img/ORfooter.png';
      // document.getElementById('bigHead').style.backgroundColor = '';
    }

}

}
