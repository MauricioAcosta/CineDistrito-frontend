import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personas } from 'src/app/models/personas';
import { Peliculas } from 'src/app/models/peliculas';
import { Contratos } from 'src/app/models/contratos';
import { Time } from '@angular/common';
import { Multiplex } from 'src/app/models/multiplex';

@Injectable({
  providedIn: 'root'
})

export class QueryService {
  constructor(private httpClient: HttpClient) {
  }
  public GetPersonas() {
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append("Authorization", "Basic " + btoa("admin:admin123"));
    myheaders = myheaders.append("Content-Type", "application/x-www-form-urlencoded");
    const httpOptions = { headers: myheaders };
    return this.httpClient.get<Personas>('http://192.168.43.110:8080/api/v1/usuarios/personas', httpOptions);
  }
  public GetPeliculas() {
    return this.httpClient.get<Peliculas>('http://192.168.43.110:8080/api/v1/funciones/peliculas/');
  }
  public GetContratos() {
    return this.httpClient.get<Contratos>('http://192.168.43.110:8080/api/v1/empleados/contratos/');
  }
  public PostCreateUser(pk_cedula: Number, i_telefono: Number, v_direccion: String, username: String, email: String, firt_name: String, last_name: String, password: String, n_descuento: Number, fk_numcontrato: Number) {
    this.httpClient.post("http://192.168.43.110:8080/api/v1/empleados/empleados/",
      {
        "fk_persona": {
          "pk_cedula": pk_cedula,
          "i_telefono": i_telefono,
          "v_direccion": v_direccion,
          "username": username,
          "email": email,
          "first_name": firt_name,
          "last_name": last_name,
          "password": password,
        },
        "n_descuento": n_descuento,
        "fk_numcontrato": fk_numcontrato
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {

          console.log("Error feo", error);

        }

      );

  }

  public GetFuncion() {
    return this.httpClient.get<Funciones>('http://192.168.43.110:8080/api/v1/funciones/funciones/')
  }
  public PostCreateFuntion(v_estado: String, d_proyeccion: Date, fk_pelicula: Number, t_inicioproyeccion: Time, t_finproyeccion: Time) {
    this.httpClient.post("http://192.168.43.110:8080/api/v1/funciones/funciones/",
      {
        "v_estado": v_estado,
        "d_proyeccion": d_proyeccion,
        "fk_pelicula": fk_pelicula,
        "t_inicioproyeccion": t_inicioproyeccion,
        "t_finproyeccion": t_finproyeccion
      }).subscribe(
        data => { console.log("POST Request is successful ", data); }, error => { console.log("Error feo", error); });
  }
  public GetSalas() {
    return this.httpClient.get<Multiplex>('http://192.168.43.110:8080/api/v1/multiplex/multiplex/')
  }
  public GetCreateSala() {
    return this.httpClient.get("http://192.168.43.110:8080/api/v1/funciones/funciones-sala/")
  }

  public PostCreateSala(fk_funcion: Number, fk_sala: Number) {
    this.httpClient.post("http://192.168.43.110:8080/api/v1/funciones/funciones-sala/",
      {
        "fk_funcion": fk_funcion,
        "fk_sala": fk_sala
      }).subscribe(
        data => { console.log("POST Request is successful ", data); }, error => { console.log("Error feo", error); });
  }
  public PostCreateSnacks(v_tipo: String, v_nombre: String, tx_descripcion: String, i_precio: Number, i_puntosofrecidos: Number) {
    this.httpClient.post("http://192.168.43.110:8080/api/v1/snacks/snacks/",
      {
        "v_tipo": v_tipo,
        "v_nombre": v_nombre,
        "tx_descripcion": tx_descripcion,
        "i_precio": i_precio,
        "i_puntosofrecidos": i_puntosofrecidos
      }
    ).subscribe(
      data => { console.log("POST Request is successful ", data); }, error => { console.log("Error feo", error); });
  }
}
