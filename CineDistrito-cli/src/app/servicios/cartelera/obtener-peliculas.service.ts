import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerPeliculasService {

  constructor(protected http: HttpClient) { }

  private lista_actual : any;

  obtenerPeliculas() {
    return this.http.get('http://localhost:8000/api/v1/funciones/funciones/?format=json',
    {responseType: 'json'});
  }
}
