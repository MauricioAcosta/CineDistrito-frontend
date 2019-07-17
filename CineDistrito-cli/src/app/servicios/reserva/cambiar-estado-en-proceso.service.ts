import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CambiarEstadoEnProcesoService {

  constructor(private httpClient: HttpClient) { 

  }

  cambiarEstadoEnProceso(idsilla,idfuncionsala,idreserva){
    
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Authorization", "Basic " + localStorage.getItem('currentUser'));
    myheaders = myheaders.append("Content-Type", "application/x-www-form-urlencoded");

    let body = JSON.stringify({ fk_silla: idsilla, fk_funcion_sala: idfuncionsala, fk_reserva: idreserva });

    this.httpClient.post<any>('http://localhost:8000/api/v1/reservas/disponibilidad-sillas/',body,{headers:myheaders});

    
  }
}
