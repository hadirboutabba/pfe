import { TestBed } from '@angular/core/testing';

import { CrudjobsService } from './crudjobs.service';

describe('CrudjobsService', () => {
  let service: CrudjobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudjobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
