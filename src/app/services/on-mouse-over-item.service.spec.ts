import { TestBed } from '@angular/core/testing';

import { OnMouseOverItemService } from './on-mouse-over-item.service';

describe('OnMouseOverItemService', () => {
  let service: OnMouseOverItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnMouseOverItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
