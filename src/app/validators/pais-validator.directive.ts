import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { PaisService } from '../services/pais/pais.service';

@Directive({
  selector: '[appPaisValidator]',
})
export class PaisValidatorDirective {
  static nombreValidador(paisService: PaisService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return paisService
        .nombreExiste(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { nameAlReadyExists: true } : null
          )
        );
    };
  }
}
