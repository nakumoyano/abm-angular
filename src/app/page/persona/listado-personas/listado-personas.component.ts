import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Pais } from 'src/app/models/pais/pais';
import { Persona } from 'src/app/models/persona/persona';
import { PaisService } from 'src/app/services/pais/pais.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
export class ListadoPersonasComponent implements OnInit, OnDestroy {
  @Input() listado: Persona[];
  @Output() onEliminado = new EventEmitter();

  private subscription = new Subscription();

  constructor(
    private personaService: PersonaService,
    private paisService: PaisService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.actualizarListado();
  }
  actualizarListado() {
    this.subscription.add(
      this.paisService.getPais().subscribe({
        next: (paises: Pais[]) => {
          this.personaService.getPersona().subscribe({
            next: (listado: Persona[]) => {
              listado.forEach((persona) => {
                const indice = paises.findIndex((x) => x.id === persona.paisId);
                persona.pais = paises[indice];
              });

              this.listado = listado;
            },
            error: () => {
              alert('error');
            },
          });
        },
        error: () => {
          alert('error');
        },
      })
    );
  }
}
