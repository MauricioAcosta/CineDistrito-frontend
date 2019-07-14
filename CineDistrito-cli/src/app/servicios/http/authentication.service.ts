import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('http://127.0.0.1:8000/api/v1/usuarios/autenticar',{username:username,password:password});
  }
}
