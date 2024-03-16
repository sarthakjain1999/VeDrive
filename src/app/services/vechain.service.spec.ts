import { TestBed } from '@angular/core/testing';

import { VechainService } from './vechain.service';

describe('VechainService', () => {
  let service: VechainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
