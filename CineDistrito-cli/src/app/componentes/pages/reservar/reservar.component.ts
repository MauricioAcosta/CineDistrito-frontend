import { Component, OnInit } from '@angular/core';


//servicio
import {CompartirDatoPeliculaCarteleraReservaService} from 'src/app/servicios/cartelera-reserva/compartir-dato-pelicula-cartelera-reserva.service';
import {ObtenerListaMultiplexService} from 'src/app/servicios/reserva/obtener-lista-multiplex.service';
import {ObtenerListaFuncionesService} from 'src/app/servicios/reserva/obtener-lista-funciones.service';
import {ObtenerListadoSillasService} from 'src/app/servicios/reserva/obtener-listado-sillas.service';

//modelo
import { Fkpelicula } from 'src/app/models/obtener-peliculas';
import { Multiplex } from 'src/app/models/reserva/multiplex';
import {Funcionsala} from 'src/app/models/reserva/funcionsala';
import { Sillas } from 'src/app/models/reserva/sillas';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})

export class ReservarComponent implements OnInit {

  public info_pelicula:Fkpelicula;
  public seatsState:String[];
  public multiplex_Lista:Multiplex[];
  public funcion_lista:Funcionsala[];
  public silla_lista:Sillas;
  public multiplexSeleccionado:string;
  public funcionSeleccionada:string;

  constructor(private CompartirDatoPeliculaCarteleraReservaService:CompartirDatoPeliculaCarteleraReservaService,
              private ObtenerListaMultiplexService:ObtenerListaMultiplexService,
              private ObtenerListaFuncionesService:ObtenerListaFuncionesService,
              private ObtenerListadoSillasService:ObtenerListadoSillasService) {

    this.seatsState = [];
    let stateRand:Number;
    for (let i=1; i < 61;i++)
    {
      stateRand = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      this.seatsState.push(this.convertirNumeroAEstado(stateRand));
    }
  }

  ngOnInit() {
    this.info_pelicula = this.CompartirDatoPeliculaCarteleraReservaService.getPelicula();
    //getting Multiplex list
    this.ObtenerListaMultiplexService.obtenerMultiplexLista(this.info_pelicula.id).subscribe
    (data=>{this.multiplex_Lista = data},error => {console.error(error)});

    let s:String[]=[];
  }

  convertirNumeroAEstado(numero:Number){
    if (numero==1){
      return "available";
    }
    else if (numero==2){
      return "active";
    }
    else if (numero==3){
      return "onprocess";
    }
    else if (numero==4){
      return "reserved";
    }
    
  }

  onClickMe() {
    console.log(this.funcionSeleccionada)
    //this.obtenerEstadoSillas();
    /*let stateRand:Number;
    for (let i=1; i < 61;i++)
    {
      stateRand = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      this.seatsState[i-1]=this.convertirNumeroAEstado(stateRand);
    }*/
  }

  onChangeMultiplex(){
    if (this.multiplexSeleccionado!="..."){
      //getting FuncionesSalas list -test
      this.ObtenerListaFuncionesService.obtenerFuncionesSalas(this.obtenerMultiplexPorNombre(this.multiplexSeleccionado),this.info_pelicula.id).subscribe(
        data=>{ this.funcion_lista = data},
        error=>{console.error(error)}
      )
    }else{
      this.funcion_lista = [];
    }
  }

  onChangeFunciones(){
    let indice = +this.funcionSeleccionada.split(':')[0] - 1;
    console.log('Funcion seleccionada Sala:'+this.funcion_lista[indice].fk_sala.i_numsala+' Funcion'+this.funcion_lista[indice].fk_funcion.id)
    this.obtenerEstadoSillas(this.funcion_lista[indice].fk_sala.id,this.funcion_lista[indice].fk_funcion.id);
  }

  obtenerMultiplexPorNombre(nombre){
    return this.multiplex_Lista.find(function(element){return element.v_nombre==nombre}).id;
  }

  obtenerEstadoSillas(idSala,idFuncion){
    this.ObtenerListadoSillasService.obtenerListado(idFuncion,idSala).subscribe(
      data=>{
        this.silla_lista = data;
        console.log(this.silla_lista.disponible[0].v_tipo+' '+this.silla_lista.disponible[0].pk_numero);
      },
      error=>{
        console.error(error)
      }
    )
  }
  

  cambiarestadosilla_disponible(id){
    
  }

  cambiarestadosilla_nodisponible(id){

  }

  cambiarestadosilla_enproceso(id){

  }

  cambiarestadosilla_seleccionada(id){

  }


}