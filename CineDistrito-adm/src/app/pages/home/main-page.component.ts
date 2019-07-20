import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { QueryService } from 'src/app/services/consult/query.service';
import { Personas } from 'src/app/models/personas';

@Component({
  templateUrl: 'main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  personas: Personas
  showResult = true;
  constructor(private service: QueryService) { }

  ngOnInit(): void {
    this.service.GetPersonas().subscribe(
      response => {
        this.personas = response
        //console.log('this.personas: ', this.personas.results[0].last_name);

      },
      error => {
        console.log(error);
      }
    );
  }


}
