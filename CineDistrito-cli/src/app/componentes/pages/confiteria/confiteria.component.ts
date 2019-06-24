import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confiteria',
  templateUrl: './confiteria.component.html',
  styleUrls: ['./confiteria.component.scss']
})
export class ConfiteriaComponent implements OnInit {

  public numbers:any;

  constructor() {
    this.numbers = [1,2,3,4,5,6,7,8,9];
  }

  ngOnInit() {
  }

}
