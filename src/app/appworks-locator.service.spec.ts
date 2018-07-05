import { TestBed, inject } from '@angular/core/testing';

import { AppworksLocatorService } from './appworks-locator.service';

describe('AppworksLocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppworksLocatorService]
    });
  });

  it('should be created', inject([AppworksLocatorService], (service: AppworksLocatorService) => {
    expect(service).toBeTruthy();
  }));
});
