import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad/ciudad';
import { Pais } from 'src/app/models/pais/pais';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';
import { PaisService } from 'src/app/services/pais/pais.service';
import { CiudadValidator } from 'src/app/validators/ciudad/ciudad-validator';

@Component({
  selector: 'app-agregar-ciudad',
  templateUrl: './agregar-ciudad.component.html',
  styleUrls: ['./agregar-ciudad.component.css'],
})
export class AgregarCiudadComponent implements OnInit {
  @Input() listado: Pais;

  formulario: FormGroup;

  paises: Pais[];
  ciudades: Ciudad;
  isEdit = false;

  private subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private paisService: PaisService,
    private ciudadService: CiudadService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    //funciones
    this.cargarCboPais();

    //validaciones del formulario
    this.formulario = this.formBuilder.group({
      nombre: [
        ,
        Validators.required,
        CiudadValidator.nombreValidador(this.ciudadService),
      ],
      paisId: [, Validators.required],
    });
  }

  //registrar nueva persona
  guardar() {
    if (this.formulario.valid) {
      this.subscription.add(
        this.ciudadService.addCiudad(this.formulario.value).subscribe({
          next: (r: Ciudad) => {
            this.toastr.success(
              'Se cargo la ciudad correctamente!',
              'Carga exitosa!'
            );

            this.router.navigate(['/listado-ciudades']);
          },
          error: () => {
            this.toastr.error('Error al registrar la ciudad');
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

  //para las validaciones del formulario
  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }

  get controlPais(): FormControl {
    return this.formulario.controls['paisId'] as FormControl;
  }
}
