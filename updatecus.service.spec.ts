import { TestBed } from '@angular/core/testing';

import { UpdatecusService } from './updatecus.service';

describe('UpdatecusService', () => {
  let service: UpdatecusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatecusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
