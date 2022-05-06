import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-warning-day',
  templateUrl: './warning-day.component.html',
  styleUrls: ['./warning-day.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WarningDayComponent implements OnInit {
  @Input() hoursDay!: number | undefined;
  message!: string;

  ngOnInit(): void {
    this.message = `You have ${8 - this.hoursDay!} missing hours`;
  }
}
