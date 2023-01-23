import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';

export class CiudadValidator {
  static nombreValidador(ciudadService: CiudadService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return ciudadService
        .nombreExiste(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { nameAlReadyExists: true } : null
          )
        );
    };
  }
}
