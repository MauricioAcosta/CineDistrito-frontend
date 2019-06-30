import { Component, OnInit } from '@angular/core';

//servicio
import {CompartirDatoPeliculaCarteleraReservaService} from 'src/app/servicios/cartelera-reserva/compartir-dato-pelicula-cartelera-reserva.service';

//modulo
import { Fkpelicula } from 'src/app/models/obtener-peliculas';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {

  public info_pelicula:Fkpelicula;
  public seatsState:String[];

  constructor(private CompartirDatoPeliculaCarteleraReservaService:CompartirDatoPeliculaCarteleraReservaService) {
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
    let stateRand:Number;
    for (let i=1; i < 61;i++)
    {
      stateRand = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      this.seatsState[i-1]=this.convertirNumeroAEstado(stateRand);
    }
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
