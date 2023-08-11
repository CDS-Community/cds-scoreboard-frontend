import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerfilComponent } from './edit-perfil.component';

describe('EditPerfilComponent', () => {
  let component: EditPerfilComponent;
  let fixture: ComponentFixture<EditPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPerfilComponent]
    });
    fixture = TestBed.createComponent(EditPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
