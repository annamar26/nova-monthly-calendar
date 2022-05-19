
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Activity } from 'src/app/interfaces/data-interfaces';
import { Card } from 'src/app/interfaces/input.interfaces';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CalendarComponent implements OnInit, OnChanges{
  @Input() currentDate!: Date;
  @Input() srcData: Activity[] | undefined;
  
  year!: number
  month!: number
	monthArr!: Card[] ;

  ngOnInit(): void {
    this.calendarLogic();
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    this.calendarLogic();
  }

  calendarLogic() {

    console.log(this.currentDate);
    this.monthArr = [];
    this.year = this.currentDate!.getFullYear();
    this.month = this.currentDate!.getMonth();
    const firstDayOfMonth: number = new Date(
      `${this.year}-${this.month + 1}-1`
    ).getDay();
    this.initialEmptyDays(firstDayOfMonth);

    this.addActivities(this.month, this.year, this.srcData!);

    this.finalEmptyDays(this.monthArr);
  }

  addActivities(
    month: number,
    year: number,
    data: Activity[]
  ): Card[] | undefined {
    let day: Card = {};
    for (
      let index: number = 1;
      index < this.daysOfMonth(month, year) + 1;
      index++
    ) {
      let dateActivities: Activity[] = data?.filter(
        (activity: Activity) =>
          activity.ActivityDate.substring(0, 10) ===
          `${year}-${month + 1 < 10 ? '0' + (month + 1) : month + 1}-${
            index < 10 ? '0' + index : index
          }`
      );

      day = {
        day: index,
        activities: dateActivities,
        date: new Date(year, month, index),
      };
      this.monthArr.push(day);
    }
    return this.monthArr;
  }

  finalEmptyDays(monthArr: Card[]): Card[] {
    const finalEmptyDays: Card[] = Array(
      monthArr.length > 35 ? 42 - monthArr.length : 35 - monthArr.length
    ).fill({});
    monthArr.push(...finalEmptyDays);
    console.log(monthArr)
    return finalEmptyDays;
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
