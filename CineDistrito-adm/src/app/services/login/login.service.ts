import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Authorization", "Basic " + btoa(username + ":" + password));
    myheaders = myheaders.append("Content-Type", "application/x-www-form-urlencoded");
    const httpOptions = { headers: myheaders };
    return this.http.post<any>('http://127.0.0.1:8000/api/v1/usuarios/autenticar', {}, httpOptions);
  }
}
