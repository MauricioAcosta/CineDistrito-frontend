import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenerarPagoService {

  constructor(private httpClient:HttpClient) { }

  enviarPago(metodo_pago, pk_reserva){

    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Authorization", "Basic " + localStorage.getItem('currentUser'));
    myheaders = myheaders.append("Content-Type", "application/json");

    let body = JSON.stringify({v_metodopago:metodo_pago});

    console.log("Cuerpo enviarPago -> "+body);

    return this.httpClient.post<any>('http://192.168.43.110:8080/api/v1/pagos/pago/'+pk_reserva,body,{headers:myheaders});
  }
}