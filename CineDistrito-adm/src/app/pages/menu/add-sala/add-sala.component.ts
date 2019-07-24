import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/consult/query.service';
import { Salas } from 'src/app/models/salas';
import { Multiplex } from 'src/app/models/multiplex';
import { Peliculas } from 'src/app/models/peliculas';

@Component({
  selector: 'app-add-sala',
  templateUrl: './add-sala.component.html',
  styleUrls: ['./add-sala.component.scss']
})
export class AddSalaComponent implements OnInit {
  salas: any;
  funciones: Funciones;
  fk_funcion: Number;
  fk_sala: Number;
  constructor(private service: QueryService) { }

  ngOnInit() {
    this.service.GetFuncion().subscribe(
      response => {
        this.funciones = response
        //console.log('this.peliculas: ', this.peliculas);
      },
      error => {
        console.log(error);
      }
    );
    this.service.GetCreateSala().subscribe(
      response => {
        this.salas = response
        //console.log("this.salas: ", this.salas);

      },
      error => {
        console.log("No se ecuentran contratos", error);
      }
    );
  }
  CrearSala() {
    this.service.PostCreateSala(this.fk_funcion, this.fk_sala)
  }

}
