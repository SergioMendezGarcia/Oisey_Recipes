import { TestBed } from '@angular/core/testing';

import { ServicioChefCommentsService } from './servicio-chef-comments.service';

describe('ServicioChefCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioChefCommentsService = TestBed.get(ServicioChefCommentsService);
    expect(service).toBeTruthy();
  });
});
