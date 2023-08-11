import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosProximosComponent } from './eventos-proximos.component';

describe('EventosProximosComponent', () => {
  let component: EventosProximosComponent;
  let fixture: ComponentFixture<EventosProximosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosProximosComponent]
    });
    fixture = TestBed.createComponent(EventosProximosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
