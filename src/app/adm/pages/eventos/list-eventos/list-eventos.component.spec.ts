import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventosComponent } from './list-eventos.component';

describe('ListEventosComponent', () => {
  let component: ListEventosComponent;
  let fixture: ComponentFixture<ListEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEventosComponent]
    });
    fixture = TestBed.createComponent(ListEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
