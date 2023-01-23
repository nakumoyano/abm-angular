import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Pais } from 'src/app/models/pais/pais';
import { PaisService } from 'src/app/services/pais/pais.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PaisValidatorDirective } from 'src/app/validators/pais-validator.directive';

@Component({
  selector: 'app-agregar-pais',
  templateUrl: './agregar-pais.component.html',
  styleUrls: ['./agregar-pais.component.css'],
})
export class AgregarPaisComponent implements OnInit {
  formulario: FormGroup;
  isEdit = false;

  pais: Pais;

  private subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private paisService: PaisService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: [
        ,
        Validators.required,
        PaisValidatorDirective.nombreValidador(this.paisService),
      ],
    });

    this.cargarDatos();
  }

  //agregar un nuevo país
  guardar() {
    if (this.formulario.valid) {
      this.subscription.add(
        this.paisService.addPais(this.formulario.value).subscribe({
          next: (r: Pais) => {
            this.toastr.success(
              'Se cargo el país correctamente!',
              'Carga exitosa!'
            );
            this.router.navigate(['/listado-paises']);
          },
          error: (e) => {
            this.toastr.error('Error al registrar el país');
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
      let body = this.formulario.value as Pais;
      body.id = this.pais.id;
      this.subscription.add(
        this.paisService.editPais(body).subscribe({
          next: (r: Pais) => {
            this.toastr.success(
              'Se edito el país correctamente!',
              'Edición exitosa!'
            );
            this.router.navigate(['/listado-paises']);
          },
          error: () => {
            alert('error al editar país');
          },
        })
      );
    } else {
      this.toastr.error('Error al editar país, revise e intente nuevamente');
    }
  }

  //funcion para que al tocar editar, se carguen todos los campos de la persona
  cargarDatos() {
    this.activatedRoute.params.subscribe((e) => {
      let id = e['id'];
      if (id) {
        this.isEdit = true;
        this.paisService.getPaisById(id).subscribe((es) => {
          this.pais = es;
          this.formulario.patchValue(this.pais);
        });
      } else {
        this.isEdit = false;
      }
    });
  }

  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }
}
