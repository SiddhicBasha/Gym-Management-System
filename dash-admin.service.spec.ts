import { TestBed } from '@angular/core/testing';

import { DashAdminService } from './dash-admin.service';

describe('DashAdminService', () => {
  let service: DashAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
