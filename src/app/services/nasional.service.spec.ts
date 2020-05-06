import { TestBed } from '@angular/core/testing';

import { NasionalService } from './nasional.service';

describe('NasionalService', () => {
  let service: NasionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
