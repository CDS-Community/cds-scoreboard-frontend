import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComissionComponent } from './edit-comission.component';

describe('EditComissionComponent', () => {
  let component: EditComissionComponent;
  let fixture: ComponentFixture<EditComissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditComissionComponent]
    });
    fixture = TestBed.createComponent(EditComissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
