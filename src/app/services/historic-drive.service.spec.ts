import { TestBed } from '@angular/core/testing';

import { HistoricDriveService } from './historic-drive.service';

describe('HistoricDriveService', () => {
  let service: HistoricDriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricDriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
