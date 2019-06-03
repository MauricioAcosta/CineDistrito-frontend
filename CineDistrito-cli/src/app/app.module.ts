import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { MultiplexComponent } from './pages/multiplex/multiplex.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { ConfiteriaComponent } from './pages/confiteria/confiteria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarteleraComponent,
    MultiplexComponent,
    PromocionesComponent,
    ConfiteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
