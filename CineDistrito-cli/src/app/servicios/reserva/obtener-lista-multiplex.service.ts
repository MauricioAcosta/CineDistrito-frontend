import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//moddulos
import { Multiplex } from 'src/app/models/reserva/multiplex';

@Injectable({
  providedIn: 'root'
})

export class ObtenerListaMultiplexService {

  private multiplex_lista:Multiplex[];
  private baseURL:string;
  private format:string;

  constructor(private httpClient: HttpClient) { 
    this.multiplex_lista = [];
    this.baseURL = `http://localhost:8000/api/v1/funciones/peliculas-multiplex/`;
    this.format = `/?format=json`

  }

  public obtenerMultiplexLista(idPelicula){
    return this.httpClient.get<Multiplex[]>(this.baseURL+idPelicula+this.format);
  }
}
