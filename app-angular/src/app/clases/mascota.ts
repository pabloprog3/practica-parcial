import { Component} from '@angular/core';




export class Mascota{

    public nombre:string;
    public edad: number;
    public sexo: string;
    public tipo: string;
    public id: number;


    constructor (_nombre:string, _edad:number, _sexo:string, _tipo:string){
        this.nombre = _nombre;
        this.edad = _edad;
        this.sexo = _sexo;
        this.tipo = _tipo;

    }


}


