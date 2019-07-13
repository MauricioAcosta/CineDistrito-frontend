import { Component, OnInit } from '@angular/core';

//servicio
import {CompartirDatoPeliculaCarteleraReservaService} from 'src/app/servicios/cartelera-reserva/compartir-dato-pelicula-cartelera-reserva.service';
import {ObtenerListaMultiplexService} from 'src/app/servicios/reserva/obtener-lista-multiplex.service';
import {ObtenerListaFuncionesService} from 'src/app/servicios/reserva/obtener-lista-funciones.service'

//modelo
import { Fkpelicula } from 'src/app/models/obtener-peliculas';
import { Multiplex } from 'src/app/models/reserva/multiplex';
import {Funcionsala} from 'src/app/models/reserva/funcionsala';


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
  public multiplexSeleccionado:string;

  constructor(private CompartirDatoPeliculaCarteleraReservaService:CompartirDatoPeliculaCarteleraReservaService,
              private ObtenerListaMultiplexService:ObtenerListaMultiplexService,
              private ObtenerListaFuncionesService:ObtenerListaFuncionesService) {

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
    alert(this.multiplexSeleccionado);
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

  obtenerMultiplexPorNombre(nombre){
    return this.multiplex_Lista.find(function(element){return element.v_nombre==nombre}).id;
  }

  verificarestado_sillas(){

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