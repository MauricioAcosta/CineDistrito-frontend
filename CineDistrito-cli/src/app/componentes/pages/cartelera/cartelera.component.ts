import { Component, OnInit } from '@angular/core';

//servicio
import {ObtenerPeliculasService} from '../../../servicios/cartelera/obtener-peliculas.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent implements OnInit {

  constructor(private ObtenerPeliculasService:ObtenerPeliculasService) { }

  ngOnInit() {
    this.ObtenerPeliculasService.obtenerPeliculas().subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.error(error);
      }
    );
  }

}
