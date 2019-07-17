import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QueryService } from 'src/app/services/consult/query.service';
import { Peliculas } from 'src/app/models/peliculas';


@Component({
  selector: 'app-basic-consult-peli',
  templateUrl: 'basic-consult-peli.component.html',
  styleUrls: ['./basic-consult-peli.component.scss']
})
export class BasicConsultPeliComponent implements OnInit {
  showResult = true;
  inputPelicula: string;
  peliculas: Peliculas;

  // constructor(private service: QueryService) { }
  constructor(private service: QueryService) { }
  ngOnInit() {
    this.service.GetPeliculas().subscribe(
      response => {
        this.peliculas = response
        console.log('this.peliculas: ', this.peliculas);
      },
      error => {
        console.log(error);
      }
    );
  }

}
