import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Factura } from 'src/app/models/reserva/factura';

@Injectable({
  providedIn: 'root'
})
export class ObtenerFacturaService {

  constructor(private HttpClient:HttpClient) {
    
   }

  obtenerFactura(fk_reserva){
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Authorization", "Basic " + localStorage.getItem('currentUser'));
    
    return this.HttpClient.get<Factura>("http://192.168.43.110:8080/api/v1/pagos/factura/"+fk_reserva+"?format=json",{headers:myheaders});
  }
}
