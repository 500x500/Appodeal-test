import { TestBed } from '@angular/core/testing';

import { LifeSearchService } from './life-search.service';

describe('LifeSearchService', () => {
  let service: LifeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
