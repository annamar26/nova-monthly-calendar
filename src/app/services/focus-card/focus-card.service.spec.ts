import { TestBed } from '@angular/core/testing';

import { FocusCardService } from './focus-card.service';

describe('FocusCardService', () => {
  let service: FocusCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
