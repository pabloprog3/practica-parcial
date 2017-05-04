import { Component} from '@angular/core';

import {MascotasService} from '../servicios/mascotas.service';


export class Mascota{

    public nombre:string;
    public edad: string;
    public sexo: string;
    public tipo: string;
    //public id: number;

    mascotas: Array<Mascota>;

    constructor (_nombre:string, _edad:string, _sexo:string, _tipo:string, private servicio:MascotasService){
        this.nombre = _nombre;
        this.edad = _edad;
        this.sexo = _sexo;
        this.tipo = _tipo;
 
    }

    getNombre(){
        return this.nombre;
    }
    getEdad(){
        return this.edad;
    }
    getSexo(){
        return this.sexo;
    }
    getTipo(){
        return this.tipo;
    }


}


