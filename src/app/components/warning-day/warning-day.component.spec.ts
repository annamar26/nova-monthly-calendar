import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningDayComponent } from './warning-day.component';

describe('WarningDayComponent', () => {
  let component: WarningDayComponent;
  let fixture: ComponentFixture<WarningDayComponent>;
  let p: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningDayComponent ]
    })
    .compileComponents();
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

  it('should display ! if the hours havent been assigned', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').textContent).toContain('!');
  });

  it('should display ! if the hours are less than 8 and greater than 0', () => {
    component.hoursDay = 6;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').textContent).toContain('!');
  });

  it('should display the tooltip if the hours are less than 8 and greater than 0', () => {
    component.hoursDay = 6;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('span').textContent).toContain('You have 2 missing hours');
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
});
