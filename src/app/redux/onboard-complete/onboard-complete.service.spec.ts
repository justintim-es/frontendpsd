import { TestBed } from '@angular/core/testing';

import { OnboardCompleteService } from './onboard-complete.service';

describe('OnboardCompleteService', () => {
  let service: OnboardCompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardCompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
