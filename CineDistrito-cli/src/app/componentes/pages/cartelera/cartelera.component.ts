import { Component, OnInit } from '@angular/core';

//servicio
import { ObtenerPeliculasService } from 'src/app/servicios/cartelera/obtener-peliculas.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})

export class CarteleraComponent implements OnInit {

  datosPeliculas: any;

  constructor(private ObtenerPeliculasService: ObtenerPeliculasService) { }

  ngOnInit() {
    this.ObtenerPeliculasService.obtenerPeliculas().subscribe(data => {
      this.datosPeliculas = data;
      console.log("hola: ", this.datosPeliculas);
    },
      error => {
        console.error(error);
      }
    );
  }

}
