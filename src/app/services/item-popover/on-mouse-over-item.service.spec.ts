import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/interfaces/data-interfaces';

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
  it('should be change the state when functions are called', () => {
    const data: Activity= {
      AccountName: '',
      ActivityDate: '',
      ActivityID: 0,
      CategoryName: '',
      Comments: '',
      EmployeeID: 0,
      ProjectColor: '',
      ProjectID: 0,
      ProjectName: '',
      StepID: 0,
      TypeID: 0,
      value: 0,
      activeInProject: false
    }
    
    service.showPopover(data)
    expect(service.state).toBeTrue();
    service.hidePopover()
    expect(service.state).toBeFalse()
  });
  it('should test getState, getData, getPosition', () => {
    expect(service.getState$()).toEqual(jasmine.any(Observable));
    expect(service.getData$()).toEqual(jasmine.any(Observable));
    expect(service.getPosition$()).toEqual(jasmine.any(Observable));
  });
});
