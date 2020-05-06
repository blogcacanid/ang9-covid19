import { TestBed } from '@angular/core/testing';

import { InternasionalService } from './internasional.service';

describe('InternasionalService', () => {
  let service: InternasionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternasionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
