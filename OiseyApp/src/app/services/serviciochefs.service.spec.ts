import { TestBed } from '@angular/core/testing';

import { ServiciochefsService } from './serviciochefs.service';

describe('ServiciochefsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciochefsService = TestBed.get(ServiciochefsService);
    expect(service).toBeTruthy();
  });
});
