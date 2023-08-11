import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPuntosStaffComponent } from './asignar-puntos-staff.component';

describe('AsignarPuntosStaffComponent', () => {
  let component: AsignarPuntosStaffComponent;
  let fixture: ComponentFixture<AsignarPuntosStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarPuntosStaffComponent]
    });
    fixture = TestBed.createComponent(AsignarPuntosStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
