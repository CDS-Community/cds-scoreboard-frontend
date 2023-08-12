import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdmProfileComponent } from './edit-adm-profile.component';

describe('EditAdmProfileComponent', () => {
  let component: EditAdmProfileComponent;
  let fixture: ComponentFixture<EditAdmProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdmProfileComponent]
    });
    fixture = TestBed.createComponent(EditAdmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
