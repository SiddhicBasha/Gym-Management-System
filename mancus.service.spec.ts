import { TestBed } from '@angular/core/testing';

import { MancusService } from './mancus.service';

describe('MancusService', () => {
  let service: MancusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MancusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
