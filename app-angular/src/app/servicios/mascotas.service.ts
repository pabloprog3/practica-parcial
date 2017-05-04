import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers,RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Mascota} from '../clases/mascota';

import {MascotasComponent} from '../componentes/mascotas/mascotas.component';


@Injectable()
export class MascotasService {
  private apiUrl = "http://localhost:8080/practica-parcial/ws/vendor/slim/slim/mascotas";
  
  constructor(private http:Http) { }

 
 getMascotas(): Observable<MascotasComponent[]>{
    return this.http.get(this.getUrl('/listado')).map(this.getDatos).catch(this.error);
  }



  addMascota(entidad:Mascota):Observable<MascotasComponent>{
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




/*

  import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DatosService {

  constructor( public http: Http )
  {

  }
  
  traerDatos ()
  {
    let url = 'http://localhost/abm_apirest/index.php/traerTodos';
    return this.http
      .get( url )
      .toPromise()
      .then( this.extractData )
      .catch( this.handleError );
  }


  crearPersona ( persona )
  {
    let url = 'http://localhost/abm_apirest/apirest.php/registro/';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    return this.http
      .post(url, persona, options)
      .toPromise()
      .then( this.extractData )
      .catch( this.handleError );
  }

  editarPersona ( persona )
  {
    let url = 'http://localhost/abm_apirest/apirest.php/registros/';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });    
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    return this.http
      .put(url, persona, options)
      .toPromise()
      .then( this.extractData )
      .catch( this.handleError );
  }

  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }

}


*/




/*

import { Component } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { DatosService } from './services/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: String = 'Personas!';
  
  source: LocalDataSource = new LocalDataSource();

  settings = {
    //mode: 'external',
    add: {
      addButtonContent: 'Agregar', //how to call some function to this one
      // createButtonContent: 'Confirmar',
      // cancelButtonContent: 'Cancelar',
      confirmCreate: true
    },
    edit: {
      // editButtonContent: '',
      // createButtonContent: '',
      // cancelButtonContent: '',
      confirmSave: true,
    },

    noDataMessage: 'No hay datos disponibles',

    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: false
    },

    pager: {
      perPage: 50,
      display: true
    },

    columns: {
      id: {
        title: 'ID'
      },
      nombre: {
        title: 'Nombre'
      },
      apellido: {
        title: 'Apellido'
      },
      dni: {
        title: 'dni'
      },
      foto: {
        title: 'foto',
        type: 'html',
        valuePrepareFunction: (value) => { return '<img src="'+ value +'" alt="">';  }
      }
    }
  }

  // data = [
  //   {
  //     id: 1,
  //     name: 'Jorge',
  //     email: 'jorge@mail.com'
  //   },
  //   {
  //     id: 2,
  //     name: 'Pepe',
  //     email: 'pepe@mail.com'
  //   },
  //   {
  //     id: 3,
  //     name: 'Carlos',
  //     email: 'carlos@mail.com'
  //   }
  // ];

  constructor ( public datos: DatosService )
  {
    // Carga alternativa
    // this.source.load(this.data);
    //console.log(this.datas);
    datos.traerDatos()
    .then(data => {
      console.log(data);
      this.source.load(data);
    })
  }


  editar ( e )
  {
    console.log(e);


    //     var persona = {id: 4898, nombre:"Facundo", apellido:"Varela", dni:"32184", foto:"341654.jpg"};
    // //var pers = encodeURIComponent(JSON.stringify({id: "4898", "nombre":"lautaro", "apellido":"Riveiro", "dni":"32184", "foto":"341654.jpg"}));
    // var pers = this.xwwwfurlenc(persona);
    // //alert(pers);
    // this.datos.crearPersona(pers)
    // .then(data => {
    //   console.log("RESPUESTAAAA", data);
    // })

    console.log("Evento modificar: ",e);
    //var persona = {id: 4898, nombre:"Facundo", apellido:"Varela", dni:"32184", foto:"341654.jpg"};
    var pers = this.xwwwfurlenc(e.newData);
    this.datos.editarPersona(pers)
    .then(data => {
      console.log("Editar: ", data);
      e.confirm.resolve();
    })


  }

  agregar ( e )
  {
    console.log("Evento crear: ",e);
    //var persona = {id: 4898, nombre:"Facundo", apellido:"Varela", dni:"32184", foto:"341654.jpg"};
    var pers = this.xwwwfurlenc(e.newData);
    this.datos.crearPersona(pers)
    .then(data => {
      console.log("Alta: ", data);
      e.confirm.resolve();
    })
  }

  //Función para pasar de formato JSON a formato x-www-form-urlencoded
  xwwwfurlenc(srcjson){
    if(typeof srcjson !== "object")
      if(typeof console !== "undefined"){
        console.log("\"srcjson\" is not a JSON object");
        return null;
      }
    var u = encodeURIComponent;
    var urljson = "";
    var keys = Object.keys(srcjson);
    for(var i=0; i <keys.length; i++){
        urljson += u(keys[i]) + "=" + u(srcjson[keys[i]]);
        if(i < (keys.length-1))urljson+="&";
    }
    return urljson;
  }

}


*/