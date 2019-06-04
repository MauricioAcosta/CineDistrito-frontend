import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { MultiplexComponent } from './pages/multiplex/multiplex.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { ConfiteriaComponent } from './pages/confiteria/confiteria.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [ //https://angular.io/guide/router
  { 
    path: 'cartelera', 
    component: CarteleraComponent },
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
    data: { title: 'Multiplex' }
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
