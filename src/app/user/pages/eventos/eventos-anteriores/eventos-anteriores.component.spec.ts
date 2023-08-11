import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAnterioresComponent } from './eventos-anteriores.component';

describe('EventosAnterioresComponent', () => {
  let component: EventosAnterioresComponent;
  let fixture: ComponentFixture<EventosAnterioresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosAnterioresComponent]
    });
    fixture = TestBed.createComponent(EventosAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
