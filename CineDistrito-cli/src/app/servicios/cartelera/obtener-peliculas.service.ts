import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//interfaces models for json
import { ObtenerPeliculas} from 'src/app/models/obtener-peliculas';

@Injectable({
  providedIn: 'root'
})
export class ObtenerPeliculasService {

  private baseURL;

  constructor(private httpClient: HttpClient) { 
    this.baseURL = `http://192.168.43.110:8080/api/v1/funciones/funciones/?format=json`;
  }
  
  public obtenerPeliculas(next) {
    if (next == null){
      return this.httpClient.get<ObtenerPeliculas>(this.baseURL);
    }else{
      return this.httpClient.get<ObtenerPeliculas>(next);
    }
    
  }
}
