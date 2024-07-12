import { TestBed } from '@angular/core/testing';

import { ViewcusService } from './viewcus.service';

describe('ViewcusService', () => {
  let service: ViewcusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewcusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
