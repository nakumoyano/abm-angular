import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css'],
})
export class AgregarPersonaComponent implements OnInit {
  formulario: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
