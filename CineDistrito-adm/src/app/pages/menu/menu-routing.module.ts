import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicConsultPeliComponent } from './basic-consult-peli/basic-consult-peli.component';
import { AddUserComponent } from './add-user/add-user.component'
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Menu'
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
      },
      {
        path: 'add-user',
        component: AddUserComponent,
        data: {
          title: 'Agregar Usuarios'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
