import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarAsistenciaComponent } from './marcar-asistencia.component';

describe('MarcarAsistenciaComponent', () => {
  let component: MarcarAsistenciaComponent;
  let fixture: ComponentFixture<MarcarAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcarAsistenciaComponent]
    });
    fixture = TestBed.createComponent(MarcarAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
