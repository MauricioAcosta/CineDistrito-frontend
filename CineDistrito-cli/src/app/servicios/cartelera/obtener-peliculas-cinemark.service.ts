import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peliculas_Fecha } from 'src/app/models/cinemark/peliculas';


@Injectable({
  providedIn: 'root'
})
export class ObtenerPeliculasCinemarkService {

  constructor(private httClient: HttpClient) { }

  obtenerPeliculas(idCinema){
    return this.httClient.get<Peliculas_Fecha[]>("https://api.cinemark.com.co/api/vista/data/billboard?cinema_id="+idCinema);
  }
}
