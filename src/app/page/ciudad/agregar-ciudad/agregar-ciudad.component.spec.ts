import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCiudadComponent } from './agregar-ciudad.component';

describe('AgregarCiudadComponent', () => {
  let component: AgregarCiudadComponent;
  let fixture: ComponentFixture<AgregarCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
