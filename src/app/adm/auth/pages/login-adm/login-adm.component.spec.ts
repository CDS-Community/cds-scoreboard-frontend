import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdmComponent } from './login-adm.component';

describe('LoginAdmComponent', () => {
  let component: LoginAdmComponent;
  let fixture: ComponentFixture<LoginAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdmComponent]
    });
    fixture = TestBed.createComponent(LoginAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
