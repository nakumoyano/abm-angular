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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HeroComponent } from './page/hero/hero.component';
import { PaisValidatorDirective } from './validators/pais-validator.directive';
import { EliminarPaisComponent } from './page/pais/eliminar-pais/eliminar-pais.component';
import { EliminarPersonaComponent } from './page/persona/eliminar-persona/eliminar-persona.component';

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
    HeroComponent,
    PaisValidatorDirective,
    EliminarPaisComponent,
    EliminarPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
