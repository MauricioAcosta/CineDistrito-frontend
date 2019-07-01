import { Component, OnInit } from '@angular/core';

//servicio
import { ObtenerPeliculasService } from 'src/app/servicios/cartelera/obtener-peliculas.service';
import { CompartirDatoPeliculaCarteleraReservaService } from 'src/app/servicios/cartelera-reserva/compartir-dato-pelicula-cartelera-reserva.service';

//modulo
import { Fkpelicula, ObtenerPeliculas } from 'src/app/models/obtener-peliculas';

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.scss']
})
export class ActualComponent implements OnInit {

  public datosPeliculas: Fkpelicula[];
  constructor(private ObtenerPeliculasService: ObtenerPeliculasService,private CompartirDatoPeliculaCarteleraReservaService:CompartirDatoPeliculaCarteleraReservaService) {
    this.datosPeliculas = [];
   }

  ngOnInit() {
    let jsonpage = 1;
    let next=0;
    let snext:String[]=[];

    this.datosPeliculas = this.ObtenerPeliculasService.obtenerPeliculas();
   
  }

  enviarDatosAlServicio(pelicula:Fkpelicula){
    this.CompartirDatoPeliculaCarteleraReservaService.setPelicula(pelicula);
  }
}
