import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

//modelo
import { Multiplex } from 'src/app/models/reserva/multiplex';

@Injectable({
  providedIn: 'root'
})

export class ObtenerListaMultiplexService {

  private baseURL:string;
  private format:string;

  constructor(private httpClient: HttpClient) { 
    this.baseURL = `http://192.168.43.110:8080/api/v1/funciones/peliculas-multiplex/`;
    this.format = `/?format=json`

  }

  public obtenerMultiplexLista(idPelicula){
    return this.httpClient.get<Multiplex[]>(this.baseURL+idPelicula+this.format);
  }
}
