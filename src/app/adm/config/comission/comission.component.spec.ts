import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissionComponent } from './comission.component';

describe('ComissionComponent', () => {
  let component: ComissionComponent;
  let fixture: ComponentFixture<ComissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComissionComponent]
    });
    fixture = TestBed.createComponent(ComissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
