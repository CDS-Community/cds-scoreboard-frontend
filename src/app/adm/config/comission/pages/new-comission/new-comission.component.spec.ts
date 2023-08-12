import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComissionComponent } from './new-comission.component';

describe('NewComissionComponent', () => {
  let component: NewComissionComponent;
  let fixture: ComponentFixture<NewComissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewComissionComponent]
    });
    fixture = TestBed.createComponent(NewComissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
