import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPossitionComponent } from './list-possition.component';

describe('ListPossitionComponent', () => {
  let component: ListPossitionComponent;
  let fixture: ComponentFixture<ListPossitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPossitionComponent]
    });
    fixture = TestBed.createComponent(ListPossitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
