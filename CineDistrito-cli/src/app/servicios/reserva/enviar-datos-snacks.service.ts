import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnviarDatosSnacksService {

  constructor(private HttpClient:HttpClient) { 

  }

  enviarDatosSnack(i_cantidad,fk_reserva,fk_snack){
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Content-Type", "application/json");

    let body = JSON.stringify({i_cantidad: i_cantidad,fk_reserva: fk_reserva,fk_snack: fk_snack });
    return this.HttpClient.post<any>("http://localhost:8000/api/v1/reservas/snack-reserva/",body,{headers:myheaders});
  }
}
