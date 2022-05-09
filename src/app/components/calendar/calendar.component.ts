import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Activity } from 'src/app/interfaces/data-interfaces';
import { Card } from 'src/app/interfaces/input.interfaces';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent {
  currentDate: Date = new Date();
  month!: number;
  year!: number;
  srcData: Activity[] = [
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
  ];

  @Input() monthArr: Card[] = [];

  ngOnInit(): void {
    //If we receive the month to render else this code: //
    this.month = this.currentDate.getMonth();
    this.year = this.currentDate.getFullYear();
    const firstDayOfMonth: number = new Date(
      `${this.year}-${this.month + 1}-1`
    ).getDay();
    this.initialEmptyDays(firstDayOfMonth);

    for (
      let index: number = 1;
      index < this.daysOfMonth(this.month, this.year) + 1;
      index++
    ) {
      let dateActivities: Activity[] = this.srcData.filter(
        (activity: Activity) =>
          activity.ActivityDate.substring(0, 10) ===
          `${this.year}-${
            this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1
          }-${index < 10 ? '0' + index : index}`
      );

      let day: Card = {
        day: index,
        activities: dateActivities,
        date: new Date(this.year, this.month, index),
      };
      this.monthArr.push(day);
    }

    this.finalEmptyDays(this.monthArr);

    console.log(this.monthArr);
  }

  finalEmptyDays(monthArr: Card[]) {
    const finallEmptyDays: Card[] = Array(
      monthArr.length > 35 ? 42 - monthArr.length : 35 - monthArr.length
    ).fill({});
    monthArr.push(...finallEmptyDays);
  }

  initialEmptyDays(firstDayOfMonth: number) {
    const initialEmptyDays: Card[] = Array(firstDayOfMonth).fill({});
    this.monthArr.push(...initialEmptyDays);
  }

  daysOfMonth(month: number, year: number) {
    let daysOfMonth: number = 31;
    if (month === 1) {
      daysOfMonth = this.isLeap(year) ? 29 : 28;
    } else {
      if (month === 3 || month === 5 || month === 8 || month === 10) {
        daysOfMonth = 30;
      }
    }
    return daysOfMonth;
  }

  isLeap(year: number): boolean {
    return year % 4 == 0 && year % 100 != 0
      ? true
      : year % 400 == 0
      ? true
      : false;
  }
}
