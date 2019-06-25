import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerInformacionPeliculaIMDbService {

  constructor(protected http: HttpClient) { }

  obtenerInformacionelicula(IMDbID) {
    return this.http.get('http://www.omdbapi.com/?i='+IMDbID+'&apikey=a0245fa6');
  }
}
