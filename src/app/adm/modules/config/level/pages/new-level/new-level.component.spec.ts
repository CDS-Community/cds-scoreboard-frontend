import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLevelComponent } from './new-level.component';

describe('NewLevelComponent', () => {
  let component: NewLevelComponent;
  let fixture: ComponentFixture<NewLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLevelComponent]
    });
    fixture = TestBed.createComponent(NewLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
