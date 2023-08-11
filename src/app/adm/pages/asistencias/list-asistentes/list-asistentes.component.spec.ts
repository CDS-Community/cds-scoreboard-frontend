import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsistentesComponent } from './list-asistentes.component';

describe('ListAsistentesComponent', () => {
  let component: ListAsistentesComponent;
  let fixture: ComponentFixture<ListAsistentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAsistentesComponent]
    });
    fixture = TestBed.createComponent(ListAsistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
