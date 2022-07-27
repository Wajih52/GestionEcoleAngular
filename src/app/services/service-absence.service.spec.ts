import { TestBed } from '@angular/core/testing';

import { ServiceAbsenceService } from './service-absence.service';

describe('ServiceAbsenceService', () => {
  let service: ServiceAbsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAbsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
