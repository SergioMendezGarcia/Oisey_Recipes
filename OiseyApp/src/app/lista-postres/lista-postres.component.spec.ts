import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostresComponent } from './lista-postres.component';

describe('ListaPostresComponent', () => {
  let component: ListaPostresComponent;
  let fixture: ComponentFixture<ListaPostresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPostresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
