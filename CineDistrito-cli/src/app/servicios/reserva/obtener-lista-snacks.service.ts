import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaSnacks } from 'src/app/models/reserva/lista-snacks';

@Injectable({
  providedIn: 'root'
})
export class ObtenerListaSnacksService {

  private baseURL;

  constructor(private httpClient: HttpClient) { 
    this.baseURL = `http://192.168.43.110:8080/api/v1/snacks/snacks/?format=json`;
  }
  
  public obtenerSnacks(next) {
    if (next == null){
      return this.httpClient.get<ListaSnacks>(this.baseURL);
    }else{
      return this.httpClient.get<ListaSnacks>(next);
    }
    
  }
}
