import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/consult/query.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent implements OnInit {
  v_tipo: String;
  v_nombre: String;
  tx_descripcion: String;
  i_precio: Number;
  i_puntosofrecidos: Number;
  constructor(private service: QueryService) { }

  ngOnInit() {
  }
  CreateSnacks() {
    this.service.PostCreateSnacks(this.v_tipo, this.v_nombre, this.tx_descripcion, this.i_precio, this.i_puntosofrecidos)
  }
}
