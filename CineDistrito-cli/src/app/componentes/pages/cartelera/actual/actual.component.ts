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
  public idPeliculasGuardadas:Number[];


  constructor(private ObtenerPeliculasService: ObtenerPeliculasService,private CompartirDatoPeliculaCarteleraReservaService:CompartirDatoPeliculaCarteleraReservaService) {
    this.datosPeliculas = [];
    this.idPeliculasGuardadas = [];
   }

  ngOnInit() {
    this.obtenerPeliculasPorPagina(null);
  }

  obtenerPeliculasPorPagina(page){
    this.ObtenerPeliculasService.obtenerPeliculas(page).subscribe(
      data =>{
        for (let funcion of data.results){
          if (funcion.v_estado=="activa"){
            if (!this.idPeliculasGuardadas.includes(funcion.fk_pelicula.id)){
              this.datosPeliculas.push(funcion.fk_pelicula);
              this.idPeliculasGuardadas.push(funcion.fk_pelicula.id)
            }
          }
        }
        if (data.next!=null){
          this.obtenerPeliculasPorPagina(data.next);
        }
      }
    );
  }

  enviarDatosAlServicio(pelicula:Fkpelicula){
    this.CompartirDatoPeliculaCarteleraReservaService.setPelicula(pelicula);
  }
}
