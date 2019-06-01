import { Component, OnInit } from '@angular/core';
// import { QueryService } from 'src/app/services/consult/query.service';
import { environment } from 'src/environments/environment';
// import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';


//import { Map, TileLayer, CRS, geoJSON } from 'leaflet/dist/leaflet-src.esm.js';


// declare var xepOnline: any;
// declare var jQuery: any;
// declare var L: any;

@Component({
  selector: 'app-basic-consult-peli',
  templateUrl: 'basic-consult-peli.component.html',
  styleUrls: ['./basic-consult-peli.component.scss']
})
export class BasicConsultPeliComponent implements OnInit {
  showResult = false;
  inputPelicula: string;
  basicConsult: any;

  // constructor(private service: QueryService) { }
  constructor() { }
  ngOnInit() {

  }

  search() {
    if (this.inputPelicula) {
      this.getBasicInfo();
    } else {
      this.showResult = false;
    }
  }

  getBasicInfo() {
    // this.service
      // .getBasicConsult(this.inputPelicula)
      // .subscribe(
      //   data => {
      //     if (data['error']) {
      //       console.log(data['error']);
      //       this.showResult = false;
      //     } else {
      //       this.basicConsult = [data[0]];
      //       console.log(this.basicConsult, "DATA", data);
      //       this.showResult = true;
      //     }
      //   },
      //   error => {
      //     console.log(error);
      //     this.showResult = false;
      //   }
      // );
  }
}
