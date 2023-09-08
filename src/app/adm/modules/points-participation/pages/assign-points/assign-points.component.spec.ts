import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPointsComponent } from './assign-points.component';

describe('AssignPointsComponent', () => {
  let component: AssignPointsComponent;
  let fixture: ComponentFixture<AssignPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignPointsComponent]
    });
    fixture = TestBed.createComponent(AssignPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
