import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad/ciudad';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';

@Component({
  selector: 'app-listado-ciudades',
  templateUrl: './listado-ciudades.component.html',
  styleUrls: ['./listado-ciudades.component.css'],
})
export class ListadoCiudadesComponent implements OnInit {
  @Input() listado: Ciudad[];
  @Output() onEliminado = new EventEmitter();

  private subscription = new Subscription();

  constructor(private ciudadService: CiudadService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}
}
