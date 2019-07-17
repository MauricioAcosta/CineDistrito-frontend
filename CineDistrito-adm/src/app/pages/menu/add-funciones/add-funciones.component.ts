import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/consult/query.service';
import { Peliculas } from 'src/app/models/peliculas';
import { Time } from '@angular/common';

@Component({
  selector: 'app-add-funciones',
  templateUrl: './add-funciones.component.html',
  styleUrls: ['./add-funciones.component.scss']
})
export class AddFuncionesComponent implements OnInit {
  peliculas: Peliculas;
  v_estado: String;
  d_proyeccion: Date;
  fk_pelicula: Number;
  t_inicioproyeccion: Time;
  t_finproyeccion: Time;
  constructor(private service: QueryService) { }

  ngOnInit() {
    this.service.GetPeliculas().subscribe(
      response => {
        this.peliculas = response
        console.log("this.peliculas: ", this.peliculas);

      },
      error => {
        console.log("No se ecuentran contratos", error);
      }
    );
  }
  CrearFuncion() {
    this.service.PostCreateFuntion(this.v_estado, this.d_proyeccion, this.fk_pelicula, this.t_inicioproyeccion, this.t_finproyeccion)
  }

}
