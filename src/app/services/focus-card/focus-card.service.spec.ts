import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

describe('FocusCardService', () => {
  let service: FocusCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should changeState using an event', () => {
    const event = {
      composedPath: jasmine.createSpy().and.returnValue([]),
    };
    service.changeState(event.composedPath());
    expect(service.element).toBeDefined();
    expect(service.getState()).toBeTrue()
  });
 
  it('should test onSubscribe and onSubscribeElement', () => {
    expect(service.onSubscribe()).toEqual(jasmine.any(Observable));
    expect(service.onSubscribeElement()).toEqual(jasmine.any(Observable));
  });
});
