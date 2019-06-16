import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { CarteleraComponent } from './componentes/pages/cartelera/cartelera.component';
import { MultiplexComponent } from './componentes/pages/multiplex/multiplex.component';
import { PromocionesComponent } from './componentes/pages/promociones/promociones.component';
import { ConfiteriaComponent } from './componentes/pages/confiteria/confiteria.component';
import { HeaderComponent } from './componentes/sections/header/header.component';
import { FooterComponent } from './componentes/sections/footer/footer.component'
import { RouterModule, Routes } from '@angular/router';
import { ProximamenteComponent } from './componentes/pages/cartelera/proximamente/proximamente.component';
import { ActualComponent } from './componentes/pages/cartelera/actual/actual.component';
import { LoginModalComponent } from './componentes/sections/login-modal/login-modal.component';

const appRoutes: Routes = [ //https://angular.io/guide/router
  { 
    path: 'cartelera', 
    component: CarteleraComponent ,
    data: { title: 'cartelera' }
  },
  {
    path: 'cartelera_actual',
    component: ActualComponent,
    data: { title: 'cartelera_actual' }
  },
  {
    path: 'cartelera_proximamente',
    component: ProximamenteComponent,
    data: { title: 'cartelera_proximamente' }
  },
  { 
    path: 'confiteria',      
    component: ConfiteriaComponent 
  },
  {
    path: 'multiplex',
    component: MultiplexComponent,
    data: { title: 'Multiplex' }
  },
  {
    path: 'promociones',
    component: PromocionesComponent,
    data: { title: 'Promociones' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarteleraComponent,
    MultiplexComponent,
    PromocionesComponent,
    ConfiteriaComponent,
    HeaderComponent,
    FooterComponent,
    ProximamenteComponent,
    ActualComponent,
    LoginModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginModalComponent]
})
export class AppModule { }
