import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {

  public nombre_pelicula:any;
  public cinema_lista:any;
  public asiento_lista:any;
  public precio:any;

  constructor() {
    this.nombre_pelicula = "Spiderman Far From Home";
    this.cinema_lista = ["Americas","Tintal"];
    this.asiento_lista = ["H1","H2","J5","..."];
    this.precio = 5000;
  }

  ngOnInit() {
  }

}
