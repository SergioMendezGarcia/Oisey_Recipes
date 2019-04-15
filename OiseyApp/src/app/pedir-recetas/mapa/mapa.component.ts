import { Component, OnInit } from '@angular/core';
import { serviciochefs } from 'src/app/services/serviciochefs.service';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})




export class MapaComponent implements OnInit {

  constructor(private _chefServ: serviciochefs) { }


  ngOnInit() {
    var scr;
    scr = document.createElement("script");
    scr.textContent = `
    
    function initMap()
    {
      map = new google.maps.Map( document.getElementById('map'), 
                                  { zoom: 20, center: { lat: 41.3973938, lng: 2.1900901 } } );
    }                            
    console.log('meh');`
    document.body.appendChild(scr);
    scr = document.createElement("script");
    scr.async = true;
    scr.defer = true;
    scr.async = true;
    scr.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCipCsBpdMwnAfPf1a0znSM2KacrEgclKY&callback=initMap";
    document.body.appendChild(scr);
    
    
    
      
      
    
    
      
  
  
// Initialize and add the map








}



}
