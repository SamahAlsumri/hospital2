import { TestBed } from '@angular/core/testing';

import { AdminstrativeService } from './adminstrative.service';

describe('AdminstrativeService', () => {
  let service: AdminstrativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminstrativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
