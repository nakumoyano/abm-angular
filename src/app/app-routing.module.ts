import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './page/hero/hero.component';
import { AgregarPaisComponent } from './page/pais/agregar-pais/agregar-pais.component';
import { ListadoPaisesComponent } from './page/pais/listado-paises/listado-paises.component';
import { AgregarPersonaComponent } from './page/persona/agregar-persona/agregar-persona.component';
import { ListadoPersonasComponent } from './page/persona/listado-personas/listado-personas.component';

const routes: Routes = [
  {
    path: '',
    component: AgregarPersonaComponent,
  },
  {
    path: 'listado-personas',
    component: ListadoPersonasComponent,
  },
  { path: 'alta-persona/:id', component: AgregarPersonaComponent },
  { path: 'alta-pais', component: AgregarPaisComponent },
  { path: 'editar-pais/:id', component: AgregarPaisComponent },
  { path: 'listado-paises', component: ListadoPaisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
