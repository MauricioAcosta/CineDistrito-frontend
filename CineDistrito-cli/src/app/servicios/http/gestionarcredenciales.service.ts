import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionarcredencialesService {

  constructor() { }

  guardarCredenciales(user,pass){
    let userData:any;
    userData = window.btoa(user + ':' + pass);
    localStorage.setItem('username',JSON.stringify(user));
    localStorage.setItem('currentUser', JSON.stringify(userData));
  }

  obtenerUsuarioActual(){
    return localStorage.getItem('username');
  }

  obtenerCredencialesUsuarioActual(){
    return localStorage.getItem('currentUser');
  }

  borrarCredenciales(){
    localStorage.removeItem('username');
    localStorage.removeItem('currentUser');
  }
}
