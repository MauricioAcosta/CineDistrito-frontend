import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proximamente',
  templateUrl: './proximamente.component.html',
  styleUrls: ['./proximamente.component.scss']
})
export class ProximamenteComponent implements OnInit {

  public numbers:any;

  constructor() {
    this.numbers = [1,2,3,4,5];
  }

  ngOnInit() {
  }

}
