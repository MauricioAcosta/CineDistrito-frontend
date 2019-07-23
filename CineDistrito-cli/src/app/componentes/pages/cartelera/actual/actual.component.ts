import { Component, OnInit } from '@angular/core';

//servicio
import { ObtenerPeliculasService } from 'src/app/servicios/cartelera/obtener-peliculas.service';
import { CompartirDatoPeliculaCarteleraReservaService } from 'src/app/servicios/cartelera-reserva/compartir-dato-pelicula-cartelera-reserva.service';
import {ObtenerPeliculasCinemarkService} from 'src/app/servicios/cartelera/obtener-peliculas-cinemark.service';

//modulo
import { Fkpelicula } from 'src/app/models/obtener-peliculas';
import { Pelicula } from 'src/app/models/cinemark/peliculas';
import { Multiplex } from 'src/app/models/cinemark/multiplex';


@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.scss']
})
export class ActualComponent implements OnInit {

  public datosPeliculas: Fkpelicula[];
  public idPeliculasGuardadas:Number[];
  private currentseccion:boolean;


  constructor(private ObtenerPeliculasService: ObtenerPeliculasService,
              private CompartirDatoPeliculaCarteleraReservaService:CompartirDatoPeliculaCarteleraReservaService,
              private ObtenerPeliculasCinemarkService:ObtenerPeliculasCinemarkService) {
    this.datosPeliculas = [];
    this.idPeliculasGuardadas = [];
    this.currentseccion = true;
    this.lista_peliculas_registradasCM = [];

    //Cinemark

    this.lista_peliculas_CM = [];

    this.multiplexSeleccionado = "...";

    this.lista_Multiplex_CM =[
      {id: 2406, nombre: "Trebolis El Porvenir"},
      {id: 791, nombre: "Atlantis"},
      {id: 2407, nombre: "Mi Centro El Porvenir"},
      {id: 2401, nombre: "Gran Plaza Soacha"},
      {id: 792, nombre: "Floresta"}
    ];
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


  ///////////////////////////////////////////////////////////////////////
  //SECCION CINEMARK
  ///////////////////////////////////////////////////////////////////////

  private lista_peliculas_CM:Pelicula[];
  private lista_peliculas_registradasCM:String[];
  private lista_Multiplex_CM:Multiplex[];
  private multiplexSeleccionado:String;


  cambiarSeccion(){
    if (this.lista_peliculas_CM.length==0){
      this.onChangeMultiplex();
    }
    if (this.currentseccion==true){
      this.currentseccion = false
    }else{
      this.currentseccion = true;
    }
  }

  getSelectedMultiplexId(){
    let multiplex = this.multiplexSeleccionado;
    return this.lista_Multiplex_CM.find(function(element){return element.nombre==multiplex}).id;
  }

  onChangeMultiplex(){
    if(this.multiplexSeleccionado!="..."){
      this.cargarPeliculasCM(this.getSelectedMultiplexId());
    }else{
      this.lista_peliculas_CM =[];
      this.lista_peliculas_registradasCM = [];
    }
  }

  cargarPeliculasCM(idCinema){
    this.lista_peliculas_CM =[];
    this.lista_peliculas_registradasCM = [];
    this.ObtenerPeliculasCinemarkService.obtenerPeliculas(idCinema).subscribe(
      data=>{
        for (let item of data){
          for (let item2 of item.movies){
            if((!this.lista_peliculas_registradasCM.includes(item2.corporate_film_id))){
              this.lista_peliculas_CM.push(item2);
              this.lista_peliculas_registradasCM.push(item2.corporate_film_id);
            }
          }
        }
      },
      error=>{console.error(error)}
    );
  }

  redirigirCM(pelicula:Pelicula){
    window.open('https://www.cinemark.com.co/movie?tag='+this.getSelectedMultiplexId()+'&corporate_film_id='+pelicula.corporate_film_id);
  }


}
