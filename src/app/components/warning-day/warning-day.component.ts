import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-day',
  templateUrl: './warning-day.component.html',
  styleUrls: ['./warning-day.component.scss']
})
export class WarningDayComponent implements OnInit{
  @Input() hoursDay:number= 0;

  missingHours: number = 8;

  ngOnInit(): void {
    this.missingHours = 8 - this.hoursDay;
  }
}
