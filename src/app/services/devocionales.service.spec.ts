import { TestBed } from '@angular/core/testing';

import { DevocionalesService } from './devocionales.service';

describe('DevocionalesService', () => {
  let service: DevocionalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevocionalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
