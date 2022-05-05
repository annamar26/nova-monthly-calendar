import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipCalendarComponent } from '../tooltip-calendar/tooltip-calendar.component';

import { WarningDayComponent } from './warning-day.component';

describe('WarningDayComponent', () => {
  let component: WarningDayComponent;
  let fixture: ComponentFixture<WarningDayComponent>;
  let p: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarningDayComponent, TooltipCalendarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningDayComponent);
    component = fixture.componentInstance;
    p = fixture.nativeElement.querySelector('p');
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should not display ! if the hours havent been assigned', () => {
    component.hoursDay = undefined;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p')).toBeNull();
  });

  it('should display ! if the hours are less than 8 and greater than 0', () => {
    component.hoursDay = 6;
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector('p').textContent
    ).toContain('!');
  });

  it('should not display anything if hours are greater than 8 or equal', () => {
    component.hoursDay = 9;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p')).toBeNull();
  });

  it('should not display anything if hours are less than 0', () => {
    component.hoursDay = -1;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p')).toBeNull();
  });

  it('should render the correct styles depending on the input', () => {
    component.hoursDay = 5;
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector('#tooltip')
    ).toBeTruthy();
    const styles = window.getComputedStyle(
      fixture.debugElement.nativeElement.querySelector('#tooltip')
    );
    expect(styles.display).toBe('none');
  });
});
