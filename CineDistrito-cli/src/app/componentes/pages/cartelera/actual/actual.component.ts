import { Component, OnInit } from '@angular/core';

//servicio
import { ObtenerPeliculasService } from 'src/app/servicios/cartelera/obtener-peliculas.service';

//modulo
import { Fkpelicula } from 'src/app/models/obtener-peliculas';

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.scss']
})
export class ActualComponent implements OnInit {

  public datosPeliculas: Fkpelicula[];

  constructor(private ObtenerPeliculasService: ObtenerPeliculasService) {
    this.datosPeliculas = [];
   }

  ngOnInit() {
    this.ObtenerPeliculasService.obtenerPeliculas().subscribe(data => {
      let auxdatosPeliculas = data;
      for (let funcion of auxdatosPeliculas.results){
        if (funcion.v_estado=="activa"){
          this.datosPeliculas.push(funcion.fk_pelicula);
        }
      }
      console.log(this.datosPeliculas[0].v_nombre);
    },
      error => {
        console.error(error);
      }
    );
  }

}
