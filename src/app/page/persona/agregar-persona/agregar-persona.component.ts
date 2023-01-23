import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MinValidator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { min, Subscription } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad/ciudad';
import { Pais } from 'src/app/models/pais/pais';
import { Persona } from 'src/app/models/persona/persona';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';
import { PaisService } from 'src/app/services/pais/pais.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css'],
})
export class AgregarPersonaComponent implements OnInit {
  isEdit = false;
  formulario: FormGroup;

  ciudades: Ciudad[];
  paises: Pais[];
  persona: Persona;

  habilitado = true;

  private subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private paisService: PaisService,
    private ciudadService: CiudadService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    //funciones
    this.cargarCboPais();
    this.cargarDatos();

    //validaciones del formulario
    this.formulario = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido: [, Validators.required],
      edad: [, Validators.required],
      fecha: [, Validators.required],
      paisId: [, Validators.required],
      ciudadId: [, Validators.required],
    });

    //hace que primero elijamos el pais y luego aparece la ciudad
    this.formulario.controls['paisId'].valueChanges.subscribe((x) => {
      this.subscription.add(
        this.ciudadService.getCiudadPorPais(x).subscribe({
          next: (r: Ciudad[]) => {
            this.ciudades = r;
          },
          error: () => {
            alert('error al cargar combo ciudad');
          },
        })
      );
    });
  }

  //registrar nueva persona
  guardar() {
    if (this.formulario.valid) {
      this.subscription.add(
        this.personaService.addPersona(this.formulario.value).subscribe({
          next: (r: Persona) => {
            this.toastr.success(
              'Se cargo la persona correctamente!',
              'Carga exitosa!'
            );

            this.router.navigate(['/listado-personas']);
          },
          error: () => {
            this.toastr.error('Error al registrar la persona');
          },
        })
      );
    } else {
      this.toastr.error(
        'Complete todos los campos e intente nuevamente!',
        'Error inesperado'
      );
    }
  }

  //editar campos
  editar() {
    if (this.formulario.valid) {
      let body = this.formulario.value as Persona;
      body.id = this.persona.id;
      this.subscription.add(
        this.personaService.editPersona(body).subscribe({
          next: (r: Persona) => {
            this.toastr.success(
              'Se edito la persona correctamente!',
              'Edición exitosa!'
            );
            this.router.navigate(['/listado-personas']);
          },
          error: () => {
            alert('eeror al editar persona');
          },
        })
      );
    } else {
      alert('error al editar persona, revise e intente nuevamente');
    }
  }

  //funcion para que al tocar editar, se carguen todos los campos de la persona
  cargarDatos() {
    this.activatedRoute.params.subscribe((e) => {
      let id = e['id'];
      if (id) {
        this.isEdit = true;
        this.personaService.getPersonaById(id).subscribe((es) => {
          this.persona = es;
          this.formulario.patchValue(this.persona);
        });
      } else {
        this.isEdit = false;
      }
    });
  }

  //cargamos el combo de paises
  cargarCboPais() {
    this.subscription.add(
      this.paisService.getPais().subscribe({
        next: (res: Pais[]) => {
          this.paises = res;
        },
        error: () => {
          alert('error al cargar el combo de paises');
        },
      })
    );
  }

  //cargamos el combo de ciudad segun el pais que elijamos
  // cargarCiudadPorPais() {
  //   this.formulario.controls['paisId'].valueChanges.subscribe((x) => {
  //     this.subscription.add(
  //       this.ciudadService.getCiudadPorPais(x).subscribe({
  //         next: (r: Ciudad[]) => {
  //           this.ciudades = r;
  //         },
  //         error: () => {
  //           alert('error al cargar combo ciudad');
  //         },
  //       })
  //     );
  //   });
  // }

  //para las validaciones del formulario
  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }

  get controlApellido(): FormControl {
    return this.formulario.controls['apellido'] as FormControl;
  }

  get controlEdad(): FormControl {
    return this.formulario.controls['edad'] as FormControl;
  }

  get controlFecha(): FormControl {
    return this.formulario.controls['fecha'] as FormControl;
  }

  get controlPais(): FormControl {
    return this.formulario.controls['paisId'] as FormControl;
  }

  get controlCiudad(): FormControl {
    return this.formulario.controls['ciudadId'] as FormControl;
  }

  get controlPrecio(): FormControl {
    return this.formulario.controls['precio'] as FormControl;
  }
}
