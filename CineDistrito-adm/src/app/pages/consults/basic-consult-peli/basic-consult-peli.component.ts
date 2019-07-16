import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QueryService } from 'src/app/services/consult/query.service';
import { Personas } from 'src/app/models/personas';


@Component({
  selector: 'app-basic-consult-peli',
  templateUrl: 'basic-consult-peli.component.html',
  styleUrls: ['./basic-consult-peli.component.scss']
})
export class BasicConsultPeliComponent implements OnInit {
  showResult = true;
  inputPelicula: string;
  personas: Personas;

  // constructor(private service: QueryService) { }
  constructor(private service: QueryService) { }
  ngOnInit() {
    this.service.GetPersonas().subscribe(
      response => {
        this.personas = response
        console.log('this.personas: ', this.personas.results[0].last_name);
      },
      error => {
        console.log(error);
      }
    );
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
