import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should changeState when the functions are called', () => {
    service.showSnackBar();
    expect(service.isClicked).toBeTrue();
    service.hideSnackbar();
    expect(service.isClicked).toBeFalse()
    service.setDataSnackbar();
    expect(service.data).toBeDefined()
  });
 
  it('should test onSubscribe and onSubscribeElement', () => {
    expect(service.getIsClick$()).toEqual(jasmine.any(Observable));
    expect(service.getDataSnackbar$()).toEqual(jasmine.any(Observable));
  });

});
