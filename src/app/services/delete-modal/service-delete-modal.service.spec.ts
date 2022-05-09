import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

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

  it('should be change the state when functions are called', () => {
    service.showModal()
    expect(service.state).toBeTrue();
    service.hideModal()
    expect(service.state).toBeFalse()
  });
  it('should test getState', () => {
    expect(service.getState$()).toEqual(jasmine.any(Observable));
  });
});
