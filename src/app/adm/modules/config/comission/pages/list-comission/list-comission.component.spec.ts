import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComissionComponent } from './list-comission.component';

describe('ListComissionComponent', () => {
  let component: ListComissionComponent;
  let fixture: ComponentFixture<ListComissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComissionComponent]
    });
    fixture = TestBed.createComponent(ListComissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
