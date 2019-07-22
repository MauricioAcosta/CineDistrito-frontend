import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer, Observable, Subscription } from 'rxjs';


//servicio
import {CompartirDatoPeliculaCarteleraReservaService} from 'src/app/servicios/cartelera-reserva/compartir-dato-pelicula-cartelera-reserva.service';
import {ObtenerListaMultiplexService} from 'src/app/servicios/reserva/obtener-lista-multiplex.service';
import {ObtenerListaFuncionesService} from 'src/app/servicios/reserva/obtener-lista-funciones.service';
import {ObtenerListadoSillasService} from 'src/app/servicios/reserva/obtener-listado-sillas.service';
import {CambiarEstadoEnProcesoService} from 'src/app/servicios/reserva/cambiar-estado-en-proceso.service';
import {ObtenerListaSnacksService} from 'src/app/servicios/reserva/obtener-lista-snacks.service';
import {EnviarDatosSnacksService} from 'src/app/servicios/reserva/enviar-datos-snacks.service';
import {ObtenerFacturaService} from 'src/app/servicios/reserva/obtener-factura.service'


//modelo
import { Fkpelicula } from 'src/app/models/obtener-peliculas';
import { Multiplex } from 'src/app/models/reserva/multiplex';
import {Funcionsala} from 'src/app/models/reserva/funcionsala';
import { Sillas, Silla } from 'src/app/models/reserva/sillas';
import { Snack } from 'src/app/models/reserva/lista-snacks';
import { Factura } from 'src/app/models/reserva/factura';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})



export class ReservarComponent implements OnInit {

  private info_pelicula:Fkpelicula;
  private seatsState:String[];
  private multiplex_Lista:Multiplex[];
  private funcion_lista:Funcionsala[];
  private silla_lista:Sillas;
  private multiplexSeleccionado:string;
  private funcionSeleccionada:string;
  private seatsReady:boolean;
  private functionsReady:boolean;
  private error_log_in:string;
  private waitingResponse:boolean;
  private onSillas:boolean;
  private block_FM:boolean;
  

  //timer
  private timeLeft:number;
  private clocksub:Subscription;
  private onTimeLeft:boolean;
  private minutes:number;
  private seconds:number;  

  
  constructor(private CompartirDatoPeliculaCarteleraReservaService:CompartirDatoPeliculaCarteleraReservaService,
              private ObtenerListaMultiplexService:ObtenerListaMultiplexService,
              private ObtenerListaFuncionesService:ObtenerListaFuncionesService,
              private ObtenerListadoSillasService:ObtenerListadoSillasService,
              private CambiarEstadoEnProcesoService:CambiarEstadoEnProcesoService,
              private Router:Router,
              private ObtenerListaSnacksService:ObtenerListaSnacksService,
              private EnviarDatosSnacksService:EnviarDatosSnacksService,
              private ObtenerFacturaService:ObtenerFacturaService) {

    this.onSillas = true;
    this.seatsState = [];
    this.seatsReady = false;
    this.functionsReady = false;
    this.error_log_in = "";
    this.waitingResponse = false;
    this.block_FM = false;
    this.funcionSeleccionada = "";

    //snacks
    this.reservaReady= false;
    this.snackReady = false
    this.snack_Lista = [];
    this.waitingResponseS = false;

    //factura
    this.facturaReady = false;
    this.factura = null;

    //tiempo de reserva
    this.timeLeft = 290;
  }

  ngOnInit() {
    this.clocksub = null;
    this.info_pelicula = this.CompartirDatoPeliculaCarteleraReservaService.getPelicula();
    //getting Multiplex list
    this.ObtenerListaMultiplexService.obtenerMultiplexLista(this.info_pelicula.id).subscribe
    (data=>{this.multiplex_Lista = data},error => {console.error(error)});

    let s:String[]=[];
  }

  //tiempo restante
  calcularReloj(){
    this.timeLeft = this.timeLeft -1;
    if(this.timeLeft<=0){
      alert('Su tiempo de reserva expiró')
      this.Router.navigateByUrl('/cartelera_actual');
    }else{
      this.minutes = parseInt(''+(this.timeLeft/60));
      this.seconds = parseInt(''+(((+this.timeLeft)/60-this.minutes)*60));
    }
  }

  ngOnDestroy(){
    this.liberarSillas();
    if(this.clocksub){
      this.clocksub.unsubscribe();
    }
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
    if(!this.clocksub){
      this.clocksub = timer(0,1000).subscribe(val=>{this.calcularReloj()});
      this.onTimeLeft = true;
    }
    this.block_FM = true;
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
      if (this.seatsState[+silla.fk_silla.i_orden]!="active"){
        this.seatsState[+silla.fk_silla.i_orden]="onprocess";
      }
    }
    for (let silla of this.silla_lista.reservadas){
      this.seatsState[+silla.fk_silla.i_orden]="reserved";
    }

    //verify if there's an active chair to continue with the reserve process
    if (this.seatsState.find(function(element){return element=="active"})){
      this.reservaReady = true;
      this.block_FM = true;
      this.generarListaSnacks(null);
    }else{
      this.block_FM = false;
    }

    this.seatsReady= true;
    this.waitingResponse = false;
  }
  


  seleccionarSilla(i_numsilla){
    this.reservaReady = false;
    if (this.seatsState[i_numsilla]=="reserved"){
      alert('La sillas que has seleccionado ya se encuentra reservada');
    }else if (this.seatsState[i_numsilla]=="onprocess"){
      alert('Se actualizaran las sillas en busca de disponibles');
      this.onChangeFunciones();
    }else{
      let indice = +this.funcionSeleccionada.split(':')[0] - 1;

      let idSilla = this.obtenerSillaId(i_numsilla);

      console.log('S '+idSilla+' FS'+this.funcion_lista[indice].id+' R'+this.silla_lista.reserva.id+' F'+this.funcion_lista[indice].fk_funcion.id+' S'+this.funcion_lista[indice].fk_sala.id);
      this.CambiarEstadoEnProcesoService.cambiarEstadoEnProceso(idSilla,this.funcion_lista[indice].id,this.silla_lista.reserva.id,this.funcion_lista[indice].fk_funcion.id,this.funcion_lista[indice].fk_sala.id).subscribe(
        data=>{
                console.log(data);
                if (data=="El tiempo para terminar la reserva ha finalizado"){
                  alert(data);
                  this.Router.navigateByUrl('/cartelera_actual');
                }else if(data=="La silla se ha bloqueado"){
                  this.seatsState[i_numsilla]="active"
                }else if(data=="La silla se ha liberado"){
                  this.seatsState[i_numsilla]="";
                }
                this.onChangeFunciones();
              },
        error=>{console.error(error)}
      );
    }
  
  }

  obtenerSillaId(i_numsilla){

    let Silla:Silla=null;

    Silla = this.silla_lista.disponible.find(function(element){return element.i_orden==i_numsilla});

    if(Silla == null){
      Silla = this.silla_lista.proceso.find(function(element){return element.fk_silla.i_orden==i_numsilla}).fk_silla;
    }

    if(Silla == null){
      Silla = this.silla_lista.reservadas.find(function(element){return element.fk_silla.i_orden==i_numsilla}).fk_silla;
    }

    return Silla.id;
  }


  /////////////////////////////////////////////////////////////////////////////
  //SECCION DE SNACKS
  /////////////////////////////////////////////////////////////////////////////

  reservaReady:boolean;
  snack_Lista:Snack[];
  snackReady:boolean;
  waitingResponseS:boolean;


  continuarSnacks(){
    this.snackReady = true;
    this.reservaReady = false;
    this.onSillas = false;
  }

  veridseleccionados(){
    for (let snack of this.snack_Lista){
      if(snack.selected){
        console.log('Seleccionado -> '+snack.v_nombre);
      }
    }
  }

  generarListaSnacks(next){
    this.ObtenerListaSnacksService.obtenerSnacks(next).subscribe(
      data=>{
        for (let snack of data.results){
          snack.selected = false;
          snack.cantidad = 1;
          this.snack_Lista.push(snack);
        }
        if (data.next!=null){
          this.generarListaSnacks(data.next);
        }
      },
      error=>{
        console.error(error);
      }
    );
  }

  enviarDatosProductos(){
    this.waitingResponseS = true;
    this.waitingResponse = true;
    let selectedSnack : Snack[] = [];
    for (let item of this.snack_Lista){
      if (item.selected){
        selectedSnack.push(item);
      }
    }
    for (let item of selectedSnack){
      console.log('Se envio -> '+item.v_nombre+' cantidad->'+item.cantidad);
      this.EnviarDatosSnacksService.enviarDatosSnack(item.cantidad,this.silla_lista.reserva.id,item.id).subscribe(
        data=>{
          console.log(data);
          if(item == selectedSnack[selectedSnack.length-1]){
            this.waitingResponseS = false;
            this.waitingResponse = false;
            this.snackReady = false;
            this.obtenerDatosFactura(this.silla_lista.reserva.id);
          }
        },
        error=>{
          console.error(error);
        }
      )
    }
  }

  liberarSillas(){
    let indice = +this.funcionSeleccionada.split(':')[0] - 1;
    for (let seat in this.seatsState){
      if (this.seatsState[seat]=='active'){
        this.CambiarEstadoEnProcesoService.cambiarEstadoEnProceso(
          this.obtenerSillaId(seat),
          this.funcion_lista[indice].id,
          this.silla_lista.reserva.id,
          this.funcion_lista[indice].fk_funcion.id,
          this.funcion_lista[indice].fk_sala.id
        ).subscribe(
          data=>{console.log(seat+' id '+this.obtenerSillaId(seat)+' '+data)},
          error=>{console.error(error)}
        )
      }
    }
  }

  /////////////////////////////////////////////////////////////////////////////
  //SECCION DE FACTURA
  /////////////////////////////////////////////////////////////////////////////

  private facturaReady:boolean;
  private factura:Factura;

  obtenerDatosFactura(fk_reserva){
    this.waitingResponse = true;
    this.ObtenerFacturaService.obtenerFactura(fk_reserva).subscribe(
      data=>{
        this.factura = data;
        this.facturaReady = true;
        this.waitingResponse = false;
      },
      error=>{
        console.error(error);
      }
    )
  }
}