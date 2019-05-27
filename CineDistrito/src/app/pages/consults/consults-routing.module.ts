import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicConsultPeliComponent } from './basic-consult-peli/basic-consult-peli.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Consultas'
    },
    children: [
      {
        path: '',
        redirectTo: 'basic-consult-peli'
      },
      {
        path: 'basic-consult-peli',
        component: BasicConsultPeliComponent,
        data: {
          title: 'Consulta General'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultsRoutingModule {}
