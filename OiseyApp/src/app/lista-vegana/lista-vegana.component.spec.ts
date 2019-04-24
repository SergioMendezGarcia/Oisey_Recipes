import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVeganaComponent } from './lista-vegana.component';

describe('ListaVeganaComponent', () => {
  let component: ListaVeganaComponent;
  let fixture: ComponentFixture<ListaVeganaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVeganaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVeganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
