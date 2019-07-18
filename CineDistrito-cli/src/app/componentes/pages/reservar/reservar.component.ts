import { Component, OnInit } from '@angular/core';


//servicio
import {CompartirDatoPeliculaCarteleraReservaService} from 'src/app/servicios/cartelera-reserva/compartir-dato-pelicula-cartelera-reserva.service';
import {ObtenerListaMultiplexService} from 'src/app/servicios/reserva/obtener-lista-multiplex.service';
import {ObtenerListaFuncionesService} from 'src/app/servicios/reserva/obtener-lista-funciones.service';
import {ObtenerListadoSillasService} from 'src/app/servicios/reserva/obtener-listado-sillas.service';
import {CambiarEstadoEnProcesoService} from 'src/app/servicios/reserva/cambiar-estado-en-proceso.service'

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
  public seatsReady:boolean;
  public functionsReady:boolean;
  public error_log_in:string;
  public waitingResponse:boolean;

  constructor(private CompartirDatoPeliculaCarteleraReservaService:CompartirDatoPeliculaCarteleraReservaService,
              private ObtenerListaMultiplexService:ObtenerListaMultiplexService,
              private ObtenerListaFuncionesService:ObtenerListaFuncionesService,
              private ObtenerListadoSillasService:ObtenerListadoSillasService,
              private CambiarEstadoEnProcesoService:CambiarEstadoEnProcesoService) {

    this.seatsState = [];
    this.seatsReady = false;
    this.functionsReady = false;
    this.error_log_in = "";
    this.waitingResponse = false;
  }

  ngOnInit() {
    this.info_pelicula = this.CompartirDatoPeliculaCarteleraReservaService.getPelicula();
    //getting Multiplex list
    this.ObtenerListaMultiplexService.obtenerMultiplexLista(this.info_pelicula.id).subscribe
    (data=>{this.multiplex_Lista = data},error => {console.error(error)});

    let s:String[]=[];
  }


  onChangeMultiplex(){
    this.functionsReady = false;
    this.seatsReady= false;
    this.waitingResponse = false;
    if (this.multiplexSeleccionado!="..."){
      //getting FuncionesSalas list -test
      this.ObtenerListaFuncionesService.obtenerFuncionesSalas(this.obtenerMultiplexPorNombre(this.multiplexSeleccionado),this.info_pelicula.id).subscribe(
        data=>{ this.funcion_lista = data; this.functionsReady = true;},
        error=>{console.error(error)}
      )
    }
  }

  onChangeFunciones(){
    this.error_log_in = "";
    this.seatsReady= false;
    this.waitingResponse = false;
    if (this.funcionSeleccionada!="..."){
      let indice = +this.funcionSeleccionada.split(':')[0] - 1;
      console.log('Funcion seleccionada Sala:'+this.funcion_lista[indice].fk_sala.id+' Funcion'+this.funcion_lista[indice].fk_funcion.id)
      this.obtenerEstadoSillas(this.funcion_lista[indice].fk_sala.id,this.funcion_lista[indice].fk_funcion.id);
      this.waitingResponse = true;
    }
  }

  obtenerMultiplexPorNombre(nombre){
    return this.multiplex_Lista.find(function(element){return element.v_nombre==nombre}).id;
  }

  obtenerEstadoSillas(idSala,idFuncion){
    this.ObtenerListadoSillasService.obtenerListado(idFuncion,idSala).subscribe(
      data=>{
        this.silla_lista = data;
        this.actualizarEstadosSillas();
      },
      error=>{
        this.error_log_in = "Debe ingresar sus credenciales antes de continuar";
        this.waitingResponse = false;
        console.error(error);
      }
    )
  }

  actualizarEstadosSillas(){
    for (let silla of this.silla_lista.disponible){
      this.seatsState[+silla.i_orden] = "available";
    }
    for (let silla of this.silla_lista.proceso){
      this.seatsState[+silla.fk_silla.i_orden]="onprocess";
    }
    for (let silla of this.silla_lista.reservadas){
      this.seatsState[+silla.fk_silla.i_orden]="reserved";
    }
    this.seatsReady= true;
    this.waitingResponse = false;
  }
  


  seleccionarSilla(i_numsilla){
    if (this.seatsState[i_numsilla]=="reserved"){
      alert('La sillas que has seleccionado ya se encuentra reservada');
    }else if (this.seatsState[i_numsilla]=="onprocess"){
      alert('La sillas que has seleccionado ya se encuentra en proceso');
    }else{
      let indice = +this.funcionSeleccionada.split(':')[0] - 1;
      let idSilla = this.silla_lista.disponible.find(function(element){return element.i_orden==i_numsilla}).id;
      console.log('S '+idSilla+' FS'+this.funcion_lista[indice].id+' R'+this.silla_lista.reserva.id+' F'+this.funcion_lista[indice].fk_funcion.id+' S'+this.funcion_lista[indice].fk_sala.id);
      this.CambiarEstadoEnProcesoService.cambiarEstadoEnProceso(idSilla,this.funcion_lista[indice].id,this.silla_lista.reserva.id,this.funcion_lista[indice].fk_funcion.id,this.funcion_lista[indice].fk_sala.id).subscribe(
        data=>{
                console.log(data)
                this.onChangeFunciones();
              },
        error=>{console.error(error)}
      );
    }
  
  }



}