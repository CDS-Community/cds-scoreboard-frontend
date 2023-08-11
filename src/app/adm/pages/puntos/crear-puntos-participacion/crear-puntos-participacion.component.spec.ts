import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPuntosParticipacionComponent } from './crear-puntos-participacion.component';

describe('CrearPuntosParticipacionComponent', () => {
  let component: CrearPuntosParticipacionComponent;
  let fixture: ComponentFixture<CrearPuntosParticipacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPuntosParticipacionComponent]
    });
    fixture = TestBed.createComponent(CrearPuntosParticipacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
