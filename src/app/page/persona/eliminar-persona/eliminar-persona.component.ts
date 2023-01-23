import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-eliminar-persona',
  templateUrl: './eliminar-persona.component.html',
  styleUrls: ['./eliminar-persona.component.css'],
})
export class EliminarPersonaComponent implements OnDestroy {
  @Input() persona: Persona;
  @Output() onEliminado = new EventEmitter();

  private subscription = new Subscription();

  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminarPersona() {
    this.subscription.add(
      this.personaService.deletePersona(this.persona).subscribe({
        next: () => {
          this.onEliminado.emit();
          this.toastr.success(
            'Se elimino correctamente',
            'Persona eliminada con éxito'
          );
        },
        error: () => {
          this.toastr.error('Error al eliminar la persona');
        },
      })
    );
  }
}
