import { TestBed } from '@angular/core/testing';

import { RouterConfigService } from './router-config.service';

describe('RouterConfigService', () => {
  let service: RouterConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
