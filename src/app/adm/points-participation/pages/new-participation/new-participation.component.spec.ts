import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParticipationComponent } from './new-participation.component';

describe('NewParticipationComponent', () => {
  let component: NewParticipationComponent;
  let fixture: ComponentFixture<NewParticipationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewParticipationComponent]
    });
    fixture = TestBed.createComponent(NewParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
