import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplex',
  templateUrl: './multiplex.component.html',
  styleUrls: ['./multiplex.component.scss']
})
export class MultiplexComponent implements OnInit {

  public numbers:any;

  constructor() {
    this.numbers = [1,2,3,4,5];
  }

  ngOnInit() {
  }

}
