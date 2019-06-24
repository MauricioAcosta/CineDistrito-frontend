import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.scss']
})
export class ActualComponent implements OnInit {

public numbers:any;

  constructor() {
    this.numbers = [1,2,3,4,5];
  }

  ngOnInit() {
  }

}
