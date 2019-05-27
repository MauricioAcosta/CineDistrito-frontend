// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicConsultPeliComponent } from './basic-consult-peli/basic-consult-peli.component';

// Theme Routing
import { ConsultsRoutingModule } from './consults-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConsultsRoutingModule,
    FormsModule

  ],
  declarations: [
    BasicConsultPeliComponent,

  ]
})
export class ConsultsModule { }
