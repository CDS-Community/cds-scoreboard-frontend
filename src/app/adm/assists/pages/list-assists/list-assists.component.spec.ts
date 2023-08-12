import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssistsComponent } from './list-assists.component';

describe('ListAssistsComponent', () => {
  let component: ListAssistsComponent;
  let fixture: ComponentFixture<ListAssistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAssistsComponent]
    });
    fixture = TestBed.createComponent(ListAssistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
