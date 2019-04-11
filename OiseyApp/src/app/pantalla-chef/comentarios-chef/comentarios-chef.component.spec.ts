import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosChefComponent } from './comentarios-chef.component';

describe('ComentariosChefComponent', () => {
  let component: ComentariosChefComponent;
  let fixture: ComponentFixture<ComentariosChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
