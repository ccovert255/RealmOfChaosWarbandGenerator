import { TestBed } from '@angular/core/testing';

import { WarbandsListService } from './warbands-list.service';

describe('WarbandsListService', () => {
  let service: WarbandsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarbandsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
