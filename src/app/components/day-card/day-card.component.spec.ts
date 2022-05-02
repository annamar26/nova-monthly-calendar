import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DayCardComponent } from './day-card.component';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';

describe('DayCardComponent', () => {
  let component: DayCardComponent;
  let fixture: ComponentFixture<DayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DayCard component', () => {
    expect(component).toBeTruthy();
  });

  it('should create DayCard components children', () => {
    expect(fixture.debugElement.query(By.css('app-day-header'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-lista-dia'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('card-footer'))).toBeTruthy();
  });

  it('should use subscribe when the subscription is created', () => {
    const service: FocusCardService = new FocusCardService();
    const myComponent: DayCardComponent = new DayCardComponent(service);
    myComponent.ngOnInit();
    service.changeState();
    fixture.detectChanges();
    expect(myComponent.subscription).not.toBeFalsy();
  });
});
