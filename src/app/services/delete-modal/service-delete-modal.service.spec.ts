import { TestBed } from '@angular/core/testing';

import { ServiceDeleteModalService } from './service-delete-modal.service';

describe('ServiceDeleteModalService', () => {
  let service: ServiceDeleteModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDeleteModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
