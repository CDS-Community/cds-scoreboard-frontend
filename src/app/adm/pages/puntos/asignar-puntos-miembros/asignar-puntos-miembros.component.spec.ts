import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPuntosMiembrosComponent } from './asignar-puntos-miembros.component';

describe('AsignarPuntosMiembrosComponent', () => {
  let component: AsignarPuntosMiembrosComponent;
  let fixture: ComponentFixture<AsignarPuntosMiembrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarPuntosMiembrosComponent]
    });
    fixture = TestBed.createComponent(AsignarPuntosMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
