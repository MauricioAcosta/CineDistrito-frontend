import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarusuarioService {

  constructor(private httpClient: HttpClient) { }

  registrarUsuario(cedula,telefono,direccion,nusuario,email,nombres,apellidos,contrasena){

    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Content-Type", "application/json");

    let body = JSON.stringify({fk_persona:{pk_cedula: cedula,i_telefono: telefono,v_direccion: direccion,
                              username: nusuario,email:email,first_name:nombres,last_name:apellidos,password:contrasena}});
    
    return this.httpClient.post<any>("http://192.168.43.110:8080/api/v1/usuarios/clientes/",body,{headers:myheaders})
  }
}
