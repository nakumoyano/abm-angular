import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPersonaComponent } from './page/persona/agregar-persona/agregar-persona.component';
import { ListadoPersonasComponent } from './page/persona/listado-personas/listado-personas.component';

const routes: Routes = [
  {
    path: 'alta-persona',
    component: AgregarPersonaComponent,
  },
  {
    path: 'listado-personas',
    component: ListadoPersonasComponent,
  },
  { path: 'alta-persona/:id', component: AgregarPersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
