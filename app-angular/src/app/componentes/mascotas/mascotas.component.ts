import { Component, OnInit } from '@angular/core';
import {MascotasService} from '../../servicios/mascotas.service';
import {Mascota} from '../../clases/mascota';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  mascotas: Array<MascotasComponent> = [];
  visible: boolean = false;

  public nombre:string;
  public edad;
  public sexo;
  public tipo;

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

  private agregarMascota() //Mascota:MascotasComponent){
  {
      
   // let nombre = $('#nombre').val();
    //let edad = $('#edad').val();
   // let sexo = $("input[name='sexo']:checked").val();
   // let tipo = $('#tipo').val();

    let unaMascota:Mascota= new Mascota(this.nombre, this.edad,this.sexo,this.tipo, this.servicio);

   // let mmascota:MascotasComponent = new MascotasComponent(this.servicio); 
        //console.info(Mascota);

   // let laMascota:Mascota=new Mascota(this.nombre, this.edad, this.sexo, this.tipo, servicio)
        this.servicio.addMascota(unaMascota).subscribe(data => {
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