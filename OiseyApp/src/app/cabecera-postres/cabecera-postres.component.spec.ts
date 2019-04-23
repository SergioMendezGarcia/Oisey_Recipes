import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPostresComponent } from './cabecera-postres.component';

describe('CabeceraPostresComponent', () => {
  let component: CabeceraPostresComponent;
  let fixture: ComponentFixture<CabeceraPostresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraPostresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
