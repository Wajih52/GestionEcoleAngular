import { TestBed } from '@angular/core/testing';

import { AfficherAbsenceFrontService } from './afficher-absence-front.service';

describe('AfficherAbsenceFrontService', () => {
  let service: AfficherAbsenceFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherAbsenceFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
