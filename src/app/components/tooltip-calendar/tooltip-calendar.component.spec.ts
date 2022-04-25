import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipCalendarComponent } from './tooltip-calendar.component';

describe('TooltipCalendarComponent', () => {
  let component: TooltipCalendarComponent;
  let fixture: ComponentFixture<TooltipCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the tooltip text', () => {
    component.tooltipText = 'You have 2 missing hours';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('span').textContent).toContain('You have 2 missing hours');
  });
});
