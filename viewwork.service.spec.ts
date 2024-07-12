import { TestBed } from '@angular/core/testing';

import { ViewworkService } from './viewwork.service';

describe('ViewworkService', () => {
  let service: ViewworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
