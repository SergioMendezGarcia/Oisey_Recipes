import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirRecetasComponent } from './pedir-recetas.component';

describe('PedirRecetasComponent', () => {
  let component: PedirRecetasComponent;
  let fixture: ComponentFixture<PedirRecetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedirRecetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
