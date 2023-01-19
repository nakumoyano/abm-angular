import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarPersonaComponent } from './page/persona/agregar-persona/agregar-persona.component';
import { ListadoPersonasComponent } from './page/persona/listado-personas/listado-personas.component';
import { AgregarPaisComponent } from './page/pais/agregar-pais/agregar-pais.component';
import { ListadoPaisesComponent } from './page/pais/listado-paises/listado-paises.component';
import { AgregarCiudadComponent } from './page/ciudad/agregar-ciudad/agregar-ciudad.component';
import { ListadoCiudadesComponent } from './page/ciudad/listado-ciudades/listado-ciudades.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AgregarPersonaComponent,
    ListadoPersonasComponent,
    AgregarPaisComponent,
    ListadoPaisesComponent,
    AgregarCiudadComponent,
    ListadoCiudadesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
