import { TestBed } from '@angular/core/testing';

import { ViewsServiceService } from './views-service.service';

describe('ViewsServiceService', () => {
  let service: ViewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
