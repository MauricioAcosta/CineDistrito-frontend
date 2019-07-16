import { Injectable } from '@angular/core';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class GestionarcredencialesService {

  constructor() { }

  guardarCredenciales(user,pass){
    let userData:any;
    userData = window.btoa(user + ':' + pass);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    console.log(this.obtenerUsuarioActual());
  }

  obtenerUsuarioActual(){
    return localStorage.getItem('currentUser');
  }

  borrarCredenciales(){
    localStorage.removeItem('currentUser');
  }
}
