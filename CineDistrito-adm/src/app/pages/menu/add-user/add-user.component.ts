import { Component, OnInit } from '@angular/core';
import { Contratos } from 'src/app/models/contratos';
import { QueryService } from 'src/app/services/consult/query.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  contratos: Contratos;

  pk_cedula: "";
  i_telefono: "";
  v_direccion: "";
  username: "";
  email: "";
  firt_name: "";
  last_name: "";
  password: ""
  n_descuento: "";
  fk_numcontrato: "";

  constructor(private service: QueryService) { }

  ngOnInit() {
    this.service.GetContratos().subscribe(
      response => {
        this.contratos = response
      },
      error => {
        console.log("No se ecuentran contratos", error);
      }
    );
  }
  CrearPersona() {
    this.service.PostCreateUser(Number(this.pk_cedula), Number(this.i_telefono), this.v_direccion, this.username, this.email, this.firt_name, this.last_name, this.password, Number(this.n_descuento), Number(this.fk_numcontrato))
  }

}
