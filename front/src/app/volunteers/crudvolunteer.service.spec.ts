import { TestBed } from '@angular/core/testing';

import { CrudvolunteerService } from './crudvolunteer.service';

describe('CrudvolunteerService', () => {
  let service: CrudvolunteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudvolunteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
