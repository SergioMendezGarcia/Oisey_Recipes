
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

	function createStars ( stars )
	{
		
		element = document.createElement("p");
		

		for (i = 0 ; i <= stars ; i++ )
		{
			element.appendChild(document.createElement("img")).src="https://cdn0.iconfinder.com/data/icons/essen/32/star.png";
		}
		return element;
		
	}
	function createWindow( event, chef )
	{
		if (this.win) this.win.remove();
	
    win = document.getElementById("map").appendChild(document.createElement("main"));
    win.style.backgroundColor="rgba(244,244,244, 1)";
		win.style.width = "300px";
		win.style.boxShadow = "1px 4px 4px #ccc";
		win.style.borderRadius = "3%";
		win.style.position = "absolute";
		win.style.left = "3%";
		win.style.top = "9%";
    win.style.padding = "2.5%";
		win.appendChild(document.createElement("h1")).textContent = chef.nombre;
		win.appendChild( img = document.createElement("img")).src= chef.avatar;
		img.style.width = "100px";
		img.style.height = "100px";
    img.style.marginBottom = "1%";
    img.style.margin = "auto";
		section = win.appendChild(document.createElement("article")).appendChild(document.createElement("section"));
    section.appendChild(subtitles = document.createElement("h6")).textContent = "Especialidad:";
    subtitles.style.fontWeight = "bold";
		section.appendChild( p = document.createElement("p")).textContent = chef.especialidad.toString();
		p.style.margin = "1%";
		p.style.wordWrap = "break-word";
		section.appendChild( createStars(chef.estrellas) );
    section.appendChild(subtitles = document.createElement("h6")).textContent = "Comentarios:";
    subtitles.style.fontWeight = "bold";
    section.appendChild(document.createElement("p")).textContent = chef.comentarios;
  
    win.appendChild( boton = document.createElement("div"));
    boton.style.backgroundColor = "#0099ff";
    boton.style.backgroundColor = "#0063cf";
    boton.style.width = "120px";
    boton.style.height = "24px";
    boton.style.boxShadow = "0 0 3px black";
    boton.style.borderRadius = "5%";
    boton.style.border = "none";
    boton.style.marginBottom = "15px";
  
   
    
    boton.appendChild( link = document.createElement("a"));
    boton.id = "boton";
    link.href="/#/chefs/5cc16cd910989e3048ef88bd";
    link.textContent = "Haz tu pedido";
    link.style.color =  "white";
    link.style.marginLeft = "9%";
   
    
    
		
		

	}
    function initMap()
    {
  

    nombres = ["Pedro", "Juan", "Luis", "Maria","Juana","May Jin","Nigga","Marc","Antonio","David","Jose","Thor"];
    chefs = [ ];
    imagenes = [ "http://vms.heliohost.org/images/huevo32.png", "http://vms.heliohost.org/images/rosquilla32.png", "http://vms.heliohost.org/images/aguacate32.png"];
    especialidades = ["Comida Asiatica", "Comida Japonesa","Comida Rapida","Tortillas","Resposteria","Comida Italiana","Comida Arabe","Comida Saludable","Comida no Saludable","Comida India" ];
    function chooseRandom( arr )
    {
      arr.filter(()=>{ if ( Math.floor(Math.random() * 50 ) < 25) return true; else false; })
    }
    function makeDecimal ( x, y)
    {
      return parseFloat( x+"."+y);
    }

	
    
      map = new google.maps.Map( document.getElementById('map'), 
                                  { zoom: 9, center: { lat: 41.3973938, lng: 2.1900901 } } );

	function assocWindow ( chef, pos, map )
	{
		marcador =  new google.maps.Marker({position: chef.localizacion, map: map, icon:imagenes[Math.floor(Math.random() * 3)] });

		google.maps.event.addListener( marcador, "click", function (x) { console.log (chef,pos,map, x.latLng); mhe = x; createWindow(x.wa, chef)} );
		
		
		
	}
    
    for ( i = 0 ; i < 12 ; i++ )
    {
        chefs.push( 
          { 
            chefId: i,
            nombre: nombres[i],
            mail: "randomname"+i+"@random.com", 
            avatar: "http://vms.heliohost.org/images/thumbnails/thumbnails/tn_tn_"+(i+1)+".png", 
            especialidad: especialidades.filter(()=>{ if ( Math.floor(Math.random() * 50 ) < 25) return true; else false; }), 
            estrellas: Math.floor(Math.random() * 5), 
            biografia: "Toda mi vida he cocinado y solo quiero seguir cocinando", 
            galeria: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg", 
            localizacion: {lat: makeDecimal(41, Math.random()* 100), lng: makeDecimal(2, Math.random() * 30)}, 
            ciudad: "barcelona",
            comentarios: "Todo muy bueno y barato",
          }
          
        );
	assocWindow(chefs[i], chefs[i].localizacion, map);
    }
	



      
    }                           
    console.log('oh...');`;
    document.body.appendChild(scr);
    scr = document.createElement("script");
    scr.async = true;
    scr.defer = true;
    scr.async = true;
    scr.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCipCsBpdMwnAfPf1a0znSM2KacrEgclKY&callback=initMap";
    document.body.appendChild(scr);
    //document.body.appendChild(document.createElement("p")).textContent = `oh ` +this.a+`...`;
    
    
    
      
      
    
    
      
  
  
// Initialize and add the map








}



}
