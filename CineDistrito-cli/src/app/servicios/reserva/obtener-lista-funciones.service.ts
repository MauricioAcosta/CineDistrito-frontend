import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

//modelo
import {Funcionsala} from 'src/app/models/reserva/funcionsala';

@Injectable({
  providedIn: 'root'
})
export class ObtenerListaFuncionesService {


  constructor(private httpClient: HttpClient) {
    
  }

  obtenerFuncionesSalas(idMultiplex,idPelicula){
    return this.httpClient.get<Funcionsala[]>('http://192.168.43.110:8080/api/v1/funciones/funciones-multiplex/'+idPelicula+'/'+idMultiplex+'/?format=json');
  }


}
