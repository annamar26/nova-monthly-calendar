import { CalendarComponent } from './calendar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test monthArr length', () => {
    component.currentDate = new Date(1904, 1);
    expect(component.monthArr.length).toBe(35);
    
    component.currentDate = new Date(1920, 1);
    expect(component.monthArr.length).toBe(35);
    
    component.currentDate = new Date(2022, 1);
    expect(component.monthArr.length).toBe(35);
    
    component.currentDate = new Date(2033, 9, 1);
    expect(component.monthArr.length).toBe(42);
  });

  it('should check isLeap', () => {
    expect(component.isLeap(2022)).toBeFalse();
    expect(component.isLeap(2000)).toBeTrue();
    expect(component.isLeap(1904)).toBeTrue();
  });

  it('should check daysOfMonth', () => {
    expect(component.daysOfMonth(1,2022)).toBe(28);
    expect(component.daysOfMonth(1,2000)).toBe(29);
    expect(component.daysOfMonth(3,2000)).toBe(30);
  });
});
