import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {


  constructor(private http: HttpClient) { 

  }

  login(user: string, pass: string) {

    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Authorization", "Basic " + btoa(user+":"+pass));
    myheaders = myheaders.append("Content-Type", "application/x-www-form-urlencoded");

    const httpOptions = {headers:myheaders};

    return this.http.post<any>('http://127.0.0.1:8000/api/v1/usuarios/autenticar',{},httpOptions);
  }

}
