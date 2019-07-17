import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personas } from 'src/app/models/personas';
import { Peliculas } from 'src/app/models/peliculas';

@Injectable({
  providedIn: 'root'
})

export class QueryService {
  constructor(private httpClient: HttpClient) {
  }
  public GetPersonas() {
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Authorization", "Basic " + btoa("admin:admin123"));
    myheaders = myheaders.append("Content-Type", "application/x-www-form-urlencoded");
    const httpOptions = { headers: myheaders };
    return this.httpClient.get<Personas>('http://localhost:8000/api/v1/usuarios/personas', httpOptions);
  }
  public GetPeliculas() {
    return this.httpClient.get<Peliculas>('http://localhost:8000/api/v1/funciones/peliculas/');
  }
}
