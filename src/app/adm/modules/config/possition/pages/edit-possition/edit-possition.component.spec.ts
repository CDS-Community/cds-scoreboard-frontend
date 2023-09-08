import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPossitionComponent } from './edit-possition.component';

describe('EditPossitionComponent', () => {
  let component: EditPossitionComponent;
  let fixture: ComponentFixture<EditPossitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPossitionComponent]
    });
    fixture = TestBed.createComponent(EditPossitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
