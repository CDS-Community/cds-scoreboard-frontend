import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAssistComponent } from './check-assist.component';

describe('CheckAssistComponent', () => {
  let component: CheckAssistComponent;
  let fixture: ComponentFixture<CheckAssistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckAssistComponent]
    });
    fixture = TestBed.createComponent(CheckAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
