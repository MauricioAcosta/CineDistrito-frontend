import { Component, OnInit } from '@angular/core';

//servicio
import {ObtenerInformacionPeliculaIMDbService} from '../../../servicios/obtener-informacion-pelicula-imdb.service'


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {

  public info_pelicula:any;
  public id_IMDb:any;

  constructor(private ObtenerInformacionPeliculaIMDbService:ObtenerInformacionPeliculaIMDbService) {
    this.id_IMDb = 'tt6108178';
  }

  ngOnInit() {
    this.ObtenerInformacionPeliculaIMDbService.obtenerInformacionelicula(this.id_IMDb).subscribe(
      data => {
        this.info_pelicula = data;
        console.log(data)
      },
      error => {
        console.error(error);
      }
    );
  }

}
