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
import { Pais } from 'src/app/models/pais/pais';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-eliminar-pais',
  templateUrl: './eliminar-pais.component.html',
  styleUrls: ['./eliminar-pais.component.css'],
})
export class EliminarPaisComponent implements OnDestroy {
  @Input() pais: Pais;
  @Output() onEliminado = new EventEmitter();

  constructor(
    private paisService: PaisService,
    private toastr: ToastrService
  ) {}

  private subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminarPais() {
    this.subscription.add(
      this.paisService.deletePais(this.pais).subscribe({
        next: () => {
          this.onEliminado.emit();
          this.toastr.success(
            'Se elimino el país correctamente!',
            'País eliminado con éxito!'
          );
        },
        error: () => {
          this.toastr.error('Error al eliminar el país');
        },
      })
    );
  }
}
