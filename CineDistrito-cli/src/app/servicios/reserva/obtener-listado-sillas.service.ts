import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


//modelos
import { Sillas } from 'src/app/models/reserva/sillas';

@Injectable({
  providedIn: 'root'
})
export class ObtenerListadoSillasService {

  constructor(private httpClient: HttpClient) { }

  obtenerListado(idFuncion, idSala){

    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Authorization", "Basic " + localStorage.getItem('currentUser'));
    myheaders = myheaders.append("Content-Type", "application/x-www-form-urlencoded");

    return this.httpClient.get<Sillas>('http://localhost:8000/api/v1/reservas/disponibilidad-sillas/'+idFuncion+'/'+idSala+'/?format=json',{headers:myheaders});


  }

}
