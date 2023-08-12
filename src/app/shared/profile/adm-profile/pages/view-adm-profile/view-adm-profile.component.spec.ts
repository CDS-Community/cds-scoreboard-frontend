import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdmProfileComponent } from './view-adm-profile.component';

describe('ViewAdmProfileComponent', () => {
  let component: ViewAdmProfileComponent;
  let fixture: ComponentFixture<ViewAdmProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAdmProfileComponent]
    });
    fixture = TestBed.createComponent(ViewAdmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
