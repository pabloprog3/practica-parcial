import { Component, OnInit } from '@angular/core';
import {MascotasService} from '../../servicios/mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  mascotas: Array<MascotasComponent> = [];

  constructor(private servicio: MascotasService) {

   }


  //Con Observables se utiliza subscribe en lugar de then para promise
  ngOnInit() {
   this.servicio.getMascotas().subscribe(data=>{
    this.mascotas = data;
   });

  // console.log(this.mascotas);
  }


}
