import { Component, OnInit } from '@angular/core';
import {MascotasService} from '../../servicios/mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  mascotas: Array<MascotasComponent> = [];
  visible: boolean = false;


  constructor(private servicio: MascotasService) {

   }


  //Con Observables se utiliza subscribe en lugar de then para promise
  ngOnInit() {
   this.servicio.getMascotas().subscribe(data=>{
    this.mascotas = data;
   });

  // console.log(this.mascotas);
  }


   private mostrarAlta(){
    this.visible = true;
  }

  private ocultarFormAlta(){
    this.visible = false;
  }

  private agregarMascota(Mascota:MascotasComponent){

    this.servicio.addMascota(Mascota).subscribe(data => {
          this.mascotas.push(data);

    });

    this.visible = false;
  }


}


/*

import { Component, OnInit } from '@angular/core';
import {MascotasService} from '../../servicios/mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})



export class MascotasComponent implements OnInit {
  mascotas: Array<MascotasComponent> = [];
  visible: boolean = false;

  nombre:string="";
  edad:string="";
  sexo:string="";
  tipo:string="";

  constructor(_nombre, _edad, _sexo, _tipo, private servicio: MascotasService) {
        this.nombre = _nombre;
        this.edad = _edad;
        this.sexo = _sexo;
        this.tipo = _tipo;
   }


  //Con Observables se utiliza subscribe en lugar de then para promise
  ngOnInit() {
     
   this.servicio.getMascotas().subscribe(data=>{
    this.mascotas = data;
   });

  // console.log(this.mascotas);
  }

  private mostrarAlta(){
    this.visible = true;
  }

  private ocultarFormAlta(){
    this.visible = false;
  }

  private agregarMascota(Mascota:MascotasComponent){

    this.servicio.addMascota(Mascota).subscribe(data => {
          this.mascotas.push(data);

    });

    this.visible = false;
  }

}


*/