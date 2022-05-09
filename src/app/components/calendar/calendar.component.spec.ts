import { CalendarComponent } from './calendar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from 'src/app/interfaces/input.interfaces';
import { Activity } from 'src/app/interfaces/data-interfaces';

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
    let arr: Card[] = [];
    arr.length = 36;
    expect(component.finalEmptyDays(arr).length).toBe(6);

    arr.length = 30;
    expect(component.finalEmptyDays(arr).length).toBe(5);

    arr.length = 29;
    expect(component.finalEmptyDays(arr).length).toBe(6);

    arr.length = 37;
    expect(component.finalEmptyDays(arr).length).toBe(5);
  });

  it('should check isLeap', () => {
    expect(component.isLeap(2022)).toBeFalse();
    expect(component.isLeap(2000)).toBeTrue();
    expect(component.isLeap(1904)).toBeTrue();
  });

  it('should check daysOfMonth', () => {
    expect(component.daysOfMonth(1, 2022)).toBe(28);
    expect(component.daysOfMonth(1, 2000)).toBe(29);
    expect(component.daysOfMonth(3, 2000)).toBe(30);
  });

  it('should check addActivities', () => {
    const data: Activity[]=[
      {
        AccountName: 'Itexico',
        ActivityDate: '2022-05-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '2022-05-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '2022-05-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '2000-11-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '2000-12-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
    ]
    expect(component.addActivities(11, 2000, data)!.length).toBeGreaterThan(28);
  });
});
