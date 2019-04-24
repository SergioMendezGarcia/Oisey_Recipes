import { Component, OnInit, Input } from '@angular/core';
import { serviciochefs } from 'src/app/services/serviciochefs.service';
import { Chef } from 'src/app/Modelos/modeloChefs';


@Component({
  selector: 'valorarcomentar',
  templateUrl: './valorarcomentar.component.html',
  styleUrls: ['./valorarcomentar.component.scss']
})
export class ValorarcomentarComponent implements OnInit {

  @Input() chef: Chef;
  texto:string=null;

  puntuacion:number=0;

  
  constructor(private _chefServ:serviciochefs) { };

  ngOnInit() {

  }

  puntuar(puntuacion){
    console.log(puntuacion);
    /* this._chefServ.putValoracion(this.chef._id, puntuacion).subscribe(data=>{
      console.log('data:',data);
    
    })  */ 
    this.puntuacion=puntuacion;
    
  }
  
  comentar(){
    console.log('puntuacion: ', this.puntuacion, 'comentario: ', this.texto);
    this._chefServ.putCommentRating(this.chef._id,this.texto,this.puntuacion).subscribe(datos=>{
      console.log('data',datos)
    });

       
  }
  
}
