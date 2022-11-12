import { TestBed } from '@angular/core/testing';

import { BearServiceService } from './bear-service.service';

describe('BearServiceService', () => {
  let service: BearServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BearServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
