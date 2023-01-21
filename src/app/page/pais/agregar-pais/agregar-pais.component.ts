import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-agregar-pais',
  templateUrl: './agregar-pais.component.html',
  styleUrls: ['./agregar-pais.component.css'],
})
export class AgregarPaisComponent implements OnInit {
  formulario: FormGroup;
  isEdit: false;

  constructor(
    private formBuilder: FormBuilder,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: [, Validators.required],
    });
  }

  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }
}
