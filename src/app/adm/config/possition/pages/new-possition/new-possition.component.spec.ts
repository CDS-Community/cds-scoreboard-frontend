import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPossitionComponent } from './new-possition.component';

describe('NewPossitionComponent', () => {
  let component: NewPossitionComponent;
  let fixture: ComponentFixture<NewPossitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPossitionComponent]
    });
    fixture = TestBed.createComponent(NewPossitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
