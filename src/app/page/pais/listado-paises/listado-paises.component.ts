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
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css'],
})
export class ListadoPaisesComponent implements OnInit, OnDestroy {
  @Input() listado: Pais[];
  @Output() onEliminado = new EventEmitter();

  private subscription = new Subscription();

  constructor(private paisService: PaisService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.actualizarListado();
  }

  actualizarListado() {
    this.subscription.add(
      this.paisService.getPais().subscribe({
        next: (listado: Pais[]) => {
          this.listado = listado;
        },
        error: () => {
          alert('error al traer paises');
        },
      })
    );
  }
}
