import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-warning-day',
  templateUrl: './warning-day.component.html',
  styleUrls: ['./warning-day.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WarningDayComponent implements OnInit {
  @Input() hoursDay: number | undefined;
  @Input() date: Date | undefined;

  weekDay?: number;
  message?: string;

  ngOnInit(): void {
    if (this.date) {
      this.weekDay = this.date!.getDay();
      if (
        this.weekDay !== 0 &&
        this.weekDay !== 6 &&
        this.date < new Date() &&
        this.hoursDay! < 8 &&
        this.hoursDay! > 0
      ) {
        this.message = `You have ${8 - this.hoursDay!} missing hours`;
        console.log(this.hoursDay);
      } else this.hoursDay = undefined;
    }
  }
}
