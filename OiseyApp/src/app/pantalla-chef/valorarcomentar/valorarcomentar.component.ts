import { Component, OnInit, Input } from '@angular/core';
import { ServicioChefCommentsService } from 'src/app/services/servicio-chef-comments.service';
import { serviciochefs } from 'src/app/services/serviciochefs.service';
import { Chef } from 'src/app/Modelos/modeloChefs';

@Component({
  selector: 'valorarcomentar',
  templateUrl: './valorarcomentar.component.html',
  styleUrls: ['./valorarcomentar.component.scss']
})
export class ValorarcomentarComponent implements OnInit {

  @Input() chef: Chef;
  texto='';
  
  constructor(private _chefCommServ:ServicioChefCommentsService, private _chefServ:serviciochefs) { };

  ngOnInit() {
  }

  puntuar(puntuacion){
    console.log(puntuacion);
    this._chefServ.putValoracion(this.chef._id, puntuacion).subscribe(data=>{
      console.log('data:',data);
    })
  }
  comentar(comentario){
    console.log(comentario);
    this._chefServ.pushComentario(this.chef._id,comentario).subscribe(datos=>{
      console.log('data',datos)
    })
  }
 
}
