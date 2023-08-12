import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLevelComponent } from './list-level.component';

describe('ListLevelComponent', () => {
  let component: ListLevelComponent;
  let fixture: ComponentFixture<ListLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLevelComponent]
    });
    fixture = TestBed.createComponent(ListLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
