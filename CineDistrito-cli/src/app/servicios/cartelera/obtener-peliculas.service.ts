import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//interfaces models for json
import { ObtenerPeliculas } from 'src/app/models/obtener-peliculas';

@Injectable({
  providedIn: 'root'
})
export class ObtenerPeliculasService {

  constructor(private httpClient: HttpClient) { }

  public obtenerPeliculas() {
    return this.httpClient.get<ObtenerPeliculas>(`http://127.0.0.1:8000/api/v1/funciones/funciones/?format=json`);
  }
}
