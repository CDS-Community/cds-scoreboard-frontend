import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventoComponent } from './new-evento.component';

describe('NewEventoComponent', () => {
  let component: NewEventoComponent;
  let fixture: ComponentFixture<NewEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEventoComponent]
    });
    fixture = TestBed.createComponent(NewEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
