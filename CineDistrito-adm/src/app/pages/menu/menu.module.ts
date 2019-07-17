// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicConsultPeliComponent } from './basic-consult-peli/basic-consult-peli.component';

// Theme Routing
import { MenuRoutingModule } from './menu-routing.module';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { AddFuncionesComponent } from './add-funciones/add-funciones.component';
import { AddSalaComponent } from './add-sala/add-sala.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule

  ],
  declarations: [
    BasicConsultPeliComponent,
    AddUserComponent,
    AddFuncionesComponent,
    AddSalaComponent

  ]
})
export class MenuModule { }
