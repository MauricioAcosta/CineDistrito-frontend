import { Injectable } from '@angular/core';

//model
import { Fkpelicula } from 'src/app/models/obtener-peliculas';

@Injectable({
  providedIn: 'root'
})

export class CompartirDatoPeliculaCarteleraReservaService {

  private infoPelicula:Fkpelicula;

  constructor() { }

  setPelicula(pelicula:Fkpelicula){
    this.infoPelicula = pelicula;
  }

  getPelicula(){
    return this.infoPelicula;
  }
}
