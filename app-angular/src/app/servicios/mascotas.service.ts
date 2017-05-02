import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {MascotasComponent} from '../componentes/mascotas/mascotas.component';


@Injectable()
export class MascotasService {
  private apiUrl = "http://localhost:8080/practica-parcial/ws/vendor/slim/slim/mascotas";
  
  constructor(private http:Http) { }
  
  getMascotas(): Observable<MascotasComponent[]>{
    return this.http.get(this.getUrl('/listado')).map(this.getDatos).catch(this.error);
  }

  addMascota(entidad:MascotasComponent):Observable<MascotasComponent>{
    return this.http.post(this.getUrl('/agregar'), entidad).map(this.getDatos).catch(this.error);
  }
  
  
  //El objeto Promise ejecuta una operacion y devuelve una respuesta
  //El objeto Observable puede encadenar múltiples operaciones directamente
  //Es mas recomendable el uso de Observables antes que de Promise
  private error(error:any){
    let msg=(error.message) ? error.message : "Error Desconocido";
    return Observable.throw(msg);
  }

  //Response maneja las respuestas de la llamada http
  private getDatos(data:Response){ 
   let datos = data.json();
   return datos;
  }

  private getUrl(modelo:string){
    return this.apiUrl + modelo;
  }




}


