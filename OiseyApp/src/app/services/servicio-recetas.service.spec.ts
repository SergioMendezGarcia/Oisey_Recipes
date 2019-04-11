import { TestBed } from '@angular/core/testing';

import { ServicioRecetasService } from './servicio-recetas.service';

describe('ServicioRecetasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioRecetasService = TestBed.get(ServicioRecetasService);
    expect(service).toBeTruthy();
  });
});
